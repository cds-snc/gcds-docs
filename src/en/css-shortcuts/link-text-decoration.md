---
title: Link text decoration
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsLinkDecorationEN
  title: Link text decoration
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'link-underline'
    style: |
      text-decoration: underline;
      text-underline-position: under;
  - class: 'link-no-underline'
    style: 'text-decoration: none;'
shortcutsPartialClass: 'link-underline'
translationKey: 'shortcutsLinkDecoration'
date: 'git Last Modified'
---

# Link text decoration

The link text decoration class sets the `text-decoration` property. It adds or removes an underline to a link.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Underline<br/>`link-underline`

{% shortcutPreview %}

<a href="#" class="link-underline">This link is underlined.</a>
{% endshortcutPreview %}

### No underline<br/>`link-no-underline`

{% shortcutPreview %}

<a href="#" class="link-no-underline">This link is not underlined.</a>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
