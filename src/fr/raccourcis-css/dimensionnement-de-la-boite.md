---
title: Dimensionnement de la boîte
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBoxSizingFR
  title: Dimensionnement de la boîte
  locale: fr
  parent: shortcutsLayoutFR
  order: 1
shortcuts:
  - class: 'box-border'
    style: 'box-sizing: border-box;'
  - class: 'box-content'
    style: 'box-sizing: content-box;'
translationKey: 'shortcutsBoxSizing'
date: 'git Last Modified'
---

# Dimensionnement de la boîte

La classe de dimensionnement de la boîte définit la propriété `box-sizing`. Elle précise si la hauteur et la largeur d’un élément comprennent les bordures et le dégagement intérieur.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Bordure <br/>`box-border`

{% shortcutPreview "container-xs p-600 b-lg b-default bg-light" %}

<p class="box-border">
  La taille de cet élément comprend le contenu, la bordure et le dégagement intérieur.
</p>
{% endshortcutPreview %}

### Contenu<br/>`box-content`

{% shortcutPreview "container-xs p-600 b-lg b-default bg-light" %}

<p class="box-content">
  La taille de cet élément comprend le contenu seulement.
</p>
{% endshortcutPreview %}
