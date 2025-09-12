---
title: Place items
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPlaceItemsEN
  title: Place items
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'place-items-center'
    style: 'place-items: center;'
  - class: 'place-items-stretch'
    style: 'place-items: stretch;'
  - class: 'place-items-start'
    style: 'place-items: start;'
  - class: 'place-items-end'
    style: 'place-items: end;'
translationKey: 'shortcutsPlaceItems'
date: 'git Last Modified'
---

# Place items

The place items class sets the `place-items` property. It is a shorthand for setting the cross axis and the main axis. It controls how items are aligned inside their grid areas along both axes in a grid container.

<gcds-notice type="info" notice-title-tag="h2" notice-title="No effect in flexbox">
  <gcds-text>In flexbox, <code>justify-items</code> is ignored, so <code>place-items</code> has no effect.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Centre<br/>`place-items-center`

These items are centred both vertically and horizontally within their grid areas.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-items-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Stretch<br/>`place-items-stretch`

These items stretch to fill their grid areas both horizontally and vertically, if no fixed size is set.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-items-stretch">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Start<br/>`place-items-start`

These items align to the start edge of both axes within their grid areas.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-items-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### End<br/>`place-items-end`

These items align to the end edge of both axes within their grid areas.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-items-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}
