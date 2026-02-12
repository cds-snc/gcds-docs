---
title: Couleur de l’arrière-plan
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBackgroundColourFR
  title: Couleur de l’arrière-plan
  locale: fr
  parent: shortcutsBackgroundBordersFR
  order: 1
shortcuts:
  - class: 'bg-primary'
    style: 'background-color: var(--gcds-bg-primary);'
  - class: 'bg-active'
    style: 'background-color: var(--gcds-active-background);'
  - class: 'bg-black'
    style: 'background-color: var(--gcds-color-grayscale-1000);'
  - class: 'bg-current'
    style: 'background-color: currentColor;'
  - class: 'bg-danger'
    style: 'background-color: var(--gcds-danger-background);'
  - class: 'bg-dark'
    style: 'background-color: var(--gcds-bg-dark);'
  - class: 'bg-disabled'
    style: 'background-color: var(--gcds-disabled-background);'
  - class: 'bg-inherit'
    style: 'background-color: inherit;'
  - class: 'bg-light'
    style: 'background-color: var(--gcds-bg-light);'
  - class: 'bg-transparent'
    style: 'background-color: transparent;'
  - class: 'bg-white'
    style: 'background-color: var(--gcds-bg-white);'
shortcutsPartialClass: 'bg-light'
translationKey: 'shortcutsBackgroundColour'
date: 'git Last Modified'
---

# Couleur de l’arrière-plan

La classe couleur d’arrière-plan définit la propriété `background-color`. Elle détermine la couleur de l’arrière-plan d’un élément.

<gcds-notice notice-role="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text><gcds-link href="{{ links.colourBackground }}">Voir les conseils de Système de design GC en matière de couleur</gcds-link> pour choisir la bonne couleur d’arrière-plan pour votre contexte.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Principale<br/>`bg-primary`

{% shortcutPreview "p-150" %}

<p class="bg-primary text-light">
  Cet élément utilise la couleur accent principale du gouvernement du Canada pour son arrière-plan.
</p>
{% endshortcutPreview %}

### Active<br/>`bg-active`

{% shortcutPreview "p-150" %}

<p class="bg-active text-light">
  Cet élément utilise la couleur d’arrière-plan active.
</p>
{% endshortcutPreview %}

### Noire<br/>`bg-black`

{% shortcutPreview "p-150" %}

<p class="bg-black text-light">
  Cet élément utilise la couleur d’arrière-plan noire.
</p>
{% endshortcutPreview %}

### Actuelle<br/>`bg-current`

{% shortcutPreview "p-150" %}

<div class="bg-current" style="color: var(--gcds-color-blue-750)">
  <p class="text-light">
    Cet élément utilise une couleur d’arrière-plan en fonction de la propriété couleur actuelle.
  </p>
</div>
{% endshortcutPreview %}

### Danger<br/>`bg-danger`

{% shortcutPreview "p-150" %}

<p class="bg-danger text-light">
  Cet élément utilise la couleur d’arrière-plan de danger.
</p>
{% endshortcutPreview %}

### Sombre<br/>`bg-dark`

{% shortcutPreview "p-150" %}

<p class="bg-dark text-light">
  Cet élément utilise la couleur d’arrière-plan sombre.
</p>
{% endshortcutPreview %}

### Désactivée<br/>`bg-disabled`

{% shortcutPreview "p-150" %}

<p class="bg-disabled">
  Cet élément utilise la couleur d’arrière-plan désactivée.
</p>
{% endshortcutPreview %}

### Héritée<br/>`bg-inherit`

{% shortcutPreview "p-150" %}

<div class="bg-danger">
  <p class="bg-inherit text-light">
    Cet élément hérite sa couleur d’arrière-plan de l’élément parent.
  </p>
</div>
{% endshortcutPreview %}

### Claire<br/>`bg-light`

{% shortcutPreview "p-150" %}

<p class="bg-light">
  Cet élément utilise la couleur d’arrière-plan claire.
</p>
{% endshortcutPreview %}

### Transparente<br/>`bg-transparent`

{% shortcutPreview "p-150" %}

<p class="bg-transparent">
  Cet élément a une couleur d’arrière-plan transparente.
</p>
{% endshortcutPreview %}

### Blanche<br/>`bg-white`

{% shortcutPreview "p-150" %}

<div class="bg-dark">
  <p class="bg-white">
    Cet élément a une couleur d’arrière-plan blanche.
  </p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
