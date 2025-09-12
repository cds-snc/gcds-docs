---
title: Padding
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPaddingEN
  title: Padding
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'p-&lt;value&gt;'
    style: 'padding: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding'
  - class: 'pt-&lt;value&gt;'
    style: 'padding-block-start: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-top'
  - class: 'pb-&lt;value&gt;'
    style: 'padding-block-end: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-bottom'
  - class: 'ps-&lt;value&gt;'
    style: 'padding-inline-start: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-left'
  - class: 'pe-&lt;value&gt;'
    style: 'padding-inline-end: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-right'
  - class: 'px-&lt;value&gt;'
    style: 'padding-inline: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-left + padding-right'
  - class: 'py-&lt;value&gt;'
    style: 'padding-block: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'padding-top + padding-bottom'
shortcutsDescription: 'The <code>value</code> can be either one of our <a href="/en/styles/spacing/">predefined spacing tokens</a> (<code>0</code> - <code>1250</code>).'
shortcutsHasLegacy: true
translationKey: 'shortcutsPadding'
date: 'git Last Modified'
---

# Padding

The padding sets the `padding` property. It controls the space inside an element between its content and border.

{% include "partials/logical-properties.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Examples

### All sides<br/>`p-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="p-0">
  This element has no padding on all sides.
</p> 
{% endshortcutPreview %}

### Top side<br/>`pt-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="pt-300">
  This element has a padding of --gcds-spacing-300 on the top side.
</p> 
{% endshortcutPreview %}

### Bottom side<br/>`pb-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="pb-300">
  This element has a padding of --gcds-spacing-300 on the bottom side.
</p>
{% endshortcutPreview %}

### Left side<br/>`ps-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="p-300 ps-0">
  This element has no padding on the left side.
</p> 
{% endshortcutPreview %}

### Right side<br/>`pe-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="p-300 pe-0">
  This element has no padding on the right side.
</p> 
{% endshortcutPreview %}

### Horizontal sides<br/>`px-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="px-600">
  This element has a padding of --gcds-spacing-600 on the left and right sides.
</p>
{% endshortcutPreview %}

### Vertical sides<br/>`py-<value>`

{% shortcutPreview "d-inline-block bg-primary text-light" %}

<p class="py-500">
  This element has a padding of --gcds-spacing-500 on the top and bottom sides.
</p> 
{% endshortcutPreview %}
