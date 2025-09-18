---
title: Taille de l'icône
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsIconSizeFR
  title: Taille de l'icône
  locale: fr
  parent: shortcutsFR
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
shortcutsPartialClass: 'icon-text'
translationKey: 'shortcutsIconSize'
date: 'git Last Modified'
---

# Taille de l'icône

La classe taille de l'icône définit les propriétés `font-size` et `line-height` des icônes. Elle détermine la taille de <gcds-link href="{{ links.icon }}">gcds-icons</gcds-link>.

{% include "partials/shortcuts-table.njk" %}

## Examples

### H1<br/>`icon-h1`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-h1"></span> La taille de cette icône correspond à la taille de police et à la hauteur de ligne du titre H1.
</p>
{% endshortcutPreview %}

### H2<br/>`icon-h2`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-h2"></span> La taille de cette icône correspond à la taille de police et à la hauteur de ligne du titre H2.
</p>
{% endshortcutPreview %}

### H3<br/>`icon-h3`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-h3"></span> La taille de cette icône correspond à la taille de police et à la hauteur de ligne du titre H3.
</p>
{% endshortcutPreview %}

### H4<br/>`icon-h4`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-h4"></span> La taille de cette icône correspond à la taille de police et à la hauteur de ligne du titre H4.
</p>
{% endshortcutPreview %}

### H5<br/>`icon-h5`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-h5"></span> La taille de cette icône correspond à la taille de police et à la hauteur de ligne du titre H5.
</p>
{% endshortcutPreview %}

### H6<br/>`icon-h6`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-h6"></span> La taille de cette icône correspond à la taille de police et à la hauteur de ligne du titre H6.
</p>
{% endshortcutPreview %}

### Texte<br/>`icon-text`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-text"></span> La taille de cette icône correspond à la taille de police et à la hauteur de ligne du texte normale.
</p>
{% endshortcutPreview %}

### Petit texte<br/>`icon-small-text`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p>
  <span class="gcds-icon-info-circle icon-small-text"></span> La taille de cette icône correspond à la taille de police et à la hauteur de ligne du petite texte.
</p>
{% endshortcutPreview %}

### Inherit<br/>`icon-inherit`

{% shortcutPreview  "d-flex align-items-center gap-100" %}

<p class="font-text-small">
  <span class="gcds-icon-info-circle icon-inherit"></span> Cette icône hérite la taille de police et la hauteur de ligne du petit texte de l'élément parent.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
