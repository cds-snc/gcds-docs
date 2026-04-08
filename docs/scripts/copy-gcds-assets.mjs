/*
 * This script copies the GCDS assets from the node_modules directory to the public/assets directory.
 */
import { access, cp, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const componentsSourceDir = path.join(
    rootDir,
    "node_modules",
    "@gcds-core",
    "components",
    "dist",
    "gcds",
);

const cssShortcutsSourceFile = path.join(
    rootDir,
    "node_modules",
    "@gcds-core",
    "css-shortcuts",
    "dist",
    "gcds-css-shortcuts.min.css",
);

const targetDir = path.join(rootDir, "public", "assets", "gcds");

await mkdir(targetDir, { recursive: true });

try {
    await access(componentsSourceDir);
    await access(cssShortcutsSourceFile);
} catch {
    throw new Error(
        `Missing required GCDS source assets: ${componentsSourceDir} or ${cssShortcutsSourceFile}`,
    );
}

await cp(componentsSourceDir, targetDir, { recursive: true });
await cp(
    cssShortcutsSourceFile,
    path.join(targetDir, "gcds-css-shortcuts.min.css"),
);

console.log(`Synced GCDS assets to ${targetDir}`);
