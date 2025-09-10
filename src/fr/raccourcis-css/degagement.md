---
title: Dégagement
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsGapFR
  title: Dégagement
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'gap-&lt;value&gt;'
    style: 'gap: var(--gcds-spacing-&lt;value&gt;);'
  - class: 'gap-x-&lt;value&gt;'
    style: 'column-gap: var(--gcds-spacing-&lt;value&gt;);'
  - class: 'gap-y-&lt;value&gt;'
    style: 'row-gap: var(--gcds-spacing-&lt;value&gt;);'
shortcutsDescription: "La valeur &lt;value&gt; peut être définie à nos <a href='/fr/styles/espacement/'>unités d'espacement prédéfinies</a> (<code>0</code> - <code>1250</code>)."
translationKey: 'shortcutsGap'
date: 'git Last Modified'
---

# Dégagement

La classe dégagement définit les propriétés `gap`, `column-gap` ou `row-gap`. Elle détermine l'espacement entre les éléments dans une grille ou une boîte d’élément flexible.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Dégagement<br/>`gap-<value>`

Les colonnes et lignes ont `--gcds-spacing-400` d’espace entre elles.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-2 gap-400">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
</div>
{% endshortcutPreview %}

### Dégagement horizontal <br/>`gap-x-<value>`

Les colonnes ont `--gcds-spacing-400` d’espace entre elles.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-2 gap-x-400">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
</div>
{% endshortcutPreview %}

### Dégagement vertical <br/>`gap-y-<value>`

Les lignes ont `--gcds-spacing-400` d’espace entre elles.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-2 gap-y-400">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
</div>
{% endshortcutPreview %}
