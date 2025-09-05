---
title: Couleur de texte - Raccourcis CSS
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextColourFR
  title: Raccourcis CSS - Couleur de texte
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'text-primary'
    style: 'color: var(--gcds-text-primary);'
  - class: 'text-secondary'
    style: 'color: var(--gcds-text-secondary);'
  - class: 'text-current'
    style: 'color: currentColor;'
  - class: 'text-light'
    style: 'color: var(--gcds-text-light);'
  - class: 'text-transparent'
    style: 'color: transparent;'
permalink: /fr/raccourcis-css/couleur-de-texte
translationKey: 'shortcutsTextColour'
date: 'git Last Modified'
---

# Couleur de texte

La classe couleur de texte définit la propriété `color`. Elle détermine la couleur du texte.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text><gcds-link href="{{ links.colourText }}">Voir les conseils de Système de design GC en matière de couleur</gcds-link> pour choisir la bonne couleur de texte pour votre contexte.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Principal<br/>`text-primary`

{% shortcutPreview %}

<p class="text-primary">
  Ce texte utilise la couleur de texte par défaut du gouvernement du Canada.
</p>
{% endshortcutPreview %}

### Secondaire<br/>`text-secondary`

{% shortcutPreview %}

<p class="text-secondary">
  Ce texte utilise la couleur de texte secondaire.
</p>
{% endshortcutPreview %}

### Couleur actuelle<br/>`text-current`

{% shortcutPreview "p-150" %}

<div class="bg-primary text-light">
  <p class="text-current">
    La couleur de ce texte est basée sur la propriété de couleur actuelle.
  </p>
</div>
{% endshortcutPreview %}

### Clair<br/>`text-light`

{% shortcutPreview "bg-dark p-150" %}

<p class="text-light">
  Voici la couleur de texte claire.
</p>
{% endshortcutPreview %}

### Transparent<br/>`text-transparent`

{% shortcutPreview %}

<p class="text-transparent">
  Ce texte est invisible, mais reste accessible aux lecteurs d'écran.
</p>
{% endshortcutPreview %}
