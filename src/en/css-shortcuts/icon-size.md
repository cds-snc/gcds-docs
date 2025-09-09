---
title: Icon size
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsIconSizeEN
  title: Icon size
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'icon-h1'
    style: |
      font-size: var(--gcds-font-sizes-h1);
      line-height: var(--gcds-line-heights-h1);

      @media only screen and (width < 48em) {
        font-size: var(--gcds font sizes-h1-mobile);
        line-height: var(--gcds-line-heights-h1-mobile);
      }
  - class: 'icon-h2'
    style: |
      font-size: var(--gcds-font-sizes-h2);
      line-height: var(--gcds-line-heights-h2);

      @media only screen and (width < 48em) {
        font-size: var(--gcds font sizes-h2-mobile);
        line-height: var(--gcds-line-heights-h2-mobile);
      }
  - class: 'icon-h3'
    style: |
      font-size: var(--gcds-font-sizes-h3);
      line-height: var(--gcds-line-heights-h3);

      @media only screen and (width < 48em) {
        font-size: var(--gcds font sizes-h3-mobile);
        line-height: var(--gcds-line-heights-h3-mobile);
      }
  - class: 'icon-h4'
    style: |
      font-size: var(--gcds-font-sizes-h4);
      line-height: var(--gcds-line-heights-h4);

      @media only screen and (width < 48em) {
        font-size: var(--gcds font sizes-h4-mobile);
        line-height: var(--gcds-line-heights-h4-mobile);
      }
  - class: 'icon-h5'
    style: |
      font-size: var(--gcds-font-sizes-h5);
      line-height: var(--gcds-line-heights-h5);

      @media only screen and (width < 48em) {
        font-size: var(--gcds font sizes-h5-mobile);
        line-height: var(--gcds-line-heights-h5-mobile);
      }
  - class: 'icon-h6'
    style: |
      font-size: var(--gcds-font-sizes-h6);
      line-height: var(--gcds-line-heights-h6);

      @media only screen and (width < 48em) {
        font-size: var(--gcds font sizes-h6-mobile);
        line-height: var(--gcds-line-heights-h6-mobile);
      }
  - class: 'icon-text'
    style: |
      font-size: var(--gcds-font-sizes-text);
      line-height: var(--gcds-line-heights-text);

      @media only screen and (width < 48em) {
        font-size: var(--gcds font sizes-text-mobile);
        line-height: var(--gcds-line-heights-text-mobile);
      }
  - class: 'icon-text-small'
    style: |
      font-size: var(--gcds-font-sizes-text-small);
      line-height: var(--gcds-line-heights-text-small);

      @media only screen and (width < 48em) {
        font-size: var(--gcds font sizes-text-small-mobile);
        line-height: var(--gcds-line-heights-text-small-mobile);
      }
  - class: 'icon-inherit'
    style: |
      font-size: inherit;
      line-height: inherit;

      @media only screen and (width < 48em) {
        font-size: inherit;
        line-height: inherit;
      }
translationKey: 'shortcutsIconSize'
date: 'git Last Modified'
---

# Icon size

The icon size class sets the `font-size` and `line-height` properties of icons. It controls the size of <gcds-link href="{{ links.icon }}">gcds-icons</gcds-link>.

{% include "partials/shortcuts-table.njk" %}

## Examples

### H1<br/>`icon-h1`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-h1"></span> This icon matches the H1 font size and line height.
</p>
{% endshortcutPreview %}

### H2<br/>`icon-h2`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-h2"></span> This icon matches the H2 font size and line height.
</p>
{% endshortcutPreview %}

### H3<br/>`icon-h3`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-info-circle icon-h3"></span> This icon matches the H3 font size and line height.
</p>
{% endshortcutPreview %}

### H4<br/>`icon-h4`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-info-circle icon-h4"></span> This icon matches the H4 font size and line height.
</p>
{% endshortcutPreview %}

### H5<br/>`icon-h5`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-info-circle icon-h5"></span> This icon matches the H5 font size and line height.
</p>
{% endshortcutPreview %}

### H6<br/>`icon-h6`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-info-circle icon-h6"></span> This icon matches the H6 font size and line height.
</p>
{% endshortcutPreview %}

### Text<br/>`icon-text`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-info-circle icon-text"></span> This icon matches the text font size and line height.
</p>
{% endshortcutPreview %}

### Small text<br/>`icon-small-text`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-info-circle icon-small-text"></span> This icon matches the small text font size and line height.
</p>
{% endshortcutPreview %}

### Inherit<br/>`icon-inherit`

{% shortcutPreview %}

<p class="font-text-small">
  <span class="gcds-icon-info-circle icon-inherit"></span> This icon inherits the small text font size and line height from the parent.
</p>
{% endshortcutPreview %}
