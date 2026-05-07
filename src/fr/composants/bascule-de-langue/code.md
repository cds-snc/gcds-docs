---
title: Bascule de langue
layout: 'layouts/component-documentation.njk'
translationKey: 'langtoggleCode'
tags: ['langtoggleFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de bascule de langue](#codage-et-accessibilite-de-bascule-de-langue)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de bascule de langue

- Placez la bascule de langue en haut à droite de l’en-tête. Cet emplacement prévisible la rendra plus facile à trouver.
- Utilisez `href-attribute` pour définir l’URL de la page dans l’autre langue officielle.
- Paramétrez l’attribut `lang` de façon à ce que la bascule de langue indique `en` sur la page en langue française et `fr` sur la page en langue anglaise.

Remarque : Si vous utilisez le composant En-tête, la bascule de langue peut être définie à l’aide de l’attribut `lang-href`.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `href`

L'attribut `href` définit l'URL de la même page dans une autre langue, généralement l'anglais ou le français. Utilisez-le pour fournir un lien permettant aux utilisateurs de basculer entre les versions linguistiques disponibles.

{% examplesPreview %}
<gcds-lang-toggle href="#">
</gcds-lang-toggle>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

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
