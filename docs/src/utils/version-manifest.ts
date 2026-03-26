export type Locale = "en" | "fr";
export type VersionedSectionKey = "components" | "cssShortcuts" | "tokens";
export type VersionedRouteKey =
  | "components"
  | "button"
  | "card"
  | "breadcrumbs"
  | "checkboxes"
  | "container"
  | "dateInput"
  | "dateModified"
  | "details"
  | "errorMessage"
  | "errorSummary"
  | "fieldset"
  | "fileUploader"
  | "footer"
  | "grid"
  | "header"
  | "heading"
  | "icon"
  | "input"
  | "languageToggle"
  | "link"
  | "notice"
  | "pagination"
  | "radios"
  | "screenreaderOnly"
  | "search"
  | "select"
  | "sideNavigation"
  | "signature"
  | "stepper"
  | "text"
  | "textarea"
  | "themeAndTopicMenu"
  | "topNavigation"
  | "cssShortcuts"
  | "tokens";

type LocalizedLabel = Record<Locale, string>;
type LocalizedSlugs = Record<Locale, string[]>;
type SnapshotPaths = Record<string, Record<Locale, string>>;

type VersionedPageDefinition = {
  pageKey: string;
  routeKey: VersionedRouteKey;
  labels: LocalizedLabel;
  slugs: LocalizedSlugs;
  snapshots: SnapshotPaths;
};

type SectionDefinition = {
  packageName: string;
  latest: string;
  versions: string[];
  baseSlugs: Record<Locale, string>;
  navLabels: LocalizedLabel;
  pages: VersionedPageDefinition[];
};

export const versionManifest: Record<VersionedSectionKey, SectionDefinition> = {
  components: {
    packageName: "@gcds-core/components",
    latest: "1.1.0",
    versions: ["1.0.0", "1.1.0"],
    baseSlugs: { en: "components", fr: "composants" },
    navLabels: { en: "Components", fr: "Composants" },
    pages: [
      {
        pageKey: "section",
        routeKey: "components",
        labels: { en: "Components", fr: "Composants" },
        slugs: { en: [], fr: [] },
        snapshots: {
          "1.0.0": {
            en: "../../content-versioned/components/1.0.0/en/index.astro",
            fr: "../../content-versioned/components/1.0.0/fr/index.astro",
          },
          "1.1.0": {
            en: "../../content-versioned/components/1.1.0/en/index.astro",
            fr: "../../content-versioned/components/1.1.0/fr/index.astro",
          },
        },
      },
      {
        pageKey: "button",
        routeKey: "button",
        labels: { en: "Button", fr: "Bouton" },
        slugs: { en: ["button"], fr: ["bouton"] },
        snapshots: {
          "1.0.0": {
            en: "../../content-versioned/components/1.0.0/en/button.astro",
            fr: "../../content-versioned/components/1.0.0/fr/button.astro",
          },
          "1.1.0": {
            en: "../../content-versioned/components/1.1.0/en/button.astro",
            fr: "../../content-versioned/components/1.1.0/fr/button.astro",
          },
        },
      },
      {
        pageKey: "breadcrumbs",
        routeKey: "breadcrumbs",
        labels: { en: "Breadcrumbs", fr: "Fils d'Ariane" },
        slugs: { en: ["breadcrumbs"], fr: ["breadcrumbs"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/breadcrumbs.astro", fr: "../../content-versioned/components/1.1.0/fr/breadcrumbs.astro" } },
      },
      {
        pageKey: "card",
        routeKey: "card",
        labels: { en: "Card", fr: "Carte" },
        slugs: { en: ["card"], fr: ["card"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/card.astro", fr: "../../content-versioned/components/1.1.0/fr/card.astro" } },
      },
      {
        pageKey: "checkboxes",
        routeKey: "checkboxes",
        labels: { en: "Checkboxes", fr: "Cases à cocher" },
        slugs: { en: ["checkboxes"], fr: ["checkboxes"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/checkboxes.astro", fr: "../../content-versioned/components/1.1.0/fr/checkboxes.astro" } },
      },
      {
        pageKey: "container",
        routeKey: "container",
        labels: { en: "Container", fr: "Conteneur" },
        slugs: { en: ["container"], fr: ["container"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/container.astro", fr: "../../content-versioned/components/1.1.0/fr/container.astro" } },
      },
      {
        pageKey: "dateInput",
        routeKey: "dateInput",
        labels: { en: "Date input", fr: "Champ de date" },
        slugs: { en: ["date-input"], fr: ["date-input"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/date-input.astro", fr: "../../content-versioned/components/1.1.0/fr/date-input.astro" } },
      },
      {
        pageKey: "dateModified",
        routeKey: "dateModified",
        labels: { en: "Date modified", fr: "Date de modification" },
        slugs: { en: ["date-modified"], fr: ["date-modified"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/date-modified.astro", fr: "../../content-versioned/components/1.1.0/fr/date-modified.astro" } },
      },
      {
        pageKey: "details",
        routeKey: "details",
        labels: { en: "Details", fr: "Détails" },
        slugs: { en: ["details"], fr: ["details"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/details.astro", fr: "../../content-versioned/components/1.1.0/fr/details.astro" } },
      },
      {
        pageKey: "errorMessage",
        routeKey: "errorMessage",
        labels: { en: "Error message", fr: "Message d'erreur" },
        slugs: { en: ["error-message"], fr: ["error-message"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/error-message.astro", fr: "../../content-versioned/components/1.1.0/fr/error-message.astro" } },
      },
      {
        pageKey: "errorSummary",
        routeKey: "errorSummary",
        labels: { en: "Error summary", fr: "Résumé des erreurs" },
        slugs: { en: ["error-summary"], fr: ["error-summary"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/error-summary.astro", fr: "../../content-versioned/components/1.1.0/fr/error-summary.astro" } },
      },
      {
        pageKey: "fieldset",
        routeKey: "fieldset",
        labels: { en: "Fieldset", fr: "Groupe de champs" },
        slugs: { en: ["fieldset"], fr: ["fieldset"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/fieldset.astro", fr: "../../content-versioned/components/1.1.0/fr/fieldset.astro" } },
      },
      {
        pageKey: "fileUploader",
        routeKey: "fileUploader",
        labels: { en: "File uploader", fr: "Téléversement de fichier" },
        slugs: { en: ["file-uploader"], fr: ["file-uploader"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/file-uploader.astro", fr: "../../content-versioned/components/1.1.0/fr/file-uploader.astro" } },
      },
      {
        pageKey: "footer",
        routeKey: "footer",
        labels: { en: "Footer", fr: "Pied de page" },
        slugs: { en: ["footer"], fr: ["footer"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/footer.astro", fr: "../../content-versioned/components/1.1.0/fr/footer.astro" } },
      },
      {
        pageKey: "grid",
        routeKey: "grid",
        labels: { en: "Grid", fr: "Grille" },
        slugs: { en: ["grid"], fr: ["grid"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/grid.astro", fr: "../../content-versioned/components/1.1.0/fr/grid.astro" } },
      },
      {
        pageKey: "header",
        routeKey: "header",
        labels: { en: "Header", fr: "En-tête" },
        slugs: { en: ["header"], fr: ["header"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/header.astro", fr: "../../content-versioned/components/1.1.0/fr/header.astro" } },
      },
      {
        pageKey: "heading",
        routeKey: "heading",
        labels: { en: "Heading", fr: "Titre" },
        slugs: { en: ["heading"], fr: ["heading"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/heading.astro", fr: "../../content-versioned/components/1.1.0/fr/heading.astro" } },
      },
      {
        pageKey: "icon",
        routeKey: "icon",
        labels: { en: "Icon", fr: "Icône" },
        slugs: { en: ["icon"], fr: ["icon"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/icon.astro", fr: "../../content-versioned/components/1.1.0/fr/icon.astro" } },
      },
      {
        pageKey: "input",
        routeKey: "input",
        labels: { en: "Input", fr: "Champ de saisie" },
        slugs: { en: ["input"], fr: ["input"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/input.astro", fr: "../../content-versioned/components/1.1.0/fr/input.astro" } },
      },
      {
        pageKey: "languageToggle",
        routeKey: "languageToggle",
        labels: { en: "Language toggle", fr: "Bascule de langue" },
        slugs: { en: ["language-toggle"], fr: ["language-toggle"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/language-toggle.astro", fr: "../../content-versioned/components/1.1.0/fr/language-toggle.astro" } },
      },
      {
        pageKey: "link",
        routeKey: "link",
        labels: { en: "Link", fr: "Lien" },
        slugs: { en: ["link"], fr: ["link"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/link.astro", fr: "../../content-versioned/components/1.1.0/fr/link.astro" } },
      },
      {
        pageKey: "notice",
        routeKey: "notice",
        labels: { en: "Notice", fr: "Avis" },
        slugs: { en: ["notice"], fr: ["notice"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/notice.astro", fr: "../../content-versioned/components/1.1.0/fr/notice.astro" } },
      },
      {
        pageKey: "pagination",
        routeKey: "pagination",
        labels: { en: "Pagination", fr: "Pagination" },
        slugs: { en: ["pagination"], fr: ["pagination"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/pagination.astro", fr: "../../content-versioned/components/1.1.0/fr/pagination.astro" } },
      },
      {
        pageKey: "radios",
        routeKey: "radios",
        labels: { en: "Radios", fr: "Boutons radio" },
        slugs: { en: ["radios"], fr: ["radios"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/radios.astro", fr: "../../content-versioned/components/1.1.0/fr/radios.astro" } },
      },
      {
        pageKey: "screenreaderOnly",
        routeKey: "screenreaderOnly",
        labels: { en: "Screenreader-only", fr: "Lecteur d'écran seulement" },
        slugs: { en: ["screenreader-only"], fr: ["screenreader-only"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/screenreader-only.astro", fr: "../../content-versioned/components/1.1.0/fr/screenreader-only.astro" } },
      },
      {
        pageKey: "search",
        routeKey: "search",
        labels: { en: "Search", fr: "Recherche" },
        slugs: { en: ["search"], fr: ["search"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/search.astro", fr: "../../content-versioned/components/1.1.0/fr/search.astro" } },
      },
      {
        pageKey: "select",
        routeKey: "select",
        labels: { en: "Select", fr: "Sélection" },
        slugs: { en: ["select"], fr: ["select"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/select.astro", fr: "../../content-versioned/components/1.1.0/fr/select.astro" } },
      },
      {
        pageKey: "sideNavigation",
        routeKey: "sideNavigation",
        labels: { en: "Side navigation", fr: "Navigation latérale" },
        slugs: { en: ["side-navigation"], fr: ["side-navigation"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/side-navigation.astro", fr: "../../content-versioned/components/1.1.0/fr/side-navigation.astro" } },
      },
      {
        pageKey: "signature",
        routeKey: "signature",
        labels: { en: "Signature", fr: "Signature" },
        slugs: { en: ["signature"], fr: ["signature"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/signature.astro", fr: "../../content-versioned/components/1.1.0/fr/signature.astro" } },
      },
      {
        pageKey: "stepper",
        routeKey: "stepper",
        labels: { en: "Stepper", fr: "Indicateur d'étape" },
        slugs: { en: ["stepper"], fr: ["stepper"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/stepper.astro", fr: "../../content-versioned/components/1.1.0/fr/stepper.astro" } },
      },
      {
        pageKey: "text",
        routeKey: "text",
        labels: { en: "Text", fr: "Texte" },
        slugs: { en: ["text"], fr: ["text"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/text.astro", fr: "../../content-versioned/components/1.1.0/fr/text.astro" } },
      },
      {
        pageKey: "textarea",
        routeKey: "textarea",
        labels: { en: "Textarea", fr: "Zone de texte" },
        slugs: { en: ["textarea"], fr: ["textarea"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/textarea.astro", fr: "../../content-versioned/components/1.1.0/fr/textarea.astro" } },
      },
      {
        pageKey: "themeAndTopicMenu",
        routeKey: "themeAndTopicMenu",
        labels: { en: "Theme and topic menu", fr: "Menu thème et sujet" },
        slugs: { en: ["theme-and-topic-menu"], fr: ["theme-and-topic-menu"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/theme-and-topic-menu.astro", fr: "../../content-versioned/components/1.1.0/fr/theme-and-topic-menu.astro" } },
      },
      {
        pageKey: "topNavigation",
        routeKey: "topNavigation",
        labels: { en: "Top navigation", fr: "Navigation principale" },
        slugs: { en: ["top-navigation"], fr: ["top-navigation"] },
        snapshots: { "1.1.0": { en: "../../content-versioned/components/1.1.0/en/top-navigation.astro", fr: "../../content-versioned/components/1.1.0/fr/top-navigation.astro" } },
      },
      {
        pageKey: "buttonOverview",
        routeKey: "button",
        labels: { en: "Button overview", fr: "Aperçu du bouton" },
        slugs: { en: ["button", "overview"], fr: ["bouton", "overview"] },
        snapshots: {
          "1.0.0": {
            en: "../../content-versioned/components/1.0.0/en/button-overview.astro",
            fr: "../../content-versioned/components/1.0.0/fr/button-overview.astro",
          },
          "1.1.0": {
            en: "../../content-versioned/components/1.1.0/en/button-overview.astro",
            fr: "../../content-versioned/components/1.1.0/fr/button-overview.astro",
          },
        },
      },
      {
        pageKey: "buttonExamples",
        routeKey: "button",
        labels: { en: "Button examples", fr: "Exemples de bouton" },
        slugs: { en: ["button", "examples"], fr: ["bouton", "examples"] },
        snapshots: {
          "1.1.0": {
            en: "../../content-versioned/components/1.1.0/en/button-examples.astro",
            fr: "../../content-versioned/components/1.1.0/fr/button-examples.astro",
          },
        },
      },
    ],
  },
  cssShortcuts: {
    packageName: "@gcds-core/css-shortcuts",
    latest: "1.1.0",
    versions: ["1.0.0", "1.1.0"],
    baseSlugs: { en: "css-shortcuts", fr: "raccourcis-css" },
    navLabels: { en: "CSS Shortcuts", fr: "Raccourcis CSS" },
    pages: [
      {
        pageKey: "section",
        routeKey: "cssShortcuts",
        labels: { en: "CSS Shortcuts", fr: "Raccourcis CSS" },
        slugs: { en: [], fr: [] },
        snapshots: {
          "1.0.0": {
            en: "../../content-versioned/css-shortcuts/1.0.0/en/index.astro",
            fr: "../../content-versioned/css-shortcuts/1.0.0/fr/index.astro",
          },
          "1.1.0": {
            en: "../../content-versioned/css-shortcuts/1.1.0/en/index.astro",
            fr: "../../content-versioned/css-shortcuts/1.1.0/fr/index.astro",
          },
        },
      },
      {
        pageKey: "spacing",
        routeKey: "cssShortcuts",
        labels: { en: "Spacing", fr: "Espacement" },
        slugs: { en: ["spacing"], fr: ["espacement"] },
        snapshots: {
          "1.0.0": {
            en: "../../content-versioned/css-shortcuts/1.0.0/en/spacing.astro",
            fr: "../../content-versioned/css-shortcuts/1.0.0/fr/espacement.astro",
          },
          "1.1.0": {
            en: "../../content-versioned/css-shortcuts/1.1.0/en/spacing.astro",
            fr: "../../content-versioned/css-shortcuts/1.1.0/fr/espacement.astro",
          },
        },
      },
    ],
  },
  tokens: {
    packageName: "@gcds-core/tokens",
    latest: "1.1.0",
    versions: ["1.0.0", "1.1.0"],
    baseSlugs: { en: "tokens", fr: "jetons" },
    navLabels: { en: "Tokens", fr: "Jetons" },
    pages: [
      {
        pageKey: "section",
        routeKey: "tokens",
        labels: { en: "Tokens", fr: "Jetons" },
        slugs: { en: [], fr: [] },
        snapshots: {
          "1.0.0": {
            en: "../../content-versioned/tokens/1.0.0/en/index.astro",
            fr: "../../content-versioned/tokens/1.0.0/fr/index.astro",
          },
          "1.1.0": {
            en: "../../content-versioned/tokens/1.1.0/en/index.astro",
            fr: "../../content-versioned/tokens/1.1.0/fr/index.astro",
          },
        },
      },
      {
        pageKey: "color",
        routeKey: "tokens",
        labels: { en: "Color", fr: "Couleur" },
        slugs: { en: ["color"], fr: ["couleur"] },
        snapshots: {
          "1.0.0": {
            en: "../../content-versioned/tokens/1.0.0/en/color.astro",
            fr: "../../content-versioned/tokens/1.0.0/fr/couleur.astro",
          },
          "1.1.0": {
            en: "../../content-versioned/tokens/1.1.0/en/color.astro",
            fr: "../../content-versioned/tokens/1.1.0/fr/couleur.astro",
          },
        },
      },
    ],
  },
};

export const isValidSectionVersion = (section: VersionedSectionKey, version: string) =>
  versionManifest[section].versions.includes(version);

export const getLatestVersion = (section: VersionedSectionKey) =>
  versionManifest[section].latest;

export const getSectionFromBaseSlug = (locale: Locale, slug: string): VersionedSectionKey | null => {
  for (const sectionKey of Object.keys(versionManifest) as VersionedSectionKey[]) {
    if (versionManifest[sectionKey].baseSlugs[locale] === slug) {
      return sectionKey;
    }
  }
  return null;
};

export const getPageDefinition = (section: VersionedSectionKey, pageKey: string) =>
  versionManifest[section].pages.find(page => page.pageKey === pageKey);

export const buildLatestPath = (
  locale: Locale,
  section: VersionedSectionKey,
  pageSlugs: string[],
) => {
  const base = versionManifest[section].baseSlugs[locale];
  return `/${locale}/${[base, ...pageSlugs].filter(Boolean).join("/")}`;
};

export const buildVersionPath = (
  locale: Locale,
  section: VersionedSectionKey,
  version: string,
  pageSlugs: string[],
) => {
  const base = versionManifest[section].baseSlugs[locale];
  return `/${locale}/${[base, version, ...pageSlugs].filter(Boolean).join("/")}`;
};

