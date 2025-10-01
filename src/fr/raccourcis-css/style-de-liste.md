---
title: Style de liste
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsListStyleFR
  title: Style de liste
  locale: fr
  parent: shortcutsTypographyFR
  order: 1
shortcuts:
  - class: 'list-circle'
    style: |
      list-style: circle;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-disc'
    style: |
      list-style: disc;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-square'
    style: |
      list-style: square;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-decimal'
    style: |
      list-style: decimal;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-decimal-leading-zero'
    style: |
      list-style: decimal-leading-zero;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-upper-roman'
    style: |
      list-style: upper-roman;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-lower-roman'
    style: |
      list-style: lower-roman;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-upper-alpha'
    style: |
      list-style: upper-alpha;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-lower-alpha'
    style: |
      list-style: lower-alpha;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-none'
    style: 'list-style: none;'
shortcutsPartialClass: 'list-disc'
translationKey: 'shortcutsListStyle'
date: 'git Last Modified'
---

# Style de liste

La classe style de liste définit la propriété `list-style`. Elle détermine l'apparence des marqueurs d'éléments de liste.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Cercle<br/>`list-circle`

{% shortcutPreview %}

<ul class="list-circle">
  <li>Ce marqueur de liste est un cercle.</li>
  <li>Ce marqueur de liste est un cercle.</li>
  <li>Ce marqueur de liste est un cercle.</li>
</ul>
{% endshortcutPreview %}

### Disque<br/>`list-disc`

{% shortcutPreview %}

<ul class="list-disc">
  <li>Ce marqueur de liste est un cercle rempli.</li>
  <li>Ce marqueur de liste est un cercle rempli.</li>
  <li>Ce marqueur de liste est un cercle rempli.</li>
</ul>
{% endshortcutPreview %}

### Carré<br/>`list-square`

{% shortcutPreview %}

<ul class="list-square">
  <li>Ce marqueur de liste est un carré.</li>
  <li>Ce marqueur de liste est un carré.</li>
  <li>Ce marqueur de liste est un carré.</li>
</ul>
{% endshortcutPreview %}

### Décimal<br/>`list-decimal`

{% shortcutPreview %}

<ol class="list-decimal">
  <li>Ce style de liste emploie des chiffres.</li>
  <li>Ce style de liste emploie des chiffres.</li>
  <li>Ce style de liste emploie des chiffres.</li>
</ol>
{% endshortcutPreview %}

### Décimal avec zéro en tête<br/>`list-decimal-leading-zero`

{% shortcutPreview %}

<ol class="list-decimal-leading-zero">
  <li>Ce style de liste emploie une liste numérotée commençant à 0.</li>
  <li>Ce style de liste emploie une liste numérotée commençant à 0.</li>
  <li>Ce style de liste emploie une liste numérotée commençant à 0.</li>
</ol>
{% endshortcutPreview %}

### Chiffres romains en majuscules<br/>`list-upper-roman`

{% shortcutPreview %}

<ol class="list-upper-roman">
  <li>Ce marqueur de liste est un chiffre romain en majuscule.</li>
  <li>Ce marqueur de liste est un chiffre romain en majuscule.</li>
  <li>Ce marqueur de liste est un chiffre romain en majuscule.</li>
</ol>
{% endshortcutPreview %}

### Chiffres romains en minuscules<br/>`list-lower-roman`

{% shortcutPreview %}

<ol class="list-lower-roman">
  <li>Ce marqueur de liste est un chiffre romain en minuscule.</li>
  <li>Ce marqueur de liste est un chiffre romain en minuscule.</li>
  <li>Ce marqueur de liste est un chiffre romain en minuscule.</li>
</ol>
{% endshortcutPreview %}

### Alphabet en majuscules<br/>`list-upper-alpha`

{% shortcutPreview %}

<ol class="list-upper-alpha">
  <li>Ce style de liste emploie des lettres majuscules en ordre alphabétique.</li>
  <li>Ce style de liste emploie des lettres majuscules en ordre alphabétique.</li>
  <li>Ce style de liste emploie des lettres majuscules en ordre alphabétique.</li>
</ol>
{% endshortcutPreview %}

### Alphabet en minuscules<br/>`list-lower-alpha`

{% shortcutPreview %}

<ol class="list-lower-alpha">
  <li>Ce style de liste emploie des lettres minuscules en ordre alphabétique.</li>
  <li>Ce style de liste emploie des lettres minuscules en ordre alphabétique.</li>
  <li>Ce style de liste emploie des lettres minuscules en ordre alphabétique.</li>
</ol>
{% endshortcutPreview %}

### Aucune<br/>`list-none`

{% shortcutPreview %}

<ul class="list-none">
  <li>Ceci est un élément de liste sans marqueur de liste.</li>
  <li>Ceci est un élément de liste sans marqueur de liste.</li>
  <li>Ceci est un élément de liste sans marqueur de liste.</li>
</ul>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
