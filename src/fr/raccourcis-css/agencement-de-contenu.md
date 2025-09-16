---
title: Agencement de contenu
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPlaceContentFR
  title: Agencement de contenu
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'place-content-around'
    style: 'place-content: space-around;'
  - class: 'place-content-between'
    style: 'place-content: space-between;'
  - class: 'place-content-evenly'
    style: 'place-content: space-evenly;'
  - class: 'place-content-center'
    style: 'place-content: center;'
  - class: 'place-content-stretch'
    style: 'place-content: stretch;'
  - class: 'place-content-start'
    style: 'place-content: start;'
  - class: 'place-content-end'
    style: 'place-content: end;'
shortcutsNoticeDirection: 'place-content'
translationKey: 'shortcutsPlaceContent'
date: 'git Last Modified'
---

# Agencement de contenu

La classe agencement de contenu définit la propriété `place-content`. Il s’agit d’un raccourci pour définir à la fois l'axe transversal et l'axe principal. Elle détermine la façon dont l'espace supplémentaire est réparti entre les lignes et les colonnes dans des boîtes d’éléments flexibles à plusieurs lignes ou de grille.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Autour<br/>`place-content-around`

Les lignes et les colonnes ont un espace égal autour d'elles, produisant des espaces de moitié de taille aux bords de la boîte.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-around">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Entre<br/>`place-content-between`

Les lignes et les colonnes sont espacées uniformément avec un espace égal entre elles, et il n'y a pas d'espace avant le premier ou après le dernier élément aux bords de la boîte.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-between">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Uniforme<br/>`place-content-evenly`

Les lignes et les colonnes ont un espace égal avant, entre et après chaque élément, y compris aux bords de la boîte.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-evenly">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Centré<br/>`place-content-center`

Les lignes et les colonnes sont regroupées au centre de la boîte, avec un espace égal de chaque côté.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Étiré<br/>`place-content-stretch`

Les lignes et les colonnes s'étendent le long des deux axes pour remplir la boîte, distribuant l'espace de manière uniforme.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-stretch">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord initial<br/>`place-content-start`

Les lignes et les colonnes sont regroupées au bord initial de leurs axes respectifs, sans espace avant le premier élément.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord final<br/>`place-content-end`

Les lignes et les colonnes sont regroupées à la fin de leurs axes, laissant de l'espace avant le premier élément.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}
