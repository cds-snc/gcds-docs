import { readFileSync } from 'fs';

export function getVersionNumber(target) {
  const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

  const version = pkg.dependencies?.[target] || pkg.devDependencies?.[target];

  if (version) {
    const cleanVersion = version.replace(/^[\^~]/, '');
    return cleanVersion;
  } else {
    console.error(`Dependency "${target}" not found.`);
    process.exit(1);
  }
}
