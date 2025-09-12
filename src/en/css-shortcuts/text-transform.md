---
title: Text transform
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextTransformEN
  title: Text transform
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'text-capitalize'
    style: 'text-transform: capitalize;'
  - class: 'text-lowercase'
    style: 'text-transform: lowercase;'
  - class: 'text-uppercase'
    style: 'text-transform: uppercase;'
  - class: 'text-none'
    style: 'text-transform: none;'
translationKey: 'shortcutsTextTransform'
date: 'git Last Modified'
---

# Text transform

The text transform class sets the `text-transform` property. It controls the capitalization patterns of text.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Capitalize<br/>`text-capitalize`

{% shortcutPreview %}

<p class="text-capitalize">
  This text has the first letter of each word capitalized.
</p>
{% endshortcutPreview %}

### Lowercase<br/>`text-lowercase`

{% shortcutPreview %}

<p class="text-lowercase">
  This text has all characters in lowercase.
</p>
{% endshortcutPreview %}

### Uppercase<br/>`text-uppercase`

{% shortcutPreview %}

<p class="text-uppercase">
  This text has all characters in uppercase.
</p>
{% endshortcutPreview %}

### None<br/>`text-none`

{% shortcutPreview %}

<p class="text-none">
  This text is displayed as originally entered. Any text transformations are removed.
</p>
{% endshortcutPreview %}
