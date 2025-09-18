---
title: Marge
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsMarginFR
  title: Marge
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'm-&lt;value&gt;'
    style: 'margin: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin'
  - class: 'mt-&lt;value&gt;'
    style: 'margin-block-start: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-top'
  - class: 'mb-&lt;value&gt;'
    style: 'margin-block-end: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-bottom'
  - class: 'ms-&lt;value&gt;'
    style: 'margin-inline-start: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-left'
  - class: 'me-&lt;value&gt;'
    style: 'margin-inline-end: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-right'
  - class: 'mx-&lt;value&gt;'
    style: 'margin-inline: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-left + margin-right'
  - class: 'my-&lt;value&gt;'
    style: 'margin-block: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-top + margin-bottom'
shortcutsDescription: 'La valeur <code>value</code> peut être définie à l’une de nos <a href="/fr/styles/espacement/">unités d’espacement prédéfinies</a> (<code>0</code> - <code>1250</code>) ou <code>auto</code>.'
shortcutsHasLegacy: true
translationKey: 'shortcutsMargin'
date: 'git Last Modified'
---

# Marge

La classe marge définit la propriété `margin`. Elle détermine l’espace à l’extérieur de la bordure d’un élément.

{% include "partials/logical-properties.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Tous les côtés<br/>`m-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150" %}

<p class="m-0">
  Cet élément n’a pas de marge sur tous les côtés.
</p>
{% endshortcutPreview %}

### Côté supérieur<br/>`mt-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150" %}

<p class="mt-auto">
  Cet élément permet au navigateur de calculer automatiquement la marge du côté supérieur.
</p>
{% endshortcutPreview %}

### Côté inférieur<br/>`mb-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150 example-margin" %}

<p class="mb-900">
  Cet élément a une marge de --gcds-spacing-900 sur le côté inférieur.
</p>
{% endshortcutPreview %}

### Côté gauche<br/>`ms-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150 example-margin" %}

<p class="m-900 ms-0">
  Cet élément n’a pas de marge sur le côté gauche.
</p>
{% endshortcutPreview %}

### Côté droit<br/>`me-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150 example-margin" %}

<p class="m-900 me-0">
  Cet élément n’a pas de marge à droite.
</p>
{% endshortcutPreview %}

### Côtés horizontaux<br/>`mx-<value>`

{% shortcutPreview "bg-primary text-light p-150 example-margin" %}

<p class="container-md mx-auto">
  Cet élément est centré horizontalement en laissant le navigateur calculer automatiquement la marge.
</p>
{% endshortcutPreview %}

### Côtés verticaux<br/>`my-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150 example-margin" %}

<p class="my-900">
  Cet élément a une marge de --gcds-spacing-500 sur les côtés haut et bas.
</p>
{% endshortcutPreview %}
