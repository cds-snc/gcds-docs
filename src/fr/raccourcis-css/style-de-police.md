---
title: Style de police
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFontStyleFR
  title: Style de police
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'font-normal'
    style: 'font-style: normal;'
  - class: 'font-italic'
    style: 'font-style: italic;'
shortcutsPartialClass: 'font-italic'
translationKey: 'shortcutsFontStyle'
date: 'git Last Modified'
---

# Style de police

La classe style de police définit la propriété `font-style`. Elle ajoute ou supprime le style italique du texte.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Utiliser avec prudence">
  <gcds-text><gcds-link href="{{ links.typographyFontStyles }}">Consulter les directives typographiques de Système de design GC</gcds-link> pour choisir le style de police pour votre contexte.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Normal<br/>`font-normal`

{% shortcutPreview %}

<p class="font-normal">
  Cet élément affiche du texte sans style italique. Ce style est utilisé dans la plupart des cas.
</p>
{% endshortcutPreview %}

### Italique<br/>`font-italic`

{% shortcutPreview %}

<p class="font-italic">
  Cet élément affiche du texte avec un style italique. Il est utilisé judicieusement pour de courtes lignes de texte afin de limiter la charge cognitive.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
