import { defaultLocale, supportedLocales, type Locale } from '../i18n/config';

/**
 * Split a pathname into URL segments, ignoring trailing slash and empty parts.
 * Example: "/en/components/button/" -> ["en", "components", "button"]
 */
export function getPathParts(pathname: string): string[] {
  return pathname.replace(/\/$/, '').split('/').filter(Boolean);
}

/**
 * Resolve a locale from the pathname with fallback to the configured default.
 */
export function resolveLocaleFromPathname(pathname: string): Locale {
  const requested = getPathParts(pathname)[0];

  return supportedLocales.includes(requested as Locale)
    ? (requested as Locale)
    : defaultLocale;
}

/**
 * Backwards-compatible locale resolver with customizable locale set and fallback.
 */
export function getLocaleFromPathname<T extends string>(
  pathname: string,
  locales: readonly T[] = supportedLocales as unknown as readonly T[],
  fallbackLocale: T = defaultLocale as unknown as T,
): T {
  const requested = getPathParts(pathname)[0] as T | undefined;

  return requested && locales.includes(requested) ? requested : fallbackLocale;
}

/**
 * Safely retrieve a localized entry by locale, with guaranteed fallback.
 */
export function getLocalizedRecord<T, L extends string>(
  record: Record<L, T>,
  locale: string,
  fallbackLocale: L,
): T {
  return locale in record ? record[locale as L] : record[fallbackLocale];
}

/**
 * Detect whether a URL path references versioned content by checking for a
 * semver-like segment (e.g. "1.0.0") anywhere in the path parts.
 */
export function isVersionedPath(pathname: string): boolean {
  return getPathParts(pathname).some(part => /^\d+\.\d+\.\d+$/.test(part));
}

/**
 * Resolve the correct content root directory based on whether the path is
 * versioned or not.
 */
export function getContentRoot(pathname: string): string {
  return isVersionedPath(pathname)
    ? 'src/content/versioned'
    : 'src/content/pages';
}

/**
 * Translate a path to the other locale, one segment at a time via the `routes`
 * tree (any depth). Versions and unknown segments (e.g. design/code) pass
 * through unchanged (same slug in both locales).
 */
export function buildLocalizedPath(
  pathname: string,
  currentLocale: string,
  otherLocale: string,
  routes: any,
): string {
  const segments = getPathParts(pathname).slice(1);
  const out: string[] = [];
  let pool: any = routes;

  for (const segment of segments) {
    if (/^\d+\.\d+\.\d+$/.test(segment)) {
      out.push(segment);
      continue;
    }

    let matched: any;
    for (const key in pool ?? {}) {
      if (pool[key]?.[currentLocale] === segment) {
        matched = pool[key];
        break;
      }
    }

    if (matched) {
      out.push(matched[otherLocale]);
      pool = matched.children;
    } else {
      out.push(segment);
      pool = undefined;
    }
  }

  return `/${otherLocale}${out.length ? `/${out.join('/')}` : ''}`;
}

/**
 * Look up the route key for a path (e.g. ['en','components','button'] -> button).
 * Used by BaseLayout for the side nav's current section.
 */
export function findRouteKeyFromPath(
  locale: string,
  parts: string[],
  routes: any,
) {
  const firstSlug = parts[1] || '';
  const secondSlug = parts[2] || '';

  for (const key in routes) {
    if (routes[key][locale] === firstSlug) {
      if (routes[key].children && secondSlug) {
        for (const childKey in routes[key].children) {
          if (routes[key].children[childKey][locale] === secondSlug) {
            // Return nested key if found
            return childKey;
          }
        }
      }

      // If no children match, return the top-level key
      return key;
    }
  }

  // Fallback to home if no match found
  return 'home';
}
