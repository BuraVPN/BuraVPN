import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

interface Heartbeat {
  routerId: string;
  timestamp: string;
  netbirdIp?: string;
  tunnelUp: boolean;
  packetLoss: number;
  latencyMs?: number;
  internetUp: boolean;
  internetMs?: number;
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
          connected: hb.internetUp,
          lastSeen: new Date(hb.timestamp),
        },
      });
    }

    const status =
      hb.tunnelUp && hb.internetUp
        ? "✓"
        : hb.internetUp
          ? "⚠ tunnel"
          : hb.netbirdIp
            ? "⚠ no inet"
            : "✗";
    const dbStatus = peer ? "db:✓" : "db:?";
    console.log(
      `${status} ${hb.routerId} | inet=${hb.internetUp} tunnel=${hb.tunnelUp} latency=${hb.latencyMs?.toFixed(1) || "-"}ms ${dbStatus}`
    );

    return NextResponse.json({ ok: true, peerFound: !!peer });
  } catch (e) {
    console.error("Heartbeat error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function GET() {
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

  const status = peers.map((peer) => ({
    id: peer.id,
    name: peer.name,
    ip: peer.ip,
    connected: peer.connected,
    lastSeen: peer.lastSeen,
    hostname: peer.hostname,
    stale: peer.lastSeen
      ? Date.now() - new Date(peer.lastSeen).getTime() > 15000
      : true,
  }));

  return NextResponse.json(status);
}

//
