---
title: Font style
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontStyleEN
  title: Font style
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'font-normal'
    style: 'font-style: normal;'
  - class: 'font-italic'
    style: 'font-style: italic;'
shortcutsPartialClass: 'font-italic'
translationKey: 'shortcutsFontStyle'
date: 'git Last Modified'
---

# Font style

The font style class sets the `font-style` property. It adds or removes italic styling of text.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text><gcds-link href="{{ links.typographyFontStyles }}">View GCDS typography guidance</gcds-link> to choose the right font style for your context.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Normal<br/>`font-normal`

{% shortcutPreview %}

<p class="font-normal">
  This element displays text without italic styling and is used in most cases.
</p>
{% endshortcutPreview %}

### Italic<br/>`font-italic`

{% shortcutPreview %}

<p class="font-italic">
  This element displays text with italic styling. It’s used sparingly for short text strings to limit cognitive load.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
