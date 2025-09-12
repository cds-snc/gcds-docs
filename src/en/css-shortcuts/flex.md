---
title: Flex
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexEN
  title: Flex
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'flex-1'
    style: 'flex: 1 1 0%;'
  - class: 'flex-auto'
    style: 'flex: 1 1 auto;'
  - class: 'flex-initial'
    style: 'flex: 0 1 auto;'
  - class: 'flex-none'
    style: 'flex: none;'
translationKey: 'shortcutsFlex'
date: 'git Last Modified'
---

# Flex

The flex class sets the `flex` shorthand property on a flex item. It controls how the item grows, shrinks, and takes up space relative to its siblings inside a flex container.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Flex 1<br/>`flex-1`

These items will grow and shrink as needed to fill available space equally, without taking their initial size into account.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-1">Short content.</p>
  <p class="flex-1">Medium length content.</p>
  <p class="flex-1">Content that takes up more space than the others.</p>
</div>
{% endshortcutPreview %}

### Auto<br/>`flex-auto`

These items will grow and shrink as needed to fill available space, taking their initial size into account.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-auto">Short content.</p>
  <p class="flex-auto">Medium length content.</p>
  <p class="flex-auto">Content that takes up more space than the others.</p>
</div>
{% endshortcutPreview %}

### Initial<br/>`flex-initial`

These items don’t grow when there’s extra space, but can shrink if needed. Their base size is based on their content.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-initial">Short content.</p>
  <p class="flex-initial">Medium length content.</p>
  <p class="flex-initial">Content that takes up more space than the others.</p>
</div>
{% endshortcutPreview %}

### None<br/>`flex-none`

These items won’t grow to fill available space or shrink if there’s not enough space. Their size is based on their content.

{% shortcutPreview "gap-300 example-styled-items" %}

<div class="d-flex">
  <p class="flex-none">Short content.</p>
  <p class="flex-none">Medium length content.</p>
  <p class="flex-none">Content that takes up more space than the others.</p>
</div>
{% endshortcutPreview %}
