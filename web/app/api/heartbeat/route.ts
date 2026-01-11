import { NextRequest, NextResponse } from "next/server";

const backCheckRequests = new Map<string, string>();

const ROUTER_IPS: Record<string, string> = {
  "travel-router": "<netbird_travel_router_ip>",
  "home-router": "<netbird_exit_node_ip>",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      routerId,
      netbirdState,
      tunnelUp,
      exitNode,
      pingResult,
      requestBackCheck,
      backCheckResult,
    } = body as {
      routerId: string;
      netbirdState?: { connected: boolean; ip?: string };
      tunnelUp: boolean;
      exitNode?: { reachable: boolean; target?: string; latency?: number };
      pingResult?: {
        success: boolean;
        packetLoss: number;
        avgLatency?: number;
      };
      requestBackCheck?: boolean;
      backCheckResult?: {
        success: boolean;
        packetLoss: number;
        avgLatency?: number;
      };
    };

    console.log("=== Heartbeat Received ===");
    console.log("Time:", new Date().toISOString());
    console.log("Router ID:", routerId);
    console.log("Status:", body.status);
    console.log(
      "NetBird:",
      netbirdState?.connected
        ? `Connected (${netbirdState.ip})`
        : "Disconnected"
    );
    console.log("Tunnel Up:", tunnelUp);
    if (pingResult) {
      console.log(
        `Tunnel Ping: ${pingResult.packetLoss}% loss, ${pingResult.avgLatency?.toFixed(1) || "N/A"}ms`
      );
    }
    if (exitNode) {
      console.log(
        `Exit Node: ${exitNode.reachable ? `✓ ${exitNode.target} (${exitNode.latency?.toFixed(1)}ms)` : "✗ unreachable"}`
      );
    }
    console.log("Router data:", JSON.stringify(body, null, 2));
    console.log(
      "IP address:",
      request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown"
    );

    if (requestBackCheck && !tunnelUp) {
      console.log(
        `⚠️  Router ${routerId} reports tunnel down - requesting back-check`
      );

      const peerRouterId = getPeerRouterId(routerId);
      if (peerRouterId) {
        backCheckRequests.set(peerRouterId, ROUTER_IPS[routerId] || "");
        console.log(`→ Back-check request queued for ${peerRouterId}`);
      }
    }

    if (backCheckResult !== undefined) {
      const success =
        backCheckResult.success && backCheckResult.packetLoss < 100;
      console.log(
        `✓ Back-check result from ${routerId}: ${success ? "SUCCESS" : "FAILED"} (${backCheckResult.packetLoss}% loss)`
      );

      if (success) {
        console.log(`→ Diagnosis: Problem is on the requesting router`);
      } else {
        console.log(
          `→ Diagnosis: Problem is on both routers or NetBird network`
        );
      }

      backCheckRequests.delete(routerId);
    }

    console.log("========================\n");

    const shouldBackCheck = backCheckRequests.has(routerId);
    const checkTarget = shouldBackCheck
      ? backCheckRequests.get(routerId)
      : undefined;

    return NextResponse.json(
      {
        success: true,
        message: "Heartbeat received",
        timestamp: new Date().toISOString(),
        shouldBackCheck,
        checkTarget,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing heartbeat:", error);

    return NextResponse.json(
      { success: false, message: "Error processing heartbeat" },
      { status: 500 }
    );
  }
}

function getPeerRouterId(routerId: string): string | null {
  if (routerId === "travel-router") return "home-router";
  if (routerId === "home-router") return "travel-router";
  return null;
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: "Heartbeat endpoint active",
    method: "POST expected",
    pendingBackChecks: Array.from(backCheckRequests.keys()),
  });
}
