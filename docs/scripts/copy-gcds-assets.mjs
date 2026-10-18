/*
 * This script copies the GCDS assets from the node_modules directory to the public/assets directory.
 */
import { access, cp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import versionConfig from '../src/routing/versioned/version-config.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const ComponentVersions = versionConfig.sections[0].versions;

await rm(path.join(rootDir, "public", "assets"), { recursive: true, force: true })

const componentsSourceDir = path.join(
    rootDir,
    "node_modules",
    "@gcds-core",
    "components",
    "/"
);

const cssShortcutsSourceFile = path.join(
    rootDir,
    "node_modules",
    "@gcds-core",
    "css-shortcuts",
    "dist",
    "gcds-css-shortcuts.min.css",
);

const codeDisplaySourceDir = path.join(
    rootDir,
    "node_modules",
    "@gcds-extensions",
    "code-display",
    "dist",
    "gcds-ext-code-display",
);

try {
    await access(componentsSourceDir);
    await access(cssShortcutsSourceFile);
    await access(codeDisplaySourceDir);
} catch {
    throw new Error(
        `Missing required GCDS source assets: ${componentsSourceDir} or ${cssShortcutsSourceFile}`,
    );
}

await cp(componentsSourceDir, path.join(rootDir, "public", "assets", "components"), { recursive: true });
await cp(
    cssShortcutsSourceFile,
    path.join(rootDir, "public", "assets", "shortcuts", "gcds-css-shortcuts.min.css"),
);
await cp(codeDisplaySourceDir, path.join(rootDir, "public", "assets", "code-display"), { recursive: true });


// Copy older verisons of GCDS component assets to the public/assets directory
for (const version of ComponentVersions) {
    const versionedComponentsSourceDir = path.join(
        rootDir,
        "node_modules",
        "@gcds-core",
        `components-${version.replaceAll(".", "-")}`,
        "dist",
        "gcds",
    );

    try {
        await access(versionedComponentsSourceDir);
    } catch {
        throw new Error(
            `Missing required GCDS source assets for version ${version}: ${versionedComponentsSourceDir}`,
        );
    }

    await cp(versionedComponentsSourceDir, path.join(rootDir, "public", "assets", "components", version), { recursive: true });

    // Modify global CSS file to work with data-versioned-components instead of root
    const globalCssFile = path.join(rootDir, "public", "assets", "components", version, "gcds.css");

    let css = await readFile(globalCssFile, "utf8");

    css = css.replace(
        /:root\s*\{/,
        "[data-versioned-components]{",
    );

    await writeFile(globalCssFile, css);
}

console.log(`Synced GCDS assets to assets`);
