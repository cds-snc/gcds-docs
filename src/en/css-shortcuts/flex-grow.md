---
title: Flex grow
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexGrowEN
  title: Flex grow
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'flex-grow'
    style: 'flex-grow: 1;'
  - class: 'flex-grow-0'
    style: 'flex-grow: 0;'
translationKey: 'shortcutsFlexGrow'
date: 'git Last Modified'
---

# Flex grow

The flex grow class sets the `flex-grow` property. It controls how a flex item will grow relative to other items when extra space is available in the container.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Grow<br/>`flex-grow`

The item with the `flex-grow` class will expand to fill the available space, while the other two items maintain their natural size and won’t grow.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-none">1</p>
  <p class="flex-grow">2</p>
  <p class="flex-none">3</p>
</div>
{% endshortcutPreview %}

### No grow<br/>`flex-grow-0`

The item with the `flex-grow-0` class won’t grow to fill the available space, while the other two items will expand to fill the remaining space.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-grow">1</p>
  <p class="flex-grow-0">2</p>
  <p class="flex-grow">3</p>
</div>
{% endshortcutPreview %}
