---
title: Élargissement de l’élément flexible
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexGrowFR
  title: Élargissement de l’élément flexible
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'flex-grow'
    style: 'flex-grow: 1;'
  - class: 'flex-grow-0'
    style: 'flex-grow: 0;'
translationKey: 'shortcutsFlexGrow'
date: 'git Last Modified'
---

# Élargissement de l’élément flexible

La classe élargissement de l’élément flexible définit la propriété `flex-grow`. Elle détermine la façon dont un élément flexible s’élargit par rapport aux autres éléments lorsqu’il y a de l’espace supplémentaire dans la boîte.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Élargir<br/>`flex-grow`

L'élément avec la classe `flex-grow` s'élargit pour remplir l'espace disponible, tandis que les deux autres éléments conservent leur taille naturelle et ne s’élargissent pas.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-none">1</p>
  <p class="flex-grow">2</p>
  <p class="flex-none">3</p>
</div>
{% endshortcutPreview %}

### Aucun élargissement<br/>`flex-grow-0`

L'élément avec la classe `flex-grow-0` ne s'élargit pas pour remplir l'espace disponible, tandis que les deux autres éléments s'élargissent pour remplir l'espace restant.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-grow">1</p>
  <p class="flex-grow-0">2</p>
  <p class="flex-grow">3</p>
</div>
{% endshortcutPreview %}
