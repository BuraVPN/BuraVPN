import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { provisionTunnel, deprovisionTunnel } from "@/lib/netbird";
import { invalidateCache } from "@/lib/tunnel-cache";
import { requireAuth } from "@/lib/api-auth";

const MAX_TRAVEL_ROUTERS = 3;

export async function GET(req: NextRequest) {
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user.id;

  const tunnels = await prisma.tunnel.findMany({
    where: { userId },
    include: {
      exitNode: {
        select: {
          id: true,
          name: true,
          ip: true,
          connected: true,
          hostname: true,
          countryCode: true,
          cityName: true,
        },
      },
      travelRouters: {
        include: {
          peer: {
            select: {
              id: true,
              name: true,
              ip: true,
              connected: true,
              hostname: true,
              countryCode: true,
              cityName: true,
            },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(tunnels);
}

export async function POST(req: NextRequest) {
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user.id;

  try {
    const body = await req.json();
    const { exitNodeId, travelRouterIds, name } = body;

    if (!exitNodeId || !travelRouterIds?.length) {
      return NextResponse.json(
        { error: "exitNodeId and at least one travelRouterId required" },
        { status: 400 }
      );
    }

    if (travelRouterIds.length > MAX_TRAVEL_ROUTERS) {
      return NextResponse.json(
        { error: `Maximum ${MAX_TRAVEL_ROUTERS} travel routers allowed` },
        { status: 400 }
      );
    }

    if (travelRouterIds.includes(exitNodeId)) {
      return NextResponse.json(
        { error: "Exit node cannot also be a travel router" },
        { status: 400 }
      );
    }

    const exitNode = await prisma.peer.findUnique({
      where: { id: exitNodeId },
    });
    const travelRouters = await prisma.peer.findMany({
      where: { id: { in: travelRouterIds } },
    });

    if (!exitNode) {
      return NextResponse.json(
        { error: "Exit node not found" },
        { status: 404 }
      );
    }
    if (travelRouters.length !== travelRouterIds.length) {
      return NextResponse.json(
        { error: "One or more travel routers not found" },
        { status: 404 }
      );
    }

    const tunnel = await prisma.tunnel.create({
      data: {
        userId,
        exitNodeId,
        name: name || null,
        travelRouters: {
          create: travelRouterIds.map((peerId: string) => ({ peerId })),
        },
      },
    });

    try {
      const nbResult = await provisionTunnel({
        tunnelId: tunnel.id,
        tunnelName: name || `${exitNode.name} tunnel`,
        exitNodeNetbirdPeerId: exitNode.netbirdPeerId,
        travelRouterNetbirdPeerIds: travelRouters.map((p) => p.netbirdPeerId),
      });

      await prisma.tunnel.update({
        where: { id: tunnel.id },
        data: {
          netbirdGroupId: nbResult.netbirdGroupId,
          netbirdRouteId: nbResult.netbirdRouteId,
          netbirdPolicyId: nbResult.netbirdPolicyId,
        },
      });

      invalidateCache([exitNodeId, ...travelRouterIds]);
    } catch (nbError) {
      console.error("NetBird provisioning failed:", nbError);
      await prisma.tunnel.delete({ where: { id: tunnel.id } });
      return NextResponse.json(
        { error: "Failed to provision tunnel on NetBird" },
        { status: 502 }
      );
    }

    const result = await prisma.tunnel.findUnique({
      where: { id: tunnel.id },
      include: {
        exitNode: {
          select: {
            id: true,
            name: true,
            ip: true,
            connected: true,
            hostname: true,
          },
        },
        travelRouters: {
          include: {
            peer: {
              select: {
                id: true,
                name: true,
                ip: true,
                connected: true,
                hostname: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (e) {
    console.error("Create tunnel error:", e);
    return NextResponse.json(
      { error: "Failed to create tunnel" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user.id;

  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id required" }, { status: 400 });
  }

  try {
    const tunnel = await prisma.tunnel.findUnique({
      where: { id },
      include: { travelRouters: { select: { peerId: true } } },
    });

    if (!tunnel) {
      return NextResponse.json({ error: "Tunnel not found" }, { status: 404 });
    }

    // Provjeri da tunnel pripada korisniku
    if (tunnel.userId !== userId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const affectedPeerIds = [
      tunnel.exitNodeId,
      ...tunnel.travelRouters.map((tr) => tr.peerId),
    ];

    if (
      tunnel.netbirdGroupId &&
      tunnel.netbirdRouteId &&
      tunnel.netbirdPolicyId
    ) {
      await deprovisionTunnel(
        tunnel.netbirdGroupId,
        tunnel.netbirdRouteId,
        tunnel.netbirdPolicyId
      );
    }

    await prisma.tunnel.delete({ where: { id } });

    invalidateCache(affectedPeerIds);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Delete tunnel error:", e);
    return NextResponse.json(
      { error: "Failed to delete tunnel" },
      { status: 500 }
    );
  }
}
