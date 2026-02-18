import { NextResponse } from "next/server";
import { getCountryName } from "@/lib/country";
import { requireAuth } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { NetBirdPeer } from "@/types/netbird";

const NETBIRD_API_URL = process.env.NETBIRD_API_URL;
const NETBIRD_API_TOKEN = process.env.NETBIRD_API_KEY;

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
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user.id;

  try {
    const { id: peerId } = await context.params;

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
        { success: false, error: "Peer not found in database" },
        { status: 404 }
      );
    }

    const belongsToUser = peer.groupPeers.some(
      (gp) => gp.group.userId === userId
    );

    if (!belongsToUser) {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 }
      );
    }

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
