---
title: Transition
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTodoEN
  title: Transition
  locale: en
  parent: shortcutsEN
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

The transition class sets the `transition` property. It applies an animation that allows fading content in or out when hovering.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Fade in<br/>`transition-fade-in`

{% shortcutPreview %}

<a href="#" class="transition-fade-in">
  When hovered over, this element fades in.
</a> 
{% endshortcutPreview %}

### Fade out<br/>`transition-fade-out`

{% shortcutPreview %}

<a href="#" class="transition-fade-out">
  When hovered over, this element  fades out.
</a> 
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
