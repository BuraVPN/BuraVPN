import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { regenerateSetupKey } from "@/lib/setup-key";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const fiveDaysFromNow = new Date();
  fiveDaysFromNow.setDate(fiveDaysFromNow.getDate() + 5);

  const expiringKeys = await prisma.setupKey.findMany({
    where: {
      revokedAt: null,
      expiresAt: { lte: fiveDaysFromNow },
    },
    select: { userId: true },
    distinct: ["userId"],
  });

  const results = [];

  for (const { userId } of expiringKeys) {
    try {
      await regenerateSetupKey(userId);
      results.push({ userId, status: "success" });
    } catch (error) {
      console.error(`Failed to regenerate for ${userId}:`, error);
      results.push({ userId, status: "failed" });
    }
  }

  return NextResponse.json({
    processed: results.length,
    results,
  });
}
