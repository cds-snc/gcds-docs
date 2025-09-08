---
title: Display - CSS Shortcuts
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsDisplayEN
  title: Display - CSS Shortcuts
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'd-block'
    style: 'display: block;'
  - class: 'd-inline'
    style: 'display: inline;'
  - class: 'd-inline-block'
    style: 'display: inline-block;'
  - class: 'd-flex'
    style: 'display: flex;'
  - class: 'd-inline-flex'
    style: 'display: inline-flex;'
  - class: 'd-grid'
    style: 'display: grid;'
  - class: 'd-inline-grid'
    style: 'display: inline-grid;'
  - class: 'd-table'
    style: 'display: table;'
  - class: 'd-inline-table'
    style: 'display: inline-table;'
  - class: 'd-none'
    style: 'display: none;'
permalink: /en/css-shortcuts/display
translationKey: 'shortcutsDisplay'
date: 'git Last Modified'
---

# Display

The display class sets the `display` property. It changes how containers are arranged on a page.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Block<br/>`d-block`

This element is a block container. It starts on a new line and takes up the whole width.

{% shortcutPreview "example-display example-styled-items example-items-with-margin" %}

<div>
  <p class="d-block">1</p>
  <p class="d-block">2</p>
  <p class="d-block">3</p>
</div>
{% endshortcutPreview %}

### Inline<br/>`d-inline`

This element is an inline container, but height and width properties will be ignored.

{% shortcutPreview "example-display example-styled-items example-items-with-margin" %}

<div>
  <p class="d-inline" style="width: 10rem">1</p>
  <p class="d-inline" style="width: 10rem">2</p>
  <p class="d-inline" style="width: 10rem">3</p>
</div>
{% endshortcutPreview %}

### Inline block<br/>`d-inline-block`

This element is an inline block and height and width properties can be applied.

{% shortcutPreview "example-display example-styled-items example-items-with-margin" %}

<div>
  <p class="d-inline-block" style="width: 10rem">1</p>
  <p class="d-inline-block" style="width: 10rem">2</p>
  <p class="d-inline-block" style="width: 10rem">3</p>
</div>
{% endshortcutPreview %}

### Flex<br/>`d-flex`

This element is a block-level flex container.

{% shortcutPreview "example-display example-styled-items" %}

<div class="d-flex gap-300">
  <p class="flex-1">1</p>
  <p class="flex-1">2</p>
  <p class="flex-1">3</p>
</div>
{% endshortcutPreview %}

### Inline flex<br/>`d-inline-flex`

This element is an inline flex container.

{% shortcutPreview "example-display example-styled-items" %}

<div class="d-inline-flex gap-300">
  <p class="flex-1">1</p>
  <p class="flex-1">2</p>
  <p class="flex-1">3</p>
</div>
{% endshortcutPreview %}

### Grid<br/>`d-grid`

This element is a block-level grid container.

{% shortcutPreview "example-display example-styled-items" %}

<div class="d-grid grid-cols-3 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Inline grid<br/>`d-inline-grid`

This element is an inline grid container.

{% shortcutPreview "example-display example-styled-items" %}

<div class="d-inline-grid grid-cols-3 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Table<br/>`d-table`, `d-table-row`, `d-table-cell`

These elements behaves like their matching HTML table elements. Use semantic HTML tags , like `table`, `tr`, and `td` whenever possible.

{% shortcutPreview "example-table" %}

<div class="d-table">
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1 + longer content</div>
    <div class="d-table-cell">Cell 2</div>
    <div class="d-table-cell">Cell 3</div>
    <div class="d-table-cell">Cell 4</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1</div>
    <div class="d-table-cell">Cell 2</div>
    <div class="d-table-cell">Cell 3 + longer content</div>
    <div class="d-table-cell">Cell 4</div>
  </div>
</div>
{% endshortcutPreview %}

### Inline table<br/>`d-inline-table`

This element behaves like an inline table element.

{% shortcutPreview "example-table" %}

<div class="d-inline-table">
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1 + longer content</div>
    <div class="d-table-cell">Cell 2</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1</div>
    <div class="d-table-cell">Cell 2 + longer content</div>
  </div>
</div>
<div class="d-inline-table">
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1 + longer content</div>
    <div class="d-table-cell">Cell 2</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1</div>
    <div class="d-table-cell">Cell 2 + longer content</div>
  </div>
</div>
{% endshortcutPreview %}

### None<br/>`d-none`

{% shortcutPreview %}

<p class="d-none">
  This element will be completely removed.
</p>
{% endshortcutPreview %}
