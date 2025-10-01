---
title: Hauteur de ligne
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsLineHeightFR
  title: Hauteur de ligne
  locale: fr
  parent: shortcutsTypographyFR
  order: 1
shortcuts:
  - class: 'line-h1'
    style: 'line-height: var(--gcds-line-heights-h1);'
  - class: 'line-h2'
    style: 'line-height: var(--gcds-line-heights-h2);'
  - class: 'line-h3'
    style: 'line-height: var(--gcds-line-heights-h3);'
  - class: 'line-h4'
    style: 'line-height: var(--gcds-line-heights-h4);'
  - class: 'line-h5'
    style: 'line-height: var(--gcds-line-heights-h5);'
  - class: 'line-h6'
    style: 'line-height: var(--gcds-line-heights-h6);'
  - class: 'line-text'
    style: 'line-height: var(--gcds-line-heights-text);'
  - class: 'line-text-small'
    style: 'line-height: var(--gcds-line-heights-text-small);'
shortcutsPartialClass: 'line-text'
translationKey: 'shortcutsLineHeight'
date: 'git Last Modified'
---

# Hauteur de ligne

La classe hauteur de ligne définit la propriété `line-height`. Elle détermine l'espacement vertical entre les lignes de texte.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text>Dans la plupart des cas, il n’est pas nécessaire d'utiliser cette classe. Par défaut, le style du corps du texte et des éléments de titre correspondent <gcds-link href="{{ links.typography }}">à ceux de Système de design GC</gcds-link>. Utilisez des balises HTML sémantiques, comme <code>h1</code> et <code>h2</code> lorsque possible..</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### H1<br/>`line-h1`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h1">
  Cet élément utilise une hauteur de ligne destinée aux titres H1.
</p>
{% endshortcutPreview %}

### H2<br/>`line-h2`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h2">
  Cet élément utilise une hauteur de ligne destinée aux titres H2.
</p>
{% endshortcutPreview %}

### H3<br/>`line-h3`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h3">
  Cet élément utilise une hauteur de ligne destinée aux titres H3.
</p>
{% endshortcutPreview %}

### H4<br/>`line-h4`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h4">
  Cet élément utilise une hauteur de ligne destinée aux titres H4.
</p>
{% endshortcutPreview %}

### H5<br/>`line-h5`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h5">
  Cet élément utilise une hauteur de ligne destinée aux titres H5.
</p>
{% endshortcutPreview %}

### H6<br/>`line-h6`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-h6">
  Cet élément utilise une hauteur de ligne destinée aux titres H6.
</p>
{% endshortcutPreview %}

### Texte<br/>`line-text`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-text">
  Cet élément utilise une hauteur de ligne destinée au corps de texte.
</p>
{% endshortcutPreview %}

### Petit texte<br/>`line-text-small`

{% shortcutPreview "container-xs b-sm b-default p-350" %}

<p class="line-text-small">
  Cet élément utilise une hauteur de ligne destinée à un corps de texte plus petit.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
