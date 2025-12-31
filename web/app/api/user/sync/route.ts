import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@/app/generated/prisma/client";

const prisma = new PrismaClient();

const NETBIRD_API_URL = process.env.NETBIRD_API_URL;
const NETBIRD_API_TOKEN = process.env.NETBIRD_API_KEY;

type NetBirdGroup = {
  id: string;
  name: string;
  peers_count: number;
  resources_count: number;
  issued?: string;
  peers?: Array<{ id: string; name: string }>;
  resources?: Array<{ id: string; type: string }>;
};

type NetBirdPeer = {
  id: string;
  name: string;
  ip?: string;
  connection_ip?: string;
  connected: boolean;
  last_seen?: string;
  last_login?: string;
  os?: string;
  kernel_version?: string;
  version?: string;
  ui_version?: string;
  hostname?: string;
  dns_label?: string;
  extra_dns_labels?: string[];
  geoname_id?: number;
  country_code?: string;
  city_name?: string;
  user_id?: string;
  serial_number?: string;
  ssh_enabled?: boolean;
  approval_required?: boolean;
  ephemeral?: boolean;
  login_expiration_enabled?: boolean;
  login_expired?: boolean;
  inactivity_expiration_enabled?: boolean;
  groups?: Array<{
    id: string;
    name: string;
    peers_count?: number;
    resources_count?: number;
    issued?: string;
  }>;
};

async function netbirdRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!NETBIRD_API_TOKEN || !NETBIRD_API_URL) {
    throw new Error("NetBird credentials missing");
  }

  const response = await fetch(`${NETBIRD_API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `TOKEN ${NETBIRD_API_TOKEN}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `NetBird API error: ${response.status} - ${JSON.stringify(errorData)}`
    );
  }

  return await response.json();
}

export async function POST(request: Request) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "userId is required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        groups: {
          include: {
            groupPeers: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    console.log(`Starting sync for user: ${user.name} (${user.id})`);

    const syncResults = {
      groupsSynced: 0,
      groupsCreated: 0,
      groupsUpdated: 0,
      peersSynced: 0,
      peersCreated: 0,
      peersUpdated: 0,
      errors: [] as string[],
    };

    for (const group of user.groups) {
      try {
        console.log(`Syncing group: ${group.name} (${group.netbirdGroupId})`);

        const netbirdGroup = await netbirdRequest<NetBirdGroup>(
          `/api/groups/${group.netbirdGroupId}`
        );

        await prisma.group.update({
          where: { id: group.id },
          data: {
            name: netbirdGroup.name,
            peersCount: netbirdGroup.peers_count,
            resourcesCount: netbirdGroup.resources_count,
            issued: netbirdGroup.issued ?? group.issued,
            resources: netbirdGroup.resources
              ? (netbirdGroup.resources as Prisma.InputJsonValue)
              : Prisma.JsonNull,
          },
        });

        syncResults.groupsSynced++;
        syncResults.groupsUpdated++;
        console.log(`Group updated: ${netbirdGroup.name}`);

        if (netbirdGroup.peers && netbirdGroup.peers.length > 0) {
          for (const peerBasic of netbirdGroup.peers) {
            try {
              console.log(`Syncing peer: ${peerBasic.name} (${peerBasic.id})`);

              const fullPeer = await netbirdRequest<NetBirdPeer>(
                `/api/peers/${peerBasic.id}`
              );

              const existingPeer = await prisma.peer.findUnique({
                where: { netbirdPeerId: fullPeer.id },
              });

              if (existingPeer) {
                await prisma.peer.update({
                  where: { netbirdPeerId: fullPeer.id },
                  data: {
                    name: fullPeer.name,
                    ip: fullPeer.ip ?? null,
                    connectionIp: fullPeer.connection_ip ?? null,
                    dnsLabel: fullPeer.dns_label ?? null,
                    extraDnsLabels: fullPeer.extra_dns_labels ?? [],
                    connected: fullPeer.connected,
                    lastSeen: fullPeer.last_seen
                      ? new Date(fullPeer.last_seen)
                      : null,
                    lastLogin: fullPeer.last_login
                      ? new Date(fullPeer.last_login)
                      : null,
                    os: fullPeer.os ?? null,
                    kernelVersion: fullPeer.kernel_version ?? null,
                    version: fullPeer.version ?? null,
                    uiVersion: fullPeer.ui_version ?? null,
                    hostname: fullPeer.hostname ?? null,
                    serialNumber: fullPeer.serial_number ?? null,
                    geonameId: fullPeer.geoname_id ?? null,
                    countryCode: fullPeer.country_code ?? null,
                    cityName: fullPeer.city_name ?? null,
                    userId: fullPeer.user_id ?? null,
                    sshEnabled: fullPeer.ssh_enabled ?? false,
                    approvalRequired: fullPeer.approval_required ?? false,
                    ephemeral: fullPeer.ephemeral ?? false,
                    loginExpirationEnabled:
                      fullPeer.login_expiration_enabled ?? false,
                    loginExpired: fullPeer.login_expired ?? false,
                    inactivityExpirationEnabled:
                      fullPeer.inactivity_expiration_enabled ?? false,
                  },
                });

                syncResults.peersUpdated++;
                console.log(`Peer updated: ${fullPeer.name}`);
              } else {
                const newPeer = await prisma.peer.create({
                  data: {
                    netbirdPeerId: fullPeer.id,
                    name: fullPeer.name,
                    ip: fullPeer.ip ?? null,
                    connectionIp: fullPeer.connection_ip ?? null,
                    dnsLabel: fullPeer.dns_label ?? null,
                    extraDnsLabels: fullPeer.extra_dns_labels ?? [],
                    connected: fullPeer.connected,
                    lastSeen: fullPeer.last_seen
                      ? new Date(fullPeer.last_seen)
                      : null,
                    lastLogin: fullPeer.last_login
                      ? new Date(fullPeer.last_login)
                      : null,
                    os: fullPeer.os ?? null,
                    kernelVersion: fullPeer.kernel_version ?? null,
                    version: fullPeer.version ?? null,
                    uiVersion: fullPeer.ui_version ?? null,
                    hostname: fullPeer.hostname ?? null,
                    serialNumber: fullPeer.serial_number ?? null,
                    geonameId: fullPeer.geoname_id ?? null,
                    countryCode: fullPeer.country_code ?? null,
                    cityName: fullPeer.city_name ?? null,
                    userId: fullPeer.user_id ?? null,
                    sshEnabled: fullPeer.ssh_enabled ?? false,
                    approvalRequired: fullPeer.approval_required ?? false,
                    ephemeral: fullPeer.ephemeral ?? false,
                    loginExpirationEnabled:
                      fullPeer.login_expiration_enabled ?? false,
                    loginExpired: fullPeer.login_expired ?? false,
                    inactivityExpirationEnabled:
                      fullPeer.inactivity_expiration_enabled ?? false,
                  },
                });

                syncResults.peersCreated++;
                console.log(`Peer created: ${fullPeer.name}`);

                await prisma.groupPeer.upsert({
                  where: {
                    groupId_peerId: {
                      groupId: group.id,
                      peerId: newPeer.id,
                    },
                  },
                  create: {
                    groupId: group.id,
                    peerId: newPeer.id,
                  },
                  update: {},
                });
              }

              const linkExists = await prisma.groupPeer.findUnique({
                where: {
                  groupId_peerId: {
                    groupId: group.id,
                    peerId: existingPeer ? existingPeer.id : "",
                  },
                },
              });

              if (!linkExists && existingPeer) {
                await prisma.groupPeer.create({
                  data: {
                    groupId: group.id,
                    peerId: existingPeer.id,
                  },
                });
                console.log(`Linked peer to group: ${fullPeer.name}`);
              }

              syncResults.peersSynced++;
            } catch (peerError) {
              const errorMsg = `Failed to sync peer ${peerBasic.id}: ${
                peerError instanceof Error ? peerError.message : "Unknown error"
              }`;
              console.error(`${errorMsg}`);
              syncResults.errors.push(errorMsg);
            }
          }
        }
      } catch (groupError) {
        const errorMsg = `Failed to sync group ${group.netbirdGroupId}: ${
          groupError instanceof Error ? groupError.message : "Unknown error"
        }`;
        console.error(` ${errorMsg}`);
        syncResults.errors.push(errorMsg);
      }
    }

    console.log(` Sync completed for user: ${user.name}`);

    return NextResponse.json({
      success: true,
      message: "Sync completed",
      userId: user.id,
      userName: user.name,
      results: syncResults,
    });
  } catch (error) {
    console.error(" Sync error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Sync failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
