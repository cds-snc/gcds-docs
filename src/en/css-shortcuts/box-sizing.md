---
title: Box sizing - CSS Shortcuts
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBoxSizingEN
  title: Box sizing
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'box-border'
    style: 'box-sizing: border-box;'
  - class: 'box-content'
    style: 'box-sizing: content-box;'
permalink: /en/css-shortcuts/box-sizing
translationKey: 'shortcutsBoxSizing'
date: 'git Last Modified'
---

# Box sizing

The box sizing class sets the `box-sizing` property. It specifies if the height and width of an element includes borders and padding.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Border<br/>`box-border`

{% shortcutPreview "container-xs p-600 b-lg b-default bg-light mb-0" %}

<p class="box-border">
  The size of this element includes the content, border, and padding.
</p>
{% endshortcutPreview %}

### Content<br/>`box-content`

{% shortcutPreview "container-xs p-600 b-lg b-default bg-light mb-0" %}

<p class="box-content">
  The size of this element includes the content only.
</p>
{% endshortcutPreview %}
