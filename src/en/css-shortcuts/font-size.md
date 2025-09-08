---
title: Font size - CSS Shortcuts
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontSizeEN
  title: Font size - CSS Shortcuts
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'font-size-h1'
    style: |
      font-size: var(--gcds-font-sizes-h1);

      @media only screen and (width < 48em) {
        font-size: var(--gcds-font-sizes-h1-mobile);
      }
  - class: 'font-size-h2'
    style: |
      font-size: var(--gcds-font-sizes-h2);

      @media only screen and (width < 48em) {
        font-size: var(--gcds-font-sizes-h2-mobile);
      }
  - class: 'font-size-h3'
    style: |
      font-size: var(--gcds-font-sizes-h3);

      @media only screen and (width < 48em) {
        font-size: var(--gcds-font-sizes-h3-mobile);
      }
  - class: 'font-size-h4'
    style: |
      font-size: var(--gcds-font-sizes-h4);

      @media only screen and (width < 48em) {
        font-size: var(--gcds-font-sizes-h4-mobile);
      }
  - class: 'font-size-h5'
    style: |
      font-size: var(--gcds-font-sizes-h5);

      @media only screen and (width < 48em) {
        font-size: var(--gcds-font-sizes-h5-mobile);
      }
  - class: 'font-size-h6'
    style: |
      font-size: var(--gcds-font-sizes-h6);

      @media only screen and (width < 48em) {
        font-size: var(--gcds-font-sizes-h6-mobile);
      }
  - class: 'font-size-text'
    style: |
      font-size: var(--gcds-font-sizes-text);

      @media only screen and (width < 48em) {
        font-size: var(--gcds-font-sizes-text-mobile);
      }
  - class: 'font-size-text-small'
    style: |
      font-size: var(--gcds-font-sizes-text-small);

      @media only screen and (width < 48em) {
        font-size: var(--gcds-font-sizes-text-small-mobile);
      }
permalink: /en/css-shortcuts/font-size
translationKey: 'shortcutsFontSize'
date: 'git Last Modified'
---

# Font size

The font size class sets the `font-size` property. It controls how big or small text elements appear on the page.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text>In most cases you do not need to use this class. Body text and heading elements are <gcds-link href="{{ links.typography }}">styled to match GCDS by default</gcds-link>. Use semantic HTML tags , like <code>h1</code>, <code>h2</code> whenever possible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### H1<br/>`font-size-h1`

{% shortcutPreview %}

<p class="font-size-h1">
  This element uses the font size intended for an H1.
</p>
{% endshortcutPreview %}

### H2<br/>`font-size-h2`

{% shortcutPreview %}

<p class="font-size-h2">
  This element uses the font size intended for an H2.
</p>
{% endshortcutPreview %}

### H3<br/>`font-size-h3`

{% shortcutPreview %}

<p class="font-size-h3">
  This element uses the font size intended for an H3.
</p>
{% endshortcutPreview %}

### H4<br/>`font-size-h4`

{% shortcutPreview %}

<p class="font-size-h4">
  This element uses the font size intended for an H4.
</p>
{% endshortcutPreview %}

### H5<br/>`font-size-h5`

{% shortcutPreview %}

<p class="font-size-h5">
  This element uses the font size intended for an H5.
</p>
{% endshortcutPreview %}

### H6<br/>`font-size-h6`

{% shortcutPreview %}

<p class="font-size-h6">
  This element uses the font size intended for an H6.
</p>
{% endshortcutPreview %}

### Text<br/>`font-size-text`

{% shortcutPreview %}

<p class="font-size-text">
  This element uses the font size intended for regular text.
</p>
{% endshortcutPreview %}

### Small text<br/>`font-text-small`

{% shortcutPreview %}

<p class="font-text-small">
  This element uses the font size intended for small text.
</p>
{% endshortcutPreview %}
