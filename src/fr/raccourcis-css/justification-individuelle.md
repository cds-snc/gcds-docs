---
title: Justification individuelle
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsJustifySelfFR
  title: Justification individuelle
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'justify-self-auto'
    style: 'justify-self: auto;'
  - class: 'justify-self-center'
    style: 'justify-self: center;'
  - class: 'justify-self-stretch'
    style: 'justify-self: stretch;'
  - class: 'justify-self-start'
    style: 'justify-self: start;'
  - class: 'justify-self-end'
    style: 'justify-self: end;'
shortcutsPartialClass: 'justify-self-center'
translationKey: 'shortcutsJustifySelf'
date: 'git Last Modified'
---

# Justification individuelle

La classe justification individuelle définit la propriété `justify-self`. Elle détermine comment un élément de grille individuel est aligné le long de l'axe intraligne (ligne) dans sa zone de grille, lui permettant d’écraser le paramètre `justify-items` de la boîte pour cet élément précis.

<gcds-notice notice-role="info" notice-title-tag="h2" notice-title="Ce paramètre n’a aucun effet dans les boîtes d’éléments flexibles">
  <gcds-text>Dans une boîte d’élément flexible, la classe <code>justify-self</code> est ignorée et n'a aucun effet.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Automatique<br/>`justify-self-auto`

Un élément avec la classe `justify-self-auto` suit le paramètre `justify-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-stretch">
  <p>1</p>
  <p class="justify-self-auto">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Centré<br/>`justify-self-center`

Un élément avec la classe `justify-self-center` est centré horizontalement dans sa zone de grille le long de l'axe intraligne, écrasant le paramètre `justify-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-stretch">
  <p>1</p>
  <p class="justify-self-center">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Étiré<br/>`justify-self-stretch`

Un élément avec la classe `justify-self-stretch` s'étire pour remplir toute la largeur de sa zone de grille le long de l'axe intraligne (comportement par défaut), écrasant le paramètre `justify-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-start">
  <p>1</p>
  <p class="justify-self-stretch">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord initial<br/>`justify-self-start`

Un élément avec la classe `justify-self-start` s'aligne sur le bord initial de sa zone de grille le long de l'axe intraligne, écrasant le paramètre `justify-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-stretch">
  <p>1</p>
  <p class="justify-self-start">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Bord final<br/>`justify-self-end`

Un élément avec la classe `justify-self-end` s'aligne sur le bord final de sa zone de grille le long de l'axe intraligne, écrasant le paramètre `justify-items` de la boîte.

{% shortcutPreview "p-300 example-styled-items example-flex-items" %}

<div class="d-grid grid-cols-3 gap-300 justify-items-stretch">
  <p>1</p>
  <p class="justify-self-end">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
