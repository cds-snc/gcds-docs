---
title: Justify items
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsJustifyItemsEN
  title: Justify items
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'justify-items-center'
    style: 'justify-items: center;'
  - class: 'justify-items-stretch'
    style: 'justify-items: stretch;'
  - class: 'justify-items-start'
    style: 'justify-items: start;'
  - class: 'justify-items-end'
    style: 'justify-items: end;'
translationKey: 'shortcutsJustifyItems'
date: 'git Last Modified'
---

# Justify items

The justify items class sets the `justify-items` property. It controls how individual items are aligned along the inline (row) axis within their grid areas. It determines the horizontal positioning of content inside each grid cell.

<gcds-notice type="info" notice-title-tag="h2" notice-title="No effect in flexbox">
  <gcds-text>In flexbox, <code>justify-items</code> is ignored, so it has no effect.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Centre<br/>`justify-items-center`

These items are centred horizontally within their grid areas along the inline axis.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 justify-items-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Stretch<br/>`justify-items-stretch`

These items stretch to fill the entire width of their grid areas along the inline axis (default behavior).

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 justify-items-stretch">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Start<br/>`justify-items-start`

These items align to the start edge of their grid areas along the inline axis.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 justify-items-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### End<br/>`justify-items-end`

These items align to the end edge of their grid areas along the inline axis.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 justify-items-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}
