---
title: Ordre
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsOrderFR
  title: Ordre
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'order-1'
    style: 'order: 1;'
  - class: 'order-2'
    style: 'order: 2;'
  - class: 'order-3'
    style: 'order: 3;'
  - class: 'order-4'
    style: 'order: 4;'
  - class: 'order-5'
    style: 'order: 5;'
  - class: 'order-6'
    style: 'order: 6;'
  - class: 'order-7'
    style: 'order: 7;'
  - class: 'order-8'
    style: 'order: 8;'
  - class: 'order-9'
    style: 'order: 9;'
  - class: 'order-10'
    style: 'order: 10;'
  - class: 'order-11'
    style: 'order: 11;'
  - class: 'order-12'
    style: 'order: 12;'
  - class: 'order-first'
    style: 'order: -9999;'
  - class: 'order-last'
    style: 'order: 9999;'
  - class: 'order-none'
    style: 'order: 0;'
translationKey: 'shortcutsOrder'
date: 'git Last Modified'
---

# Ordre

La classe ordre définit la propriété `order`. Elle détermine l'ordre visuel des éléments dans une boîte d’élément flexible. Par défaut, les éléments flexibles suivent l'ordre dans lequel ils apparaissent dans le HTML. La propriété `order` peut changer leur position sans modifier la structure HTML.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text>L'utilisation de la propriété <code>order</code> modifie l'ordre visuel des éléments flexibles sans modifier leur ordre dans le HTML. Si les ordres visuels et de lecture ne correspondent pas, cela peut causer de la confusion pour les personnes qui utilisent la navigation au clavier ou les lecteurs d'écran. Testez avec des technologies d'assistance pour garantir que l'information est claire et accessible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Ordre 1-12<br/>`order-<value>`

L'ordre visuel des éléments flexibles change en définissant la propriété CSS `order` de `1` à `12`. Par exemple, l'élément placé en troisième position dans le HTML apparaît visuellement en deuxième position lorsqu'on lui attribue la classe `order-2`.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex">
  <p class="order-1">1</p>
  <p class="order-3">2</p>
  <p class="order-2">3</p>
</div>
{% endshortcutPreview %}

### Ordre - premier<br/>`order-first`

L'élément classé troisième dans le HTML apparaît visuellement au début de la boîte d’élément flexible lorsqu'on lui attribue la classe `order-first`.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex">
  <p>1</p>
  <p>2</p>
  <p class="order-first">3</p>
</div>
{% endshortcutPreview %}

### Ordre - dernier<br/>`order-last`

L'élément classé premier dans le HTML apparaît visuellement à la fin de la boîte d’élément flexible lorsqu'on lui attribue la classe `order-last`.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex">
  <p class="order-last">1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Ordre - aucun<br/>`order-none`

Il s’agit de la valeur d’ordre par défaut. L'élément placé en deuxième position dans le HTML maintient sa position par défaut dans la boîte d’élément flexible lorsqu'on lui attribue la classe `order-none`.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex">
  <p>1</p>
  <p class="order-none">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}
