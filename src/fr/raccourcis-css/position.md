---
title: Position
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPositionFR
  title: Position
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'position-static'
    style: 'position: static;'
  - class: 'position-absolute'
    style: 'position: absolute;'
  - class: 'position-fixed'
    style: 'position: fixed;'
  - class: 'position-relative'
    style: 'position: relative;'
  - class: 'position-sticky'
    style: 'position: sticky;'
permalink: /fr/raccourcis-css/position
translationKey: 'shortcutsPosition'
date: 'git Last Modified'
---

# Position

<!-- TODO: Improve examples -->

La classe position définit la propriété `position`. Elle détermine comment l’élément est positionné dans le document.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Statique <br/>`position-static`

{% shortcutPreview %}

<p class="position-static">
  Cet élément affiche une position statique où il se trouve dans le flux normal du document.
</p>
{% endshortcutPreview %}

### Absolue<br/>`position-absolute`

{% shortcutPreview %}

<p class="position-absolute">
  Cet élément est retiré du flux normal du document et s’affiche par rapport à son élément ancêtre le plus proche ou à la page elle-même.
</p>
{% endshortcutPreview %}

### Fixe<br/>`position-fixed`

{% shortcutPreview %}

<p class="position-fixed">
  Cet élément s’affiche par rapport à la fenêtre d’affichage et reste fixe lorsqu’on fait défiler la page.
</p>
{% endshortcutPreview %}

### Relative<br/>`position-relative`

{% shortcutPreview %}

<p class="position-relative">
  Cet élément est décalé par rapport à sa position normale en utilisant le haut, la droite, le bas ou la gauche.
</p>
{% endshortcutPreview %}

### Élément collant<br/>`position-sticky`

{% shortcutPreview %}

<p class="position-sticky">
  Cet élément défile avec la page jusqu’à ce qu’un décalage spécifié soit atteint, puis reste en place dans sa boîte.
</p>
{% endshortcutPreview %}
