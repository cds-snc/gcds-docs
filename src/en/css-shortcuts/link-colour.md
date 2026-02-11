---
title: Link colour
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsLinkColourEN
  title: Link colour
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'link-default'
    style: 'color: var(--gcds-link-default);'
  - class: 'link-hover'
    style: 'color: var(--gcds-link-hover);'
  - class: 'link-inherit'
    style: 'color: var(--gcds-link-inherit);'
  - class: 'link-light'
    style: 'color: var(--gcds-link-light);'
shortcutsPartialClass: 'link-hover'
translationKey: 'shortcutsLinkColour'
date: 'git Last Modified'
---

# Link colour

The link colour class sets the `color` property. It controls the colour of a link.

<gcds-notice notice-role="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text><gcds-link href="{{ links.colourLink }}">View GCDS colour guidance</gcds-link> to choose the right link colour for your context.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Default<br/>`link-default`

{% shortcutPreview %}

<a href="#" class="link-default">
  This link uses the default link colour.
</a>
{% endshortcutPreview %}

### Hover<br/>`link-hover`

{% shortcutPreview %}

<a href="#" class="link-hover">
  This link uses the hover link colour on hover.
</a>
{% endshortcutPreview %}

### Inherit<br/>`link-inherit`

{% shortcutPreview %}

<div style="color: var(--gcds-color-red-700);">
  <a href="#" class="link-inherit">
    This link inherits its colour from the parent element.
  </a>
</div>
{% endshortcutPreview %}

### Light<br/>`link-light`

{% shortcutPreview "bg-dark p-150" %}

<a href="#" class="link-light">
  This link uses the light link colour.
</a>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
