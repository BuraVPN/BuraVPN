import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/api-auth";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user.id;

  try {
    const { deviceId, password } = await req.json();

    if (!deviceId || !password) {
      return NextResponse.json(
        { success: false, error: "deviceId and password are required" },
        { status: 400 }
      );
    }

    const device = await prisma.device.findUnique({
      where: { deviceId },
    });

    if (!device) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (device.userId) {
      return NextResponse.json(
        { success: false, error: "Device is already claimed" },
        { status: 409 }
      );
    }

    const passwordValid = await bcrypt.compare(password, device.passwordHash);
    if (!passwordValid) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const updated = await prisma.device.update({
      where: { id: device.id },
      data: {
        userId,
        registeredAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (e) {
    console.error("Claim device error:", e);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
