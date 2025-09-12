---
title: Flex wrap
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsFlexWrapEN
  title: Flex wrap
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'flex-wrap'
    style: 'flex-wrap: wrap;'
  - class: 'flex-wrap-reverse'
    style: 'flex-wrap: wrap-reverse;'
  - class: 'flex-nowrap'
    style: 'flex-wrap: nowrap;'
shortcutsNoticeDirection: 'flex-wrap'
translationKey: 'shortcutsFlexWrap'
date: 'git Last Modified'
---

# Flex wrap

The flex wrap class sets the `flex-wrap` property. It controls how flex items wrap onto multiple lines if there isn’t enough space for them.

{% include "partials/shortcuts-notice-direction.njk" %}
{% include "partials/shortcuts-table.njk" %}

## Examples

### Wrap<br/>`flex-wrap`

These items wrap onto multiple lines or columns when they don’t fit in a single row or column. Wrapping occurs in the default direction based on the cross axis.

In **row layouts**, it wraps from start to end vertically.<br/>
In **column layouts**, it wraps from start to end horizontally.

{% shortcutPreview "gap-300 example-styled-items example-flex-wrap" %}

<div class="d-flex flex-wrap">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Reverse wrap<br/>`flex-wrap-reverse`

These items wrap onto multiple lines or columns when they don’t fit in a single row or column. Wrapping occurs in the reverse direction along the cross axis.

In **row layouts**, it wraps from end to start vertically.<br/>
In **column layouts**, it wraps from end to start horizontally.

{% shortcutPreview "gap-300 example-styled-items example-flex-wrap" %}

<div class="d-flex flex-wrap-reverse">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### No wrap<br/>`flex-nowrap`

These items are forced onto one line without wrapping.

{% shortcutPreview "gap-300 example-styled-items example-flex-wrap" %}

<div class="d-flex flex-nowrap">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}
