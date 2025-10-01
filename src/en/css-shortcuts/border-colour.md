---
title: Border colour
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBorderColourEN
  title: Border colour
  locale: en
  parent: shortcutsBackgroundBordersEN
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
shortcutsPartialClass: 'b-default'
translationKey: 'shortcutsBorderColour'
date: 'git Last Modified'
---

# Border colour

The border colour class sets the `border-colour` property. It controls the colour of an element’s border.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Default<br/>`b-default`

{% shortcutPreview "p-150" %}

<p class="b-sm b-default">
  This element has the default border colour.
</p>
{% endshortcutPreview %}

### Current<br/>`b-current`

{% shortcutPreview "p-150" %}

<p class="b-sm b-current" style="color: var(--gcds-color-blue-750)">
  This element has a border colour based on the current colour.
</p>
{% endshortcutPreview %}

### Dark<br/>`b-dark`

{% shortcutPreview "p-150" %}

<p class="b-sm b-dark">
  This element has a dark border colour.
</p>
{% endshortcutPreview %}

### Inherit<br/>`b-inherit`

{% shortcutPreview "example-items-padding" %}

<div style="border-color: var(--gcds-danger-border)">
  <p class="b-sm b-inherit">
    This element inherits the border colour of the parent.
  </p>
</div>
{% endshortcutPreview %}

### Light<br/>`b-light`

{% shortcutPreview "p-250 example-items-padding" %}

<div class="bg-dark text-light">
  <p class="b-sm b-light">
    This element has a light border colour.
  </p>
</div>
{% endshortcutPreview %}

### Transparent<br/>`b-transparent`

{% shortcutPreview "p-150" %}

<p class="b-sm b-transparent">
  This element has a transparent border colour.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
