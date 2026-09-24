import { buildSideNavConfig } from '../routing/routes';
import { resolveLocaleFromPathname } from './i18n';
import type { SideNavConfig } from '../types/routing';

export type Breadcrumb = { text: string; href: string };

// Content-page titles by URL
const pageSources = import.meta.glob('../content/pages/**/*.{mdx,astro}', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const frontmatterTitle = (source: string): string | undefined => {
  const block = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];

  if (!block) return undefined;

  const match =
    block.match(/^pageTitle:\s*(.+?)\s*$/m) ??
    block.match(/^title:\s*(.+?)\s*$/m);

  return match?.[1].replace(/^['"]|['"]$/g, '').trim();
};

const pageTitleByUrl = new Map<string, string>();

for (const [file, source] of Object.entries(pageSources)) {
  const title = frontmatterTitle(source);

  if (!title) continue;

  const parts = file
    .replace(/^.*\/content\/pages\//, '')
    .replace(/\.(mdx|astro)$/, '')
    .split('/');

  if (parts[parts.length - 1] === 'index') parts.pop();
  pageTitleByUrl.set(`/${parts.join('/')}`, title);
}

const isVersion = (segment: string): boolean => /^\d+\.\d+\.\d+$/.test(segment);

/** Map each top-level group's overview URL to its label. */
function groupBaseUrls(
  config: SideNavConfig,
  locale: string,
): Map<string, string> {
  const bases = new Map<string, string>();

  for (const group of config.groups) {
    const firstLink = [
      ...group.links,
      ...(group.subGroups ?? []).flatMap(sub => sub.links),
    ][0];
    const section = firstLink?.href.split('/')[2];

    if (section) bases.set(`/${locale}/${section}`, group.menuLabel);
  }

  return bases;
}

/** The side-nav label for a URL, searching top-level links and group/sub-group items. */
function navLinkText(config: SideNavConfig, url: string): string | undefined {
  const links = [
    ...config.links,
    ...config.groups.flatMap(group => [
      ...group.links,
      ...(group.subGroups ?? []).flatMap(sub => sub.links),
    ]),
  ];

  return links.find(link => link.href === url)?.text;
}

/**
 * Breadcrumb trail after the "Canada.ca" link.
 */
export function getBreadcrumbs(pathname: string): Breadcrumb[] {
  const locale = resolveLocaleFromPathname(pathname);
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .slice(1)
    .filter(segment => !isVersion(segment));

  if (segments.length === 0) return [];

  const config = buildSideNavConfig(pathname);
  const root: Breadcrumb = { text: config.sideNavLabel, href: `/${locale}` };

  const componentsGroup = config.groups.find(
    group => group.key === 'components',
  );
  const componentsSection = componentsGroup?.links[0]?.href.split('/')[2];

  if (componentsSection && segments[0] === componentsSection) {
    return segments.length === 1
      ? [root]
      : [
          root,
          {
            text: componentsGroup!.menuLabel,
            href: `/${locale}/${componentsSection}/`,
          },
        ];
  }

  // Top-level pages have no ancestors, so stop at the root.
  if (segments.length === 1) return [root];

  const groupBases = groupBaseUrls(config, locale);
  const trail: Breadcrumb[] = [root];
  let ancestorUrl = `/${locale}`;

  for (const segment of segments.slice(0, -1)) {
    ancestorUrl += `/${segment}`;
    const label =
      groupBases.get(ancestorUrl) ??
      navLinkText(config, ancestorUrl) ??
      pageTitleByUrl.get(ancestorUrl);

    if (label) trail.push({ text: label, href: `${ancestorUrl}/` });
  }

  return trail;
}
