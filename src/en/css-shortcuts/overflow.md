---
title: Overflow
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsOverflowEN
  title: Overflow
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'overflow-visible'
    style: 'overflow: visible;'
  - class: 'overflow-x-visible'
    style: 'overflow-x: visible;'
  - class: 'overflow-y-visible'
    style: 'overflow-y: visible;'
  - class: 'overflow-hidden'
    style: 'overflow: hidden;'
  - class: 'overflow-x-hidden'
    style: 'overflow-x: hidden;'
  - class: 'overflow-y-hidden'
    style: 'overflow-y: hidden;'
  - class: 'overflow-scroll'
    style: 'overflow: scroll;'
  - class: 'overflow-x-scroll'
    style: 'overflow-x: scroll;'
  - class: 'overflow-y-scroll'
    style: 'overflow-y: scroll;'
translationKey: 'shortcutsOverflow'
date: 'git Last Modified'
---

# Overflow

The overflow class sets the `overflow` property. It controls how content is handled when it does not fit in its container and overflows.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Visible<br/>`overflow-visible`

{% shortcutPreview "bg-light b-md b-default mb-600 p-150 limited-size" %}

<div class="overflow-visible">
  Content that doesn’t fit in this element overflows horizontally and vertically.
</div>
{% endshortcutPreview %}

### Visible horizontal (x)<br/>`overflow-x-visible`

{% shortcutPreview "bg-light b-md b-default p-150" %}

<div class="overflow-x-visible" style="width: 250px;">
  <p style="width: 500px;">
    Content that doesn’t fit in this element overflows horizontally.
  </p>
</div>
{% endshortcutPreview %}

### Visible vertical (y)<br/>`overflow-y-visible`

{% shortcutPreview "bg-light b-md b-default mb-300 p-150 limited-size" %}

<div class="overflow-y-visible">
  Content that doesn’t fit in this element overflows vertically.
</div>
{% endshortcutPreview %}

### Hidden<br/>`overflow-hidden`

{% shortcutPreview "bg-light b-md b-default p-150 limited-size" %}

<p class="overflow-hidden">
  Content that doesn’t fit in this element is invisible, but still exists for screenreaders.
</p>
{% endshortcutPreview %}

### Hidden horizontal (x)<br/>`overflow-x-hidden`

{% shortcutPreview "bg-light b-md b-default p-150" %}

<div class="overflow-x-hidden" style="width: 250px;">
  <p style="width: 500px;">
    Content that doesn’t fit to the left and right of this element is invisible, but still exists for screenreaders.
  </p>
</div>
{% endshortcutPreview %}

### Hidden vertical (y)<br/>`overflow-y-hidden`

{% shortcutPreview "bg-light b-md b-default p-150 limited-size" %}

<p class="overflow-y-hidden">
  Content that doesn’t fit above or below this element is invisible, but still exists for screenreaders.
</p>
{% endshortcutPreview %}

### Scroll<br/>`overflow-scroll`

{% shortcutPreview "d-block bg-light b-md b-default p-150 limited-size" %}

<a href="#" class="overflow-scroll">
  Content that doesn’t fit in this element can be scrolled to with vertical and horizontal scrollbars.
</a>
{% endshortcutPreview %}

### Scroll horizontal (x)<br/>`overflow-x-scroll`

{% shortcutPreview "d-block bg-light b-md b-default p-150" %}

<a href="#"  class="overflow-x-scroll" style="width: 250px;">
  <p style="width: 500px;">
    Content that doesn’t fit in this element can be scrolled to with a horizontal scrollbar.
  </p>
</a>
{% endshortcutPreview %}

### Scroll vertical (y)<br/>`overflow-y-scroll`

{% shortcutPreview "d-block bg-light b-md b-default p-150 limited-size" %}

<a href="#" class="overflow-y-scroll">
  Content that doesn’t fit in this element can be scrolled to with a vertical scrollbar.
</a>
{% endshortcutPreview %}
