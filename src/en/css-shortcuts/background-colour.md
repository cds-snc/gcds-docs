---
title: Background colour
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBackgroundColourEN
  title: Background colour
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'bg-primary'
    style: 'background-color: var(--gcds-bg-primary);'
  - class: 'bg-active'
    style: 'background-color: var(--gcds-active-background);'
  - class: 'bg-black'
    style: 'background-color: var(--gcds-color-grayscale-1000);'
  - class: 'bg-current'
    style: 'background-color: currentColor;'
  - class: 'bg-danger'
    style: 'background-color: var(--gcds-danger-background);'
  - class: 'bg-dark'
    style: 'background-color: var(--gcds-bg-dark);'
  - class: 'bg-disabled'
    style: 'background-color: var(--gcds-disabled-background);'
  - class: 'bg-inherit'
    style: 'background-color: inherit;'
  - class: 'bg-light'
    style: 'background-color: var(--gcds-bg-light);'
  - class: 'bg-transparent'
    style: 'background-color: transparent;'
  - class: 'bg-white'
    style: 'background-color: var(--gcds-bg-white);'
shortcutsPartialClass: 'bg-light'
translationKey: 'shortcutsBackgroundColour'
date: 'git Last Modified'
---

# Background colour

The background colour class sets the `background-color` property. It controls the colour of an element’s background.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text><gcds-link href="{{ links.colourBackground }}">View GCDS colour guidance</gcds-link> to choose the right background colour for your context.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Primary<br/>`bg-primary`

{% shortcutPreview "p-150" %}

<p class="bg-primary text-light">
  This element uses the primary Government of Canada accent colour for its background.
</p>
{% endshortcutPreview %}

### Active<br/>`bg-active`

{% shortcutPreview "p-150" %}

<p class="bg-active text-light">
  This element uses the active background colour.
</p>
{% endshortcutPreview %}

### Black<br/>`bg-black`

{% shortcutPreview "p-150" %}

<p class="bg-black text-light">
  This element uses the black background colour.
</p>
{% endshortcutPreview %}

### Current<br/>`bg-current`

{% shortcutPreview "p-150" %}

<div class="bg-current" style="color: var(--gcds-color-blue-750)">
  <p class="text-light">
    This element uses the background colour based on the current colour property.
  </p>
</div>
{% endshortcutPreview %}

### Danger<br/>`bg-danger`

{% shortcutPreview "p-150" %}

<p class="bg-danger">
  This element uses the danger background colour.
</p>
{% endshortcutPreview %}

### Dark<br/>`bg-dark`

{% shortcutPreview "p-150" %}

<p class="bg-dark text-light">
  This element uses the dark background colour.
</p>
{% endshortcutPreview %}

### Disabled<br/>`bg-disabled`

{% shortcutPreview "p-150" %}

<p class="bg-disabled">
  This element uses the disabled background colour.
</p>
{% endshortcutPreview %}

### Inherit<br/>`bg-inherit`

{% shortcutPreview "p-150" %}

<div class="bg-danger">
  <p class="bg-inherit">
    This element inherits its parent's background colour.
  </p>
</div>
{% endshortcutPreview %}

### Light<br/>`bg-light`

{% shortcutPreview "p-150" %}

<p class="bg-light">
  This element uses the light background colour.
</p>
{% endshortcutPreview %}

### Transparent<br/>`bg-transparent`

{% shortcutPreview "p-150" %}

<p class="bg-transparent">
  This element has a transparent background colour.
</p>
{% endshortcutPreview %}

### White<br/>`bg-white`

{% shortcutPreview "p-150" %}

<div class="bg-dark">
  <p class="bg-white">
    This element has a white background colour.
  </p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
