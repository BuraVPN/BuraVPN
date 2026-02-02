import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import {
  getCachedTunnelConfigs,
  setCachedTunnelConfigs,
} from "@/lib/tunnel-cache";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const STALE_MS = 60_000;

interface Heartbeat {
  routerId: string;
  timestamp: string;
  netbirdIp?: string;
  tunnelUp: boolean;
  packetLoss: number;
  latencyMs?: number;
}

interface TunnelConfig {
  tunnelId: string;
  role: "exit-node" | "travel-router";
  tunnelPeerIps: string[];
}

export async function POST(req: NextRequest) {
  try {
    const hb: Heartbeat = await req.json();

    const peer = await prisma.peer.findUnique({
      where: { id: hb.routerId },
    });

    if (peer) {
      await prisma.peer.update({
        where: { id: hb.routerId },
        data: {
          connected: true,
          lastSeen: new Date(hb.timestamp),
          ip: hb.netbirdIp || undefined,
        },
      });
    }

    await markStalePeersOffline();

    let tunnelConfigs: TunnelConfig[] = [];
    if (peer) {
      const cached = getCachedTunnelConfigs(peer.id);
      if (cached) {
        tunnelConfigs = cached;
      } else {
        tunnelConfigs = await getTunnelConfigs(peer.id);
        setCachedTunnelConfigs(peer.id, tunnelConfigs);
      }
    }

    const status = hb.tunnelUp ? "✓" : "⚠ tunnel down";
    const dbStatus = peer ? "db:✓" : "db:?";
    console.log(
      `${status} ${hb.routerId} | tunnel=${hb.tunnelUp} loss=${hb.packetLoss}% latency=${hb.latencyMs?.toFixed(1) || "-"}ms ${dbStatus}`
    );

    return NextResponse.json({
      ok: true,
      peerFound: !!peer,
      tunnels: tunnelConfigs,
    });
  } catch (e) {
    console.error("Heartbeat error:", e);
    return NextResponse.json({ ok: false, tunnels: [] }, { status: 500 });
  }
}

export async function GET() {
  await markStalePeersOffline();

  const peers = await prisma.peer.findMany({
    select: {
      id: true,
      name: true,
      ip: true,
      connected: true,
      lastSeen: true,
      hostname: true,
    },
  });

  const now = Date.now();
  const status = peers.map((peer) => ({
    id: peer.id,
    name: peer.name,
    ip: peer.ip,
    connected: peer.connected,
    lastSeen: peer.lastSeen,
    hostname: peer.hostname,
    stale: peer.lastSeen
      ? now - new Date(peer.lastSeen).getTime() > STALE_MS
      : true,
  }));

  return NextResponse.json(status);
}

async function getTunnelConfigs(peerId: string): Promise<TunnelConfig[]> {
  const configs: TunnelConfig[] = [];

  const asExitNode = await prisma.tunnel.findMany({
    where: { exitNodeId: peerId, enabled: true },
    include: {
      travelRouters: {
        include: { peer: { select: { ip: true } } },
      },
    },
  });

  for (const t of asExitNode) {
    const ips = t.travelRouters
      .map((tr) => tr.peer.ip)
      .filter((ip): ip is string => ip !== null);

    configs.push({
      tunnelId: t.id,
      role: "exit-node",
      tunnelPeerIps: ips,
    });
  }

  const asTravelRouter = await prisma.tunnelTravelRouter.findMany({
    where: { peerId, tunnel: { enabled: true } },
    include: {
      tunnel: {
        include: {
          exitNode: { select: { ip: true } },
        },
      },
    },
  });

  for (const tr of asTravelRouter) {
    const exitIp = tr.tunnel.exitNode.ip;
    configs.push({
      tunnelId: tr.tunnel.id,
      role: "travel-router",
      tunnelPeerIps: exitIp ? [exitIp] : [],
    });
  }

  return configs;
}

async function markStalePeersOffline() {
  const cutoff = new Date(Date.now() - STALE_MS);

  await prisma.peer.updateMany({
    where: {
      connected: true,
      OR: [{ lastSeen: { lt: cutoff } }, { lastSeen: null }],
    },
    data: { connected: false },
  });
}

//
