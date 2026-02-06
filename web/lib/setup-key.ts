import { prisma } from "./prisma";

const NETBIRD_API_URL = process.env.NETBIRD_API_URL;
const NETBIRD_API_KEY = process.env.NETBIRD_API_KEY;

export async function regenerateSetupKey(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      groups: true,
      setupKeys: {
        where: { revokedAt: null },
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });

  if (!user || !user.groups.length) {
    throw new Error("User or group not found");
  }

  const currentSetupKey = user.setupKeys[0];
  const groupIds = user.groups.map((g) => g.netbirdGroupId);
  const userName = user.name || user.email || "User";

  if (currentSetupKey) {
    try {
      await fetch(
        `${NETBIRD_API_URL}/api/setup-keys/${currentSetupKey.netbirdId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Token ${NETBIRD_API_KEY}` },
        }
      );
    } catch (e) {
      console.error("Failed to revoke old setup key:", e);
    }

    await prisma.setupKey.update({
      where: { id: currentSetupKey.id },
      data: { revokedAt: new Date() },
    });
  }

  const response = await fetch(`${NETBIRD_API_URL}/api/setup-keys`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${NETBIRD_API_KEY}`,
    },
    body: JSON.stringify({
      name: `${userName} Setup Key`,
      type: "reusable",
      expires_in: 31536000,
      auto_groups: groupIds,
      usage_limit: 0,
      ephemeral: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create setup key: ${response.status}`);
  }

  const netbirdSetupKey = await response.json();

  const newSetupKey = await prisma.setupKey.create({
    data: {
      userId: user.id,
      key: netbirdSetupKey.key,
      netbirdId: netbirdSetupKey.id.toString(),
      name: `${userName} Setup Key`,
      autoGroups: groupIds,
      expiresAt: new Date(netbirdSetupKey.expires),
    },
  });

  console.log(`Setup key regenerated for user ${userId}`);
  return newSetupKey;
}

export async function checkAndRegenerateIfExpiring(userId: string) {
  const setupKey = await prisma.setupKey.findFirst({
    where: {
      userId,
      revokedAt: null,
    },
    orderBy: { createdAt: "desc" },
  });

  if (!setupKey) return null;

  const daysUntilExpiry = Math.floor(
    (setupKey.expiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  if (daysUntilExpiry <= 5) {
    console.log(
      `Setup key for user ${userId} expires in ${daysUntilExpiry} days, regenerating...`
    );
    return regenerateSetupKey(userId);
  }

  return setupKey;
}
