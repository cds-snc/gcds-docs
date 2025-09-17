---
title: Alignement des éléments
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsAlignItemsFR
  title: Alignement des éléments
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'align-items-baseline'
    style: 'align-items: baseline;'
  - class: 'align-items-center'
    style: 'align-items: center;'
  - class: 'align-items-stretch'
    style: 'align-items: stretch;'
  - class: 'align-items-start'
    style: 'align-items: start;'
  - class: 'align-items-end'
    style: 'align-items: end;'
shortcutsNoticeDirection: 'align-items'
shortcutsPartialClass: 'align-items-center'
translationKey: 'shortcutsAlignItems'
date: 'git Last Modified'
---

# Alignement des éléments

La classe alignement des éléments définit la propriété `align-items`. Elle détermine comment les éléments sont alignés le long de l'axe transversal d'une boîte d’élément flexible ou de grille.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Ligne de base<br/>`align-items-baseline`

Les éléments sont alignés le long de leurs lignes de base de texte, de sorte que le texte ou le contenu intraligne s'aligne de manière cohérente entre les éléments sur l'axe transversal.

Dans **les mises en page en ligne**, the alignment is vertical.<br/>
Dans **les mises en page en colonnes**, the alignment is horizontal.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-baseline">
  <p>1</p>
  <p class="pb-800">2</p>
  <p class="pt-900">3</p>
</div>
{% endshortcutPreview %}

### Centré<br/>`align-items-center`

Les éléments sont centrés le long de l'axe transversal.

Dans **les mises en page en ligne**, il y a un espace égal au-dessus et en dessous.<br/>
Dans **les mises en page en colonnes**, il y a un espace égal à gauche et à droite.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Étiré <br/>`align-items-stretch`

Les éléments s'étirent pour remplir la boîte le long de l'axe transversal.

Dans **les mises en page en ligne**, les éléments remplissent l'espace vertical à moins qu'une taille fixe ne soit définie.<br/>
Dans **les mises en page en colonnes**, les éléments remplissent l'espace horizontal à moins qu'une taille fixe ne soit définie.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-stretch">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Bord initial<br/>`align-items-start`

Les éléments sont alignés au bord initial de l'axe transversal.

Dans **les mises en page en ligne**, ils sont alignés en haut de la boîte.<br/>
Dans **les mises en page en colonnes**, ils sont alignés à gauche de la boîte.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Bord final<br/>`align-items-end`

Les éléments sont alignés au bord final de l'axe transversal.

Dans **les mises en page en ligne**, ils sont alignés au bas de la boîte.<br/>
Dans **les mises en page en colonnes**, ils sont alignés à droite de la boîte.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
