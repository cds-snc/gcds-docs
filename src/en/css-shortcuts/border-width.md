---
title: Border width
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsBorderWidthEN
  title: Border width
  locale: en
  parent: shortcutsBackgroundBordersEN
  order: 1
shortcuts:
  - class: 'b-&lt;value&gt;'
    style: 'border: &lt;value&gt; solid currentColor;'
  - class: 'bt-&lt;value&gt;'
    style: 'border-block-start: &lt;value&gt; solid currentColor;'
  - class: 'bb-&lt;value&gt;'
    style: 'border-block-end: &lt;value&gt; solid currentColor;'
  - class: 'be-&lt;value&gt;'
    style: 'border-inline-end: &lt;value&gt; solid currentColor;'
  - class: 'bs-&lt;value&gt;'
    style: 'border-inline-start: &lt;value&gt; solid currentColor;'
  - class: 'bx-&lt;value&gt;'
    style: 'border-inline: &lt;value&gt; solid currentColor;'
  - class: 'by-&lt;value&gt;'
    style: 'border-block: &lt;value&gt; solid currentColor;'
shortcutsDescription: |
  The class <code>value</code> can be set to one of the following:

  - <code>0</code>
  - <code>sm</code> (0.0625rem)
  - <code>md</code> (0.125rem)
  - <code>lg</code> (0.25rem)
  - <code>xl</code> (0.375rem)
shortcutsPartialClass: 'b-sm'
translationKey: 'shortcutsBorderWidth'
date: 'git Last Modified'
---

# Border width

The border width class sets the `border-width` property. It controls the width of an element’s border.

{% include "partials/logical-properties.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Examples

### All side<br/>`b-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="b-0">
  This element has a border width of 0 on all sides.
</p>
{% endshortcutPreview %}

### Top side<br/>`bt-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="bt-sm">
  This element has a small border on the top side.
</p>
{% endshortcutPreview %}

### Bottom side<br/>`bb-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="bb-md">
  This element has a medium border on the bottom side.
</p>
{% endshortcutPreview %}

### Right side<br/>`be-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="be-lg">
  This element has a large border on the right side.
</p>
{% endshortcutPreview %}

### Left side<br/>`bs-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="bs-xl">
  This element has an extra large border on the left side.
</p>
{% endshortcutPreview %}

### Horizontal sides<br/>`bx-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="bx-sm">
  This element has a small border on the left and right sides.
</p>
{% endshortcutPreview %}

### Vertical sides<br/>`by-<value>`

{% shortcutPreview "bg-light p-150" %}

<p class="by-lg">
  This element has a large border on the top and bottom sides.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
