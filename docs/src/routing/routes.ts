import routeManifest from './route-manifest.json';
import componentManifest from './versioned/component-manifest.json';
import cssShortcutManifest from './css-shortcut-manifest.json';
import tokensManifest from './tokens-manifest.json';

import type {
  GroupLinkOptions,
  GroupRoute,
  HomeRoute,
  LinkRoute,
  Locale,
  LocalizedValue,
  ManifestItem,
  ManifestKey,
  NavGroup,
  NavLink,
  PopulatedManifest,
  ShortcutsBrowseGroup,
  SideNavConfig,
  SideNavRoute,
  SlotRoute,
} from '../types/routing';

const populatedManifests: Record<ManifestKey, PopulatedManifest> = {
  components: componentManifest,
  cssShortcuts: cssShortcutManifest,
  tokens: tokensManifest,
};

const sideNavRoutes = (routeManifest.sideNavRoutes ?? []) as SideNavRoute[];
const cache = new Map<Locale, SideNavConfig>();

/** Resolve the locale from the first URL segment, defaulting to English. */
const getLocaleFromPathname = (pathname: string): Locale => {
  const locale = pathname.split('/').filter(Boolean)[0];
  return locale === 'fr' ? 'fr' : 'en';
};

/**
 * Helper to retrieve populated manifest data for a given key, if available.
 * This allows group routes to reference external manifests for their links.
 */
const getPopulatedManifest = (
  manifestKey?: ManifestKey,
): PopulatedManifest | undefined => {
  return manifestKey ? populatedManifests[manifestKey] : undefined;
};

/** Build the final side-nav config for a single locale. */
class SideNavBuilder {
  constructor(private readonly locale: Locale) {}

  /** Build a complete side-nav config from route-manifest data. */
  build(): SideNavConfig {
    const homeRoute = sideNavRoutes.find(
      (route): route is HomeRoute => route.type === 'home',
    );

    const homeSlot = sideNavRoutes.find(
      (route): route is SlotRoute =>
        route.type === 'slot' &&
        'slotName' in route &&
        route.slotName === 'home',
    );

    const links = sideNavRoutes
      .filter((route): route is LinkRoute => route.type === 'link')
      .map(route => ({
        href: this.buildHref(this.localizedValue(route.slug)),
        text: this.localizedValue(route.label),
      }));

    const groups = sideNavRoutes
      .filter((route): route is GroupRoute => route.type === 'group')
      .map(groupRoute => {
        const { links, subGroups } = this.getGroupContent(groupRoute, {
          sortItems: groupRoute.sortItems,
          pinOverviewItem: groupRoute.pinOverviewItem,
        });
        return {
          key: groupRoute.routeKey,
          trigger: this.localizedValue(groupRoute.label),
          menuLabel: this.localizedValue(groupRoute.label),
          links,
          subGroups,
        };
      })
      .filter(group => group.links.length > 0 || group.subGroups.length > 0);

    return {
      sideNavLabel: this.localizedValue(homeRoute?.label) || 'GC Design System',
      homeSlot: homeSlot
        ? {
            href: this.buildHref(this.localizedValue(homeSlot.slug)),
            text: this.localizedValue(homeSlot.label),
          }
        : undefined,
      links,
      groups,
    };
  }

  /** Pick the current locale value with English fallback. */
  private localizedValue(value: LocalizedValue | undefined): string {
    return value?.[this.locale] ?? value?.en ?? '';
  }

  /** Create a locale-prefixed href from route segments. */
  private buildHref(...segments: Array<string | undefined>): string {
    const cleanSegments = segments.filter(Boolean);
    return cleanSegments.length > 0
      ? `/${this.locale}/${cleanSegments.join('/')}`
      : `/${this.locale}`;
  }

  /** Turn a manifest item into a nav link. */
  private toLink(routeKey: string | undefined, item: ManifestItem): NavLink {
    return {
      href: item.absoluteSlug
          ? this.buildHref(this.localizedValue(item.slug)) // allow absolute paths
          : this.buildHref(routeKey, this.localizedValue(item.slug)),
      text: this.localizedValue(item.label),
      pageType: item.pageType,
    };
  }

  /**
   * Split manifest items into top-level links and nested sub-groups.
   * An item with `type: "group"` becomes a sub-group whose own `items` are its links.
   */
  private mapItems(
    routeKey: string | undefined,
    items: ManifestItem[],
  ): { links: NavLink[]; subGroups: NavGroup[] } {
    const links: NavLink[] = [];
    const subGroups: NavGroup[] = [];

    for (const item of items) {
      if (item.type === 'group' && Array.isArray(item.items)) {
        subGroups.push({
          trigger: this.localizedValue(item.label),
          menuLabel: this.localizedValue(item.label),
          links: item.items.map(child => this.toLink(routeKey, child)),
        });
      } else {
        links.push(this.toLink(routeKey, item));
      }
    }

    return { links, subGroups };
  }

  /** Order a group's links, pinning the overview item when sorting a-z. */
  private sortLinks(links: NavLink[], options: GroupLinkOptions): NavLink[] {
    const { sortItems = 'none', pinOverviewItem = true } = options;
    if (sortItems === 'none') {
      return links;
    }

    const collator = new Intl.Collator(this.locale, { sensitivity: 'base' });
    const sortableLinks = links.filter(link => link.pageType !== 'overview');
    const sortedLinks = [...sortableLinks].sort((a, b) =>
      collator.compare(a.text, b.text),
    );

    if (!pinOverviewItem) {
      return sortedLinks;
    }

    const overviewLinks = links.filter(link => link.pageType === 'overview');
    return [...overviewLinks, ...sortedLinks];
  }

  /** Resolve links + nested sub-groups for a group from inline items or an external manifest. */
  private getGroupContent(
    groupRoute: GroupRoute,
    options: GroupLinkOptions = {},
  ): { links: NavLink[]; subGroups: NavGroup[] } {
    const items = Array.isArray(groupRoute.items)
      ? groupRoute.items
      : getPopulatedManifest(groupRoute.manifestKey)?.items;

    // Localized URL prefix (e.g. css-shortcuts → raccourcis-css in FR),
    // falling back to the raw routeKey when no localized slug is provided.
    const routePrefix =
      this.localizedValue(groupRoute.slug) || groupRoute.routeKey;

    const { links, subGroups } = this.mapItems(
      routePrefix,
      Array.isArray(items) ? items : [],
    );

    return { links: this.sortLinks(links, options), subGroups };
  }
}

/** Public API: build and cache side-nav config for the current pathname. */
export function buildSideNavConfig(pathname: string): SideNavConfig {
  const locale = getLocaleFromPathname(pathname);
  const cachedConfig = cache.get(locale);
  if (cachedConfig) {
    return cachedConfig;
  }

  const navConfig = new SideNavBuilder(locale).build();
  cache.set(locale, navConfig);
  return navConfig;
}

/** Slugify a category heading into an anchor id (accent-folded). */
const slugifyId = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/**
 * The CSS Shortcuts "Browse" overview uses the same side-nav manifest so it stays
 * in sync with the nav. Categories are the CSS Shortcuts group's subGroups.
 */
export function buildShortcutsBrowseGroups(
  pathname: string,
): ShortcutsBrowseGroup[] {
  const shortcuts = buildSideNavConfig(pathname).groups.find(
    group => group.key === 'css-shortcuts',
  );
  return (shortcuts?.subGroups ?? []).map(category => ({
    heading: category.trigger,
    id: slugifyId(category.trigger),
    items: category.links.map(link => ({ title: link.text, href: link.href })),
  }));
}
