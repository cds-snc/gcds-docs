---
title: Border radius
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBorderRadiusEN
  title: Border radius
  locale: en
  parent: shortcutsBackgroundBordersEN
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
shortcutsPartialClass: 'b-radius-md'
translationKey: 'shortcutsBorderRadius'
date: 'git Last Modified'
---

# Border radius

The border radius class sets the `border-radius` property. It controls how round the corners of an element’s border appear.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Small<br/>`b-radius-sm`

{% shortcutPreview "bg-primary text-light p-150" %}

<p class="b-radius-sm">
  This element has a small border radius.
</p>
{% endshortcutPreview %}

### Medium<br/>`b-radius-md`

{% shortcutPreview "bg-primary text-light p-150" %}

<p class="b-radius-md">
  This element has a medium border radius.
</p>
{% endshortcutPreview %}

### Large<br/>`b-radius-lg`

{% shortcutPreview "bg-primary text-light p-150" %}

<p class="b-radius-lg">
  This element has a large border radius.
</p>
{% endshortcutPreview %}

### Extra large<br/>`b-radius-xl`

{% shortcutPreview "d-flex align-items-center justify-content-center bg-primary text-light p-650 example-border-radius" %}

<p class="b-radius-xl">
  This element has an extra large border radius.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
