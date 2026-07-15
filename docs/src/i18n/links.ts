// Localized route URLs shared across pages (ported from the 11ty en.json/fr.json
// `links` data). Add keys here as more pages and links are migrated.
export const links = {
  en: {
    startToUseDesign: "/en/start-to-use/design",
    startToUseDevelop: "/en/start-to-use/develop",
    designTokens: "/en/styles/design-tokens",
    accessibility: "/en/accessibility/",
  },
  fr: {
    startToUseDesign: "/fr/demarrer/conception",
    startToUseDevelop: "/fr/demarrer/developpement",
    designTokens: "/fr/styles/unites-de-style",
    accessibility: "/fr/accessibilite/",
  },
} as const;
