import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/api-auth";

const NETBIRD_API_URL = process.env.NETBIRD_API_URL;
const NETBIRD_API_KEY = process.env.NETBIRD_API_KEY;

export async function DELETE() {
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        groups: true,
        setupKeys: true,
        devices: {
          include: { peer: true },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    for (const device of user.devices) {
      if (device.peer?.netbirdPeerId) {
        try {
          const res = await fetch(
            `${NETBIRD_API_URL}/api/peers/${device.peer.netbirdPeerId}`,
            {
              method: "DELETE",
              headers: { Authorization: `Token ${NETBIRD_API_KEY}` },
            }
          );
          if (!res.ok)
            console.error(
              `Failed to delete NetBird peer ${device.peer.netbirdPeerId}: ${res.status}`
            );
        } catch (e) {
          console.error(
            `Failed to delete NetBird peer ${device.peer.netbirdPeerId}:`,
            e
          );
        }
      }
    }

    for (const setupKey of user.setupKeys) {
      try {
        const res = await fetch(
          `${NETBIRD_API_URL}/api/setup-keys/${setupKey.netbirdId}`,
          {
            method: "DELETE",
            headers: { Authorization: `Token ${NETBIRD_API_KEY}` },
          }
        );
        if (!res.ok)
          console.error(
            `Failed to delete NetBird setup key ${setupKey.netbirdId}: ${res.status}`
          );
      } catch (e) {
        console.error(
          `Failed to delete NetBird setup key ${setupKey.netbirdId}:`,
          e
        );
      }
    }

    for (const group of user.groups) {
      try {
        const res = await fetch(
          `${NETBIRD_API_URL}/api/groups/${group.netbirdGroupId}`,
          {
            method: "DELETE",
            headers: { Authorization: `Token ${NETBIRD_API_KEY}` },
          }
        );
        if (!res.ok)
          console.error(
            `Failed to delete NetBird group ${group.netbirdGroupId}: ${res.status}`
          );
      } catch (e) {
        console.error(
          `Failed to delete NetBird group ${group.netbirdGroupId}:`,
          e
        );
      }
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete account:", error);
    return NextResponse.json(
      { error: "Failed to delete account" },
      { status: 500 }
    );
  }
}
