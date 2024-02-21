---
title: Bascule de langue
layout: 'layouts/component-documentation.njk'
translationKey: 'langtoggleCode'
tags: ['langtoggleFR', 'code']
date: 'git Last Modified'
---

## Créer une bascule de langue

Utilisez une bascule de langue pour que les gens puissent passer d’une langue à l’autre sans que cela ne les détourne de leur parcours.

Placez la bascule de langue en haut à droite de l’en-tête. Cet emplacement prévisible la rendra plus facile à trouver.

## Codage et accessibilité de la bascule de langue

- Utilisez `href-attribute` pour définir l’URL de la page dans l’autre langue officielle.
- Paramétrez l’attribut `lang` de façon à ce que la bascule de langue indique `en` sur la page en langue française et `fr` sur la page en langue anglaise.

Remarque : Si vous utilisez le composant En-tête, la bascule de langue peut être définie à l’aide de l’attribut `lang-href`.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-lang-toggle properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-language-toggle--events-properties&lang=fr"
  width="1200"
  height="850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
