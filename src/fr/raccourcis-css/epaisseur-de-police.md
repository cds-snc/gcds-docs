---
title: Épaisseur de police
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontWeightFR
  title: Épaisseur de police
  locale: fr
  parent: shortcutsTypographyFR
  order: 1
shortcuts:
  - class: 'font-regular'
    style: 'font-weight: var(--gcds-font-weights-regular);'
  - class: 'font-light'
    style: 'font-weight: var(--gcds-font-weights-light);'
  - class: 'font-medium'
    style: 'font-weight: var(--gcds-font-weights-medium);'
  - class: 'font-semibold'
    style: 'font-weight: var(--gcds-font-weights-semibold);'
  - class: 'font-bold'
    style: 'font-weight: var(--gcds-font-weights-bold);'
shortcutsPartialClass: 'font-medium'
translationKey: 'shortcutsFontWeight'
date: 'git Last Modified'
---

# Épaisseur de police

La classe poids de police définit la propriété `font-weight`. Elle détermine à quel point le texte est en gras.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text><gcds-link href="{{ links.typographyFontWeight }}">Consulter les directives typographiques de Système de design GC</gcds-link> pour choisir le bon poids de police pour votre contexte.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Normal<br/>`font-regular`

{% shortcutPreview %}

<p class="font-regular">
  Cet élément utilise le poids de police par défaut.
</p>
{% endshortcutPreview %}

### Léger<br/>`font-light`

{% shortcutPreview %}

<p class="font-light">
  Cet élément utilise un poids de police léger.
</p>
{% endshortcutPreview %}

### Moyen<br/>`font-medium`

{% shortcutPreview %}

<p class="font-medium">
  Cet élément utilise un poids de police moyen.
</p>
{% endshortcutPreview %}

### Semi-gras<br/>`font-semibold`

{% shortcutPreview %}

<p class="font-semibold">
  Cet élément utilise un poids de police semi-gras.
</p>
{% endshortcutPreview %}

### Gras<br/>`font-bold`

{% shortcutPreview %}

<p>Cet élément utilise un poids de police <span class="font-bold"> gras</span>.</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
