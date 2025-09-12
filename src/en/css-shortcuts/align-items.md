---
title: Align items
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsAlignItemsEN
  title: Align items
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'align-items-baseline'
    style: 'align-items: baseline;'
  - class: 'align-items-center'
    style: 'align-items: center;'
  - class: 'align-items-stretch'
    style: 'align-items: stretch;'
  - class: 'align-items-start'
    style: 'align-items: start;'
  - class: 'align-items-end'
    style: 'align-items: end;'
shortcutsNoticeDirection: 'align-items'
translationKey: 'shortcutsAlignItems'
date: 'git Last Modified'
---

# Align items

The align items class sets the `align-items` property. It controls how items are aligned along the cross axis of a flex or grid container.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Examples

### Baseline<br/>`align-items-baseline`

Items are aligned along their text baselines, so text or inline content lines up consistently across items on the cross axis.

In **row layouts**, the alignment is vertical.<br/>
In **column layouts**, the alignment is horizontal.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-baseline">
  <p>1</p>
  <p class="pb-800">2</p>
  <p class="pt-900">3</p>
</div>
{% endshortcutPreview %}

### Centre<br/>`align-items-center`

Items are centred along the cross axis.

In **row layouts**, there’s equal space above and below.<br/>
In **column layouts**, there’s equal space to the left and right.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Stretch<br/>`align-items-stretch`

Items stretch to fill the container along the cross axis.

In **row layouts**, they fill vertical space unless a fixed size is set.<br/>
In **column layouts**, they fill horizontal space unless a fixed size is set.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-stretch">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Start<br/>`align-items-start`

Items are aligned to the start of the cross axis.

In **row layouts**, they’re aligned to the top of the container.<br/>
In **column layouts**, they’re aligned to the left of the container.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### End<br/>`align-items-end`

Items are aligned to the end of the cross axis.

In **row layouts**, they’re aligned to the bottom of the container.<br/>
In **column layouts**, they’re aligned to the right of the container.

{% shortcutPreview "example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-items-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}
