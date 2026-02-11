---
title: Text colour
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextColourEN
  title: Text colour
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'text-primary'
    style: 'color: var(--gcds-text-primary);'
  - class: 'text-secondary'
    style: 'color: var(--gcds-text-secondary);'
  - class: 'text-current'
    style: 'color: currentColor;'
  - class: 'text-light'
    style: 'color: var(--gcds-text-light);'
  - class: 'text-transparent'
    style: 'color: transparent;'
shortcutsPartialClass: 'text-secondary'
translationKey: 'shortcutsTextColour'
date: 'git Last Modified'
---

# Text colour

The text colour class sets the `color` property. It controls the colour of text.

<gcds-notice notice-role="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text><gcds-link href="{{ links.colourText }}">View GCDS colour guidance</gcds-link> to choose the right text colour for your context.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Primary<br/>`text-primary`

{% shortcutPreview %}

<p class="text-primary">
  This text uses the default Government of Canada text colour.
</p>
{% endshortcutPreview %}

### Secondary<br/>`text-secondary`

{% shortcutPreview %}

<p class="text-secondary">
  This text uses the secondary text colour.
</p>
{% endshortcutPreview %}

### Current<br/>`text-current`

{% shortcutPreview "p-150" %}

<div class="bg-primary text-light">
  <p class="text-current">
    This text’s colour is based on the current colour property.
  </p>
</div>
{% endshortcutPreview %}

### Light<br/>`text-light`

{% shortcutPreview "bg-dark p-150" %}

<p class="text-light">
  This is the light text colour.
</p>
{% endshortcutPreview %}

### Transparent<br/>`text-transparent`

{% shortcutPreview %}

<p class="text-transparent">
  This text is invisible, but still accessible to screenreaders.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
