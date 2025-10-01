---
title: Direction de l’élément flexible
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexDirectionFR
  title: Direction de l’élément flexible
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'flex-col'
    style: 'flex-direction: column;'
  - class: 'flex-col-reverse'
    style: 'flex-direction: column-reverse;'
  - class: 'flex-row'
    style: 'flex-direction: row;'
  - class: 'flex-row-reverse'
    style: 'flex-direction: row-reverse;'
shortcutsPartialClass: 'flex-col'
translationKey: 'shortcutsFlexDirection'
date: 'git Last Modified'
---

# Direction de l’élément flexible

La classe direction de l’élément flexible définit la propriété `flex-direction`. Elle détermine l'axe principal le long duquel les éléments flexibles sont placés. Cela détermine également si leur direction de mise en page est horizontale (ligne) ou verticale (colonne).

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Colonne<br/>`flex-col`

Ces éléments sont placés verticalement, en commençant par le premier élément en haut.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex flex-col">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Colonne inverse<br/>`flex-col-reverse`

Ces éléments sont placés verticalement, en commençant par le dernier élément en haut.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex flex-col-reverse">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Ligne <br/>`flex-row`

Ces éléments sont placés horizontalement, en commençant par le premier élément à gauche.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex flex-row">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Ligne inverse<br/>`flex-row-reverse`

Ces éléments sont placés horizontalement, en commençant par le dernier élément à gauche.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex flex-row-reverse">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
