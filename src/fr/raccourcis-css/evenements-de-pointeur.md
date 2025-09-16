---
title: Événements de pointeur
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPointerEventsFR
  title: Événements de pointeur
  locale: fr
  parent: shortcutsInteractiveFR
  order: 1
shortcuts:
  - class: 'pointer-events-auto'
    style: 'pointer-events: auto;'
  - class: 'pointer-events-none'
    style: 'pointer-events: none;'
translationKey: 'shortcutsPointerEvents'
date: 'git Last Modified'
---

# Événements de pointeur

La classe événements de pointeur définit la propriété `pointer-events`. Elle détermine si un élément réagit à un événement de souris, comme un clic ou un survol.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Automatique<br/>`pointer-events-auto`

{% shortcutPreview %}

<a href="#" class="pointer-events-auto">
  Cet élément réagit aux événements de la souris.
</a> 
{% endshortcutPreview %}

### Aucun<br/>`pointer-events-none`

{% shortcutPreview %}

<a href="#" class="pointer-events-none">
  Cet élément ne répond pas aux événements de la souris.
</a> 
{% endshortcutPreview %}
