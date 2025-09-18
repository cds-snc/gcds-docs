---
title: Font
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontEN
  title: Font
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'font-h1'
    style: |
      font: var(--gcds-font-h1);

      @media only screen and (width < 48em) {
        font: var(--gcds-font-h1-mobile);
      }
  - class: 'font-h2'
    style: |
      font: var(--gcds-font-h2);

      @media only screen and (width < 48em) {
        font: var(--gcds-font-h2-mobile);
      }
  - class: 'font-h3'
    style: |
      font: var(--gcds-font-h3);

      @media only screen and (width < 48em) {
        font: var(--gcds-font-h3-mobile);
      }
  - class: 'font-h4'
    style: |
      font: var(--gcds-font-h4);

      @media only screen and (width < 48em) {
        font: var(--gcds-font-h4-mobile);
      }
  - class: 'font-h5'
    style: |
      font: var(--gcds-font-h5);

      @media only screen and (width < 48em) {
        font: var(--gcds-font-h5-mobile);
      }
  - class: 'font-h6'
    style: |
      font: var(--gcds-font-h6);

      @media only screen and (width < 48em) {
        font: var(--gcds-font-h6-mobile);
      }
  - class: 'font-text'
    style: |
      font: var(--gcds-font-text);

      @media only screen and (width < 48em) {
        font: var(--gcds-font-text-mobile);
      }
  - class: 'font-text-small'
    style: |
      font: var(--gcds-font-text-small);

      @media only screen and (width < 48em) {
        font: var(--gcds-font-text-small-mobile);
      }
shortcutsPartialClass: 'font-text'
translationKey: 'shortcutsFont'
date: 'git Last Modified'
---

# Font

The font class sets the `font` property. It controls the font style, size, weight, family and line height of a text element.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text>In most cases you do not need to use this class. Body text and heading elements are <gcds-link href="{{ links.typography }}">styled to match GCDS by default</gcds-link>. Use semantic HTML tags , like <code>h1</code>, <code>h2</code> whenever possible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### H1<br/>`font-h1`

{% shortcutPreview %}

<p class="font-h1">
  This element uses font styles intended for an H1.
</p>
{% endshortcutPreview %}

### H2<br/>`font-h2`

{% shortcutPreview %}

<p class="font-h2">
  This element uses font styles intended for an H2.
</p>
{% endshortcutPreview %}

### H3<br/>`font-h3`

{% shortcutPreview %}

<p class="font-h3">
  This element uses font styles intended for an H3.
</p>
{% endshortcutPreview %}

### H4<br/>`font-h4`

{% shortcutPreview %}

<p class="font-h4">
  This element uses font styles intended for an H4.
</p>
{% endshortcutPreview %}

### H5<br/>`font-h5`

{% shortcutPreview %}

<p class="font-h5">
  This element uses font styles intended for an H5.
</p>
{% endshortcutPreview %}

### H6<br/>`font-h6`

{% shortcutPreview %}

<p class="font-h6">
  This element uses font styles intended for an H6.
</p>
{% endshortcutPreview %}

### Text<br/>`font-text`

{% shortcutPreview %}

<p class="font-text">
  This element uses font styles intended for regular text.
</p>
{% endshortcutPreview %}

### Small text<br/>`font-text-small`

{% shortcutPreview %}

<p class="font-text-small">
  This element uses font styles intended for small text.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
