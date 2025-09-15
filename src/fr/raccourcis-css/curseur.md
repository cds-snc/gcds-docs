---
title: Curseur
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsCursorFR
  title: Curseur
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'cursor-default'
    style: 'cursor: default;'
  - class: 'cursor-copy'
    style: 'cursor: copy;'
  - class: 'cursor-grab'
    style: 'cursor: grab;'
  - class: 'cursor-help'
    style: 'cursor: help;'
  - class: 'cursor-move'
    style: 'cursor: move;'
  - class: 'cursor-not-allowed'
    style: 'cursor: not-allowed;'
  - class: 'cursor-pointer'
    style: 'cursor: pointer;'
  - class: 'cursor-text'
    style: 'cursor: text;'
  - class: 'cursor-zoom-in'
    style: 'cursor: zoom-in;'
  - class: 'cursor-zoom-out'
    style: 'cursor: zoom-out;'
translationKey: 'shortcutsCursor'
date: 'git Last Modified'
---

# Curseur

La classe curseur définit la propriété `cursor`. Elle détermine le style de curseur affiché lors du survol d'un élément.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### Curseur par défaut<br/>`cursor-default`

{% shortcutPreview %}

<a href="#" class="cursor-default">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur par défaut.
</a> 
{% endshortcutPreview %}

### Curseur de copie<br/>`cursor-copy`

{% shortcutPreview %}

<a href="#" class="cursor-copy">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur de copie. Celui-ci indique que le contenu peut être copié.
</a> 
{% endshortcutPreview %}

### Curseur de prise<br/>`cursor-grab`

{% shortcutPreview %}

<a href="#" class="cursor-grab">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur de prise. Celui-ci indique que le contenu peut être manipulé.
</a> 
{% endshortcutPreview %}

### Curseur d’aide<br/>`cursor-help`

{% shortcutPreview %}

<a href="#" class="cursor-help">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur d’aide. Celui-ci indique que d’autres renseignements sont disponibles.
</a> 
{% endshortcutPreview %}

### Curseur de déplacement<br/>`cursor-move`

{% shortcutPreview %}

<a href="#" class="cursor-move">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur de déplacement. Celui-ci indique que le contenu peut être déplacé.
</a> 
{% endshortcutPreview %}

### Curseur non permis<br/>`cursor-not-allowed`

{% shortcutPreview %}

<a href="#" class="cursor-not-allowed">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur non permis. Celui-ci indique que l’action n’est pas permise.
</a> 
{% endshortcutPreview %}

### Curseur de pointeur<br/>`cursor-pointer`

{% shortcutPreview %}

<a href="#" class="cursor-pointer">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur de pointeur. Celui-ci indique que l'élément est cliquable.
</a> 
{% endshortcutPreview %}

### Curseur de texte<br/>`cursor-text`

{% shortcutPreview %}

<a href="#" class="cursor-text">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur de texte. Celui-ci indique que le texte peut être sélectionné.
</a> 
{% endshortcutPreview %}

### Curseur de zoom avant<br/>`cursor-zoom-in`

{% shortcutPreview %}

<a href="#" class="cursor-zoom-in">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur de zoom avant. Celui-ci indique qu’il est possible d’augmenter l’effet de rapprochement.
</a> 
{% endshortcutPreview %}

### Curseur de zoom arrière<br/>`cursor-zoom-out`

{% shortcutPreview %}

<a href="#" class="cursor-zoom-out">
  Lorsque l’on passe la souris dessus, cet élément affiche le curseur de zoom arrière. Celui-ci indique qu’il est possible de diminuer l’effet de rapprochement.
</a> 
{% endshortcutPreview %}
