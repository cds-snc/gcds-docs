import routeManifest from './route-manifest.json';
import componentManifest from './versioned/component-manifest.json';
import cssShortcutManifest from './versioned/css-shortcut-manifest.json';
import tokensManifest from './versioned/tokens-manifest.json';

import type {
  GroupLinkOptions,
  GroupRoute,
  HomeRoute,
  LinkRoute,
  Locale,
  LocalizedValue,
  ManifestItem,
  ManifestKey,
  PopulatedManifest,
  SideNavConfig,
  SideNavRoute,
  SlotRoute
} from '../types/routing';

const populatedManifests: Record<ManifestKey, PopulatedManifest> = {
  components: componentManifest,
  cssShortcuts: cssShortcutManifest,
  tokens: tokensManifest
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
const getPopulatedManifest = (manifestKey?: ManifestKey): PopulatedManifest | undefined => {
  return manifestKey ? populatedManifests[manifestKey] : undefined;
};

/** Build the final side-nav config for a single locale. */
class SideNavBuilder {
  constructor(private readonly locale: Locale) {}

  /** Build a complete side-nav config from route-manifest data. */
  build(): SideNavConfig {
    const homeRoute = sideNavRoutes.find((route): route is HomeRoute => route.type === 'home');

    const homeSlot = sideNavRoutes.find(
      (route): route is SlotRoute => route.type === 'slot' && 'slotName' in route && route.slotName === 'home'
    );

    const links = sideNavRoutes
      .filter((route): route is LinkRoute => route.type === 'link')
      .map((route) => ({
        href: this.buildHref(this.localizedValue(route.slug)),
        text: this.localizedValue(route.label)
      }));

    const groups = sideNavRoutes
      .filter((route): route is GroupRoute => route.type === 'group')
      .map((groupRoute) => ({
        trigger: this.localizedValue(groupRoute.label),
        menuLabel: this.localizedValue(groupRoute.label),
        links: this.getGroupLinks(groupRoute, {
          sortItems: groupRoute.sortItems,
          pinOverviewItem: groupRoute.pinOverviewItem
        })
      }))
      .filter((group) => group.links.length > 0);

    return {
      sideNavLabel: this.localizedValue(homeRoute?.label) || 'GC Design System',
      homeSlot: homeSlot
        ? { href: this.buildHref(this.localizedValue(homeSlot.slug)), text: this.localizedValue(homeSlot.label) }
        : undefined,
      links,
      groups
    };
  }

  /** Pick the current locale value with English fallback. */
  private localizedValue(value: LocalizedValue | undefined): string {
    return value?.[this.locale] ?? value?.en ?? '';
  }

  /** Create a locale-prefixed href from route segments. */
  private buildHref(...segments: Array<string | undefined>): string {
    const cleanSegments = segments.filter(Boolean);
    return cleanSegments.length > 0 ? `/${this.locale}/${cleanSegments.join('/')}` : `/${this.locale}`;
  }

  /** Convert manifest items into nav links for a route group. */
  private mapItemsToLinks(routeKey: string | undefined, items: ManifestItem[]) {
    return items.map((item) => ({
      href: this.buildHref(routeKey, this.localizedValue(item.slug)),
      text: this.localizedValue(item.label),
      pageType: item.pageType
    }));
  }

  /** Resolve links for a group from inline items or an external manifest. */
  private getGroupLinks(groupRoute: GroupRoute, options: GroupLinkOptions = {}) {
    let links: Array<{ href: string; text: string; pageType?: string }> = [];

    if (Array.isArray(groupRoute.items)) {
      links = this.mapItemsToLinks(groupRoute.routeKey, groupRoute.items);
    } else {
      const populatedManifest = getPopulatedManifest(groupRoute.manifestKey);
      if (Array.isArray(populatedManifest?.items)) {
        links = this.mapItemsToLinks(groupRoute.routeKey, populatedManifest.items);
      }
    }

    const { sortItems = 'none', pinOverviewItem = true } = options;
    if (sortItems === 'none') {
      return links;
    }

    const collator = new Intl.Collator(this.locale, { sensitivity: 'base' });
    const sortableLinks = links.filter((link) => link.pageType !== 'overview');
    const sortedLinks = [...sortableLinks].sort((a, b) => collator.compare(a.text, b.text));

    if (!pinOverviewItem) {
      return sortedLinks;
    }

    const overviewLinks = links.filter((link) => link.pageType === 'overview');
    return [...overviewLinks, ...sortedLinks];
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
