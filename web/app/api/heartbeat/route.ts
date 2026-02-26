import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import {
  getCachedTunnelConfigs,
  setCachedTunnelConfigs,
} from "@/lib/tunnel-cache";
import jwt from "jsonwebtoken";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const STALE_MS = 60_000;
const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = "30d";
const TOKEN_REFRESH_AFTER_MS = 20 * 24 * 60 * 60 * 1000;

interface DeviceJwtPayload {
  deviceId: string;
  id: string;
}

interface Heartbeat {
  routerId: string;
  timestamp: string;
  netbirdIp?: string;
  netbirdPubKey?: string;
  netbirdUp: boolean;
  tunnelUp: boolean;
  packetLoss: number;
  latencyMs?: number;
}

interface TunnelConfig {
  tunnelId: string;
  role: "exit-node" | "travel-router";
  tunnelPeerIps: string[];
}

function verifyDeviceToken(req: NextRequest): DeviceJwtPayload | null {
  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  const token = auth.slice(7);
  try {
    return jwt.verify(token, JWT_SECRET) as DeviceJwtPayload;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  const payload = verifyDeviceToken(req);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const hb: Heartbeat = await req.json();

    const device = await prisma.device.findUnique({
      where: { id: payload.id },
    });

    if (!device) {
      return NextResponse.json(
        { ok: false, error: "Device not found" },
        { status: 401 }
      );
    }

    await prisma.device.update({
      where: { id: device.id },
      data: { lastSeenAt: new Date() },
    });

    if (hb.netbirdIp && !device.peerId) {
      const peer = await prisma.peer.findFirst({
        where: { ip: hb.netbirdIp },
      });
      if (peer) {
        await prisma.device.update({
          where: { id: device.id },
          data: { peerId: peer.id },
        });
        console.log(
          `Device ${device.deviceId} linked to peer ${peer.id} via IP ${hb.netbirdIp}`
        );
      }
    }

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

    let setupKey: string | undefined;
    if (device.userId && !device.setupKeySent) {
      console.log(
        `Setup key lookup: deviceId=${device.deviceId} userId=${device.userId}`
      );
      const sk = await prisma.setupKey.findFirst({
        where: { userId: device.userId, revokedAt: null },
        orderBy: { createdAt: "desc" },
      });
      console.log(
        `Setup key found: ${!!sk} key=${sk?.key?.slice(0, 8) ?? "none"}...`
      );
      if (sk) {
        setupKey = sk.key;
        await prisma.device.update({
          where: { id: device.id },
          data: { setupKeySent: true },
        });
        console.log(`Setup key sent to device ${device.deviceId}`);
      } else {
        console.log(`No active setup key found for user ${device.userId}`);
      }
    } else {
      console.log(
        `Skipping setup key: userId=${device.userId} setupKeySent=${device.setupKeySent}`
      );
    }

    let newToken: string | undefined;
    const tokenAge = device.jwtIssuedAt
      ? Date.now() - device.jwtIssuedAt.getTime()
      : Infinity;

    if (tokenAge > TOKEN_REFRESH_AFTER_MS) {
      newToken = jwt.sign(
        { deviceId: device.deviceId, id: device.id },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );
      await prisma.device.update({
        where: { id: device.id },
        data: { jwtIssuedAt: new Date() },
      });
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
      ...(newToken && { token: newToken }),
      ...(setupKey && { setupKey }),
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
    configs.push({ tunnelId: t.id, role: "exit-node", tunnelPeerIps: ips });
  }

  const asTravelRouter = await prisma.tunnelTravelRouter.findMany({
    where: { peerId, tunnel: { enabled: true } },
    include: {
      tunnel: {
        include: { exitNode: { select: { ip: true } } },
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
