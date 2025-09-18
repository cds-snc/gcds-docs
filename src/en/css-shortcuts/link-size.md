---
title: Link size
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsLinkSizeEN
  title: Link size
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'link-size-regular'
    style: |
      font: var(--gcds-link-font-regular-desktop);

      @media only screen and (width < 48em) {
        font: var(--gcds-link-font-regular-mobile);
      }
  - class: 'link-size-small'
    style: |
      font: var(--gcds-link-font-small-desktop);

      @media only screen and (width < 48em) {
        font: var(--gcds-link-font-small-mobile);
      }
  - class: 'link-size-inherit'
    style: |
      font: inherit;

      @media only screen and (width < 48em) {
        font: inherit;
      }
shortcutsPartialClass: 'link-size-inherit'
translationKey: 'shortcutsLinkSize'
date: 'git Last Modified'
---

# Link size

The link size class sets the `font` property. It controls how big or small a link is.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text>In most cases you do not need to use this class. Links are <gcds-link href="{{ links.link }}">styled to match GCDS by default</gcds-link>. Use the semantic HTML tag <code>a</code> or the GCDS component <code>gcds-link</code> whenever possible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Regular<br/>`link-size-regular`

{% shortcutPreview %}

<a href="#" class="link-size-regular">
  This is the regular link size.
</a>
{% endshortcutPreview %}

### Small<br/>`link-size-small`

{% shortcutPreview %}

<a href="#" class="link-size-small">
  This is the small link size.
</a>
{% endshortcutPreview %}

### Inherit<br/>`link-size-inherit`

{% shortcutPreview "mt-0 mb-0" %}

<h4>
  <a href="#" class="link-size-inherit">
    This link inherits its size from the parent element.
  </a>
</h4>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
