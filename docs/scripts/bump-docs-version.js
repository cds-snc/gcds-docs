import { access, cp, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const version = process.argv[2];

if (!version) {
  console.error("Usage: node scripts/bump-docs-version.js <version>");
  process.exit(1);
}

if (!/^\d+\.\d+\.\d+$/.test(version)) {
  console.error(`Invalid version: ${version}`);
  console.error("Version must use the format #.#.#");
  process.exit(1);
}

const docsRoot = path.resolve(__dirname, "..");

const versionConfigPath = path.join(
  docsRoot,
  "src/routing/versioned/version-config.json",
);

const componentsRoot = path.join(
  docsRoot,
  "src/content/versioned/components",
);

const versionConfig = JSON.parse(
  await readFile(versionConfigPath, "utf8"),
);

const componentsSection = versionConfig.sections.find(
  ({ routeKey }) => routeKey === "components",
);

if (!componentsSection) {
  console.error('Could not find the "components" section in version-config.json');
  process.exit(1);
}

const versions = componentsSection.versions;

if (!versions.length) {
  console.error("No existing component versions were found.");
  process.exit(1);
}

if (versions.includes(version)) {
  console.error(`Version ${version} already exists in version-config.json.`);
  process.exit(1);
}

const previousVersion = versions.at(-1);

const sourceDir = path.join(componentsRoot, previousVersion);
const destinationDir = path.join(componentsRoot, version);

try {
  await access(sourceDir);
} catch {
  console.error(`Source version directory does not exist: ${sourceDir}`);
  process.exit(1);
}

try {
  await access(destinationDir);

  console.error(
    `Destination version directory already exists: ${destinationDir}`,
  );
  process.exit(1);
} catch {
  // Destination doesn't exist, which is what we want.
}

console.log(`Bumping documentation from ${previousVersion} to ${version}...`);

//
// Copy the previous version.
//
await cp(sourceDir, destinationDir, {
  recursive: true,
});

//
// Update frontmatter in all MDX files.
//
async function updateMdxFiles(directory) {
  const { readdir } = await import("node:fs/promises");

  const entries = await readdir(directory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await updateMdxFiles(entryPath);
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith(".mdx") || entry.name.startsWith("preview")) {
      continue;
    }

    const contents = await readFile(entryPath, "utf8");

    const updatedContents = contents.replace(
      /^(\s*version:\s*)\d+\.\d+\.\d+(\s*)$/m,
      `$1${version}$2`,
    );

    if (updatedContents === contents) {
      console.warn(`No version frontmatter found: ${entryPath}`);
      continue;
    }

    await writeFile(entryPath, updatedContents);

    console.log(`Updated ${path.relative(docsRoot, entryPath)}`);
  }
}

await updateMdxFiles(destinationDir);

//
// Add the new version to version-config.json.
//
versions.push(version);

await writeFile(
  versionConfigPath,
  `${JSON.stringify(versionConfig, null, 2)}\n`,
);

console.log("");
console.log(`Successfully created documentation version ${version}.`);
console.log(`Copied from: ${previousVersion}`);
console.log(`Created:     ${version}`);