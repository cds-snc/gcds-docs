import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

class RouteValidator {
  constructor() {
    this.routeManifestPath = path.join(projectRoot, 'src', 'routing', 'route-manifest.json');
    this.contentPagesRoot = path.join(projectRoot, 'src', 'content', 'pages');
    this.versionedContentRoot = path.join(projectRoot, 'src', 'content', 'versioned');
    this.versionConfigPath = path.join(projectRoot, 'src', 'routing', 'versioned', 'version-config.json');
    this.locales = ['en', 'fr'];
  }

  /**
   * Check if a file exists at the given path
   */
  async fileExists(filePath) {
    try {
      await access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get candidate file paths for a given locale and slug
   */
  getCandidateFiles(locale, slugPath) {
    const fileBase = slugPath === '' ? 'index' : slugPath;
    const candidates = [
      path.join(this.contentPagesRoot, locale, `${fileBase}.astro`),
      path.join(this.contentPagesRoot, locale, `${fileBase}.mdx`)
    ];

    // Support nested content folders like "start-to-use/index.mdx".
    if (fileBase !== 'index') {
      candidates.push(
        path.join(this.contentPagesRoot, locale, fileBase, 'index.astro'),
        path.join(this.contentPagesRoot, locale, fileBase, 'index.mdx')
      );
    }

    return candidates;
  }

  /**
   * Get candidate versioned files for a locale + section + version + slug.
   */
  getVersionedCandidateFiles(locale, contentDir, version, slugPath) {
    const sectionRoot = path.join(this.versionedContentRoot, contentDir, version, locale);
    const fileBase = slugPath === '' ? 'index' : slugPath;

    return [
      path.join(sectionRoot, `${fileBase}.astro`),
      path.join(sectionRoot, `${fileBase}.mdx`),
      path.join(sectionRoot, fileBase, 'index.astro'),
      path.join(sectionRoot, fileBase, 'index.mdx')
    ];
  }

  /**
   * Join URL segments, filtering out empty values
   */
  joinUrlSegments(...segments) {
    return segments
      .filter((segment) => typeof segment === 'string')
      .map((segment) => segment.replace(/^\/+|\/+$/g, ''))
      .filter((segment) => segment.length > 0)
      .join('/');
  }

  /**
   * Get localized value for a given locale
   */
  localized(value, locale) {
    return value?.[locale] ?? '';
  }

  compareSemver(a, b) {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i += 1) {
      const aVal = aParts[i] ?? 0;
      const bVal = bParts[i] ?? 0;
      if (aVal !== bVal) {
        return aVal - bVal;
      }
    }

    return 0;
  }

  async getVersionDirectories(contentDir) {
    const sectionPath = path.join(this.versionedContentRoot, contentDir);
    try {
      const entries = await readdir(sectionPath, { withFileTypes: true });
      return entries
        .filter((entry) => entry.isDirectory() && /^\d+\.\d+\.\d+$/.test(entry.name))
        .map((entry) => entry.name)
        .sort((a, b) => this.compareSemver(a, b));
    } catch {
      console.warn(
        chalk.yellow('⚠') +
          chalk.bold.yellow(' [route-check] WARNING: ') +
          chalk.yellow(
            `getVersionDirectories: something went wrong when getting version directories: ${path.relative(projectRoot, this.versionedContentRoot)}`,
          ),
      );
      return [];
    }
  }

  async loadVersionConfig() {
    try {
      const content = await readFile(this.versionConfigPath, 'utf8');
      const parsed = JSON.parse(content);
      if (!Array.isArray(parsed?.sections)) {
        return [];
      }

      return parsed.sections.map((section) => ({
        routeKey: section.routeKey,
        contentDir: section.contentDir,
        manifestPath: path.join(projectRoot, 'src', 'routing', 'versioned', section.manifest),
        versions: Array.isArray(section.versions) ? section.versions : [],
        // Preferred: itemVersionRules { [slug]: { availableFrom, removedSince } }
        // Backward-compatible: itemAvailability { [slug]: { from, to } }
        itemRules: section.itemVersionRules ?? section.itemRules ?? section.itemAvailability ?? {}
      }));
    } catch {
      console.warn(
        chalk.yellow('⚠') +
          chalk.bold.yellow(' [route-check] WARNING: ') +
          chalk.yellow(
            `loadVersionConfig: something went wrong when reading version config: ${path.relative(projectRoot, this.versionConfigPath)}`,
          ),
      );
      return [];
    }
  }

  async loadManifestItems(manifestPath) {
    try {
      const content = await readFile(manifestPath, 'utf8');
      const parsed = JSON.parse(content);
      return Array.isArray(parsed?.items) ? parsed.items : [];
    } catch {
      console.warn(
        chalk.yellow('⚠') +
          chalk.bold.yellow(' [route-check] WARNING: ') +
          chalk.yellow(
            `loadManifestItems: manifest file not found or unreadable: ${path.relative(projectRoot, manifestPath)}`,
          ),
      );
      return [];
    }
  }

  /**
   * Resolve the stable, locale-independent key used to look an item up in
   * itemVersionRules.
   *
   * Slugs differ across locales, so rules are keyed by the English slug
   * (canonical), with an optional explicit `item.key` override.
   */
  itemRuleKey(item) {
    return item?.key ?? this.localized(item?.slug, 'en');
  }

  isItemExpectedInVersion(section, item, version) {
    const itemKey = this.itemRuleKey(item);
    const rule = itemKey ? section.itemRules?.[itemKey] : undefined;
    if (!rule) {
      return true;
    }

    const addedOn = rule.availableFrom ?? rule.addedOn ?? rule.from;
    const removedSince = rule.removedSince;
    const to = rule.to;

    if (addedOn && this.compareSemver(version, addedOn) < 0) {
      return false;
    }

    // removedSince means item is NOT expected from that version onward.
    if (removedSince && this.compareSemver(version, removedSince) >= 0) {
      return false;
    }

    // Legacy upper-bound support: to means item is expected through that version.
    if (to && this.compareSemver(version, to) > 0) {
      return false;
    }

    return true;
  }

  /**
   * Validate versioned routes against manifest entries for each configured version.
   *
   * This is version-aware and supports intentional additions/removals through
   * itemVersionRules in version-config.json (availableFrom / removedSince).
   */
  async validateVersionedManifestRoutes() {
    const checks = [];
    const notes = [];
    const sections = await this.loadVersionConfig();

    for (const section of sections) {
      const versions = section.versions
        .filter((version) => /^\d+\.\d+\.\d+$/.test(version))
        .sort((a, b) => this.compareSemver(a, b));

      if (versions.length === 0) {
        continue;
      }

      const availableVersionDirs = await this.getVersionDirectories(section.contentDir);
      const items = await this.loadManifestItems(section.manifestPath);
      const versionedItems = items.filter((item) => item?.versioned === true);

      notes.push(
        `${section.routeKey}: checking configured versions [${versions.join(', ')}] against manifest (${path.relative(projectRoot, section.manifestPath)})`
      );

      for (const version of versions) {
        if (!availableVersionDirs.includes(version)) {
          notes.push(`${section.routeKey}: configured version ${version} has no matching content directory`);
          continue;
        }

        for (const item of versionedItems) {
          if (!this.isItemExpectedInVersion(section, item, version)) {
            continue;
          }

          for (const locale of this.locales) {
            const slug = this.localized(item?.slug, locale);
            const routePath = this.joinUrlSegments(section.routeKey, version, slug);
            checks.push({
              locale,
              routePath,
              source: `${section.routeKey}@${version}`,
              candidates: this.getVersionedCandidateFiles(locale, section.contentDir, version, slug)
            });
          }
        }
      }
    }

    const missingRoutes = [];

    for (const check of checks) {
      const existing = await Promise.all(check.candidates.map((file) => this.fileExists(file)));
      if (!existing.some(Boolean)) {
        missingRoutes.push(check);
      }
    }

    return { missingRoutes, notes };
  }

  /**
   * Add a route check for a single item
   */
  addRouteCheckForItem(checks, locale, baseRoute, item) {
    const slug = this.localized(item?.slug, locale);
    const routePath = this.joinUrlSegments(baseRoute, slug);
    checks.push({
      locale,
      routePath,
      source: item?.pageKey ?? item?.routeKey ?? 'item'
    });
  }

  /**
   * Generate route checks from manifest routes
   */
  generateRouteChecks(routes) {
    const checks = [];

    for (const route of routes) {
      // TODO: Add support for versioned routes
      if (route.versioned === true) {
        continue;
      }

      if (route.type === 'home' || route.type === 'link') {
        for (const locale of this.locales) {
          const slug = this.localized(route.slug, locale);
          checks.push({ locale, routePath: slug, source: route.routeKey ?? route.type });
        }
        continue;
      }

      if (route.type === 'group' && Array.isArray(route.items)) {
        for (const locale of this.locales) {
          for (const item of route.items) {
            this.addRouteCheckForItem(checks, locale, route.routeKey, item);
          }
        }
      }
    }

    return checks;
  }

  /**
   * Verify which route checks have missing files
   */
  async findMissingRoutes(checks) {
    const missingRoutes = [];

    for (const check of checks) {
      const candidates = this.getCandidateFiles(check.locale, check.routePath);
      const existing = await Promise.all(candidates.map((file) => this.fileExists(file)));

      if (!existing.some(Boolean)) {
        missingRoutes.push({ ...check, candidates });
      }
    }

    return missingRoutes;
  }

  /**
   * Format and log missing routes with colors
   */
  reportMissingRoutes(missingRoutes, options = {}) {
    const {
      okMessage = 'all checked routes have matching files in src/content/pages',
      warningLabel = 'route(s) do not have matching files in src/content/pages',
      infoLines = []
    } = options;

    for (const infoLine of infoLines) {
      console.log(chalk.blue('i') + chalk.bold.blue(' [route-check] INFO: ') + chalk.gray(infoLine));
    }

    if (missingRoutes.length === 0) {
      console.log(
        chalk.green('✓') +
          chalk.bold(' [route-check] OK: ') +
          chalk.gray(okMessage)
      );
      return;
    }

    console.warn(
      chalk.yellow('⚠') +
        chalk.bold.yellow(' [route-check] WARNING: ') +
        chalk.yellow(`${missingRoutes.length} ${warningLabel}:`)
    );
    for (const missing of missingRoutes) {
      const urlPath = `/${missing.locale}/${missing.routePath}`;
      const candidateList = missing.candidates
        .map((candidate) => path.relative(projectRoot, candidate))
        .join(chalk.gray(' | '));
      console.warn(
        chalk.gray('  - ') +
          chalk.cyan(urlPath) +
          chalk.gray(` (${missing.source})`) +
          chalk.gray(' → expected one of:')
      );
      console.warn(chalk.gray('    ' + candidateList));
    }
  }

  /**
   * Run the complete validation process
   */
  async validate() {
    const manifestContent = await readFile(this.routeManifestPath, 'utf8');
    const manifest = JSON.parse(manifestContent);
    const routes = Array.isArray(manifest?.sideNavRoutes) ? manifest.sideNavRoutes : [];

    const checks = this.generateRouteChecks(routes);
    const missingRoutes = await this.findMissingRoutes(checks);
    this.reportMissingRoutes(missingRoutes, {
      okMessage: 'all non-versioned checked routes have matching files in src/content/pages',
      warningLabel: 'non-versioned route(s) do not have matching files in src/content/pages'
    });

    const versionedResult = await this.validateVersionedManifestRoutes();
    this.reportMissingRoutes(versionedResult.missingRoutes, {
      okMessage: 'all configured versioned manifest routes have matching files in src/content/versioned',
      warningLabel: 'configured versioned manifest route(s) do not have matching files in src/content/versioned',
      infoLines: [
        'Versioned validation checks each section against its manifest for configured versions in version-config.json.',
        'Use itemVersionRules with availableFrom/removedSince in version-config.json to model additions/removals across versions.',
        ...versionedResult.notes
      ]
    });
  }
}

const main = async () => {
  const validator = new RouteValidator();
  await validator.validate();
};

main().catch((error) => {
  console.warn(
    chalk.red('✖') +
      chalk.bold.red(' [route-check] ERROR: ') +
      chalk.red(`route validation failed to run`)
  );
  console.warn(chalk.gray(`   ${error.message}`));
});


