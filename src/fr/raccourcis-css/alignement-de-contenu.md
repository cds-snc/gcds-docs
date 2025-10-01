---
title: Alignement de contenu
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsAlignContentFR
  title: Alignement de contenu
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'align-content-around'
    style: 'align-content: space-around;'
  - class: 'align-content-between'
    style: 'align-content: space-between;'
  - class: 'align-content-evenly'
    style: 'align-content: space-evenly;'
  - class: 'align-content-center'
    style: 'align-content: center;'
  - class: 'align-content-start'
    style: 'align-content: start;'
  - class: 'align-content-end'
    style: 'align-content: end;'
shortcutsNoticeDirection: 'align-content'
shortcutsPartialClass: 'align-content-center'
translationKey: 'shortcutsAlignContent'
date: 'git Last Modified'
---

# Alignement de contenu

La classe alignement du contenu définit la propriété `align-content`. Elle détermine la façon dont l'espace supplémentaire est réparti entre les éléments dans une boîte d’élément flexible ou de grille le long de l'axe transversal.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Autour<br/>`align-content-around`

Les lignes sont espacées de façon égale le long de l'axe transversal avec un espace égal autour de chaque ligne. Cela entraîne des espaces de moitié de taille aux bords initial et final de la boîte.

Dans **les mises en page en ligne**, l'espacement apparaît verticalement entre les lignes.<br/>
Dans **les mises en page en colonnes**, l'espacement apparaît horizontalement entre les colonnes.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-around">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Entre<br/>`align-content-between`

Les lignes sont espacées de façon égale le long de l'axe transversal avec un espace égal entre chaque ligne. Il n'y a pas d'espace au bord initial ni final de la boîte.

Dans **les mises en page en ligne**, l'espacement apparaît verticalement entre les lignes.<br/>
Dans **les mises en page en colonnes**, l'espacement apparaît horizontalement entre les colonnes.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-between">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Uniforme<br/>`align-content-evenly`

Les lignes sont uniformément espacées le long de l'axe transversal avec un espace égal entre toutes les lignes et les bords de la boîte, y compris les bords initial et final.

Dans **les mises en page en ligne**, l'espacement apparaît verticalement entre les lignes.<br/>
Dans **les mises en page en colonnes**, l'espacement apparaît horizontalement entre les colonnes.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-evenly">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Centré<br/>`align-content-center`

Les lignes sont regroupées et centrées le long de l'axe transversal dans la boîte, avec un espace égal au-dessus et en dessous de l'ensemble du groupe.

Dans **les mises en page en ligne**, les lignes sont centrées verticalement.<br/>
Dans **les mises en page en colonnes**, les colonnes sont centrées horizontalement.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord initial<br/>`align-content-start`

Les lignes sont regroupées au bord initial de l'axe transversal dans la boîte. Tout espace supplémentaire se trouve au bord final de la boîte.

Dans **les mises en page en ligne**, les lignes s'alignent en haut de la boîte.<br/>
Dans **les mises en page en colonnes**, les colonnes s'alignent à gauche de la boîte.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord final<br/>`align-content-end`

Les lignes sont regroupées au bord final de l'axe transversal dans la boîte. Tout espace supplémentaire se trouve au bord initial de la boîte.

Dans **les mises en page en ligne**, les lignes s'alignent en bas de la boîte.<br/>
Dans **les mises en page en colonnes**, les lignes s'alignent à droite de la boîte.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
