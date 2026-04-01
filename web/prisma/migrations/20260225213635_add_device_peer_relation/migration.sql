/*
  Warnings:

  - A unique constraint covering the columns `[peerId]` on the table `devices` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "devices" ADD COLUMN     "peerId" TEXT,
ADD COLUMN     "setupKeySent" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "devices_peerId_key" ON "devices"("peerId");

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_peerId_fkey" FOREIGN KEY ("peerId") REFERENCES "peers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
