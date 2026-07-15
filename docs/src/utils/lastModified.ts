import { execFileSync } from 'node:child_process';
import { stat } from 'node:fs/promises';
import * as path from 'node:path';

/**
 * Get the last modified date of a file using Git history.
 * Falls back to filesystem mtime if the file has no Git commits
 * (e.g. new/untracked files).
 *
 * @param filePath - Absolute path to the content file.
 * @returns ISO date string, or null if the date cannot be determined.
 */
export async function getLastModified(filePath: string): Promise<string | null> {
  try {
    // git log -1 returns the most recent commit date for this file.
    const gitDate = execFileSync('git', ['log', '-1', '--format=%cI', '--', filePath], {
      encoding: 'utf-8',
    }).trim();

    if (gitDate) {
      return gitDate;
    }
  } catch {
    // Git not available or not a repo — fall through to fs.
  }

  // Fallback: use the filesystem modification time.
  try {
    const stats = await stat(filePath);
    return stats.mtime.toISOString();
  } catch {
    return null;
  }
}

/**
 * Format an ISO date string for display, respecting the current locale.
 *
 * @param isoDate - ISO 8601 date string.
 * @param locale  - BCP 47 locale tag (e.g. "en", "fr").
 * @returns Formatted date string (e.g. "April 7, 2026" or "7 avril 2026").
 */
export function formatDate(isoDate: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(isoDate));
}

interface RouteLastModifiedOptions {
  contentRoot?: string;
  locale?: string;
}

export async function getLastModifiedForRoute(
  pathname: string,
  options: RouteLastModifiedOptions = {}
): Promise<string | undefined> {
  const normalizedPath = pathname.replace(/\/$/, '');
  const parts = normalizedPath.split('/').filter(Boolean);

  const locale = options.locale ?? parts[0];
  if (!locale) {
    return undefined;
  }

  const slugPath = parts.slice(1).join('/') || 'index';
  const contentRoot = options.contentRoot ?? 'src/content/pages';
  const contentRootAbs = path.resolve(process.cwd(), contentRoot);

  const candidateFiles = [
    path.join(contentRootAbs, locale, `${slugPath}.astro`),
    path.join(contentRootAbs, locale, `${slugPath}.mdx`),
    path.join(contentRootAbs, locale, slugPath, 'index.astro'),
    path.join(contentRootAbs, locale, slugPath, 'index.mdx')
  ];

  for (const candidate of candidateFiles) {
    const isoDate = await getLastModified(candidate);
    if (isoDate) {
      return isoDate;
    }
  }

  return undefined;
}