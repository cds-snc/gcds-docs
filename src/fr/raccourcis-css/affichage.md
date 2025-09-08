---
title: Affichage - Raccourcis CSS
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsDisplayFR
  title: Affichage - Raccourcis CSS
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'd-block'
    style: 'display: block;'
  - class: 'd-inline'
    style: 'display: inline;'
  - class: 'd-inline-block'
    style: 'display: inline-block;'
  - class: 'd-flex'
    style: 'display: flex;'
  - class: 'd-inline-flex'
    style: 'display: inline-flex;'
  - class: 'd-grid'
    style: 'display: grid;'
  - class: 'd-inline-grid'
    style: 'display: inline-grid;'
  - class: 'd-table'
    style: 'display: table;'
  - class: 'd-inline-table'
    style: 'display: inline-table;'
  - class: 'd-none'
    style: 'display: none;'
permalink: /fr/raccourcis-css/affichage
translationKey: 'shortcutsDisplay'
date: 'git Last Modified'
---

# Affichage

La classe affichage définit la propriété `display` . Elle change la façon dont les boîtes sont disposées sur une page.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Bloc<br/>`d-block`

Cet élément est une boîte de niveau bloc. Il s’affiche sur une nouvelle ligne et occupe toute la largeur.

{% shortcutPreview "example-display example-styled-items example-items-with-margin" %}

<div>
  <p class="d-block">1</p>
  <p class="d-block">2</p>
  <p class="d-block">3</p>
</div>
{% endshortcutPreview %}

### Intraligne<br/>`d-inline`

Cet élément est une boîte intraligne, mais les propriétés de hauteur et de largeur ne sont pas prises en compte.

{% shortcutPreview "example-display example-styled-items example-items-with-margin" %}

<div>
  <p class="d-inline" style="width: 10rem">1</p>
  <p class="d-inline" style="width: 10rem">2</p>
  <p class="d-inline" style="width: 10rem">3</p>
</div>
{% endshortcutPreview %}

### Bloc intraligne<br/>`d-inline-block`

Cet élément est un bloc intraligne. Les propriétés de hauteur et de largeur peuvent être appliquées.

{% shortcutPreview "example-display example-styled-items example-items-with-margin" %}

<div>
  <p class="d-inline-block" style="width: 10rem">1</p>
  <p class="d-inline-block" style="width: 10rem">2</p>
  <p class="d-inline-block" style="width: 10rem">3</p>
</div>
{% endshortcutPreview %}

### Élément flexible<br/>`d-flex`

Cet élément est une boîte flexible de niveau bloc.

{% shortcutPreview "example-display example-styled-items" %}

<div class="d-flex gap-300">
  <p class="flex-1">1</p>
  <p class="flex-1">2</p>
  <p class="flex-1">3</p>
</div>
{% endshortcutPreview %}

### Élément flexible intraligne<br/>`d-inline-flex`

Cet élément est une boîte flexible intraligne.

{% shortcutPreview "example-display example-styled-items" %}

<div class="d-inline-flex gap-300">
  <p class="flex-1">1</p>
  <p class="flex-1">2</p>
  <p class="flex-1">3</p>
</div>
{% endshortcutPreview %}

### Grille <br/>`d-grid`

Cet élément est une boîte grille de niveau bloc.

{% shortcutPreview "example-display example-styled-items" %}

<div class="d-grid grid-cols-3 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Grille intraligne<br/>`d-inline-grid`

Cet élément est une boîte grille intraligne.

{% shortcutPreview "example-display example-styled-items" %}

<div class="d-inline-grid grid-cols-3 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Tableau<br/>`d-table`, `d-table-row`, `d-table-cell`

<!-- TODO: Add translations for table content + adjust intro text -->

Cet élément se comporte comme un élément de tableau.

{% shortcutPreview "example-table" %}

<div class="d-table">
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1 + longer content</div>
    <div class="d-table-cell">Cell 2</div>
    <div class="d-table-cell">Cell 3</div>
    <div class="d-table-cell">Cell 4</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1</div>
    <div class="d-table-cell">Cell 2</div>
    <div class="d-table-cell">Cell 3 + longer content</div>
    <div class="d-table-cell">Cell 4</div>
  </div>
</div>
{% endshortcutPreview %}

### Tableau intraligne<br/>`d-inline-table`

Cet élément se comporte comme un élément de tableau intraligne.

<!-- TODO: Add translations for table content -->

{% shortcutPreview "example-table" %}

<div class="d-inline-table">
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1 + longer content</div>
    <div class="d-table-cell">Cell 2</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1</div>
    <div class="d-table-cell">Cell 2 + longer content</div>
  </div>
</div>
<div class="d-inline-table">
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1 + longer content</div>
    <div class="d-table-cell">Cell 2</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell">Cell 1</div>
    <div class="d-table-cell">Cell 2 + longer content</div>
  </div>
</div>
{% endshortcutPreview %}

### Aucun<br/>`d-none`

{% shortcutPreview %}

<p class="d-none">
  Cet élément sera complètement supprimé.
</p>
{% endshortcutPreview %}
