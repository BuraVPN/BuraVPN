/*
  Warnings:

  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `setupKey` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_setupKey_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "image",
DROP COLUMN "setupKey";

-- CreateTable
CREATE TABLE "setup_keys" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "netbirdId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "autoGroups" TEXT[],
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),

    CONSTRAINT "setup_keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "setup_keys_key_key" ON "setup_keys"("key");

-- CreateIndex
CREATE INDEX "setup_keys_userId_idx" ON "setup_keys"("userId");

-- AddForeignKey
ALTER TABLE "setup_keys" ADD CONSTRAINT "setup_keys_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
