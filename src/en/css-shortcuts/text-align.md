---
title: Text align - CSS Shortcuts
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextAlignEN
  title: Text align - CSS Shortcuts
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'text-center'
    style: 'text-align: center;'
  - class: 'text-justify'
    style: 'text-align: justify;'
  - class: 'text-left'
    style: 'text-align: left;'
  - class: 'text-right'
    style: 'text-align: right;'
permalink: /en/css-shortcuts/text-align
translationKey: 'shortcutsTextAlign'
date: 'git Last Modified'
---

# Text align

The text align class sets the `text-align` property. It controls the horizontal alignment of text within its container.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Centre<br/>`text-center`

{% shortcutPreview "container-full b-sm b-default p-150" %}

<p class="text-center">
  This text is centred within its container.
</p>
{% endshortcutPreview %}

### Justify<br/>`text-justify`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="text-justify">
  This text is stretched to align evenly along the right and left edges of its container.
</p>
{% endshortcutPreview %}

### Left<br/>`text-left`

{% shortcutPreview "container-full b-sm b-default p-150" %}

<p class="text-left">
  This text is aligned to the left edge of its container.
</p>
{% endshortcutPreview %}

### Right<br/>`text-right`

{% shortcutPreview "container-full b-sm b-default p-150" %}

<p class="text-right">
  This text is aligned to the right edge of its container.
</p>
{% endshortcutPreview %}
