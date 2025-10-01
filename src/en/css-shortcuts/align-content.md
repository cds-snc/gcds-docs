---
title: Align content
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsAlignContentEN
  title: Align content
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'align-content-around'
    style: 'align-content: space-around;'
  - class: 'align-content-between'
    style: 'align-content: space-between;'
  - class: 'align-content-evenly'
    style: 'align-content: space-evenly;'
  - class: 'align-content-center'
    style: 'align-content: center;'
  - class: 'align-content-start'
    style: 'align-content: start;'
  - class: 'align-content-end'
    style: 'align-content: end;'
shortcutsNoticeDirection: 'align-content'
shortcutsPartialClass: 'align-content-center'
translationKey: 'shortcutsAlignContent'
date: 'git Last Modified'
---

# Align content

The align content class sets the `align-content` property. It controls how extra space is distributed between items in a flex or grid container along the cross axis.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Examples

### Around<br/>`align-content-around`

Rows are evenly spaced along the cross axis with equal space around each line. This results in half-sized gaps at the start and end of the container.

In **row layouts**, the spacing appears vertically between rows.<br/>
In **column layouts**, the spacing appears horizontally between columns.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-around">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Between<br/>`align-content-between`

Rows are evenly space along the cross axis with equal space between each line. There’s no space at the start or end of the container.

In **row layouts**, the spacing appears vertically between rows.<br/>
In **column layouts**, the spacing appears horizontally between columns.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-between">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Evenly<br/>`align-content-evenly`

Rows are evenly spaced along the cross axis with equal space between all lines and the container edges, including the start and end.

In **row layouts**, the spacing appears vertically between rows.<br/>
In **column layouts**, the spacing appears horizontally between columns.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-evenly">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Centre<br/>`align-content-center`

Rows are grouped together and centred along the cross axis within the container, with equal space above and below the entire group.

In **row layouts**, the rows are centred vertically.<br/>
In **column layouts**, the columns are centred horizontally.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-center">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Start<br/>`align-content-start`

Rows are grouped together at the start of the cross axis within the container. It leaves any extra space at the end of the container.

In **row layouts**, the rows align to the top of the container.<br/>
In **column layouts**, the columns align to the left of the container.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-start">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### End<br/>`align-content-end`

Rows are grouped together at the end of the cross axis within the container. It leaves any extra space at the beginning of the container.

In **row layouts**, the rows align to the bottom of the container.<br/>
In **column layouts**, the rows align to the right of the container.

{% shortcutPreview "flex-wrap example-styled-items example-flex-items example-flex-align" %}

<div class="d-flex align-content-end">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
