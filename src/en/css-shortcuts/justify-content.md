---
title: Justify content
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsJustifyContentEN
  title: Justify content
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'justify-content-around'
    style: 'justify-content: space-around;'
  - class: 'justify-content-between'
    style: 'justify-content: space-between;'
  - class: 'justify-content-evenly'
    style: 'justify-content: space-evenly;'
  - class: 'justify-content-center'
    style: 'justify-content: center;'
  - class: 'justify-content-start'
    style: 'justify-content: flex-start;'
  - class: 'justify-content-end'
    style: 'justify-content: flex-end;'
shortcutsNoticeDirection: 'justify-content'
translationKey: 'shortcutsJustifyContent'
date: 'git Last Modified'
---

# Justify content

The justify content class sets the `justify-content` property. It controls how extra space is distributed between items in a flex or grid container along the main axis.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Examples

### Around<br/>`justify-content-around`

Columns are evenly spaced along the main axis with equal space around each line. This results in half-sized gaps at the start and end of the container.

In **row layouts**, spacing is horizontal with half gaps on left and right.<br/>
In **column layouts**, spacing is vertical with half gaps on top and bottom.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-around">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Between<br/>`justify-content-between`

Columns are evenly space along the main axis with equal space between each line. There’s no space at the start or end of the container.

In **row layouts**, spacing is horizontal between items only.<br/>
In **column layouts**, spacing is vertical between items only.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-between">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Evenly<br/>`justify-content-evenly`

Columns are evenly spaced along the main axis with equal space between all lines and the container edges, including the start and end.

In **row layouts**, spacing is equal horizontally between and around items.<br/>
In **column layouts**, spacing is equal vertically between and around items.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-evenly">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Centre<br/>`justify-content-center`

Rows are grouped together and centred along the main axis within the container, with equal space above and below the entire group.

In **row layouts**, items are centred horizontally.<br/>
In **column layouts**, items are centred vertically.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Start<br/>`justify-content-start`

Columns are grouped together at the start of the main axis within the container, leaving any extra space at the end of the container.

In **row layouts**, items align to the left.<br/>
In **column layouts**, items align to the top.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### End<br/>`justify-content-end`

Columns are grouped together at the end of the main axis within the container, leaving any extra space at the beginning of the container.

In **row layouts**, items align to the right.<br/>
In **column layouts**, items align to the bottom.

{% shortcutPreview "example-styled-items example-flex-items" %}

<div class="d-flex justify-content-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}
