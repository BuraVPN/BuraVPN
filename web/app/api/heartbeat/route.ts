import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("**********\n");
    console.log("Heartbeat Received");
    console.log("Time:", new Date().toISOString());
    console.log("Router data:", JSON.stringify(body, null, 2));
    console.log(
      "IP address:",
      request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown"
    );
    console.log("**********\n");

    return NextResponse.json(
      {
        success: true,
        message: "Heartbeat received",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing heartbeat:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error processing heartbeat",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: "Heartbeat endpoint active",
    method: "POST expected",
  });
}
