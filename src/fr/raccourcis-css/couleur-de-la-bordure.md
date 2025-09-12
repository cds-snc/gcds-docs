---
title: Couleur de la bordure
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBorderColourFR
  title: Couleur de la bordure
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'b-default'
    style: 'border-color: #7d828b;'
  - class: 'b-current'
    style: 'border-color: currentColor;'
  - class: 'b-dark'
    style: 'border-color: #000000;'
  - class: 'b-inherit'
    style: 'border-color: inherit;'
  - class: 'b-light'
    style: 'border-color: #ffffff;'
  - class: 'b-transparent'
    style: 'border-color: transparent;'
translationKey: 'shortcutsBorderColour'
date: 'git Last Modified'
---

# Couleur de la bordure

La classe couleur de la bordure définit la propriété `border-colour`. Elle détermine la couleur de la bordure d’un élément.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Couleur par défaut<br/>`b-default`

{% shortcutPreview "p-150" %}

<p class="b-sm b-default">
  Cet élément a la couleur de bordure par défaut.
</p>
{% endshortcutPreview %}

### Actuelle<br/>`b-current`

{% shortcutPreview "p-150" %}

<p class="b-sm b-current" style="color: var(--gcds-color-blue-750)">
  Cet élément a une couleur de bordure basée sur la couleur actuelle.
</p>
{% endshortcutPreview %}

### Sombre<br/>`b-dark`

{% shortcutPreview "p-150" %}

<p class="b-sm b-dark">
  Cet élément a une couleur de bordure sombre.
</p>
{% endshortcutPreview %}

### Héritée<br/>`b-inherit`

{% shortcutPreview "example-items-padding" %}

<div style="border-color: var(--gcds-danger-border)">
  <p class="b-sm b-inherit">
    Cet élément hérite la couleur de bordure de l’élément parent.
  </p>
</div>
{% endshortcutPreview %}

### Claire<br/>`b-light`

{% shortcutPreview "p-250 example-items-padding" %}

<div class="bg-dark text-light">
  <p class="b-sm b-light">
    Cet élément a une couleur de bordure claire.
  </p>
</div>
{% endshortcutPreview %}

### Transparente<br/>`b-transparent`

{% shortcutPreview "p-150" %}

<p class="b-sm b-transparent">
  Cet élément a une couleur de bordure transparente.
</p>
{% endshortcutPreview %}
