import { PrismaClient } from "../app/generated/prisma/client/index.js";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import readline from "readline";

const prisma = new PrismaClient();

async function importDevices(csvPath: string) {
  const absolutePath = path.resolve(csvPath);

  if (!fs.existsSync(absolutePath)) {
    console.error(`CSV file not found: ${absolutePath}`);
    process.exit(1);
  }

  const rl = readline.createInterface({
    input: fs.createReadStream(absolutePath),
    crlfDelay: Infinity,
  });

  let lineNumber = 0;
  let imported = 0;
  let skipped = 0;
  let failed = 0;

  for await (const line of rl) {
    lineNumber++;

    if (lineNumber === 1) continue;

    const parts = line.split(",");
    if (parts.length < 2) {
      console.warn(`Line ${lineNumber}: invalid format, skipping`);
      failed++;
      continue;
    }

    const deviceId = parts[0].trim();
    const password = parts[1].trim();

    if (!deviceId || !password) {
      console.warn(
        `Line ${lineNumber}: missing deviceId or password, skipping`
      );
      failed++;
      continue;
    }

    try {
      const existingId = await prisma.device.findUnique({
        where: { deviceId },
      });
      if (existingId) {
        console.log(`Skipping ${deviceId} — deviceId already exists`);
        skipped++;
        continue;
      }

      const allDevices = await prisma.device.findMany({
        select: { deviceId: true, passwordHash: true },
      });
      let passwordDuplicate = false;
      for (const d of allDevices) {
        if (await bcrypt.compare(password, d.passwordHash)) {
          console.warn(
            `Skipping ${deviceId} — password already used by ${d.deviceId}`
          );
          passwordDuplicate = true;
          skipped++;
          break;
        }
      }
      if (passwordDuplicate) continue;

      const passwordHash = await bcrypt.hash(password, 12);

      await prisma.device.create({
        data: {
          deviceId,
          passwordHash,
        },
      });

      console.log(`Imported: ${deviceId}`);
      imported++;
    } catch (error) {
      console.error(`Failed to import ${deviceId}:`, error);
      failed++;
    }
  }

  console.log(
    `\nDone! Imported: ${imported}, Skipped: ${skipped}, Failed: ${failed}`
  );
  await prisma.$disconnect();
}

const csvPath = process.argv[2];
if (!csvPath) {
  console.error("Usage: npx ts-node scripts/import-devices.ts <path-to-csv>");
  process.exit(1);
}

importDevices(csvPath);
