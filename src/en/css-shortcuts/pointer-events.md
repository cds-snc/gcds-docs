---
title: Pointer events
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPointerEventsEN
  title: Pointer events
  locale: en
  parent: shortcutsInteractiveEN
  order: 1
shortcuts:
  - class: 'pointer-events-auto'
    style: 'pointer-events: auto;'
  - class: 'pointer-events-none'
    style: 'pointer-events: none;'
translationKey: 'shortcutsPointerEvents'
date: 'git Last Modified'
---

# Pointer events

The pointer events class sets the `pointer-events` property. It controls if an element responds to a mouse event, like clicking or hovering.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Auto<br/>`pointer-events-auto`

{% shortcutPreview %}

<a href="#" class="pointer-events-auto">
  This element responds to mouse events.
</a> 
{% endshortcutPreview %}

### None<br/>`pointer-events-none`

{% shortcutPreview %}

<a href="#" class="pointer-events-none">
  This element does not respond to mouse events.
</a> 
{% endshortcutPreview %}
