---
title: Flex direction
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexDirectionEN
  title: Flex direction
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'flex-col'
    style: 'flex-direction: column;'
  - class: 'flex-col-reverse'
    style: 'flex-direction: column-reverse;'
  - class: 'flex-row'
    style: 'flex-direction: row;'
  - class: 'flex-row-reverse'
    style: 'flex-direction: row-reverse;'
shortcutsPartialClass: 'flex-col'
translationKey: 'shortcutsFlexDirection'
date: 'git Last Modified'
---

# Flex direction

The flex direction class sets the `flex-direction` property. It defines the main axis along which the flex items are placed. This determines if their layout direction is horizontal (row) or vertical (column).

{% include "partials/shortcuts-table.njk" %}

## Examples

### Column<br/>`flex-col`

These items are placed vertically, starting with the first item at the top.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex flex-col">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Reverse column<br/>`flex-col-reverse`

These items are placed vertically, starting with the last item at the top.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex flex-col-reverse">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Row<br/>`flex-row`

These items are placed horizontally, starting with the first item on the left.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex flex-row">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Reverse row<br/>`flex-row-reverse`

These items are placed horizontally, starting with the last item on the left.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex flex-row-reverse">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
