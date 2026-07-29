export const routes = {
  home: {
    en: "",
    fr: "",
  },
  about: {
    en: "about-us",
    fr: "a-propos",
  },
  components: {
    en: "components",
    fr: "composants",
    children: {
      button: {
        en: "button",
        fr: "bouton",
      },
    },
  },
  styles: {
    en: "styles",
    fr: "styles",
    children: {
      "design-tokens": {
        en: "design-tokens",
        fr: "unites-de-style",
      },
      colour: {
        en: "colour",
        fr: "couleur",
      },
      spacing: {
        en: "spacing",
        fr: "espacement",
      },
      typography: {
        en: "typography",
        fr: "typographie",
      },
    },
  },
};

export const supportedLocales = ["en", "fr"] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = "en";
