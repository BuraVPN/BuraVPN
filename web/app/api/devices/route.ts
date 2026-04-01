import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user.id;

  const devices = await prisma.device.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      deviceId: true,
      name: true,
      lastSeenAt: true,
      registeredAt: true,
      peerId: true,
    },
  });

  return NextResponse.json({ success: true, data: devices });
}
