import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = "30d";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { deviceId, password } = body;

    if (!deviceId || !password) {
      return NextResponse.json(
        { error: "deviceId and password are required" },
        { status: 400 }
      );
    }

    const device = await prisma.device.findUnique({
      where: { deviceId },
    });

    if (!device) {
      return NextResponse.json({ error: "Device not found" }, { status: 401 });
    }

    const passwordValid = await bcrypt.compare(password, device.passwordHash);
    if (!passwordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { deviceId: device.deviceId, id: device.id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    await prisma.device.update({
      where: { id: device.id },
      data: {
        registeredAt: device.registeredAt ?? new Date(),
        jwtIssuedAt: new Date(),
      },
    });

    console.log(`Device registered: ${deviceId}`);

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error("Device registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
