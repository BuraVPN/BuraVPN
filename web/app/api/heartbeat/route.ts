import { NextRequest, NextResponse } from "next/server";

interface Heartbeat {
  routerId: string;
  timestamp: string;
  netbirdIp?: string;
  tunnelUp: boolean;
  packetLoss: number;
  latencyMs?: number;
}

const routers = new Map<string, Heartbeat>();

export async function POST(req: NextRequest) {
  try {
    const hb: Heartbeat = await req.json();

    routers.set(hb.routerId, hb);

    const status = hb.tunnelUp ? "✓" : hb.netbirdIp ? "⚠" : "✗";
    console.log(
      `${status} ${hb.routerId} | ip=${hb.netbirdIp || "none"} tunnel=${hb.tunnelUp} loss=${hb.packetLoss}% latency=${hb.latencyMs?.toFixed(1) || "-"}ms`
    );

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Heartbeat error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function GET() {
  const status = Object.fromEntries(
    Array.from(routers.entries()).map(([id, hb]) => [
      id,
      {
        tunnelUp: hb.tunnelUp,
        netbirdIp: hb.netbirdIp,
        packetLoss: hb.packetLoss,
        latencyMs: hb.latencyMs,
        lastSeen: hb.timestamp,
        stale: Date.now() - new Date(hb.timestamp).getTime() > 15000,
      },
    ])
  );

  return NextResponse.json(status);
}
