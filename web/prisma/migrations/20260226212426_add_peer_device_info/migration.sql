-- AlterTable
ALTER TABLE "peers" ADD COLUMN     "arch" TEXT,
ADD COLUMN     "publicIp" TEXT,
ALTER COLUMN "netbirdPeerId" DROP NOT NULL;
