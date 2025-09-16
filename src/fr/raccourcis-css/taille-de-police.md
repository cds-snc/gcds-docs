---
title: Taille de police
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontSizeFR
  title: Taille de police
  locale: fr
  parent: shortcutsTypographyFR
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
translationKey: 'shortcutsFontSize'
date: 'git Last Modified'
---

# Taille de police

La classe taille de police définit la propriété `font-size`. Elle détermine la taille des éléments de texte sur la page.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text>Dans la plupart des cas, il n’est pas nécessaire d'utiliser cette classe. Par défaut, le style du corps du texte et des éléments de titre correspondent <gcds-link href="{{ links.typography }}">à ceux de Système de design GC</gcds-link>. Utilisez des balises HTML sémantiques, comme <code>h1</code> et <code>h2</code> lorsque possible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### H1<br/>`font-size-h1`

{% shortcutPreview %}

<p class="font-size-h1">
  Cet élément utilise la taille de police prévue pour un titre H1.
</p>
{% endshortcutPreview %}

### H2<br/>`font-size-h2`

{% shortcutPreview %}

<p class="font-size-h2">
  Cet élément utilise la taille de police prévue pour un titre H2.
</p>
{% endshortcutPreview %}

### H3<br/>`font-size-h3`

{% shortcutPreview %}

<p class="font-size-h3">
  Cet élément utilise la taille de police prévue pour un titre H3.
</p>
{% endshortcutPreview %}

### H4<br/>`font-size-h4`

{% shortcutPreview %}

<p class="font-size-h4">
  Cet élément utilise la taille de police prévue pour un titre H4.
</p>
{% endshortcutPreview %}

### H5<br/>`font-size-h5`

{% shortcutPreview %}

<p class="font-size-h5">
  Cet élément utilise la taille de police prévue pour un titre H5.
</p>
{% endshortcutPreview %}

### H6<br/>`font-size-h6`

{% shortcutPreview %}

<p class="font-size-h6">
  Cet élément utilise la taille de police prévue pour un titre H6.
</p>
{% endshortcutPreview %}

### Texte<br/>`font-size-text`

{% shortcutPreview %}

<p class="font-size-text">
  Cet élément utilise la taille de police prévue pour du texte normal.
</p>
{% endshortcutPreview %}

### Petit texte<br/>`font-text-small`

{% shortcutPreview %}

<p class="font-text-small">
  Cet élément utilise la taille de police prévue pour du petit texte.
</p>
{% endshortcutPreview %}
