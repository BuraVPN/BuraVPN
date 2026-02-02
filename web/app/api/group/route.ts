import { NextResponse } from "next/server";
import { getGroup } from "@/lib/netbird";

const userId = "4c9ab938-757c-4ed4-99e7-7fd3dc1a6e84";

export async function GET(request: Request) {
  // const groupId = "d49ofsrsujac739u7qkg";
  try {
    // const { searchParams } = new URL(request.url);
    // const groupId = searchParams.get("id");
    const group = await getGroup(userId);
    return NextResponse.json({
      success: true,
      data: group,
    });
  } catch (error) {
    console.error("Groups API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch groups",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
