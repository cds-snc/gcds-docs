---
title: Agencement des éléments
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPlaceItemsFR
  title: Agencement des éléments
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'place-items-center'
    style: 'place-items: center;'
  - class: 'place-items-stretch'
    style: 'place-items: stretch;'
  - class: 'place-items-start'
    style: 'place-items: start;'
  - class: 'place-items-end'
    style: 'place-items: end;'
shortcutsPartialClass: 'place-items-center'
translationKey: 'shortcutsPlaceItems'
date: 'git Last Modified'
---

# Agencement des éléments

La classe agencement des éléments définit la propriété `place-items`. Il s’agit d’un raccourci pour définir à la fois l'axe transversal et l'axe principal. Elle détermine comment les éléments sont alignés à l'intérieur de leurs zones de grille le long des deux axes dans une boîte de grille.

<gcds-notice notice-role="info" notice-title-tag="h2" notice-title="Aucun effet dans les boîtes d’éléments flexibles.">
  <gcds-text>Dans une boîte d’élément flexible, <code>justify-items</code> est ignorée. Ainsi, la classe <code>place-items</code> n'a aucun effet.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Centré<br/>`place-items-center`

Ces éléments sont centrés à la fois verticalement et horizontalement dans leurs zones de grille.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-items-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Étiré<br/>`place-items-stretch`

Si aucune taille fixe n'est définie, ces éléments s'étirent pour remplir leurs zones de grille à la fois horizontalement et verticalement.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-items-stretch">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord initial<br/>`place-items-start`

Ces éléments s'alignent sur le bord initial des deux axes dans leurs zones de grille.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-items-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord final<br/>`place-items-end`

Ces éléments s'alignent sur le bord final des deux axes dans leurs zones de grille.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-items-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
