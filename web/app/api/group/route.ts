import { NextResponse } from "next/server";
import { getGroup } from "@/lib/netbird";

const userId = "15fd618e-2c21-4078-82ce-ac4b651ddb3e";

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
