---
title: Font weight
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontWeightEN
  title: Font weight
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'font-regular'
    style: 'font-weight: var(--gcds-font-weights-regular);'
  - class: 'font-light'
    style: 'font-weight: var(--gcds-font-weights-light);'
  - class: 'font-medium'
    style: 'font-weight: var(--gcds-font-weights-medium);'
  - class: 'font-semibold'
    style: 'font-weight: var(--gcds-font-weights-semibold);'
  - class: 'font-bold'
    style: 'font-weight: var(--gcds-font-weights-bold);'
shortcutsPartialClass: 'font-medium'
translationKey: 'shortcutsFontWeight'
date: 'git Last Modified'
---

# Font weight

The font weight class sets the `font-weight` property. It controls how bold text is.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text><gcds-link href="{{ links.typographyFontWeight }}">View GCDS typography guidance</gcds-link> to choose the right font weight for your context.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Regular<br/>`font-regular`

{% shortcutPreview %}

<p class="font-regular">
  This element uses the default font weight.
</p>
{% endshortcutPreview %}

### Light<br/>`font-light`

{% shortcutPreview %}

<p class="font-light">
  This element uses a light font weight.
</p>
{% endshortcutPreview %}

### Medium<br/>`font-medium`

{% shortcutPreview %}

<p class="font-medium">
  This element uses a medium font weight.
</p>
{% endshortcutPreview %}

### Semi-bold<br/>`font-semibold`

{% shortcutPreview %}

<p class="font-semibold">
  This element uses a semi-bold font weight.
</p>
{% endshortcutPreview %}

### Bold<br/>`font-bold`

{% shortcutPreview %}

<p>This element uses a <span class="font-bold"> bold</span> font weight.</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
