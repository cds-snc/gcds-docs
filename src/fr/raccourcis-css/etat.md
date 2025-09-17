---
title: État
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsStateFR
  title: État
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'hover:'
    style: |
      .hover:&lt;class&gt;:hover {
        &lt;property-name&gt;: &lt;property-value&gt;;
      }
  - class: 'focus:'
    style: |
      .focus:&lt;class&gt;:focus {
        &lt;property-name&gt;: &lt;property-value&gt;;
      }
translationKey: 'shortcutsState'
date: 'git Last Modified'
---

# État

Le préfixe d’état applique une classe en fonction de l’état d’interaction spécifié. Une classe sans préfixe s’appliquera à tous les états.

Ajouter le préfixe d’état permet de créer des interfaces dynamiques et conviviales sans écrire de CSS personnalisé pour chaque interaction.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Lien pointé<br/>`hover:<class>`

{% shortcutPreview %}

<a href="#" class="link-default hover:link-hover">
  Ce lien utilise la couleur link-default. Lorsqu’un lien est pointé du curseur, le lien utilise plutôt la couleur de lien pointé.
</a>
{% endshortcutPreview %}

### Ciblé<br/>`focus:<class>`

{% shortcutPreview "font-text-small p-150 b-radius-md" %}

<button class="bg-dark text-light focus:bg-light focus:text-primary">
  Ce bouton utilise la couleur d’arrière-plan sombre. À l’état ciblé, le bouton utilise plutôt la couleur d’arrière-plan claire.
</button>
{% endshortcutPreview %}
