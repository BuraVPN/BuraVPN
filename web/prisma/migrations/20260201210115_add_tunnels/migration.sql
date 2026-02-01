-- CreateTable
CREATE TABLE "tunnels" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "exitNodeId" TEXT NOT NULL,
    "name" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tunnels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tunnel_travel_routers" (
    "id" TEXT NOT NULL,
    "tunnelId" TEXT NOT NULL,
    "peerId" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tunnel_travel_routers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tunnels_userId_idx" ON "tunnels"("userId");

-- CreateIndex
CREATE INDEX "tunnel_travel_routers_tunnelId_idx" ON "tunnel_travel_routers"("tunnelId");

-- CreateIndex
CREATE INDEX "tunnel_travel_routers_peerId_idx" ON "tunnel_travel_routers"("peerId");

-- CreateIndex
CREATE UNIQUE INDEX "tunnel_travel_routers_tunnelId_peerId_key" ON "tunnel_travel_routers"("tunnelId", "peerId");

-- AddForeignKey
ALTER TABLE "tunnels" ADD CONSTRAINT "tunnels_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tunnels" ADD CONSTRAINT "tunnels_exitNodeId_fkey" FOREIGN KEY ("exitNodeId") REFERENCES "peers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tunnel_travel_routers" ADD CONSTRAINT "tunnel_travel_routers_tunnelId_fkey" FOREIGN KEY ("tunnelId") REFERENCES "tunnels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tunnel_travel_routers" ADD CONSTRAINT "tunnel_travel_routers_peerId_fkey" FOREIGN KEY ("peerId") REFERENCES "peers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
