export type Locale = 'en' | 'fr';

export type LocalizedValue = {
  en?: string;
  fr?: string;
};

export type NavLink = {
  href: string;
  text: string;
  pageType?: string;
};

export type NavGroup = {
  key?: string;
  trigger: string;
  menuLabel: string;
  links: NavLink[];
  /** Nested nav groups rendered after this group's links (e.g. CSS Shortcuts). */
  subGroups?: NavGroup[];
};

/** CSS Shortcuts overview "Browse": heading + its page links. */
export type ShortcutsBrowseGroup = {
  heading: string;
  id: string;
  items: { title: string; href: string }[];
};

export type SideNavConfig = {
  sideNavLabel: string;
  homeSlot?: NavLink;
  links: NavLink[];
  groups: NavGroup[];
};

export type ManifestItem = {
  /** "group" makes this a nested nav group whose own `items` are its links. */
  type?: string;
  label?: LocalizedValue;
  slug?: LocalizedValue;
  pageType?: string;
  items?: ManifestItem[];
};

export type ManifestKey = 'components' | 'cssShortcuts' | 'tokens';

export type GroupRoute = {
  type: 'group';
  routeKey?: string;
  /** Localized URL segment for the group prefix. Falls back to `routeKey`. */
  slug?: LocalizedValue;
  label?: LocalizedValue;
  manifestKey?: ManifestKey;
  items?: ManifestItem[];
  sortItems?: 'none' | 'a-z';
  pinOverviewItem?: boolean;
};

export type GroupLinkOptions = Pick<
  GroupRoute,
  'sortItems' | 'pinOverviewItem'
>;

export type LinkRoute = {
  type: 'link';
  label?: LocalizedValue;
  slug?: LocalizedValue;
};

export type HomeRoute = {
  type: 'home';
  label?: LocalizedValue;
};

export type SlotRoute = {
  type: 'slot';
  slotName?: string;
  label?: LocalizedValue;
  slug?: LocalizedValue;
};

export type SideNavRoute = GroupRoute | LinkRoute | HomeRoute | SlotRoute;

export type PopulatedManifest = {
  items?: ManifestItem[];
};
