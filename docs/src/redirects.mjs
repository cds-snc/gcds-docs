/**
 * Legacy URL redirects for the Eleventy -> Astro migration.
 *
 * These are historical URLs: they are linked from other sites, bookmarked and
 * indexed, and they no longer exist in this build. Each entry keeps one of them
 * working. The source paths are frozen -- they are what the old site published
 * and will never change -- so they are listed literally rather than derived.
 *
 * ADDING ONE: when you rename or remove a page, add its old path here in the
 * same PR. That is the whole point of keeping this file next to the content
 * rather than in the Terraform repo.
 *
 * VERIFYING: scripts/check-redirect-parity.mjs walks the live site's sitemap and
 * reports any published URL that no longer resolves. Run it before cutover.
 *
 * CAVEAT: this build is static with no adapter, so Astro emits each of these as
 * an HTML page containing <meta http-equiv="refresh"> rather than a 301. Search
 * engines follow those, but they are a weaker signal than a real redirect. If a
 * particular URL matters enough to need a true 301, it has to be an Amplify
 * custom_rule in gcds-terraform instead.
 */

/**
 * ***** DROPPED /preview/ SUB-PAGES ******
 * Component list that no longer has a /preview/ sub-page.
 * The old site had a /preview/ page for every component,
 *   but the new site does not.
 * These are redirected to the component's index page.
 */
const PREVIEW_COMPONENTS = {
  'alert': 'alerte',
  'breadcrumbs': 'chemin-de-navigation',
  'button': 'bouton',
  'card': 'carte',
  'checkboxes': 'cases-a-cocher',
  'container': 'conteneur',
  'date-input': 'champ-de-date',
  'date-modified': 'date-de-modification',
  'details': 'details',
  'error-message': 'message-derreur',
  'error-summary': 'avis',
  'fieldset': 'jeu-de-champs',
  'file-uploader': 'televerseur-de-fichiers',
  'footer': 'pied-de-page',
  'grid': 'grille',
  'header': 'en-tete',
  'heading': 'titre',
  'icon': 'icone',
  'input': 'champ-de-saisie',
  'language-toggle': 'bascule-de-langue',
  'link': 'lien',
  'notice': 'avis',
  'pagination': 'pagination',
  'radios': 'boutons-radio',
  'screenreader-only': 'masquage-accessible',
  'search': 'recherche',
  'select': 'selection',
  'side-navigation': 'barre-de-navigation-laterale',
  'signature': 'signature',
  'stepper': 'indicateur-detape',
  'table': 'tableau',
  'text': 'texte',
  'textarea': 'zone-de-texte',
  'theme-and-topic-menu': 'menu-thematique',
  'top-navigation': 'barre-de-navigation-superieure',
};

/**
 * ****** RENAMED COMPONENTS ******
 */

/** Components renamed (legacy): old slug -> new slug. */
const RENAMED_EN = {
  'checkbox': 'checkboxes',
  'radio-group': 'radios',
  'data-table': 'table',
};

const RENAMED_FR = {
  'case-a-cocher': 'cases-a-cocher',
  'groupe-de-boutons-radio': 'boutons-radio',
  'tableau-de-donnees': 'tableau',
  'resume-de-erreurs': 'resume-des-erreurs',
};

/** Sub-pages every component page carries. '' is the component index itself. */
const COMPONENT_TABS = ['', '/code', '/design'];

function build() {
  const map = {};

  // PATH: /components/preview/ sub-pages were dropped: send them to the component parent they belonged to.
  for (const [enSlug, frSlug] of Object.entries(PREVIEW_COMPONENTS)) {
    map[`/en/components/${enSlug}/preview`] = `/en/components/${enSlug}`;
    map[`/fr/composants/${frSlug}/preview`] = `/fr/composants/${frSlug}`;
  }

  // PATH: /components/{old-name} to /components/{new-name}, including their /code and /design tabs.
  for (const [from, to] of Object.entries(RENAMED_EN)) {
    for (const tab of COMPONENT_TABS) map[`/en/components/${from}${tab}`] = `/en/components/${to}${tab}`;
    map[`/en/components/${from}/preview`] = `/en/components/${to}`;
  }
  for (const [from, to] of Object.entries(RENAMED_FR)) {
    for (const tab of COMPONENT_TABS) map[`/fr/composants/${from}${tab}`] = `/fr/composants/${to}${tab}`;
    map[`/fr/composants/${from}/preview`] = `/fr/composants/${to}`;
  }

  // PATH: /get-started/ to /start-to-use/ (English only)
  // The English "Get started" section became "Start to use". The French
  // section (/fr/demarrer) was not renamed.
  //
  // These are all the subpages that existed in the old site, and they all
  // exist in the new site.
  const GET_STARTED = [
    '', '/design', '/develop', '/develop/angular', '/develop/html',
    '/develop/react', '/develop/vue',
  ];
  for (const sub of GET_STARTED) map[`/en/get-started${sub}`] = `/en/start-to-use${sub}`;

  return map;
}

export const redirects = build();
