import { routes } from "../i18n/config";
import {
  type Locale,
  type VersionedRouteKey,
  type VersionedSectionKey,
  versionManifest,
} from "./version-manifest";

export type { Locale };

export type RouteKey = "home" | "about" | VersionedRouteKey;
export type DocsStaticPathProps = {
  routeKey: RouteKey;
  label: string;
  section?: string;
  componentPath: string;
  nav?: boolean;
  versioning?: {
    section: VersionedSectionKey;
    version: string;
    latest: string;
    pageKey: string;
    explicit: boolean;
  };
};

const locales: Locale[] = ["en", "fr"];

type LocalizedLabel = Record<Locale, string>;

type DocsStaticPath = {
  params: {
    locale: Locale;
    slug?: string;
  };
  props: DocsStaticPathProps;
};

type NavLink = {
  href: string;
  label: string;
  routeKey?: RouteKey;
  icon?: {
    src: string;
    alt: string;
  };
};

type NavSection = {
  label: string;
  links: NavLink[];
};

const routeLabels: Record<"home" | "about", LocalizedLabel> = {
  home: {
    en: "Home",
    fr: "Accueil",
  },
  about: {
    en: "About us",
    fr: "À propos",
  },
};

const externalLinks = {
  en: [
    {
      href: "https://github.com/cds-snc/gcds-components",
      label: "Github repo",
      icon: {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
        alt: "Github logo",
      },
    },
    {
      href: "https://www.figma.com/design/mh2maMG2NBtk41k1O1UGHV/GC-Design-System",
      label: "Figma library",
      icon: {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        alt: "Figma logo",
      },
    },
  ],
  fr: [
    {
      href: "https://github.com/cds-snc/gcds-components",
      label: "Répertoire Github",
      icon: {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
        alt: "Logo Github",
      },
    },
    {
      href: "https://www.figma.com/design/mh2maMG2NBtk41k1O1UGHV/GC-Design-System",
      label: "Bibliothèque Figma",
      icon: {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        alt: "Logo Figma",
      },
    },
  ],
} satisfies Record<Locale, NavLink[]>;

type PageDefinition = {
  routeKey: RouteKey;
  labels: LocalizedLabel;
  section?: LocalizedLabel;
  nav?: boolean;
  slugs: Record<Locale, string[] | undefined>;
  componentPaths: Record<Locale, string>;
  versioning?: DocsStaticPathProps["versioning"];
};

const unversionedPages: PageDefinition[] = [
  {
    routeKey: "home",
    labels: routeLabels.home,
    slugs: {
      en: [],
      fr: [],
    },
    componentPaths: {
      en: "../../content-pages/en/index.astro",
      fr: "../../content-pages/fr/index.astro",
    },
  },
  {
    routeKey: "about",
    labels: routeLabels.about,
    slugs: {
      en: [routes.about.en],
      fr: [routes.about.fr],
    },
    componentPaths: {
      en: "../../content-pages/en/about-us.astro",
      fr: "../../content-pages/fr/a-propos.astro",
    },
  },
];

const getVersionedPagesForLocale = (locale: Locale): PageDefinition[] => {
  const definitions: PageDefinition[] = [];

  for (const sectionKey of Object.keys(versionManifest) as VersionedSectionKey[]) {
    const section = versionManifest[sectionKey];

    for (const page of section.pages) {
      for (const version of section.versions) {
        const snapshot = page.snapshots[version]?.[locale];
        if (!snapshot) {
          continue;
        }

        const base = section.baseSlugs[locale];
        const latestSlugs = [base, ...page.slugs[locale]];
        const explicitSlugs = [base, version, ...page.slugs[locale]];

        if (version === section.latest) {
          const isSection = page.pageKey === "section";
          const isTopLevelPage = page.slugs[locale].length === 1;
          definitions.push({
            routeKey: page.routeKey,
            labels: page.labels,
            nav: isSection || isTopLevelPage,
            section: isTopLevelPage ? { en: section.navLabels.en, fr: section.navLabels.fr } : undefined,
            slugs: {
              en: locale === "en" ? latestSlugs : undefined,
              fr: locale === "fr" ? latestSlugs : undefined,
            },
            componentPaths: {
              en: locale === "en" ? snapshot : "",
              fr: locale === "fr" ? snapshot : "",
            },
            versioning: {
              section: sectionKey,
              version,
              latest: section.latest,
              pageKey: page.pageKey,
              explicit: false,
            },
          });
        }

        definitions.push({
          routeKey: page.routeKey,
          labels: page.labels,
          nav: false,
          slugs: {
            en: locale === "en" ? explicitSlugs : undefined,
            fr: locale === "fr" ? explicitSlugs : undefined,
          },
          componentPaths: {
            en: locale === "en" ? snapshot : "",
            fr: locale === "fr" ? snapshot : "",
          },
          versioning: {
            section: sectionKey,
            version,
            latest: section.latest,
            pageKey: page.pageKey,
            explicit: true,
          },
        });
      }
    }
  }

  return definitions;
};

const buildLocaleHref = (locale: Locale, slug?: string) => {
  const path = slug ?? "";
  return path ? `/${locale}/${path}` : `/${locale}`;
};

export const getDocsStaticPaths = (): DocsStaticPath[] => {
  return locales.flatMap(locale => {
    const versionedPages = getVersionedPagesForLocale(locale);
    const pageDefinitions = [...unversionedPages, ...versionedPages].filter(
      definition => definition.slugs[locale] !== undefined,
    );

    return pageDefinitions.map(definition => {
      const slugParts = definition.slugs[locale];
      const slug = slugParts && slugParts.length > 0 ? slugParts.join("/") : undefined;
      return {
      params: {
        locale,
        slug,
      },
      props: {
        routeKey: definition.routeKey,
        label: definition.labels[locale],
        section: definition.section?.[locale],
        componentPath: definition.componentPaths[locale],
        nav: definition.nav,
        versioning: definition.versioning,
      },
    };
    });
  });
};

export const getNavData = (locale: Locale) => {
  const staticPaths = getDocsStaticPaths().filter(
    path => path.params.locale === locale && path.props.nav !== false,
  );

  const primaryLinks: NavLink[] = staticPaths
    .filter(path => !path.props.section)
    .map(path => ({
      href: buildLocaleHref(locale, path.params.slug),
      label: path.props.label,
      routeKey: path.props.routeKey,
    }));

  const sectionsMap = new Map<string, NavSection>();

  for (const path of staticPaths.filter(path => path.props.section)) {
    const label = path.props.section!;
    const section = sectionsMap.get(label) ?? { label, links: [] };

    section.links.push({
      href: buildLocaleHref(locale, path.params.slug),
      label: path.props.label,
      routeKey: path.props.routeKey,
    });

    sectionsMap.set(label, section);
  }

  return {
    primaryLinks,
    externalLinks: externalLinks[locale],
    sections: [...sectionsMap.values()],
  };
};
