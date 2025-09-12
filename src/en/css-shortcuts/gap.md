---
title: Gap
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsGapEN
  title: Gap
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'gap-&lt;value&gt;'
    style: 'gap: var(--gcds-spacing-&lt;value&gt;);'
  - class: 'gap-x-&lt;value&gt;'
    style: 'column-gap: var(--gcds-spacing-&lt;value&gt;);'
  - class: 'gap-y-&lt;value&gt;'
    style: 'row-gap: var(--gcds-spacing-&lt;value&gt;);'
shortcutsDescription: 'The <code>value</code> can be either one of our <a href="/en/styles/spacing/">predefined spacing tokens</a> (<code>0</code> - <code>1250</code>).'
optionalText: 'Add this text'
translationKey: 'shortcutsGap'
date: 'git Last Modified'
---

# Gap

The gap class sets the `gap`, `column-gap` or `row-gap` properties. It controls the spacing between items in a grid or flex container.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Gap<br/>`gap-<value>`

Columns and rows have `--gcds-spacing-400` of space between them.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-2 gap-400">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
</div>
{% endshortcutPreview %}

### Horizontal gap <br/>`gap-x-<value>`

Columns have `--gcds-spacing-400` of space between them.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-2 gap-x-400">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
</div>
{% endshortcutPreview %}

### Vertical gap <br/>`gap-y-<value>`

Rows have `--gcds-spacing-400` of space between them.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-2 gap-y-400">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
</div>
{% endshortcutPreview %}
