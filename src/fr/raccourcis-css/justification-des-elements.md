---
title: Justification des éléments
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsJustifyItemsFR
  title: Justification des éléments
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'justify-items-center'
    style: 'justify-items: center;'
  - class: 'justify-items-stretch'
    style: 'justify-items: stretch;'
  - class: 'justify-items-start'
    style: 'justify-items: start;'
  - class: 'justify-items-end'
    style: 'justify-items: end;'
shortcutsPartialClass: 'justify-items-center'
translationKey: 'shortcutsJustifyItems'
date: 'git Last Modified'
---

# Justification des éléments

La classe justification des éléments définit la propriété `justify-items`. Elle détermine comment les éléments individuels sont alignés le long de l'axe intraligne (ligne) dans leurs zones de grille. Elle détermine le positionnement horizontal du contenu à l'intérieur de chaque cellule de la grille.

<gcds-notice type="info" notice-title-tag="h2" notice-title="Ce paramètre n’a aucun effet dans les boîtes d’éléments flexibles">
  <gcds-text>Dans une boîte d’élément flexible, la classe <code>justify-items</code> est ignorée et n'a aucun effet.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Centré<br/>`justify-items-center`

Ces éléments sont centrés horizontalement dans leurs zones de grille le long de l'axe intraligne.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 justify-items-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Étiré<br/>`justify-items-stretch`

Ces éléments s'étendent pour remplir toute la largeur de leurs zones de grille le long de l'axe intraligne (comportement par défaut).

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 justify-items-stretch">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Bord initial<br/>`justify-items-start`

Ces éléments s'alignent sur le bord initial de leurs zones de grille le long de l'axe intraligne.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 justify-items-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Bord final <br/>`justify-items-end`

Ces éléments s'alignent au bord final de leurs zones de grille le long de l'axe intraligne.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 justify-items-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
