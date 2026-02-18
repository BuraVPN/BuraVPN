import { NextResponse } from "next/server";
import { getGroup } from "@/lib/netbird";
import { requireAuth } from "@/lib/api-auth";

export async function GET(request: Request) {
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user?.id;

  try {
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
