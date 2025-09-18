---
title: Police
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontFR
  title: Police
  locale: fr
  parent: shortcutsFR
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

# Police

La classe police définit la propriété `font`. Détermine le style de police, la taille, le poids, la famille et la hauteur de ligne d'un élément de texte.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text>Dans la plupart des cas, il n’est pas nécessaire d'utiliser cette classe. Par défaut, le style du corps du texte et des éléments de titre correspondent <gcds-link href="{{ links.typography }}">à ceux de Système de design GC</gcds-link>. Utilisez des balises HTML sémantiques, comme <code>h1</code> et <code>h2</code> orsque possible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### H1<br/>`font-h1`

{% shortcutPreview %}

<p class="font-h1">
  Cet élément utilise les styles de police prévus pour un titre H1.
</p>
{% endshortcutPreview %}

### H2<br/>`font-h2`

{% shortcutPreview %}

<p class="font-h2">
  Cet élément utilise les styles de police prévus pour un titre H2.
</p>
{% endshortcutPreview %}

### H3<br/>`font-h3`

{% shortcutPreview %}

<p class="font-h3">
  Cet élément utilise les styles de police prévus pour un titre H3.
</p>
{% endshortcutPreview %}

### H4<br/>`font-h4`

{% shortcutPreview %}

<p class="font-h4">
  Cet élément utilise les styles de police prévus pour un titre H4.
</p>
{% endshortcutPreview %}

### H5<br/>`font-h5`

{% shortcutPreview %}

<p class="font-h5">
  Cet élément utilise les styles de police prévus pour un titre H5.
</p>
{% endshortcutPreview %}

### H6<br/>`font-h6`

{% shortcutPreview %}

<p class="font-h6">
  Cet élément utilise les styles de police prévus pour un titre H6.
</p>
{% endshortcutPreview %}

### Text<br/>`font-text`

{% shortcutPreview %}

<p class="font-text">
  Cet élément utilise les styles de police prévus pour du texte normal.
</p>
{% endshortcutPreview %}

### Small text<br/>`font-text-small`

{% shortcutPreview %}

<p class="font-text-small">
  Cet élément utilise les styles de police prévus pour du petit texte.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
