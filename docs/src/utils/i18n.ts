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
  return supportedLocales.includes(requested as Locale) ? (requested as Locale) : defaultLocale;
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
  return (locale in record ? record[locale as L] : record[fallbackLocale]);
}

/**
 * Detect whether a URL path references versioned content by checking for a
 * semver-like segment (e.g. "1.0.0") anywhere in the path parts.
 */
export function isVersionedPath(pathname: string): boolean {
  return getPathParts(pathname).some((part) => /^\d+\.\d+\.\d+$/.test(part));
}

/**
 * Resolve the correct content root directory based on whether the path is
 * versioned or not.
 */
export function getContentRoot(pathname: string): string {
  return isVersionedPath(pathname) ? 'src/content/versioned' : 'src/content/pages';
}

/**
 * Build a locale-prefixed route path for a given route key.
 *
 * NOTE: only handles the localized non-versioned URL shape and doesn't know
 * about versioned routes. See the TODO on findRouteKeyFromPath — the header
 * language toggle is a known-incomplete implementation.
 */
export function buildLocalizedRoutePath(
  routeKey: string,
  locale: string,
  routes: any,
): string {
  for (const parentKey in routes) {
    if (parentKey === routeKey) {
      return `/${locale}/${routes[parentKey][locale]}`;
    }

    if (routes[parentKey].children && routes[parentKey].children[routeKey]) {
      return `/${locale}/${routes[parentKey][locale]}/${routes[parentKey].children[routeKey][locale]}`;
    }
  }

  return `/${locale}/`;
}

/**
 * Given a locale and URL parts (e.g., ['en', 'components', 'button']), look up
 * the corresponding route key from the i18n routes config.
 *
 * TODO(i18n language toggle): this and buildLocalizedRoutePath are an
 * incomplete early implementation. The header language switcher renders wrong
 * URLs on several pages because of three separate gaps:
 *   1. The `routes` config (i18n/config.ts) only covers home/about/components/
 *      button, so pages like start-to-use / demarrer fall through to "home"
 *      (e.g. /en/start-to-use toggles to /fr/ instead of /fr/demarrer).
 *   2. Versioned paths break child matching: for /en/components/1.1.0/button,
 *      parts[2] is the version "1.1.0" (not the child slug), so this returns
 *      the parent key "components" instead of "button".
 *   3. Even when the child resolves, buildLocalizedRoutePath emits the
 *      localized non-versioned shape (/fr/composants/bouton), which is not the
 *      versioned route shape (/fr/components/bouton — routeKey is not localized).
 * A correct fix derives the other-locale URL from the actual route data
 * (manifests + content) for both versioned and non-versioned pages. Deferred
 * until the routing model settles and FR content is migrated (targets 404 until
 * then).
 */
export function findRouteKeyFromPath(
  locale: string,
  parts: string[],
  routes: any
) {
  const firstSlug = parts[1] || "";
  const secondSlug = parts[2] || "";

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
  return "home";
}
