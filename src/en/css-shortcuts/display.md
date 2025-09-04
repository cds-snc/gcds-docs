---
title: Display - CSS Shortcuts
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsDisplayEN
  title: CSS Shortcuts - Display
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

<!-- TODO: Improve examples -->

### Block<br/>`d-block`

{% shortcutPreview %}

<p class="d-block">
  This element is a block container. It starts on a new line and takes up the whole width.
</p>
{% endshortcutPreview %}

### Inline<br/>`d-inline`

{% shortcutPreview %}

<p class="d-inline">
  This element is an inline container, but height and width properties will be ignored.
</p>
{% endshortcutPreview %}

### Inline block<br/>`d-inline-block`

{% shortcutPreview %}

<p class="d-inline-block">
  This element is an inline block and height and width properties can be applied.
</p>
{% endshortcutPreview %}

### Flex<br/>`d-flex`

{% shortcutPreview %}

<p class="d-flex">
  This element is a block-level flex container.
</p>
{% endshortcutPreview %}

### Inline flex<br/>`d-inline-flex`

{% shortcutPreview %}

<p class="d-inline-flex">
  This element is an inline flex container.
</p>
{% endshortcutPreview %}

### Grid<br/>`d-grid`

{% shortcutPreview %}

<p class="d-grid">
  This element is a block-level grid container.
</p>
{% endshortcutPreview %}

### Inline grid<br/>`d-inline-grid`

{% shortcutPreview %}

<p class="d-inline-grid">
  This element is an inline grid container.
</p>
{% endshortcutPreview %}

### Table<br/>`d-table`

{% shortcutPreview %}

<p class="d-table">
  This element behaves like a table element.
</p>
{% endshortcutPreview %}

### Inline table<br/>`d-inline-table`

{% shortcutPreview %}

<p class="d-inline-table">
  This element behaves like an inline table element.
</p>
{% endshortcutPreview %}

### None<br/>`d-none`

{% shortcutPreview %}

<p class="d-none">
  This element will be completely removed.
</p>
{% endshortcutPreview %}
