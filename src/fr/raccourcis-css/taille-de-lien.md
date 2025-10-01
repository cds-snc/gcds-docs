---
title: Taille de lien
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsLinkSizeFR
  title: Taille de lien
  locale: fr
  parent: shortcutsTypographyFR
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

# Taille de lien

La classe taille de lien définit la propriété `font`. Elle détermine la taille d'un lien.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text>Dans la plupart des cas, il n’est pas nécessaire d'utiliser cette classe. Par défaut, le style des liens correspond <gcds-link href="{{ links.link }}">à celui de Système de design GC (SGDC)</gcds-link>. Utilisez la balise HTML sémantique <code>a</code> ou le composant SGDC <code>gcds-link</code> lorsque possible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Normale<br/>`link-size-regular`

{% shortcutPreview %}

<a href="#" class="link-size-regular">
  Il s’agit de la taille de lien normale.
</a>
{% endshortcutPreview %}

### Petite<br/>`link-size-small`

{% shortcutPreview %}

<a href="#" class="link-size-small">
  Il s’agit de la petite taille de lien.
</a>
{% endshortcutPreview %}

### Hériter<br/>`link-size-inherit`

{% shortcutPreview "mt-0 mb-0" %}

<h4>
  <a href="#" class="link-size-inherit">
    Ce lien hérite sa taille de l'élément parent.
  </a>
</h4>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
