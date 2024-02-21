---
title: Titre
layout: 'layouts/component-documentation.njk'
translationKey: 'headingCode'
tags: ['headingFR', 'code']
# date: "git Last Modified"
---

## Créer un titre

Les titres établissent des niveaux hiérarchiques qui organisent le contenu d'une page.

## Codage et accessibilité du composant titre

### Classez les niveaux de titre de manière hiérarchique

Les niveaux de titre suivent un ordre séquentiel et hiérarchique : les niveaux supérieurs ont un texte d'affichage plus grand que les niveaux inférieurs.

- Définissez des niveaux de titre corrects et cohérents pour aligner les titres codés et visuels sur une page. Des titres cohérents favorisent une expérience équitable pour les personnes qui utilisent des technologies d'assistance.
- Classez les titres de manière séquentielle, du plus bas au plus élevé (H1 à H6).
- Évitez de sauter des niveaux de titre. Restructurez plutôt le contenu de manière à ce que les titres soient utilisés de manière séquentielle, du plus grand (H1) au plus petit (H6).
- N'utilisez un titre H1 qu'une seule fois sur une page. D'autres types de titres peuvent être utilisés plusieurs fois.
- Utilisez les titres H2 pour décrire les sections individuelles. Chaque section doit avoir un titre H2.
- Utilisez les titres H3 à H6 dans les sections. Les sections peuvent contenir plusieurs titres H3-H6, à condition qu'ils soient placés dans l'ordre hiérarchique.

### Maintenez des limites de caractères accessibles

- Conservez la valeur `character-limit` par défaut pour chaque ligne de titre en réglant l'attribut à `true` pour une expérience de lecture agréable et accessible. Ces valeurs par défaut créent une longueur de ligne équilibrée et cohérente entre les tailles de police des titres.
- Limitez les limites de caractères aux longueurs suivantes pour maintenir un équilibre visuel entre les titres d'une page :
  - 31 caractères pour H1.
  - 35 caractères pour H2.
  - 40 caractères pour H3.
  - 45 caractères pour H4.
  - 50 caractères pour H5.
  - 57 caractères pour H6.

### Utilisez un espacement cohérent

- Conservez l'espacement par défaut pour une expérience de lecture agréable et accessible. Ces valeurs par défaut créent des espaces visuels et des séparations entre les différentes sections.
- Conservez les valeurs d'espacement suivantes pour maintenir un équilibre visuel entre les titres d'une page :
  - Par défaut `margin-bottom`: `400` pour tous les niveaux
  - Par défaut `margin-top`: `0` pour H1 et `500` pour H2 et 3

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-heading."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-heading--events-properties&lang=fr"
  width="1200"
  height="1300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
