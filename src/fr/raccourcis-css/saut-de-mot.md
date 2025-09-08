---
title: Saut de mot
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsWordBreakFR
  title: Saut de mot
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'break-normal'
    style: 'word-break: normal;'
  - class: 'break-word'
    style: 'word-break: break-word;'
  - class: 'break-all'
    style: 'word-break: break-all;'
permalink: /fr/raccourcis-css/saut-de-mot
translationKey: 'shortcutsWordBreak'
date: 'git Last Modified'
---

# Saut de mot

La classe saut de mot définit la propriété `word-break`. Elle détermine la façon dont les mots ou les chaînes insécables se coupent lorsqu'ils atteignent la fin d'une ligne.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Normal<br/>`break-normal`

{% shortcutPreview "container-xs b-sm b-default p-550" %}

<p class="break-normal">
  Voici des exemples de mots longs : hippopotomonstrosesquipédaliophobie et Sainte-Madeleine-de-la-Rivière-Madeleine. Ce texte se divise uniquement aux points de rupture naturels, comme les espaces et les traits d'union. S'il n'y a pas de point de rupture naturel, les mots longs peuvent déborder de la boîte
</p>
{% endshortcutPreview %}

### Mot<br/>`break-word`

{% shortcutPreview "container-xs b-sm b-default p-550" %}

<p class="break-word">
  Voici des exemples de mots longs : hippopotomonstrosesquipédaliophobie et Sainte-Madeleine-de-la-Rivière-Madeleine. Ce texte divise les mots longs au besoin pour éviter le débordement. S'il n'existe pas de point de rupture naturel (espace ou tiret), les mots sont divisés à la limite de la boîte.
</p>
{% endshortcutPreview %}

### À tout point<br/>`break-all`

{% shortcutPreview "container-xs b-sm b-default p-550" %}

<p class="break-all">
  Voici des exemples de mots longs : hippopotomonstrosesquipédaliophobie et Sainte-Madeleine-de-la-Rivière-Madeleine. Ce texte se divise à tout point, même au milieu d'un mot.
</p>
{% endshortcutPreview %}
