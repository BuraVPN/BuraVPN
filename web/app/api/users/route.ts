import { PrismaClient } from "@/app/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // const userId = searchParams.get("userId");
    const email = searchParams.get("email");
    const userId = "4c9ab938-757c-4ed4-99e7-7fd3dc1a6e84";

    // const userId = "d3vvub3sujac73d5njf0";
    //e935db0c-4156-43a0-bf3e-0fd1ab55fea6

    //sa curla d3vvub3sujac73d5njf0

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
