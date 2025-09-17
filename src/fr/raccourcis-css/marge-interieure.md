---
title: Marge intérieure
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPaddingFR
  title: Marge intérieure
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'p-&lt;value&gt;'
    style: 'padding: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding'
  - class: 'pt-&lt;value&gt;'
    style: 'padding-block-start: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-top'
  - class: 'pb-&lt;value&gt;'
    style: 'padding-block-end: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-bottom'
  - class: 'ps-&lt;value&gt;'
    style: 'padding-inline-start: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-left'
  - class: 'pe-&lt;value&gt;'
    style: 'padding-inline-end: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-right'
  - class: 'px-&lt;value&gt;'
    style: 'padding-inline: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-left + padding-right'
  - class: 'py-&lt;value&gt;'
    style: 'padding-block: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-top + padding-bottom'
shortcutsDescription: 'La valeur <code>value</code> peut être définie à l’une de nos <a href="/fr/styles/espacement/">unités d’espacement prédéfinies</a> (<code>0</code> - <code>1250</code>).'
shortcutsHasLegacy: true
shortcutsPartialClass: 'p-300'
translationKey: 'shortcutsPadding'
date: 'git Last Modified'
---

# Marge intérieure

La classe marge intérieure définit la propriété `padding`. Elle détermine l’espace à l’intérieur d’un élément, entre le contenu et la bordure.

{% include "partials/logical-properties.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Tous les côtés<br/>`p-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="p-0">
  Cet élément n’a aucune marge intérieure sur tous les côtés.
</p> 
{% endshortcutPreview %}

### Côté supérieur<br/>`pt-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="pt-300">
  Cet élément a une marge intérieure de --gcds-spacing-300 sur le côté supérieur.
</p> 
{% endshortcutPreview %}

### Côté inférieur<br/>`pb-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="pb-300">
  Cet élément a une marge intérieure de --gcds-spacing-300 sur le côté inférieur.
</p>
{% endshortcutPreview %}

### Côté gauche<br/>`ps-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="p-300 ps-0">
  Cet élément n’a pas de marge intérieure sur le côté gauche.
</p> 
{% endshortcutPreview %}

### Côté droit<br/>`pe-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="p-300 pe-0">
  Cet élément n’a pas de marge intérieure sur le côté droit.
</p> 
{% endshortcutPreview %}

### Côtés horizontaux<br/>`px-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="px-600">
  Cet élément a un espacement de --gcds-spacing-600 sur les côtés gauche et droit.
</p>
{% endshortcutPreview %}

### Côtés verticaux<br/>`py-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="py-500">
  Cet élément a un espacement de --gcds-spacing-500 sur les côtés haut et bas.
</p> 
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
