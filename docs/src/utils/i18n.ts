/**
 * Split a pathname into URL segments, ignoring trailing slash and empty parts.
 * Example: "/en/components/button/" -> ["en", "components", "button"]
 */
export function getPathParts(pathname: string): string[] {
  return pathname.replace(/\/$/, '').split('/').filter(Boolean);
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
 * Resolve a locale from pathname based on a supported locale list.
 */
export function getLocaleFromPathname<T extends string>(
  pathname: string,
  supportedLocales: readonly T[],
  fallbackLocale: T,
): T {
  const requestedLocale = getPathParts(pathname)[0];
  if (requestedLocale && supportedLocales.includes(requestedLocale as T)) {
    return requestedLocale as T;
  }
  return fallbackLocale;
}

/**
 * Given a locale and URL parts (e.g., ['_en', 'components', 'button']),
 * this function looks up the corresponding route key from the i18n routes config.
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
