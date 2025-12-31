import { PrismaClient } from "@/app/generated/prisma/client";
import { NextResponse } from "next/server";
import { getCountryName } from "@/lib/country";

const prisma = new PrismaClient();

const NETBIRD_API_URL = process.env.NETBIRD_API_URL;
const NETBIRD_API_TOKEN = process.env.NETBIRD_API_KEY;

interface NetBirdPeer {
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
}

async function netbirdRequest<T>(endpoint: string): Promise<T> {
  if (!NETBIRD_API_TOKEN || !NETBIRD_API_URL) {
    throw new Error("NetBird credentials missing");
  }

  const response = await fetch(`${NETBIRD_API_URL}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `TOKEN ${NETBIRD_API_TOKEN}`,
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

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: peerId } = await context.params;

    console.log(`Fetching peer from database: ${peerId}`);

    const peer = await prisma.peer.findUnique({
      where: { id: peerId },
      include: {
        groupPeers: {
          include: {
            group: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!peer) {
      return NextResponse.json(
        {
          success: false,
          error: "Peer not found in database",
        },
        { status: 404 }
      );
    }

    console.log(`Syncing with NetBird: ${peer.netbirdPeerId}`);

    let netbirdPeer: NetBirdPeer;
    try {
      netbirdPeer = await netbirdRequest<NetBirdPeer>(
        `/api/peers/${peer.netbirdPeerId}`
      );
    } catch (netbirdError) {
      if (
        netbirdError instanceof Error &&
        netbirdError.message.includes("404")
      ) {
        console.log(`⚠️  Peer not found on NetBird`);
        return NextResponse.json(
          {
            success: true,
            data: peer,
            synced: false,
            error: "Peer not found on NetBird (might be deleted)",
          },
          { status: 200 }
        );
      }
      throw netbirdError;
    }

    const needsUpdate =
      peer.name !== netbirdPeer.name ||
      peer.ip !== (netbirdPeer.ip ?? null) ||
      peer.connected !== netbirdPeer.connected ||
      peer.hostname !== (netbirdPeer.hostname ?? null) ||
      peer.os !== (netbirdPeer.os ?? null) ||
      peer.version !== (netbirdPeer.version ?? null) ||
      peer.countryCode !== (netbirdPeer.country_code ?? null) ||
      peer.cityName !== (netbirdPeer.city_name ?? null);

    let updatedPeer = peer;

    if (needsUpdate) {
      console.log(`Updating peer: ${peer.name}`);

      updatedPeer = await prisma.peer.update({
        where: { id: peer.id },
        data: {
          name: netbirdPeer.name,
          ip: netbirdPeer.ip ?? null,
          connectionIp: netbirdPeer.connection_ip ?? null,
          dnsLabel: netbirdPeer.dns_label ?? null,
          extraDnsLabels: netbirdPeer.extra_dns_labels ?? [],
          connected: netbirdPeer.connected,
          lastSeen: netbirdPeer.last_seen
            ? new Date(netbirdPeer.last_seen)
            : null,
          lastLogin: netbirdPeer.last_login
            ? new Date(netbirdPeer.last_login)
            : null,
          os: netbirdPeer.os ?? null,
          kernelVersion: netbirdPeer.kernel_version ?? null,
          version: netbirdPeer.version ?? null,
          uiVersion: netbirdPeer.ui_version ?? null,
          hostname: netbirdPeer.hostname ?? null,
          serialNumber: netbirdPeer.serial_number ?? null,
          geonameId: netbirdPeer.geoname_id ?? null,
          countryCode: netbirdPeer.country_code ?? null,
          cityName: netbirdPeer.city_name ?? null,
          userId: netbirdPeer.user_id ?? null,
          sshEnabled: netbirdPeer.ssh_enabled ?? false,
          approvalRequired: netbirdPeer.approval_required ?? false,
          ephemeral: netbirdPeer.ephemeral ?? false,
          loginExpirationEnabled: netbirdPeer.login_expiration_enabled ?? false,
          loginExpired: netbirdPeer.login_expired ?? false,
          inactivityExpirationEnabled:
            netbirdPeer.inactivity_expiration_enabled ?? false,
        },
        include: {
          groupPeers: {
            include: {
              group: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      });

      console.log(`Peer updated`);
    } else {
      console.log(`Peer up-to-date`);
    }

    const countryName = updatedPeer.countryCode
      ? getCountryName(updatedPeer.countryCode)
      : null;

    return NextResponse.json({
      success: true,
      data: {
        ...updatedPeer,
        countryName,
      },
      synced: true,
      updated: needsUpdate,
      message: needsUpdate ? "Peer updated" : "Peer up-to-date",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch peer",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
