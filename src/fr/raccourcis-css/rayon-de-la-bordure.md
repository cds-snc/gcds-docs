---
title: Rayon de la bordure
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBorderRadiusFR
  title: Rayon de la bordure
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'b-radius-sm'
    style: 'border-radius: 0.125rem;'
  - class: 'b-radius-md'
    style: 'border-radius: 0.375rem;'
  - class: 'b-radius-lg'
    style: 'border-radius: 3rem;'
  - class: 'b-radius-xl'
    style: 'border-radius: 100%;'
translationKey: 'shortcutsBorderRadius'
date: 'git Last Modified'
---

# Rayon de la bordure

La classe rayon de la bordure définit la propriété `border-radius`. Elle détermine le degré d’arrondissement des coins de la bordure d’un élément.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Petit<br/>`b-radius-sm`

{% shortcutPreview "bg-primary text-light p-150" %}

<p class="b-radius-sm">
  Cet élément a un petit rayon de bordure.
</p>
{% endshortcutPreview %}

### Moyen<br/>`b-radius-md`

{% shortcutPreview "bg-primary text-light p-150" %}

<p class="b-radius-md">
  Cet élément a un rayon de bordure moyen.
</p>
{% endshortcutPreview %}

### Grand<br/>`b-radius-lg`

{% shortcutPreview "bg-primary text-light p-150" %}

<p class="b-radius-lg">
  Cet élément a un grand rayon de bordure.
</p>
{% endshortcutPreview %}

### Très grand<br/>`b-radius-xl`

{% shortcutPreview "d-flex align-items-center justify-content-center bg-primary text-light p-650 example-border-radius" %}

<p class="b-radius-xl">
  Cet élément a un rayon de bordure très grand.
</p>
{% endshortcutPreview %}
