---
title: Menu thématique
layout: 'layouts/component-documentation.njk'
translationKey: 'themeand-topic-menuCode'
tags: ['themeand-topic-menuFR', 'code']
date: 'git Last Modified'
---

## Création d'un menu thématique

Utilisez le menu thématique pour permettre aux utilisateur·rice·s de naviguer à travers l'ensemble des sites du gouvernement du Canada.

## Codage et accessibilité du menu thématique

### Utilisation du menu thématique avec d'autres composants

Ajoutez directement le menu thématique à l'<gcds-link href="{{ links.header }}">en-tête</gcds-link> en passant un élément secondaire avec l'attribut `slot="menu"` dans l'en-tête. Cela placera le menu thématique dans l'en-tête, à la suite de la bascule de la langue, la signature et la barre de recherche.

Remarque : Si vous souhaitez ajouter un menu de thèmes et sujets à la page d'accueil de Canada.ca, utilisez l'attribut `home` pour utiliser le style approprié.

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
