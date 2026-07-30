import { execFileSync } from 'node:child_process';
import { stat } from 'node:fs/promises';
import * as path from 'node:path';

/**
 * Git commit dates for a file (newest first) plus the commit count.
 * count === 0 means the file is untracked or git is unavailable.
 */
function getGitHistory(filePath: string): { count: number; latest: string | null } {
  try {
    const out = execFileSync('git', ['log', '--format=%cI', '--', filePath], {
      encoding: 'utf-8',
    }).trim();
    if (!out) {
      return { count: 0, latest: null };
    }
    const dates = out.split('\n').filter(Boolean);
    return { count: dates.length, latest: dates[0] ?? null };
  } catch {
    // Git not available or not a repo.
    return { count: 0, latest: null };
  }
}

/** Filesystem mtime fallback for untracked files. */
async function getFsMtime(filePath: string): Promise<string | null> {
  try {
    const stats = await stat(filePath);
    return stats.mtime.toISOString();
  } catch {
    return null;
  }
}

/**
 * Get the last modified date of a file from git history, falling back to fs mtime.
 * @returns ISO date string, or null if it can't be determined.
 */
export async function getLastModified(filePath: string): Promise<string | null> {
  const { latest } = getGitHistory(filePath);
  return latest ?? (await getFsMtime(filePath));
}

/** Format an ISO date string for display, respecting the current locale. */
export function formatDate(isoDate: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(isoDate));
}

/** Candidate content files for a route (non-versioned URL layout). */
function getCandidateFiles(pathname: string, contentRoot: string, locale: string): string[] {
  const parts = pathname.replace(/\/$/, '').split('/').filter(Boolean);
  const slugPath = parts.slice(1).join('/') || 'index';
  const contentRootAbs = path.resolve(process.cwd(), contentRoot);
  return [
    path.join(contentRootAbs, locale, `${slugPath}.astro`),
    path.join(contentRootAbs, locale, `${slugPath}.mdx`),
    path.join(contentRootAbs, locale, slugPath, 'index.astro'),
    path.join(contentRootAbs, locale, slugPath, 'index.mdx')
  ];
}

async function firstExistingFile(candidates: string[]): Promise<string | null> {
  for (const candidate of candidates) {
    try {
      await stat(candidate);
      return candidate;
    } catch {
      // try next
    }
  }
  return null;
}

interface DateModifiedOptions {
  /** Absolute path to the page's source file (Astro passes this to md/mdx layouts as Astro.props.file). */
  file?: string;
  /** Original pre-migration date; kept until the file is edited after migration. */
  ogDate?: string;
  contentRoot?: string;
  locale?: string;
}

/**
 * Resolve the "date modified" to display for a page.
 *
 * Migrated pages carry an `ogDate` (the pre-migration date, from frontmatter).
 * We keep showing that date until the file is actually edited after migration,
 * then auto-bump to the real edit date:
 *   - file has > 1 commit  -> edited since it was created/migrated -> latest git date
 *   - file has <= 1 commit -> only the creation/migration commit    -> ogDate
 * This assumes squash-merged PRs, so migration lands as a single commit on main.
 * Pages without an `ogDate` (native Astro pages) just use the git date / fs mtime.
 */
export async function resolveDateModified(
  pathname: string,
  options: DateModifiedOptions = {}
): Promise<string | undefined> {
  const parts = pathname.replace(/\/$/, '').split('/').filter(Boolean);
  const locale = options.locale ?? parts[0];

  // Prefer the exact source file Astro gives us; otherwise resolve from the URL.
  let file = options.file ?? null;
  if (!file && locale) {
    const contentRoot = options.contentRoot ?? 'src/content/pages';
    file = await firstExistingFile(getCandidateFiles(pathname, contentRoot, locale));
  }

  if (!file) {
    return options.ogDate;
  }

  const { count, latest } = getGitHistory(file);

  // Edited since it was created/migrated -> auto-bump to the real edit date.
  if (count > 1 && latest) {
    return latest;
  }

  // Only the creation/migration commit (or untracked) -> keep the original date.
  return options.ogDate ?? latest ?? (await getFsMtime(file)) ?? undefined;
}
