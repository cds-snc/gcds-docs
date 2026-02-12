---
title: Font family
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontFamilyEN
  title: Font family
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'font-family-heading'
    style: 'font-family: var(--gcds-font-families-heading);'
  - class: 'font-family-body'
    style: 'font-family: var(--gcds-font-families-body);'
  - class: 'font-family-monospace'
    style: 'font-family: var(--gcds-font-families-monospace);'
shortcutsPartialClass: 'font-family-body'
translationKey: 'shortcutsFontFamily'
date: 'git Last Modified'
---

# Font family

The font family class sets the `font-family` property. It controls the typeface of a text element.

<gcds-notice notice-role="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text>In most cases you do not need to use this class. Body text and heading elements are <gcds-link href="{{ links.typography }}">styled to match GCDS by default</gcds-link>. Use semantic HTML tags , like <code>h1</code>, <code>h2</code> whenever possible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Heading<br/>`font-family-heading`

{% shortcutPreview 'mt-0 mb-0' %}

<h4 class="font-family-heading">
  This element uses the heading font family.
</h4>
{% endshortcutPreview %}

### Body<br/>`font-family-body`

{% shortcutPreview %}

<p class="font-family-body">
  This element uses the body font family.
</p>
{% endshortcutPreview %}

### Monospace<br/>`font-family-monospace`

{% shortcutPreview %}

<code class="font-family-monospace">
  This element uses the  monospace font family.
</code>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
