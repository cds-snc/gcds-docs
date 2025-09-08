---
title: Container
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsContainerEN
  title: Container
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'container-xs'
    style: 'max-width: 20rem'
  - class: 'container-sm'
    style: 'max-width: 30rem'
  - class: 'container-md'
    style: 'max-width: 48rem'
  - class: 'container-lg'
    style: 'max-width: 62rem'
  - class: 'container-xl'
    style: 'max-width: 71.25rem'
  - class: 'container-full'
    style: 'max-width: 100%'
permalink: /en/css-shortcuts/container
translationKey: 'shortcutsContainer'
date: 'git Last Modified'
---

# Container

The container class sets the `max-width` property. It changes the size of a container at different viewport sizes to create responsive layouts.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Extra small<br/>`container-xs`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-xs">
  This container has a max width of 20rem.
</div>
{% endshortcutPreview %}

### Small<br/>`container-sm`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-sm">
  This container has a max width of 30rem.
</div>
{% endshortcutPreview %}

### Medium<br/>`container-md`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-md">
  This container has a max width of 48rem.
</div>
{% endshortcutPreview %}

### Large<br/>`container-lg`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-lg">
  This container has a max width of 62rem.
</div>
{% endshortcutPreview %}

### Extra large<br/>`container-xl`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-xl">
  This container has a max width of 71.25rem.
</div>
{% endshortcutPreview %}

### Full<br/>`container-full`

{% shortcutPreview "b-sm b-default p-150" %}

<div class="container-full">
  This container has a max width of 100%.
</div>
{% endshortcutPreview %}
