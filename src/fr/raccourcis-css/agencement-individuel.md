---
title: Agencement individuel
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPlaceSelfFR
  title: Agencement individuel
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'place-self-auto'
    style: 'place-self: auto;'
  - class: 'place-self-center'
    style: 'place-self: center;'
  - class: 'place-self-stretch'
    style: 'place-self: stretch;'
  - class: 'place-self-start'
    style: 'place-self: start;'
  - class: 'place-self-end'
    style: 'place-self: end;'
shortcutsPartialClass: 'place-self-center'
translationKey: 'shortcutsPlaceSelf'
date: 'git Last Modified'
---

# Agencement individuel

La classe agencement individuel définit la propriété `place-self`. Il s’agit d’un raccourci pour définir à la fois l’axe transversal et l’axe principal d’un seul élément de grille. Elle remplace le paramètre `place-items` de la boîte et détermine comment l’élément individuel est aligné dans sa zone de grille.

<gcds-notice type="info" notice-title-tag="h2" notice-title="Aucun effet dans les boîtes d’éléments flexibles">
  <gcds-text>Dans une boîte d’élément flexible, <code>justify-self</code> est ignoré. Ainsi, la classe <code>place-self</code> n'a aucun effet.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Automatique<br/>`place-self-auto`

Un élément avec la classe `place-self-auto` suit le paramètre `place-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-stretch">
  <p>1</p>
  <p class="place-self-auto">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Centré<br/>`place-self-center`

Un élément avec la classe `place-self-center` est centré à la fois verticalement et horizontalement dans sa zone de grille, remplaçant le paramètre `place-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-stretch">
  <p>1</p>
  <p class="place-self-center">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Étiré<br/>`place-self-stretch`

Un élément avec la classe `place-self-stretch` s'étire pour remplir toute la zone de la grille le long des deux axes, remplaçant le paramètre `place-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-start">
  <p>1</p>
  <p class="place-self-stretch">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord initial<br/>`place-self-start`

Un élément avec la classe `place-self-start` s'aligne sur le bord initial des deux axes dans sa zone de grille, écrasant le paramètre `place-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-stretch">
  <p>1</p>
  <p class="place-self-start">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord final<br/>`place-self-end`

Un élément avec la classe `place-self-end` s'aligne sur le bord final des deux axes dans sa zone de grille, écrasant le paramètre `place-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-stretch">
  <p>1</p>
  <p class="place-self-end">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
