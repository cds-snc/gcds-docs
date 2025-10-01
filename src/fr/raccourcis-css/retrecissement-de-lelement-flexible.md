---
title: Rétrécissement de l’élément flexible
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexShrinkFR
  title: Rétrécissement de l’élément flexible
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'flex-shrink'
    style: 'flex-shrink: 1;'
  - class: 'flex-shrink-0'
    style: 'flex-shrink: 0;'
shortcutsPartialClass: 'flex-shrink'
translationKey: 'shortcutsFlexShrink'
date: 'git Last Modified'
---

# Rétrécissement de l’élément flexible

La classe rétrécissement de l’élément flexible définit la propriété `flex-shrink`. Elle détermine le degré de rétrécissement d’un élément flexible lorsqu'il n'y a pas assez d'espace dans la boîte.
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Rétrécir<br/>`flex-shrink`

La taille de l’élément avec la classe `flex-shrink` est réduite lorsque l'espace est limité, tandis que les deux autres éléments conservent leur taille d'origine.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-none" style="width: 28rem;">1</p>
  <p class="flex-shrink" style="width: 28rem;">2</p>
  <p class="flex-none" style="width: 28rem;">3</p>
</div>
{% endshortcutPreview %}

### Aucun rétrécissement<br/>`flex-shrink-0`

La taille de l’élément avec la classe `flex-shrink-0` ne change pas lorsque l'espace est limité, tandis que les deux autres éléments rétrécissent pour s'adapter à la boîte.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-none" style="width: 28rem;">1</p>
  <p class="flex-shrink-0" style="width: 28rem;">2</p>
  <p class="flex-none" style="width: 28rem;">3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
