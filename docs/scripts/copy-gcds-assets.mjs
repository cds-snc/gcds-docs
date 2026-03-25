import { access, cp, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const sourceDir = path.join(
  rootDir,
  "node_modules",
  "@gcds-core",
  "components",
  "dist",
  "gcds",
);

const targetDir = path.join(rootDir, "public", "assets", "gcds");

await mkdir(targetDir, { recursive: true });

try {
  await access(sourceDir);
} catch {
  throw new Error(`Missing required GCDS source directory: ${sourceDir}`);
}

await cp(sourceDir, targetDir, { recursive: true });

console.log(`Synced GCDS assets to ${targetDir}`);
