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
};

export const supportedLocales = ["en", "fr"] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = "en";
