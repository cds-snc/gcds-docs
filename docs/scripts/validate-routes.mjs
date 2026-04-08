import { access, readFile } from 'node:fs/promises';
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
   * Join URL segments, filtering out empty values
   */
  joinUrlSegments(...segments) {
    return segments
      .filter((segment) => typeof segment === 'string' && segment.length > 0)
      .join('/');
  }

  /**
   * Get localized value for a given locale
   */
  localized(value, locale) {
    return value?.[locale] ?? '';
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
      // Will support versioned routes later
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
  reportMissingRoutes(missingRoutes) {
    if (missingRoutes.length === 0) {
      console.log(
        chalk.green('✓') +
          chalk.bold(' [route-check] OK: ') +
          chalk.gray('all checked routes have matching files in src/content/pages')
      );
      return;
    }

    console.warn(
      chalk.yellow('⚠') +
        chalk.bold.yellow(' [route-check] WARNING: ') +
        chalk.yellow(`${missingRoutes.length} route(s) do not have matching files in src/content/pages:`)
    );
    for (const missing of missingRoutes) {
      const urlPath = `/${missing.locale}/${missing.routePath}`.replace(/\/$/, '/');
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
    this.reportMissingRoutes(missingRoutes);
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


