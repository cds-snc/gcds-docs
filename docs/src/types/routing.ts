export type Locale = 'en' | 'fr';

export type LocalizedValue = {
  en?: string;
  fr?: string;
};

export type NavLink = {
  href: string;
  text: string;
};

export type NavGroup = {
  trigger: string;
  menuLabel: string;
  links: NavLink[];
};

export type SideNavConfig = {
  sideNavLabel: string;
  homeSlot?: NavLink;
  links: NavLink[];
  groups: NavGroup[];
};

export type ManifestItem = {
  label?: LocalizedValue;
  slug?: LocalizedValue;
  pageType?: string;
};

export type ManifestKey = 'components' | 'cssShortcuts' | 'tokens';

export type GroupRoute = {
  type: 'group';
  routeKey?: string;
  label?: LocalizedValue;
  manifestKey?: ManifestKey;
  items?: ManifestItem[];
  sortItems?: 'none' | 'a-z';
  pinOverviewItem?: boolean;
};

export type GroupLinkOptions = Pick<GroupRoute, 'sortItems' | 'pinOverviewItem'>;

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
