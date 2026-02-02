/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "netbirdGroupId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "peersCount" INTEGER NOT NULL DEFAULT 0,
    "resourcesCount" INTEGER NOT NULL DEFAULT 0,
    "issued" TEXT,
    "resources" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "peers" (
    "id" TEXT NOT NULL,
    "netbirdPeerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ip" TEXT,
    "connectionIp" TEXT,
    "dnsLabel" TEXT,
    "extraDnsLabels" TEXT[],
    "connected" BOOLEAN NOT NULL DEFAULT false,
    "lastSeen" TIMESTAMP(3),
    "lastLogin" TIMESTAMP(3),
    "os" TEXT,
    "kernelVersion" TEXT,
    "version" TEXT,
    "uiVersion" TEXT,
    "hostname" TEXT,
    "serialNumber" TEXT,
    "geonameId" INTEGER,
    "countryCode" TEXT,
    "cityName" TEXT,
    "userId" TEXT,
    "sshEnabled" BOOLEAN NOT NULL DEFAULT false,
    "approvalRequired" BOOLEAN NOT NULL DEFAULT false,
    "ephemeral" BOOLEAN NOT NULL DEFAULT false,
    "loginExpirationEnabled" BOOLEAN NOT NULL DEFAULT false,
    "loginExpired" BOOLEAN NOT NULL DEFAULT false,
    "inactivityExpirationEnabled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "peers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_peers" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "peerId" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "group_peers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "groups_netbirdGroupId_key" ON "groups"("netbirdGroupId");

-- CreateIndex
CREATE INDEX "groups_userId_idx" ON "groups"("userId");

-- CreateIndex
CREATE INDEX "groups_netbirdGroupId_idx" ON "groups"("netbirdGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "peers_netbirdPeerId_key" ON "peers"("netbirdPeerId");

-- CreateIndex
CREATE INDEX "peers_netbirdPeerId_idx" ON "peers"("netbirdPeerId");

-- CreateIndex
CREATE INDEX "peers_connected_idx" ON "peers"("connected");

-- CreateIndex
CREATE INDEX "peers_hostname_idx" ON "peers"("hostname");

-- CreateIndex
CREATE INDEX "group_peers_groupId_idx" ON "group_peers"("groupId");

-- CreateIndex
CREATE INDEX "group_peers_peerId_idx" ON "group_peers"("peerId");

-- CreateIndex
CREATE UNIQUE INDEX "group_peers_groupId_peerId_key" ON "group_peers"("groupId", "peerId");

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_peers" ADD CONSTRAINT "group_peers_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_peers" ADD CONSTRAINT "group_peers_peerId_fkey" FOREIGN KEY ("peerId") REFERENCES "peers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
