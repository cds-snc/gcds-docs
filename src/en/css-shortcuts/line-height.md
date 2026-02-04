---
title: Line height
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsLineHeightEN
  title: Line height
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'line-h1'
    style: 'line-height: var(--gcds-line-heights-h1);'
  - class: 'line-h2'
    style: 'line-height: var(--gcds-line-heights-h2);'
  - class: 'line-h3'
    style: 'line-height: var(--gcds-line-heights-h3);'
  - class: 'line-h4'
    style: 'line-height: var(--gcds-line-heights-h4);'
  - class: 'line-h5'
    style: 'line-height: var(--gcds-line-heights-h5);'
  - class: 'line-h6'
    style: 'line-height: var(--gcds-line-heights-h6);'
  - class: 'line-text'
    style: 'line-height: var(--gcds-line-heights-text);'
  - class: 'line-text-small'
    style: 'line-height: var(--gcds-line-heights-text-small);'
shortcutsPartialClass: 'line-text'
translationKey: 'shortcutsLineHeight'
date: 'git Last Modified'
---

# Line height

The line height class sets the `line-height` property. It controls the vertical spacing between lines of text.

<gcds-notice notice-role="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text>In most cases you do not need to use this class. Body text and heading elements are <gcds-link href="{{ links.typography }}">styled to match GCDS by default</gcds-link>. Use semantic HTML tags , like <code>h1</code>, <code>h2</code> whenever possible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### H1<br/>`line-h1`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h1">
  This element uses line height intended for H1 headings.
</p>
{% endshortcutPreview %}

### H2<br/>`line-h2`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h2">
  This element uses line height intended for H2 headings.
</p>
{% endshortcutPreview %}

### H3<br/>`line-h3`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h3">
  This element uses line height intended for H3 headings.
</p>
{% endshortcutPreview %}

### H4<br/>`line-h4`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h4">
  This element uses line height intended for H4 headings.
</p>
{% endshortcutPreview %}

### H5<br/>`line-h5`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h5">
  This element uses line height intended for H5 headings.
</p>
{% endshortcutPreview %}

### H6<br/>`line-h6`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h6">
  This element uses line height intended for H6 headings.
</p>
{% endshortcutPreview %}

### Text<br/>`line-text`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-text">
  This element uses line height intended for body text.
</p>
{% endshortcutPreview %}

### Small text<br/>`line-text-small`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-text-small">
  This element uses line height intended for smaller body text.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
