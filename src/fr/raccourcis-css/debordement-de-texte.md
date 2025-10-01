---
title: Débordement de texte
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextOverflowFR
  title: Débordement de texte
  locale: fr
  parent: shortcutsTypographyFR
  order: 1
shortcuts:
  - class: 'text-clip'
    style: |
      overflow: hidden;
      text-overflow: clip;
      white-space: nowrap;
  - class: 'text-truncate'
    style: |
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
shortcutsPartialClass: 'text-truncate'
translationKey: 'shortcutsTextOverflow'
date: 'git Last Modified'
---

# Débordement de texte

La classe débordement de texte définit la propriété `text-overflow`. Elle détermine si le texte débordant est coupé avec ou sans une ellipse.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Découper<br/>`text-clip`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="text-clip">
  Ce texte est coupé abruptement sans points de suspension lorsqu'il déborde.
</p>
{% endshortcutPreview %}

### Tronquer<br/>`text-truncate`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="text-truncate">
  Ce texte se termine par des points de suspension lorsqu'il déborde.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
