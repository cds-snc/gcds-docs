---
title: Transformation de texte - Raccourcis CSS
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextTransformFR
  title: Transformation de texte - Raccourcis CSS
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'text-capitalize'
    style: 'text-transform: capitalize;'
  - class: 'text-lowercase'
    style: 'text-transform: lowercase;'
  - class: 'text-uppercase'
    style: 'text-transform: uppercase;'
  - class: 'text-none'
    style: 'text-transform: none;'
permalink: /fr/raccourcis-css/transformation-de-texte
translationKey: 'shortcutsTextTransform'
date: 'git Last Modified'
---

# Transformation de texte

La classe transformation de texte définit la propriété `text-transform`. Elle détermine l’emploi de la majuscule dans le texte.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Mode titre<br/>`text-capitalize`

{% shortcutPreview %}

<p class="text-capitalize">
  Ce texte porte la majuscule initiale sur chaque mot.
</p>
{% endshortcutPreview %}

### Minuscule<br/>`text-lowercase`

{% shortcutPreview %}

<p class="text-lowercase">
  Ce texte est entièrement en minuscules.
</p>
{% endshortcutPreview %}

### Majuscule<br/>`text-uppercase`

{% shortcutPreview %}

<p class="text-uppercase">
  Ce texte est entièrement en majuscules.
</p>
{% endshortcutPreview %}

### Aucune<br/>`text-none`

{% shortcutPreview %}

<p class="text-none">
  Ce texte s’affiche tel qu’il a été saisi à l’origine. Toute transformation de texte est supprimée.
</p>
{% endshortcutPreview %}
