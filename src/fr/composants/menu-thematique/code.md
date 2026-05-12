---
title: Menu thématique
layout: 'layouts/component-documentation.njk'
translationKey: 'themeand-topic-menuCode'
tags: ['themeand-topic-menuFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité du menu thématique](#codage-et-accessibilite-du-menu-thematique)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité du menu thématique

### Utilisation du menu thématique avec d'autres composants

Ajoutez directement le menu thématique à l'<gcds-link href="{{ links.header }}">en-tête</gcds-link> en passant un élément secondaire avec l'attribut `slot="menu"` dans l'en-tête. Cela placera le menu thématique dans l'en-tête, à la suite de la bascule de la langue, la signature et la barre de recherche.

Remarque : Si vous souhaitez ajouter un menu de thèmes et sujets à la page d'accueil de Canada.ca, utilisez l'attribut `home` pour utiliser le style approprié.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs facultatifs](#section-optional)

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `home`

L'attribut `home` définit le style de la page d'accueil.

{% examplesPreview "100", "", "fr" %}
<gcds-topic-menu home>
</gcds-topic-menu>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-topic-menu."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-theme-and-topic-menu--events-properties&lang=fr&externalLinks=true"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
