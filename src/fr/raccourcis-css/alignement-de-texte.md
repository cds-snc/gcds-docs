---
title: Alignement de texte
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextAlignFR
  title: Alignement de texte
  locale: fr
  parent: shortcutsTypographyFR
  order: 1
shortcuts:
  - class: 'text-center'
    style: 'text-align: center;'
  - class: 'text-justify'
    style: 'text-align: justify;'
  - class: 'text-left'
    style: 'text-align: left;'
  - class: 'text-right'
    style: 'text-align: right;'
shortcutsPartialClass: 'text-center'
translationKey: 'shortcutsTextAlign'
date: 'git Last Modified'
---

# Alignement de texte

La classe alignement de texte définit la propriété `text-align`. Elle détermine l’alignement horizontal du texte dans sa boîte.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Centre<br/>`text-center`

{% shortcutPreview "container-full b-sm b-default mb-0 p-150" %}

<p class="text-center">
  Ce texte est aligné au centre de sa boîte.
</p>
{% endshortcutPreview %}

### Justifier<br/>`text-justify`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="text-justify">
  Ce texte est étiré pour s'aligner uniformément sur les bords droit et gauche de sa boîte.
</p>
{% endshortcutPreview %}

### Gauche<br/>`text-left`

{% shortcutPreview "container-full b-sm b-default p-150" %}

<p class="text-left">
  Ce texte est aligné du côté gauche de sa boîte.
</p>
{% endshortcutPreview %}

### Droit<br/>`text-right`

{% shortcutPreview "container-full b-sm b-default p-150" %}

<p class="text-right">
  Ce texte est aligné du côté droit de sa boîte.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
