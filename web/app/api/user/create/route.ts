import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import { Prisma } from "@/app/generated/prisma/client";

const prisma = new PrismaClient();

const NETBIRD_API_URL = process.env.NETBIRD_API_URL;
const NETBIRD_API_TOKEN = process.env.NETBIRD_API_KEY;

type CreateUserRequest = {
  name: string;
  email: string;
};

type NetBirdGroup = {
  id: string;
  name: string;
  peers_count?: number;
  resources_count?: number;
  issued?: string;
  peers?: Array<{ id: string; name: string }>;
  resources?: Array<{ id: string; type: string }>;
};

type NetBirdPeer = {
  id: string;
  name: string;
  ip?: string;
  connection_ip?: string;
  connected?: boolean;
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
    const body = (await request.json()) as CreateUserRequest;
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    const userData: Prisma.UserCreateInput = {
      name: name,
      email: email,
    };

    const user = await prisma.user.create({
      data: userData,
    });

    console.log("User created in database:", user.id);

    const groupName = `${name}'s Group`;

    const netbirdGroup = await netbirdRequest<NetBirdGroup>("/api/groups", {
      method: "POST",
      body: JSON.stringify({
        name: groupName,
      }),
    });

    console.log("Group created on NetBird:", netbirdGroup.id);

    const groupData: Prisma.GroupCreateInput = {
      netbirdGroupId: netbirdGroup.id,
      name: netbirdGroup.name,
      peersCount: netbirdGroup.peers_count ?? 0,
      resourcesCount: netbirdGroup.resources_count ?? 0,
      issued: netbirdGroup.issued ?? "api",
      resources: netbirdGroup.resources ?? Prisma.JsonNull,
      user: {
        connect: {
          id: user.id,
        },
      },
    };

    const group = await prisma.group.create({
      data: groupData,
    });

    console.log("Group saved to database:", group.id);

    if (netbirdGroup.peers && netbirdGroup.peers.length > 0) {
      for (const netbirdPeerBasic of netbirdGroup.peers) {
        try {
          const fullPeerData = await netbirdRequest<NetBirdPeer>(
            `/api/peers/${netbirdPeerBasic.id}`
          );

          const peerData: Prisma.PeerCreateInput = {
            netbirdPeerId: fullPeerData.id,
            name: fullPeerData.name,
            ip: fullPeerData.ip ?? null,
            connectionIp: fullPeerData.connection_ip ?? null,
            dnsLabel: fullPeerData.dns_label ?? null,
            extraDnsLabels: fullPeerData.extra_dns_labels ?? [],
            connected: fullPeerData.connected ?? false,
            lastSeen: fullPeerData.last_seen
              ? new Date(fullPeerData.last_seen)
              : null,
            lastLogin: fullPeerData.last_login
              ? new Date(fullPeerData.last_login)
              : null,
            os: fullPeerData.os ?? null,
            kernelVersion: fullPeerData.kernel_version ?? null,
            version: fullPeerData.version ?? null,
            uiVersion: fullPeerData.ui_version ?? null,
            hostname: fullPeerData.hostname ?? null,
            serialNumber: fullPeerData.serial_number ?? null,
            geonameId: fullPeerData.geoname_id ?? null,
            countryCode: fullPeerData.country_code ?? null,
            cityName: fullPeerData.city_name ?? null,
            userId: fullPeerData.user_id ?? null,
            sshEnabled: fullPeerData.ssh_enabled ?? false,
            approvalRequired: fullPeerData.approval_required ?? false,
            ephemeral: fullPeerData.ephemeral ?? false,
            loginExpirationEnabled:
              fullPeerData.login_expiration_enabled ?? false,
            loginExpired: fullPeerData.login_expired ?? false,
            inactivityExpirationEnabled:
              fullPeerData.inactivity_expiration_enabled ?? false,
          };

          const peer = await prisma.peer.create({
            data: peerData,
          });

          await prisma.groupPeer.create({
            data: {
              groupId: group.id,
              peerId: peer.id,
            },
          });

          console.log("✅ Peer saved and linked:", peer.name);
        } catch (peerError) {
          console.error(
            "⚠️  Failed to sync peer:",
            netbirdPeerBasic.id,
            peerError
          );
        }
      }
    }

    const completeUser = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        groups: {
          include: {
            groupPeers: {
              include: {
                peer: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User and group created successfully",
        data: {
          user: completeUser,
          netbirdGroup: {
            id: netbirdGroup.id,
            name: netbirdGroup.name,
            netbirdUrl: `${NETBIRD_API_URL}/groups/${netbirdGroup.id}`,
          },
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);

    if (error instanceof Error && error.message.includes("NetBird")) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to create group on NetBird",
          details: error.message,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create user",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        groups: {
          include: {
            groupPeers: {
              include: {
                peer: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
