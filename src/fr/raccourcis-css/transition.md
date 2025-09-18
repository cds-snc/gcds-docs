---
title: Transition
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTodoFR
  title: Transition
  locale: fr
  parent: shortcutsInteractiveFR
  order: 1
shortcuts:
  - class: 'transition-fade-in'
    style: |
      opacity: 0;
      transition: opacity 0.15s ease-in-out;

      &:hover {
        opacity: 1;
      }
  - class: 'transition-fade-out'
    style: |
      opacity: 1;
      transition: opacity 0.15s ease-in-out;

      &:hover {
        opacity: 0;
      }
shortcutsPartialClass: 'transition-fade-in'
translationKey: 'shortcutsTodo'
date: 'git Last Modified'
---

# Transition

La classe de transition définit la propriété `transition`. Elle applique une animation qui permet de faire apparaître ou disparaître le contenu lorsqu’on le survole.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Apparition graduelle<br/>`transition-fade-in`

{% shortcutPreview %}

<a href="#" class="transition-fade-in">
  Lorsqu’on passe la souris dessus, cet élément apparaît graduellement.
</a> 
{% endshortcutPreview %}

### Disparition graduelle<br/>`transition-fade-out`

{% shortcutPreview %}

<a href="#" class="transition-fade-out">
  Lorsqu’on passe la souris dessus, cet élément disparaît graduellement.
</a> 
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
