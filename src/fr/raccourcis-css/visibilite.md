---
title: Visibilité
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsVisibilityFR
  title: Visibilité
  locale: fr
  parent: shortcutsLayoutFR
  order: 1
shortcuts:
  - class: 'visibility-hidden'
    style: 'visibility: hidden;'
  - class: 'visibility-visible'
    style: 'visibility: visible;'
  - class: 'visibility-sr-only'
    style: |
      display: block;
      width: 0;
      height: 0;
      margin: 0;
      overflow: hidden;
translationKey: 'shortcutsVisibility'
date: 'git Last Modified'
---

# Visibilité

La classe visibilité définit la propriété `visibility`. Elle affiche ou masque un élément sans affecter la mise en page ou le flux du document.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Masqué <br/>`visibility-hidden`

Cet élément est masqué. Il ne peut pas être la cible de saisie, mais maintient sa position dans le document, influant sur la mise en page des autres éléments.

{% shortcutPreview "example-visibility example-styled-items" %}

<div class="d-flex gap-300">
  <p>1</p>
  <p class="visibility-hidden">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Visible<br/>`visibility-visible`

Cet élément est visible. Cette classe peut s’appliquer à des éléments masqués à différentes tailles d’écran.

{% shortcutPreview "example-visibility example-styled-items" %}

<div class="d-flex gap-300">
  <p>1</p>
  <p class="visibility-visible">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Masquage accessible<br/>`visibility-sr-only`

Cet élément est uniquement visible pour les technologies d’assistance.

{% shortcutPreview "example-visibility example-styled-items" %}

<div class="d-flex gap-300">
  <p>1</p>
  <p class="visibility-sr-only">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}
