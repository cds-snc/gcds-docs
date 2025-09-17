---
title: Habillage de l’élément flexible
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexWrapFR
  title: Habillage de l’élément flexible
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'flex-wrap'
    style: 'flex-wrap: wrap;'
  - class: 'flex-wrap-reverse'
    style: 'flex-wrap: wrap-reverse;'
  - class: 'flex-nowrap'
    style: 'flex-wrap: nowrap;'
shortcutsNoticeDirection: 'flex-wrap'
shortcutsPartialClass: 'flex-wrap'
translationKey: 'shortcutsFlexWrap'
date: 'git Last Modified'
---

# Habillage de l’élément flexible

La classe habillage de l’élément flexible définit la propriété `flex-wrap`. Elle détermine la façon dont les éléments flexibles se répartissent sur plusieurs lignes s'il n'y a pas assez d'espace pour eux.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Habillage<br/>`flex-wrap`

Ces éléments se répartissent sur plusieurs lignes ou colonnes lorsqu'ils ne tiennent pas dans une seule ligne ou colonne. L’habillage se produit dans la direction par défaut en fonction de l'axe transversal.

Dans **les mises en page en ligne**, l’habillage se fait verticalement du bord initial au bord final.<br/>
Dans **les mises en page en colonnes**, l’habillage se fait horizontalement du bord initial au bord final.

{% shortcutPreview "gap-300 example-styled-items example-flex-wrap" %}

<div class="d-flex flex-wrap">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Habillage inversé<br/>`flex-wrap-reverse`

Ces éléments se répartissent sur plusieurs lignes ou colonnes lorsqu'ils ne tiennent pas dans une seule ligne ou colonne. L'habillage se fait dans la direction inverse le long de l'axe transversal.

Dans **les mises en page en ligne**, l’habillage se fait verticalement du point final au point initial.<br/>
Dans **les mises en page en colonnes**, l’habillage se fait horizontalement du point final au point initial.

{% shortcutPreview "gap-300 example-styled-items example-flex-wrap" %}

<div class="d-flex flex-wrap-reverse">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Aucun habillage<br/>`flex-nowrap`

Ces éléments sont forcés sur une seule ligne sans retour à la ligne.

{% shortcutPreview "gap-300 example-styled-items example-flex-wrap" %}

<div class="d-flex flex-nowrap">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
