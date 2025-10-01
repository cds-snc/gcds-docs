---
title: Justify self
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsJustifySelfEN
  title: Justify self
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'justify-self-auto'
    style: 'justify-self: auto;'
  - class: 'justify-self-center'
    style: 'justify-self: center;'
  - class: 'justify-self-stretch'
    style: 'justify-self: stretch;'
  - class: 'justify-self-start'
    style: 'justify-self: start;'
  - class: 'justify-self-end'
    style: 'justify-self: end;'
shortcutsPartialClass: 'justify-self-center'
translationKey: 'shortcutsJustifySelf'
date: 'git Last Modified'
---

# Justify self

The justify self class sets the `justify-self` property. It controls how an individual grid item is aligned along the inline (row) axis within its grid area, allowing it to override the container’s `justify-items` setting for that specific item.

<gcds-notice type="info" notice-title-tag="h2" notice-title="No effect in flexbox">
  <gcds-text>In flexbox, <code>justify-self</code> is ignored, so it has no effect.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Auto<br/>`justify-self-auto`

The item with the `justify-self-auto` class follows the container’s `justify-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-stretch">
  <p>1</p>
  <p class="justify-self-auto">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Centre<br/>`justify-self-center`

The item with the `justify-self-center` class is centred horizontally within its grid area along the inline axis, overriding the container’s `justify-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-stretch">
  <p>1</p>
  <p class="justify-self-center">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Stretch<br/>`justify-self-stretch`

The item with the `justify-self-stretch` class stretches to fill the full width of its grid area along the inline axis (default behaviour), overriding the container’s `justify-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-start">
  <p>1</p>
  <p class="justify-self-stretch">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Start<br/>`justify-self-start`

The item with the `justify-self-start` class aligns to the start edge of its grid area along the inline axis, overriding the container’s `justify-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-stretch">
  <p>1</p>
  <p class="justify-self-start">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### End<br/>`justify-self-end`

The item with the `justify-self-end` class aligns to the end edge of its grid area along the inline axis, overriding the container’s `justify-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-stretch">
  <p>1</p>
  <p class="justify-self-end">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
