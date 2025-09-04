---
title: Raccourcis CSS - Débordement
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsOverflowFR
  title: Raccourcis CSS - Débordement
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'overflow-visible'
    style: 'overflow: visible;'
  - class: 'overflow-x-visible'
    style: 'overflow-x: visible;'
  - class: 'overflow-y-visible'
    style: 'overflow-y: visible;'
  - class: 'overflow-hidden'
    style: 'overflow: hidden;'
  - class: 'overflow-x-hidden'
    style: 'overflow-x: hidden;'
  - class: 'overflow-y-hidden'
    style: 'overflow-y: hidden;'
  - class: 'overflow-scroll'
    style: 'overflow: scroll;'
  - class: 'overflow-x-scroll'
    style: 'overflow-x: scroll;'
  - class: 'overflow-y-scroll'
    style: 'overflow-y: scroll;'
permalink: /fr/raccourcis-css/debordement
translationKey: 'shortcutsOverflow'
date: 'git Last Modified'
---

# Débordement

La classe overflow définit la propriété `overflow`. Elle détermine la façon dont le contenu est géré lorsqu’il déborde de sa boîte.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Visible<br/>`overflow-visible`

{% shortcutPreview "bg-light b-md b-default mb-900 p-150 limited-size" %}

<div class="overflow-visible">
  Le contenu qui dépasse les limites de cet élément déborde horizontalement et verticalement.
</div>
{% endshortcutPreview %}

### Visible à l’horizontale (x)<br/>`overflow-x-visible`

{% shortcutPreview "bg-light b-md b-default p-150" %}

<div class="overflow-x-visible" style="width: 250px;">
  <p style="width: 500px;">
     Le contenu qui dépasse les limites de cet élément déborde horizontalement.
  </p>
</div>
{% endshortcutPreview %}

### Visible à la verticale (y)<br/>`overflow-y-visible`

{% shortcutPreview "bg-light b-md b-default mb-600 p-150 limited-size" %}

<div class="overflow-y-visible">
  Le contenu qui dépasse les limites de cet élément déborde verticalement.
</div>
{% endshortcutPreview %}

### Masqué <br/>`overflow-hidden`

{% shortcutPreview "bg-light b-md b-default p-150 limited-size" %}

<p class="overflow-hidden">
  Le contenu qui dépasse les limites de cet élément est invisible, mais est toujours lisible par les lecteurs d’écran.
</p>
{% endshortcutPreview %}

### Masqué à l’horizontale (x)<br/>`overflow-x-hidden`

{% shortcutPreview "bg-light b-md b-default p-150" %}

<div class="overflow-x-hidden" style="width: 250px;">
  <p style="width: 500px;">
    Le contenu qui dépasse la limite de gauche ou de droite de cet élément est invisible, mais il est toujours lisible par les lecteurs d’écran.
  </p>
</div>
{% endshortcutPreview %}

### Masqué à la verticale (y)<br/>`overflow-y-hidden`

{% shortcutPreview "bg-light b-md b-default p-150 limited-size" %}

<p class="overflow-y-hidden">
  Le contenu qui dépasse la limite supérieure ou inférieure de cet élément est invisible, mais il est toujours lisible par les lecteurs d’écran.
</p>
{% endshortcutPreview %}

### Défilement <br/>`overflow-scroll`

{% shortcutPreview "bg-light b-md b-default p-150 limited-size" %}

<p class="overflow-scroll">
  Le contenu qui dépasse les limites de cet élément est accessible au moyen de barres de défilement verticale et horizontale.
</p>
{% endshortcutPreview %}

### Défilement à l’horizontale (x)<br/>`overflow-x-scroll`

{% shortcutPreview "bg-light b-md b-default p-150" %}

<div class="overflow-x-scroll" style="width: 250px;">
  <p style="width: 500px;">
    Le contenu qui dépasse les limites de cet élément est accessible au moyen d’une barre de défilement horizontale.
  </p>
</div>
{% endshortcutPreview %}

### Défilement à la verticale (y)<br/>`overflow-y-scroll`

{% shortcutPreview "bg-light b-md b-default p-150 limited-size" %}

<p class="overflow-y-scroll">
  Le contenu qui dépasse les limites de cet élément est accessible au moyen d’une barre de défilement verticale.
</p>
{% endshortcutPreview %}
