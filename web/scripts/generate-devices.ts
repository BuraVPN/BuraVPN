import fs from "fs";
import path from "path";
import crypto from "crypto";

function generatePassword(): string {
  return crypto.randomBytes(4).toString("hex");
}

function generateDeviceId(): string {
  return `BURA-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
}

async function generateDevices(count: number, outputPath: string) {
  const lines = ["deviceId,password"];

  for (let i = 1; i <= count; i++) {
    const deviceId = generateDeviceId();
    const password = generatePassword();
    lines.push(`${deviceId},${password}`);
  }

  const absolutePath = path.resolve(outputPath);
  fs.writeFileSync(absolutePath, lines.join("\n"), "utf8");

  console.log(`Generated ${count} devices → ${absolutePath}`);
}

const count = parseInt(process.argv[2]);
const outputPath =
  process.argv[3] ??
  `scripts/imports/devices-${new Date().toISOString().slice(0, 10)}.csv`;

if (!count || isNaN(count)) {
  console.error(
    "Usage: npx ts-node scripts/generate-devices.ts <count> [output-path]"
  );
  process.exit(1);
}

const dir = path.dirname(path.resolve(outputPath));
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

generateDevices(count, outputPath);
