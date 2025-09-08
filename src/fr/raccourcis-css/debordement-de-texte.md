---
title: Débordement de texte - Raccourcis CSS
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextOverflowFR
  title: Débordement de texte - Raccourcis CSS
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'text-clip'
    style: 'text-overflow: clip;'
  - class: 'text-truncate'
    style: |
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
permalink: /fr/raccourcis-css/debordement-de-texte
translationKey: 'shortcutsTextOverflow'
date: 'git Last Modified'
---

# Débordement de texte

La classe débordement de texte définit la propriété `text-overflow`. Elle détermine si le texte débordant est coupé avec ou sans une ellipse.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Découper<br/>`text-clip`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="overflow-hidden text-clip" style="white-space: nowrap;">
  Ce texte est coupé abruptement sans points de suspension lorsqu'il déborde.
</p>
{% endshortcutPreview %}

### Tronquer<br/>`text-truncate`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="text-truncate">
  Ce texte se termine par des points de suspension lorsqu'il déborde.
</p>
{% endshortcutPreview %}
