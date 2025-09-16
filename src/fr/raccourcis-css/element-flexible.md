---
title: Élément flexible
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexFR
  title: Élément flexible
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'flex-1'
    style: 'flex: 1 1 0%;'
  - class: 'flex-auto'
    style: 'flex: 1 1 auto;'
  - class: 'flex-initial'
    style: 'flex: 0 1 auto;'
  - class: 'flex-none'
    style: 'flex: none;'
translationKey: 'shortcutsFlex'
date: 'git Last Modified'
---

# Élément flexible

La classe élément flexible définit la propriété abrégée `flex` sur un élément flexible. Elle détermine la façon dont un élément s’élargit, rétrécit et occupe de l'espace par rapport aux élément de même niveau à l'intérieur d'une boîte d’élément flexible.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Élément flexible 1<br/>`flex-1`

Ces éléments s’élargissent et rétrécissent au besoin pour remplir l'espace disponible de manière égale, sans tenir compte de leur taille initiale.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-1">Contenu court.</p>
  <p class="flex-1">Contenu de longueur moyenne.</p>
  <p class="flex-1">Contenu qui prend plus d’espace que d’autres.</p>
</div>
{% endshortcutPreview %}

### Automatique<br/>`flex-auto`

Ces éléments s’élargissent et rétrécissent au besoin pour remplir l'espace disponible, en tenant compte de leur taille initiale.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-auto">Contenu court.</p>
  <p class="flex-auto">Contenu de longueur moyenne.</p>
  <p class="flex-auto">Contenu qui prend plus d’espace que d’autres.</p>
</div>
{% endshortcutPreview %}

### Taille initiale<br/>`flex-initial`

Ces éléments ne s’élargissent pas lorsqu'il y a de l'espace supplémentaire, mais peuvent rétrécir au besoin. Leur taille est basée sur leur contenu.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-initial">Contenu court.</p>
  <p class="flex-initial">Contenu de longueur moyenne.</p>
  <p class="flex-initial">Contenu qui prend plus d’espace que d’autres.</p>
</div>
{% endshortcutPreview %}

### Aucune<br/>`flex-none`

Ces éléments ne s’élargissent pas pour remplir l'espace disponible et ne rétrécissent pas s'il n'y a pas assez d'espace. Leur taille est basée sur leur contenu.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-none">Contenu court.</p>
  <p class="flex-none">Contenu de longueur moyenne.</p>
  <p class="flex-none">Contenu qui prend plus d’espace que d’autres.</p>
</div>
{% endshortcutPreview %}
