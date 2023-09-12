---
title: Menu des thèmes et sujets
layout: "layouts/component-documentation.njk"
translationKey: "themeand-topic-menuCode"
tags: ['themeand-topic-menuFR', 'code']
date: "git Last Modified"
---

## Création d’un menu des thèmes et sujets

Utilisez le menu des thèmes et sujets pour permettre aux utilisateur·rice·s de naviguer à travers l’ensemble des sites du gouvernement du Canada.

## Codage et accessibilité du menu des thèmes et sujets

### Utilisation du menu des thèmes et sujets avec d’autres composants

Ajoutez directement le menu des thèmes et sujets à l’<a href="{{ links.header }}">en-tête</a> en passant un élément secondaire avec l’attribut `slot="menu"` dans l’en-tête. Cela placera le menu des thèmes et sujets dans l’en-tête, à la suite de la bascule de la langue, la signature et la barre de recherche.

Remarque : Si vous souhaitez ajouter un menu de thèmes et sujets à la page d’accueil de Canada.ca, utilisez l’attribut `home` pour utiliser le style approprié.

{% include "partials/getcode.njk" %}

<iframe
  title="iframeTitle"
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-theme-and-topic-menu--events-properties"
  width="1200"
  height="1800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
