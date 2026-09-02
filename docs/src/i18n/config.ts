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
  "start-to-use": {
    en: "start-to-use",
    fr: "demarrer",
    children: {
      design: {
        en: "design",
        fr: "conception",
      },
      develop: {
        en: "develop",
        fr: "developpement",
        children: {
          angular: {
            en: "angular",
            fr: "angular",
          },
          html: {
            en: "html",
            fr: "html",
          },
          react: {
            en: "react",
            fr: "react",
          },
          vue: {
            en: "vue",
            fr: "vue",
          },
        }
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
  "page-templates": {
    en: "page-templates",
    fr: "modeles-de-page",
    children: {
      basic: {
        en: "basic",
        fr: "basic",
        children: {
          code: {
            en: "code",
            fr: "code"
          },
          preview: {
            en: "preview",
            fr: "apercu"
          }
        }
      },
    },
  },
  "css-shortcuts": {
    en: "css-shortcuts",
    fr: "raccourcis-css",
    children: {
      "reset-styles": {
        en: "reset-styles",
        fr: "reinitialisation-des-styles",
      },
      "responsive-layout": {
        en: "responsive-layout",
        fr: "mise-en-page-reactive",
      },
      state: {
        en: "state",
        fr: "etat",
      },
      "box-sizing": {
        en: "box-sizing",
        fr: "dimensionnement-de-la-boite",
      },
      "container-sizing": {
        en: "container-sizing",
        fr: "dimensionnement-du-conteneur",
      },
      display: {
        en: "display",
        fr: "affichage",
      },
      overflow: {
        en: "overflow",
        fr: "debordement",
      },
      position: {
        en: "position",
        fr: "position",
      },
      visibility: {
        en: "visibility",
        fr: "visibilite",
      },
      margin: {
        en: "margin",
        fr: "marge",
      },
      padding: {
        en: "padding",
        fr: "marge-interieure",
      },
      "icon-names": {
        en: "icon-names",
        fr: "noms-des-icones",
      },
      "icon-size": {
        en: "icon-size",
        fr: "taille-de-licone",
      },
      image: {
        en: "image",
        fr: "image",
      },
      cursor: {
        en: "cursor",
        fr: "curseur",
      },
      "pointer-events": {
        en: "pointer-events",
        fr: "evenements-de-pointeur",
      },
      transition: {
        en: "transition",
        fr: "transition",
      },
      "background-colour": {
        en: "background-colour",
        fr: "couleur-de-larriere-plan",
      },
      "border-colour": {
        en: "border-colour",
        fr: "couleur-de-la-bordure",
      },
      "border-radius": {
        en: "border-radius",
        fr: "rayon-de-la-bordure",
      },
      "border-style": {
        en: "border-style",
        fr: "style-de-la-bordure",
      },
      "border-width": {
        en: "border-width",
        fr: "largeur-de-la-bordure",
      },
      font: { en: "font", fr: "police" },
      "font-family": { en: "font-family", fr: "famille-de-police" },
      "font-size": { en: "font-size", fr: "taille-de-police" },
      "font-style": { en: "font-style", fr: "style-de-police" },
      "font-weight": { en: "font-weight", fr: "epaisseur-de-police" },
      "line-height": { en: "line-height", fr: "hauteur-de-ligne" },
      "link-colour": { en: "link-colour", fr: "couleur-de-lien" },
      "link-size": { en: "link-size", fr: "taille-de-lien" },
      "link-text-decoration": { en: "link-text-decoration", fr: "decoration-de-texte-de-lien" },
      "list-style": { en: "list-style", fr: "style-de-liste" },
      "text-align": { en: "text-align", fr: "alignement-de-texte" },
      "text-colour": { en: "text-colour", fr: "couleur-de-texte" },
      "text-overflow": { en: "text-overflow", fr: "debordement-de-texte" },
      "text-transform": { en: "text-transform", fr: "transformation-de-texte" },
      "word-break": { en: "word-break", fr: "saut-de-mot" },
      "align-content": { en: "align-content", fr: "alignement-de-contenu" },
      "align-items": { en: "align-items", fr: "alignement-des-elements" },
      "align-self": { en: "align-self", fr: "alignement-individuel" },
      flex: { en: "flex", fr: "element-flexible" },
      "flex-direction": { en: "flex-direction", fr: "direction-de-lelement-flexible" },
      "flex-grow": { en: "flex-grow", fr: "elargissement-de-lelement-flexible" },
      "flex-shrink": { en: "flex-shrink", fr: "retrecissement-de-lelement-flexible" },
      "flex-wrap": { en: "flex-wrap", fr: "habillage-de-lelement-flexible" },
      gap: { en: "gap", fr: "degagement" },
      "grid-columns": { en: "grid-columns", fr: "colonnes-de-grille" },
      "grid-rows": { en: "grid-rows", fr: "lignes-de-grille" },
      "justify-content": { en: "justify-content", fr: "justification-de-contenu" },
      "justify-items": { en: "justify-items", fr: "justification-des-elements" },
      "justify-self": { en: "justify-self", fr: "justification-individuelle" },
      order: { en: "order", fr: "ordre" },
      "place-content": { en: "place-content", fr: "agencement-de-contenu" },
      "place-items": { en: "place-items", fr: "agencement-des-elements" },
      "place-self": { en: "place-self", fr: "agencement-individuel" },
    },
  },
  contact: {
    en: "contact",
    fr: "contactez",
  },
  "get-involved": {
    en: "get-involved",
    fr: "simpliquer",
  },
  "register-for-a-demo": {
    en: "register-for-a-demo",
    fr: "inscrivez-vous-a-une-demonstration",
  }
};

export const supportedLocales = ["en", "fr"] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = "en";
