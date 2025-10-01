---
title: Décoration de texte de lien
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsLinkDecorationFR
  title: Décoration de texte de lien
  locale: fr
  parent: shortcutsTypographyFR
  order: 1
shortcuts:
  - class: 'link-underline'
    style: |
      text-decoration: underline;
      text-underline-position: under;
  - class: 'link-no-underline'
    style: 'text-decoration: none;'
shortcutsPartialClass: 'link-underline'
translationKey: 'shortcutsLinkDecoration'
date: 'git Last Modified'
---

# Décoration de texte de lien

La classe décoration de texte de lien définit la propriété `text-decoration`. Elle ajoute ou supprime le trait de soulignement d’un lien.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Souligner<br/>`link-underline`

{% shortcutPreview %}

<a href="#" class="link-underline">Ce lien est souligné.</a>
{% endshortcutPreview %}

### Sans soulignement<br/>`link-no-underline`

{% shortcutPreview %}

<a href="#" class="link-no-underline">Ce lien n’est pas souligné.</a>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
