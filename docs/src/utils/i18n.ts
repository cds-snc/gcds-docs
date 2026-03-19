/**
 * Given a locale and URL parts (e.g., ['en', 'components', 'button']),
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
