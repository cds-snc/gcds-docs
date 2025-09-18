---
title: Mise en page réactive
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsResponsiveLayoutFR
  title: Mise en page réactive
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'xs:'
    style: '@media (width > 30em) { ... }'
    minWidth: '480px'
  - class: 'sm:'
    style: '@media (width > 40em) { ... }'
    minWidth: '640px'
  - class: 'md:'
    style: '@media (width > 48em) { ... }'
    minWidth: '768px'
  - class: 'lg:'
    style: '@media (width > 64em) { ... }'
    minWidth: '1024px'
  - class: 'xl:'
    style: '@media (width > 80em) { ... }'
    minWidth: '1280px'
shortcutsHasMinWidth: true
translationKey: 'shortcutsResponsiveLayout'
date: 'git Last Modified'
---

# Mise en page réactive

Le préfixe de mise en page réactif applique une classe uniquement à la taille d’écran spécifiée. Il peut être ajouté à n’importe quelle classe. Une classe sans préfixe s’appliquera à toutes les tailles d’écran.

L’ajout de points d’arrêt directement aux classes permet de créer des mises en page réactives sans écrire de CSS personnalisé.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Point d’arrêt<br/>`md:<class>`

{% shortcutPreview "b-sm b-default p-150" %}

<p class="md:d-block d-inline-block">
  Cet élément s’affiche comme un block si la taille de l’écran est supérieure à 48em. Si la taille de l’écran est plus petite, elle est affichée comme un inline-block.
</p>
{% endshortcutPreview %}
