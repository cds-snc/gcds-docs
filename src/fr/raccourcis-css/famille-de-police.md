---
title: Famille de police - Raccourcis CSS
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontFamilyFR
  title: Raccourcis CSS - Famille de police
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'font-family-heading'
    style: 'font-family: var(--gcds-font-families-heading);'
  - class: 'font-family-body'
    style: 'font-family: var(--gcds-font-families-body);'
  - class: 'font-family-monospace'
    style: 'font-family: var(--gcds-font-families-monospace);'
permalink: /fr/raccourcis-css/famille-de-police
translationKey: 'shortcutsFontFamily'
date: 'git Last Modified'
---

# Famille de police

La classe famille de polices définit la propriété `font-family`. Elle détermine la police d'un élément de texte.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text>Dans la plupart des cas, il n’est pas nécessaire d'utiliser cette classe. Par défaut, le style du corps du texte et des éléments de titre correspondent <gcds-link href="{{ links.typography }}">à ceux de Système de design GC</gcds-link>. Utilisez des balises HTML sémantiques, comme <code>h1</code> et <code>h2</code> lorsque possible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Titre<br/>`font-family-heading`

{% shortcutPreview 'mt-0 mb-0' %}

<h4 class="font-family-heading">
  Cet élément utilise la famille de polices des titres.
</h4>
{% endshortcutPreview %}

### Corps du texte<br/>`font-family-body`

{% shortcutPreview %}

<p class="font-family-body">
  Cet élément utilise la famille de polices du corps du texte.
</p>
{% endshortcutPreview %}

### Espacement constant<br/>`font-family-monospace`

{% shortcutPreview %}

<code class="font-family-monospace">
  Cet élément utilise la famille de polices à espacement constant.
</code>
{% endshortcutPreview %}
