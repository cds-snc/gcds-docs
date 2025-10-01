---
title: Flex shrink
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexShrinkEN
  title: Flex shrink
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'flex-shrink'
    style: 'flex-shrink: 1;'
  - class: 'flex-shrink-0'
    style: 'flex-shrink: 0;'
shortcutsPartialClass: 'flex-shrink'
translationKey: 'shortcutsFlexShrink'
date: 'git Last Modified'
---

# Flex shrink

The flex shrink class sets the `flex-shrink` property. It controls how much a flex item shrinks when there isn’t enough space in the container.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Shrink<br/>`flex-shrink`

The item with the `flex-shrink` class reduces its size when space is limited, while the other two items keep their original size.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-none" style="width: 28rem;">1</p>
  <p class="flex-shrink" style="width: 28rem;">2</p>
  <p class="flex-none" style="width: 28rem;">3</p>
</div>
{% endshortcutPreview %}

### No shrink<br/>`flex-shrink-0`

The item with the `flex-shrink-0` class maintains its size when space is limited, while the other two items shrink to fit the container.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-none" style="width: 28rem;">1</p>
  <p class="flex-shrink-0" style="width: 28rem;">2</p>
  <p class="flex-none" style="width: 28rem;">3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
