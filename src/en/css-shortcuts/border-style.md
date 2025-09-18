---
title: Border style
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBorderStyleEN
  title: Border style
  locale: en
  parent: shortcutsBackgroundBordersEN
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
shortcutsPartialClass: 'b-solid'
translationKey: 'shortcutsBorderStyle'
date: 'git Last Modified'
---

# Border style

The border style class sets the `border-style` property. It controls the line style for all sides of an element’s border.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Solid<br/>`b-solid`

{% shortcutPreview "p-150" %}

<p class="b-md b-solid">
  This element has a solid border style.
</p>
{% endshortcutPreview %}

### Dashed<br/>`b-dashed`

{% shortcutPreview "p-150" %}

<p class="b-md b-dashed">
  This element has a dashed border style.
</p>
{% endshortcutPreview %}

### Dotted<br/>`b-dotted`

{% shortcutPreview "p-150" %}

<p class="b-md b-dotted">
  This element has a dotted border style.
</p>
{% endshortcutPreview %}

### None<br/>`b-none`

{% shortcutPreview "p-150" %}

<p class="b-md b-none">
  This element has no border.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
