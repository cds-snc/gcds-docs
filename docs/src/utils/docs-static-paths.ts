import { routes } from "../i18n/config";

export type Locale = "en" | "fr";
export type RouteKey = "home" | "about" | "button";
export type DocsStaticPathProps = {
  routeKey: RouteKey;
  label: string;
  section?: string;
  componentPath: string;
  nav?: boolean;
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

const routeLabels: Record<RouteKey, LocalizedLabel> = {
  home: {
    en: "Home",
    fr: "Accueil",
  },
  about: {
    en: "About us",
    fr: "À propos",
  },
  button: {
    en: "Button",
    fr: "Bouton",
  },
};

const sectionLabels = {
  components: {
    en: "Components",
    fr: "Composants",
  },
} satisfies Record<string, LocalizedLabel>;

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
};

const pageDefinitions: PageDefinition[] = [
  {
    routeKey: "home",
    labels: routeLabels.home,
    slugs: {
      en: undefined,
      fr: undefined,
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
  {
    routeKey: "button",
    labels: routeLabels.button,
    section: sectionLabels.components,
    slugs: {
      en: [routes.components.en, routes.components.children.button.en],
      fr: [routes.components.fr, routes.components.children.button.fr],
    },
    componentPaths: {
      en: "../../content-pages/en/components/button/page.astro",
      fr: "../../content-pages/fr/composants/bouton/page.astro",
    },
  },
  {
    routeKey: "button",
    labels: {
      en: "Button overview",
      fr: "Aperçu du bouton",
    },
    nav: false,
    slugs: {
      en: [routes.components.en, routes.components.children.button.en, "overview"],
      fr: [routes.components.fr, routes.components.children.button.fr, "overview"],
    },
    componentPaths: {
      en: "../../content-pages/en/components/button/overview-page.astro",
      fr: "../../content-pages/fr/composants/bouton/overview-page.astro",
    },
  },
  {
    routeKey: "button",
    labels: {
      en: "Button examples",
      fr: "Exemples de bouton",
    },
    nav: false,
    slugs: {
      en: [routes.components.en, routes.components.children.button.en, "examples"],
      fr: [routes.components.fr, routes.components.children.button.fr, "examples"],
    },
    componentPaths: {
      en: "../../content-pages/en/components/button/examples-page.astro",
      fr: "../../content-pages/fr/composants/bouton/examples-page.astro",
    },
  },
];

const buildLocaleHref = (locale: Locale, slug?: string) => {
  const path = slug ?? "";
  return path ? `/${locale}/${path}` : `/${locale}`;
};

export const getDocsStaticPaths = (): DocsStaticPath[] => {
  return locales.flatMap(locale =>
    pageDefinitions.map(definition => ({
      params: {
        locale,
        slug: definition.slugs[locale]?.join("/"),
      },
      props: {
        routeKey: definition.routeKey,
        label: definition.labels[locale],
        section: definition.section?.[locale],
        componentPath: definition.componentPaths[locale],
        nav: definition.nav,
      },
    })),
  );
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
