---
title: Place content
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPlaceContentEN
  title: Place content
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'place-content-around'
    style: 'place-content: space-around;'
  - class: 'place-content-between'
    style: 'place-content: space-between;'
  - class: 'place-content-evenly'
    style: 'place-content: space-evenly;'
  - class: 'place-content-center'
    style: 'place-content: center;'
  - class: 'place-content-stretch'
    style: 'place-content: stretch;'
  - class: 'place-content-start'
    style: 'place-content: start;'
  - class: 'place-content-end'
    style: 'place-content: end;'
shortcutsNoticeDirection: 'place-content'
translationKey: 'shortcutsPlaceContent'
date: 'git Last Modified'
---

# Place content

The place content class sets the `place-content` property. It is a shorthand for setting both cross axis and main axis. It controls how extra space is distributed between rows and columns in multi-line flex or grid containers.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Examples

### Around<br/>`place-content-around`

Rows and columns have equal space around them, resulting in half-sized gaps at the container edges.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-around">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Between<br/>`place-content-between`

Rows and columns are evenly spaced with equal space between them, and no space before the first or after the last item at the container edges.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-between">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Evenly<br/>`place-content-evenly`

Rows and columns have equal space before, between, and after every item, including the container edges.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-evenly">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Centre<br/>`place-content-center`

Rows and columns are grouped together at the center of the container, with equal space on both sides.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Stretch<br/>`place-content-stretch`

Rows and columns stretch along both axes to fill the container, distributing space evenly.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-stretch">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Start<br/>`place-content-start`

Rows and columns are grouped together at the start of their respective axes, with no space before the first item.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### End<br/>`place-content-end`

Rows and columns are grouped together at the end of their axes, leaving space before the first item.

{% shortcutPreview "example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 place-content-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}
