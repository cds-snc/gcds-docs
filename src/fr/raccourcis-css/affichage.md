---
title: Raccourcis CSS - Affichage
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsDisplayFR
  title: Raccourcis CSS - Affichage
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

<!-- TODO: Improve examples -->

### Bloc<br/>`d-block`

{% shortcutPreview %}
<span class="d-block">
  Cet élément est une boîte de niveau bloc. Il s’affiche sur une nouvelle ligne et occupe toute la largeur.
</span>
{% endshortcutPreview %}

### Intraligne<br/>`d-inline`

{% shortcutPreview %}
<span class="d-inline">
  Cet élément est une boîte intraligne, mais les propriétés de hauteur et de largeur ne sont pas prises en compte.
</span>
{% endshortcutPreview %}

### Bloc intraligne<br/>`d-inline-block`

{% shortcutPreview %}
<span class="d-inline-block">
  Cet élément est un bloc intraligne. Les propriétés de hauteur et de largeur peuvent être appliquées.
</span>
{% endshortcutPreview %}

### Élément flexible<br/>`d-flex`

{% shortcutPreview %}
<span class="d-flex">
  Cet élément est une boîte flexible de niveau bloc.
</span>
{% endshortcutPreview %}

### Élément flexible intraligne<br/>`d-inline-flex`

{% shortcutPreview %}
<span class="d-inline-flex">
  Cet élément est une boîte flexible intraligne.
</span>
{% endshortcutPreview %}

### Grille <br/>`d-grid`

{% shortcutPreview %}
<span class="d-grid">
  Cet élément est une boîte grille de niveau bloc.
</span>
{% endshortcutPreview %}

### Grille intraligne<br/>`d-inline-grid`

{% shortcutPreview %}
<span class="d-inline-grid">
  Cet élément est une boîte grille intraligne.
</span>
{% endshortcutPreview %}

### Tableau<br/>`d-table`

{% shortcutPreview %}
<span class="d-table">
  Cet élément se comporte comme un élément de tableau.
</span>
{% endshortcutPreview %}

### Tableau intraligne<br/>`d-inline-table`

{% shortcutPreview %}
<span class="d-inline-table">
  Cet élément se comporte comme un élément de tableau intraligne.
</span>
{% endshortcutPreview %}

### Aucun<br/>`d-none`

{% shortcutPreview %}
<span class="d-none">
  Cet élément sera complètement supprimé.
</span>
{% endshortcutPreview %}
