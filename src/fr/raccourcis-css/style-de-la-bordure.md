---
title: Style de la bordure
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBorderStyleFR
  title: Style de la bordure
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'b-solid'
    style: 'border-style: solid;'
  - class: 'b-dashed'
    style: 'border-style: dashed;'
  - class: 'b-dotted'
    style: 'border-style: dotted;'
  - class: 'b-none'
    style: 'border-style: none;'
translationKey: 'shortcutsBorderStyle'
date: 'git Last Modified'
---

# Style de la bordure

La classe style de bordure définit la propriété `border-style`. Elle détermine le style de ligne pour tous les côtés de la bordure d’un élément.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Solide<br/>`b-solid`

{% shortcutPreview "p-150" %}

<p class="b-md b-solid">
  Cet élément a un style de bordure solide.
</p>
{% endshortcutPreview %}

### Trait<br/>`b-dashed`

{% shortcutPreview "p-150" %}

<p class="b-md b-dashed">
  Cet élément a un style de bordure à tirets.
</p>
{% endshortcutPreview %}

### Pointillé<br/>`b-dotted`

{% shortcutPreview "p-150" %}

<p class="b-md b-dotted">
  Cet élément a un style de bordure pointillé.
</p>
{% endshortcutPreview %}

### Aucun<br/>`b-none`

{% shortcutPreview "p-150" %}

<p class="b-md b-none">
  Cet élément n’a pas de bordure.
</p>
{% endshortcutPreview %}
