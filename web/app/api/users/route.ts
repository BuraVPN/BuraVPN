import { PrismaClient } from "@/app/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // const userId = searchParams.get("userId");
    const email = searchParams.get("email");
    const userId = "aacd1804-278f-46be-a1fb-53b4066b5e55";

    if (!userId && !email) {
      return NextResponse.json(
        {
          success: false,
          error: "userId or email parameter is required",
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: userId ? { id: userId } : { email: email! },
      include: {
        groups: {
          include: {
            groupPeers: {
              include: {
                peer: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch user",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
