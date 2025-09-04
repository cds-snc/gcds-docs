---
title: Visibilité - Raccourcis CSS
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsVisibilityFR
  title: Raccourcis CSS - Visibilité
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'visibility-hidden'
    style: 'visibility: hidden;'
  - class: 'visibility-visible'
    style: 'visibility: visible;'
  - class: 'visibility-sr-only'
    style: 'display: block;
      width: 0;
      height: 0;
      margin: 0;
      overflow: hidden;'
permalink: /fr/raccourcis-css/visibilite
translationKey: 'shortcutsVisibility'
date: 'git Last Modified'
---

# Visibilité

<!-- TODO: Improve examples -->

La classe visibilité définit la propriété `visibility`. Elle affiche ou masque un élément sans affecter la mise en page ou le flux du document.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Masqué <br/>`visibility-hidden`

{% shortcutPreview %}

<p class="visibility-hidden">
  Cet élément est masqué. Il ne peut pas être la cible de saisie, mais maintient sa position dans le document, influant sur la mise en page des autres éléments.
</p>
{% endshortcutPreview %}

### Visible<br/>`visibility-visible`

{% shortcutPreview %}

<p class="visibility-visible">
  Cet élément est visible. Cette classe peut s’appliquer à des éléments masqués à différentes tailles d’écran.
</p>
{% endshortcutPreview %}

### Masquage accessible<br/>`visibility-sr-only`

{% shortcutPreview %}

<p class="visibility-sr-only">
  Cet élément est uniquement visible pour les technologies d’assistance.
</p>
{% endshortcutPreview %}
