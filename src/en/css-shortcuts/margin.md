---
title: Margin
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsMarginEN
  title: Margin
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'm-&lt;value&gt;'
    style: 'margin: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin'
  - class: 'mt-&lt;value&gt;'
    style: 'margin-block-start: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-top'
  - class: 'mb-&lt;value&gt;'
    style: 'margin-block-end: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-bottom'
  - class: 'ms-&lt;value&gt;'
    style: 'margin-inline-start: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-left'
  - class: 'me-&lt;value&gt;'
    style: 'margin-inline-end: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-right'
  - class: 'mx-&lt;value&gt;'
    style: 'margin-inline: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-left + margin-right'
  - class: 'my-&lt;value&gt;'
    style: 'margin-block: var(--gcds-spacing-&lt;value&gt;);'
    legacy: 'margin-top + margin-bottom'
shortcutsDescription: 'The &lt;value&gt; can be either one of our <a href="/en/styles/spacing/">predefined spacing tokens</a> (<code>0</code> - <code>1250</code>) or <code>auto</code>.'
shortcutsHasLegacy: true
translationKey: 'shortcutsMargin'
date: 'git Last Modified'
---

# Margin

The margin class sets the `margin` property. It controls the space outside the border of an element.

{% include "partials/logical-properties.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Examples

### All sides<br/>`m-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150" %}

<p class="m-0">
  This element has no margin on all sides.
</p>
{% endshortcutPreview %}

### Top side<br/>`mt-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150" %}

<p class="mt-auto">
  This element lets the browser automatically calculate the margin on the top side.
</p>
{% endshortcutPreview %}

### Bottom side<br/>`mb-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150 example-margin" %}

<p class="mb-900">
  This element has a margin of --gcds-spacing-900 on the bottom side.
</p>
{% endshortcutPreview %}

### Left side<br/>`ms-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150 example-margin" %}

<p class="m-900 ms-0">
  This element has no margin on the left side.
</p>
{% endshortcutPreview %}

### Right side<br/>`me-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150 example-margin" %}

<p class="m-900 me-0">
  This element has no margin on the right side.
</p>
{% endshortcutPreview %}

### Horizontal sides<br/>`mx-<value>`

{% shortcutPreview "bg-primary text-light p-150 example-margin" %}

<p class="container-md mx-auto">
  This element is horizontally centred by letting the browser automatically calculate the margin.
</p>
{% endshortcutPreview %}

### Vertical sides<br/>`my-<value>`

{% shortcutPreview "container-full bg-primary text-light p-150 example-margin" %}

<p class="my-900">
  This element has a margin of --gcds-spacing-900 on the top and bottom sides.
</p>
{% endshortcutPreview %}
