---
title: Alignement individuel
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsAlignSelfFR
  title: Alignement individuel
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'align-self-auto'
    style: 'align-self: auto;'
  - class: 'align-self-baseline'
    style: 'align-self: baseline;'
  - class: 'align-self-center'
    style: 'align-self: center;'
  - class: 'align-self-stretch'
    style: 'align-self: stretch;'
  - class: 'align-self-start'
    style: 'align-self: start;'
  - class: 'align-self-end'
    style: 'align-self: end;'
shortcutsNoticeDirection: 'align-self'
translationKey: 'shortcutsAlignSelf'
date: 'git Last Modified'
---

# Alignement individuel

La classe alignement individuel définit la propriété `align-self`. Elle détermine comment un élément individuel s'aligne le long de l'axe transversal de la boîte, lui permettant d’écraser le paramètre `align-items` de la boîte pour cet élément précis.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Automatique<br/>`align-self-auto`

Un élément avec la classe `align-self-auto` suit le paramètre `align-items` de la boîte et s'aligne automatiquement le long de l'axe transversal.

Dans **les mises en page en ligne**, l'alignement suit l'axe transversal vertical.<br/>
Dans **les mises en page en colonne**, l'alignement suit l'axe transversal horizontal.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p class="align-self-auto">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Ligne de base<br/>`align-self-baseline`

Un élément avec la classe `align-self-baseline` aligne sa ligne de base de texte avec les lignes de base des autres éléments le long de l'axe transversal.

Dans **les mises en page en ligne**, l'alignement de la ligne de base est vertical.<br/>
Dans **les mises en page en colonne**, l'alignement de la ligne de base est horizontal.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-start">
  <p class="pb-800">1</p>
  <p class="align-self-baseline">2</p>
  <p class="pt-900">3</p>
</div>
{% endshortcutPreview %}

### Centré<br/>`align-self-center`

Un élément avec la classe `align-self-center` est centré le long de l'axe transversal, écrasant le paramètre `align-items` de la boîte.

Dans **les mises en page en ligne**, l’élément est centré verticalement.<br/>
Dans **les mises en page en colonne**, l’élément est centré horizontalement.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-end">
  <p>1</p>
  <p class="align-self-center">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Étiré<br/>`align-self-stretch`

Un élément avec la classe `align-self-stretch` s'étire pour remplir la boîte le long de l'axe transversal (à moins qu'une taille fixe ne soit définie), écrasant le paramètre `align-items` de la boîte.

Dans **les mises en page en ligne**, l’élément s’étire verticalement.<br/>
Dans **les mises en page en colonne**, l’élément s’étire horizontalement.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p class="align-self-stretch">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Bord initial<br/>`align-self-start`

Un élément avec la classe `align-self-start` s'aligne au bord initial de l'axe transversal, écrasant le paramètre `align-items` de la boîte.

Dans **les mises en page en ligne**, l'élément s'aligne en haut.<br/>
Dans **les mises en page en colonne**, les éléments s'alignent à gauche.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p class="align-self-start">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Bord final<br/>`align-self-end`

Un élément avec la classe `align-self-end` s'aligne au bord final de l'axe transversal, écrasant le paramètre `align-items` de la boîte.

Dans **les mises en page en ligne**, l'élément s'aligne en bas.<br/>
Dans **les mises en page en colonne**, les éléments s'alignent à droite.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p class="align-self-end">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}
