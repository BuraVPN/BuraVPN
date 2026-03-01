import { NextResponse } from "next/server";
import { getCountryName } from "@/lib/country";
import { requireAuth } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { deletePeer } from "@/lib/netbird";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user.id;

  try {
    const { id: peerId } = await context.params;

    const peer = await prisma.peer.findUnique({
      where: { id: peerId },
      include: { device: true },
    });

    if (!peer) {
      return NextResponse.json(
        { success: false, error: "Peer not found" },
        { status: 404 }
      );
    }

    const belongsToUser =
      peer.userId === userId || peer.device?.userId === userId;

    if (!belongsToUser) {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 }
      );
    }

    const countryName = peer.countryCode
      ? getCountryName(peer.countryCode)
      : null;

    return NextResponse.json({
      success: true,
      data: { ...peer, countryName },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch peer",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { session, error } = await requireAuth();
  if (error) return error;

  const userId = session.user.id;

  try {
    const { id: peerId } = await context.params;

    const peer = await prisma.peer.findUnique({
      where: { id: peerId },
      include: { device: true },
    });

    if (!peer) {
      return NextResponse.json(
        { success: false, error: "Peer not found" },
        { status: 404 }
      );
    }

    const belongsToUser =
      peer.userId === userId || peer.device?.userId === userId;

    if (!belongsToUser) {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 }
      );
    }

    if (peer.device) {
      await prisma.device.update({
        where: { id: peer.device.id },
        data: {
          peerId: null,
          userId: null,
          setupKeySent: false,
        },
      });
    }

    await prisma.peer.delete({
      where: { id: peerId },
    });

    if (peer.netbirdPeerId) {
      await deletePeer(peer.netbirdPeerId).catch((e) =>
        console.error(`NetBird peer delete error:`, e)
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete peer error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete peer",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
