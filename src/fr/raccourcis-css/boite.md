---
title: Boîte
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsContainerFR
  title: Boîte
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'container-xs'
    style: 'max-width: 20rem'
  - class: 'container-sm'
    style: 'max-width: 30rem'
  - class: 'container-md'
    style: 'max-width: 48rem'
  - class: 'container-lg'
    style: 'max-width: 62rem'
  - class: 'container-xl'
    style: 'max-width: 71.25rem'
  - class: 'container-full'
    style: 'max-width: 100%'
permalink: /fr/raccourcis-css/boite
translationKey: 'shortcutsContainer'
date: 'git Last Modified'
---

# Boîte

La classe boîte définit la propriété `max-width` . Elle change la taille d’une boîte à différentes tailles de fenêtre pour créer des mises en page réactives.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Très petite<br/>`container-xs`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-sm">
  Cette boîte a une largeur maximale de 20rem.
</div>
{% endshortcutPreview %}

### Petite<br/>`container-sm`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-sm">
  Cette boîte a une largeur maximale de 30rem.
</div>
{% endshortcutPreview %}

### Moyenne <br/>`container-md`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-md">
  Cette boîte a une largeur maximale de 48rem.
</div>
{% endshortcutPreview %}

### Grande<br/>`container-lg`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-lg">
  Cette boîte a une largeur maximale de 62rem.
</div>
{% endshortcutPreview %}

### Très grande<br/>`container-xl`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-xl">
  Cette boîte a une largeur maximale de 71.25rem.
</div>
{% endshortcutPreview %}

### Pleine<br/>`container-full`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-full">
  Cette boîte a une largeur maximale de 100 %.
</div>
{% endshortcutPreview %}
