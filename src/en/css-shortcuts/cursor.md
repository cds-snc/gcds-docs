---
title: Cursor
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsCursorEN
  title: Cursor
  locale: en
  parent: shortcutsInteractiveEN
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
shortcutsPartialClass: 'cursor-pointer'
translationKey: 'shortcutsCursor'
date: 'git Last Modified'
---

# Cursor

The cursor class sets the `cursor` property. It controls what cursor style is displayed when hovering over an element.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Default<br/>`cursor-default`

{% shortcutPreview %}

<a href="#" class="cursor-default">
  When hovered over, this element displays the default cursor.
</a> 
{% endshortcutPreview %}

### Copy<br/>`cursor-copy`

{% shortcutPreview %}

<a href="#" class="cursor-copy">
  When hovered over, this element displays the copy cursor. It indicates that the content can be copied.
</a> 
{% endshortcutPreview %}

### Grab<br/>`cursor-grab`

{% shortcutPreview %}

<a href="#" class="cursor-grab">
  When hovered over, this element displays the grab cursor. It indicates that the content can be grabbed.
</a> 
{% endshortcutPreview %}

### Help<br/>`cursor-help`

{% shortcutPreview %}

<a href="#" class="cursor-help">
  When hovered over, this element displays the help cursor. It indicates that more information is available.
</a> 
{% endshortcutPreview %}

### Move<br/>`cursor-move`

{% shortcutPreview %}

<a href="#" class="cursor-move">
  When hovered over, this element displays the move cursor. It indicates that the content can be dragged.
</a> 
{% endshortcutPreview %}

### Not allowed<br/>`cursor-not-allowed`

{% shortcutPreview %}

<a href="#" class="cursor-not-allowed">
  When hovered over, this element displays the not allowed cursor. It indicates that the action is not allowed.
</a> 
{% endshortcutPreview %}

### Pointer<br/>`cursor-pointer`

{% shortcutPreview %}

<a href="#" class="cursor-pointer">
  When hovered over, this element displays the pointer cursor. It indicates that the element is clickable.
</a> 
{% endshortcutPreview %}

### Text<br/>`cursor-text`

{% shortcutPreview %}

<a href="#" class="cursor-text">
  When hovered over, this element displays the text cursor. It indicates that text can be selected.
</a> 
{% endshortcutPreview %}

### Zoom in<br/>`cursor-zoom-in`

{% shortcutPreview %}

<a href="#" class="cursor-zoom-in">
  When hovered over, this element displays the zoom in cursor. It indicates the possibility to increase magnification.
</a> 
{% endshortcutPreview %}

### Zoom out<br/>`cursor-zoom-out`

{% shortcutPreview %}

<a href="#" class="cursor-zoom-out">
  When hovered over, this element displays the zoom out cursor. It indicates the possibility to decrease magnification.
</a> 
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
