---
title: Largeur de la bordure
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBorderWidthFR
  title: Largeur de la bordure
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'b-&lt;value&gt;'
    style: 'border: &lt;value&gt; solid currentColor;'
  - class: 'bt-&lt;value&gt;'
    style: 'border-block-start: &lt;value&gt; solid currentColor;'
  - class: 'bb-&lt;value&gt;'
    style: 'border-block-end: &lt;value&gt; solid currentColor;'
  - class: 'be-&lt;value&gt;'
    style: 'border-inline-end: &lt;value&gt; solid currentColor;'
  - class: 'bs-&lt;value&gt;'
    style: 'border-inline-start: &lt;value&gt; solid currentColor;'
  - class: 'bx-&lt;value&gt;'
    style: 'border-inline: &lt;value&gt; solid currentColor;'
  - class: 'by-&lt;value&gt;'
    style: 'border-block: &lt;value&gt; solid currentColor;'
shortcutsDescription: |
  La classe <code>value</code> peut être définie à l’une des options suivantes :

  - <code>0</code>
  - <code>sm</code> (0.0625rem)
  - <code>md</code> (0.125rem)
  - <code>lg</code> (0.25rem)
  - <code>xl</code> (0.375rem)
translationKey: 'shortcutsBorderWidth'
date: 'git Last Modified'
---

# Largeur de la bordure

La classe largeur de la bordure définit la propriété `border-width`. Elle détermine la largeur de la bordure d’un élément.

{% include "partials/logical-properties.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Exemples

### Tous les côtés<br/>`b-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="b-0">
  Cet élément a une largeur de bordure de 0 sur tous les côtés.
</p>
{% endshortcutPreview %}

### Côté supérieur<br/>`bt-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="bt-sm">
  Cet élément a une bordure étroite sur le côté supérieur.
</p>
{% endshortcutPreview %}

### Côté inférieur<br/>`bb-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="bb-md">
  Cet élément a une bordure moyenne sur le côté inférieur.
</p>
{% endshortcutPreview %}

### Côté droit<br/>`be-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="be-lg">
  Cet élément a une bordure large sur le côté droit.
</p>
{% endshortcutPreview %}

### Côté gauche<br/>`bs-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="bs-xl">
  Cet élément a une bordure extra large sur le côté gauche.
</p>
{% endshortcutPreview %}

### Côtés horizontaux<br/>`bx-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="bx-sm">
  Cet élément a une bordure étroite sur les côtés gauche et droit.
</p>
{% endshortcutPreview %}

### Côtés verticaux<br/>`by-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="by-lg">
  Cet élément a une bordure large en haut et en bas.
</p>
{% endshortcutPreview %}
