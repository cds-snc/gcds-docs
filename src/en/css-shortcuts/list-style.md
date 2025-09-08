---
title: List style
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsListStyleEN
  title: List style
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'list-circle'
    style: |
      list-style: circle;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-disc'
    style: |
      list-style: disc;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-square'
    style: |
      list-style: square;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-decimal'
    style: |
      list-style: decimal;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-decimal-leading-zero'
    style: |
      list-style: decimal-leading-zero;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-upper-roman'
    style: |
      list-style: upper-roman;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-lower-roman'
    style: |
      list-style: lower-roman;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-upper-alpha'
    style: |
      list-style: upper-alpha;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-lower-alpha'
    style: |
      list-style: lower-alpha;
      margin: 0 0 0 var(--gcds-spacing-400);
  - class: 'list-none'
    style: 'list-style: none;'
permalink: /en/css-shortcuts/list-style
translationKey: 'shortcutsListStyle'
date: 'git Last Modified'
---

# List style

The list style class sets the `list-style` property. It controls the appearance of list item markers.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Circle<br/>`list-circle`

{% shortcutPreview %}

<ul class="list-circle">
  <li>This list marker is a circle.</li>
  <li>This list marker is a circle.</li>
  <li>This list marker is a circle.</li>
</ul>
{% endshortcutPreview %}

### Disc<br/>`list-disc`

{% shortcutPreview %}

<ul class="list-disc">
  <li>This list marker is a filled-in circle.</li>
  <li>This list marker is a filled-in circle.</li>
  <li>This list marker is a filled-in circle.</li>
</ul>
{% endshortcutPreview %}

### Square<br/>`list-square`

{% shortcutPreview %}

<ul class="list-square">
  <li>This list marker is a square.</li>
  <li>This list marker is a square.</li>
  <li>This list marker is a square.</li>
</ul>
{% endshortcutPreview %}

### Decimal<br/>`list-decimal`

{% shortcutPreview %}

<ol class="list-decimal">
  <li>This list marker uses numbers.</li>
  <li>This list marker uses numbers.</li>
  <li>This list marker uses numbers.</li>
</ol>
{% endshortcutPreview %}

### Decimal leading zero<br/>`list-decimal-leading-zero`

{% shortcutPreview %}

<ol class="list-decimal-leading-zero">
  <li>This list marker uses a numbered list starting with 0.</li>
  <li>This list marker uses a numbered list starting with 0.</li>
  <li>This list marker uses a numbered list starting with 0.</li>
</ol>
{% endshortcutPreview %}

### Uppercase Roman<br/>`list-upper-roman`

{% shortcutPreview %}

<ol class="list-upper-roman">
  <li>This list marker is an uppercase Roman numeral.</li>
  <li>This list marker is an uppercase Roman numeral.</li>
  <li>This list marker is an uppercase Roman numeral.</li>
</ol>
{% endshortcutPreview %}

### Lowercase Roman<br/>`list-lower-roman`

{% shortcutPreview %}

<ol class="list-lower-roman">
  <li>This list marker is a lowercase Roman numeral.</li>
  <li>This list marker is a lowercase Roman numeral.</li>
  <li>This list marker is a lowercase Roman numeral.</li>
</ol>
{% endshortcutPreview %}

### Uppercase alpha<br/>`list-upper-alpha`

{% shortcutPreview %}

<ol class="list-upper-alpha">
  <li>This list marker is uppercase alphabetical.</li>
  <li>This list marker is uppercase alphabetical.</li>
  <li>This list marker is uppercase alphabetical.</li>
</ol>
{% endshortcutPreview %}

### Lowercase alpha<br/>`list-lower-alpha`

{% shortcutPreview %}

<ol class="list-lower-alpha">
  <li>This list marker is lowercase alphabetical.</li>
  <li>This list marker is lowercase alphabetical.</li>
  <li>This list marker is lowercase alphabetical.</li>
</ol>
{% endshortcutPreview %}

### None<br/>`list-none`

{% shortcutPreview %}

<ul class="list-none">
  <li>This is a list item without a list marker.</li>
  <li>This is a list item without a list marker.</li>
  <li>This is a list item without a list marker.</li>
</ul>
{% endshortcutPreview %}
