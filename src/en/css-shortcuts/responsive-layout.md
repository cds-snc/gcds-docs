---
title: Responsive layout
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsResponsiveLayoutEN
  title: Responsive layout
  locale: en
  parent: shortcutsEN
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

# Responsive layout

The responsive layout prefix applies a class only to the specified screen size. It can be added to any class. A class without a prefix will apply to all screen sizes.

Adding breakpoints directly to the classes lets you to create responsive layouts without writing custom CSS.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Breakpoint<br/>`md:<class>`

{% shortcutPreview "b-sm b-default p-150" %}

<p class="md:d-block d-inline-block">
  This element displays as a block if the screen size is bigger than 48em. If the screen size is smaller, it will be displayed as an inline-block.
</p>
{% endshortcutPreview %}
