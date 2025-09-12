---
title: Align self
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsAlignSelfEN
  title: Align self
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'align-self-auto'
    style: 'align-self: auto;'
  - class: 'align-self-baseline'
    style: 'align-self: baseline;'
  - class: 'align-self-center'
    style: 'align-self: center;'
  - class: 'align-self-stretch'
    style: 'align-self: stretch;'
  - class: 'align-self-start'
    style: 'align-self: start;'
  - class: 'align-self-end'
    style: 'align-self: end;'
shortcutsNoticeDirection: 'align-self'
translationKey: 'shortcutsAlignSelf'
date: 'git Last Modified'
---

# Align self

The align self class sets the `align-self` property. It controls how an individual item aligns itself along the container’s cross axis, allowing it to override the container’s `align-items` setting for that specific item.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Examples

### Auto<br/>`align-self-auto`

The item with the `align-self-auto` class follows the container’s `align-items` setting and aligns automatically along the cross axis.

In **row layouts**, alignment follows the vertical cross axis.<br/>
In **column layouts**, alignment follows the horizontal cross axis.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p class="align-self-auto">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Baseline<br/>`align-self-baseline`

The item with the `align-self-baseline` class aligns its text baseline with the baselines of other items along the cross axis.

In **row layouts**, baseline alignment is vertical.<br/>
In **column layouts**, baseline alignment is horizontal.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-start">
  <p class="pb-800">1</p>
  <p class="align-self-baseline">2</p>
  <p class="pt-900">3</p>
</div>
{% endshortcutPreview %}

### Centre<br/>`align-self-center`

The item with the `align-self-center` class is centred along the cross axis, overriding the container’s `align-items` setting.

In **row layouts**, the item is centred vertically.<br/>
In **column layouts**, the item is centred horizontally.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-end">
  <p>1</p>
  <p class="align-self-center">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Stretch<br/>`align-self-stretch`

The item with the `align-self-stretch` class stretches to fill the container along the cross axis (unless a fixed size is set), overriding the container’s `align-items` setting.

In **row layouts**, the item stretches vertically.<br/>
In **column layouts**, the item stretches horizontally.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p class="align-self-stretch">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Start<br/>`align-self-start`

The item with the `align-self-start` class aligns to the start of the cross axis, overriding the container’s `align-items` setting.

In **row layouts**, the item aligns to the top.<br/>
In **column layouts**, the items aligns to the left.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p class="align-self-start">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### End<br/>`align-self-end`

The item with the `align-self-end` class aligns to the end of the cross axis, overriding the container’s `align-items` setting.

In **row layouts**, the item aligns to the bottom.<br/>
In **column layouts**, the item aligns to the right.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p class="align-self-end">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}
