---
title: Justification de contenu
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsJustifyContentFR
  title: Justification de contenu
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'justify-content-around'
    style: 'justify-content: space-around;'
  - class: 'justify-content-between'
    style: 'justify-content: space-between;'
  - class: 'justify-content-evenly'
    style: 'justify-content: space-evenly;'
  - class: 'justify-content-center'
    style: 'justify-content: center;'
  - class: 'justify-content-start'
    style: 'justify-content: flex-start;'
  - class: 'justify-content-end'
    style: 'justify-content: flex-end;'
shortcutsPartialClass: 'justify-content-center'
shortcutsNoticeDirection: 'justify-content'
translationKey: 'shortcutsJustifyContent'
date: 'git Last Modified'
---

# Justification de contenu

La classe justification de contenu définit la propriété `justify-content`. Elle détermine la façon dont l'espace supplémentaire est réparti entre les éléments dans une boîte d’élément flexible ou de grille le long de l'axe principal.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Autour<br/>`justify-content-around`

Les colonnes sont espacées de façon égale le long de l'axe principal avec un espace égal autour de chaque ligne. Cela entraîne des espaces de moitié de taille aux bords initial et final de la boîte.

Dans **les mises en page en ligne**, l'espacement est horizontal avec des demi-espaces à gauche et à droite.<br/>
Dans **les mises en page en colonnes**, l'espacement est vertical avec des demi-espaces en haut et en bas.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-around">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Entre<br/>`justify-content-between`

Les colonnes sont espacées de façon égale le long de l'axe principal avec un espace égal entre chaque ligne. Il n'y a pas d'espace au bord initial ni final de la boîte.

Dans **les mises en page en ligne**, l'espacement est horizontal entre les éléments seulement.<br/>
Dans **les mises en page en colonnes**, l'espacement est vertical entre les éléments seulement.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-between">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Uniforme<br/>`justify-content-evenly`

Les colonnes sont uniformément espacées le long de l'axe principal avec un espace égal entre toutes les lignes et les bords de la boîte, y compris le bord initial et final.

Dans **les mises en page en ligne**, l'espacement est égal horizontalement entre les éléments et autour d’eux.<br/>
Dans **les mises en page en colonnes**, l'espacement est égal verticalement entre les éléments et autour d’eux.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-evenly">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Centré<br/>`justify-content-center`

Les lignes sont regroupées et centrées le long de l'axe principal dans la boîte, avec un espace égal au-dessus et en dessous de l'ensemble du groupe.

Dans **les mises en page en ligne**, les éléments sont centrés horizontalement.<br/>
Dans **les mises en page en colonnes**, les éléments sont centrés verticalement.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Bord initial <br/>`justify-content-start`

Les colonnes sont regroupées au bord initial de l'axe principal dans la boîte, laissant tout espace supplémentaire à la fin de la boîte.

Dans **les mises en page en ligne**, les éléments s'alignent à gauche.<br/>
Dans **les mises en page en colonnes**, les éléments s'alignent en haut.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Bord final <br/>`justify-content-end`

Les colonnes sont regroupées à la fin de l'axe principal dans la boîte, laissant tout espace supplémentaire au bord initial de la boîte.

Dans **les mises en page en ligne**, les éléments s'alignent à droite.<br/>
Dans **les mises en page en colonnes**, les éléments s'alignent en bas.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
