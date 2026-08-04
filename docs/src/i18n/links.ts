// Localized route URLs shared across pages (ported from the 11ty en.json/fr.json
// `links` data). Add keys here as more pages and links are migrated.
export const links = {
  en: {
    startToUseDesign: "/en/start-to-use/design",
    startToUseDevelop: "/en/start-to-use/develop",
    designTokens: "/en/styles/design-tokens",
    colour: "/en/styles/colour",
    spacing: "/en/styles/spacing",
    typography: "/en/styles/typography",
    githubTokens: "https://github.com/cds-snc/gcds-tokens",
    figmaTokens: "https://www.figma.com/community/file/1602785216717583156/gcds-token-library",
    accessibility: "/en/accessibility/",
    wcag: "https://www.w3.org/TR/WCAG21/",
    webaim: "https://webaim.org/resources/contrastchecker/",
    wcagTargetSize: "https://www.w3.org/TR/WCAG21/#target-size",
    wcagTextSpacing: "https://www.w3.org/TR/WCAG21/#text-spacing",
  },
  fr: {
    startToUseDesign: "/fr/demarrer/conception",
    startToUseDevelop: "/fr/demarrer/developpement",
    designTokens: "/fr/styles/unites-de-style",
    colour: "/fr/styles/couleur",
    spacing: "/fr/styles/espacement",
    typography: "/fr/styles/typographie",
    githubTokens: "https://github.com/cds-snc/gcds-tokens",
    figmaTokens: "https://www.figma.com/community/file/1602785216717583156/gcds-token-library",
    accessibility: "/fr/accessibilite/",
    wcag: "https://www.w3.org/TR/WCAG21/",
    webaim: "https://webaim.org/resources/contrastchecker/",
    wcagTargetSize: "https://www.w3.org/TR/WCAG21/#target-size",
    wcagTextSpacing: "https://www.w3.org/TR/WCAG21/#text-spacing",
  },
} as const;
