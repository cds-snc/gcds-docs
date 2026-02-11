---
title: Couleur de lien
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsLinkColourFR
  title: Couleur de lien
  locale: fr
  parent: shortcutsTypographyFR
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

# Couleur de lien

La classe couleur de lien définit la propriété `color`. Elle détermine la couleur du texte.

<gcds-notice notice-role="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text><gcds-link href="{{ links.colourLink }}">Voir les conseils de Système de design GC en matière de couleur</gcds-link> pour choisir la bonne couleur de lien pour votre contexte.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Couleur par défaut<br/>`link-default`

{% shortcutPreview %}

<a href="#" class="link-default">
  Ce lien utilise la couleur de lien par défaut.
</a>
{% endshortcutPreview %}

### Lien pointé<br/>`link-hover`

{% shortcutPreview %}

<a href="#" class="link-hover">
  Ce lien utilise la couleur de lien pointé en état de survol.
</a>
{% endshortcutPreview %}

### Hériter<br/>`link-inherit`

{% shortcutPreview %}

<div style="color: var(--gcds-color-red-700);">
  <a href="#" class="link-inherit">
    Ce lien hérite sa couleur de l’élément parent.
  </a>
</div>
{% endshortcutPreview %}

### Clair<br/>`link-light`

{% shortcutPreview "bg-dark p-150" %}

<a href="#" class="link-light">
  Ce lien utilise la couleur de lien clair.
</a>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
