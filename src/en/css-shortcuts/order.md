---
title: Order
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsOrderEN
  title: Order
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'order-1'
    style: 'order: 1;'
  - class: 'order-2'
    style: 'order: 2;'
  - class: 'order-3'
    style: 'order: 3;'
  - class: 'order-4'
    style: 'order: 4;'
  - class: 'order-5'
    style: 'order: 5;'
  - class: 'order-6'
    style: 'order: 6;'
  - class: 'order-7'
    style: 'order: 7;'
  - class: 'order-8'
    style: 'order: 8;'
  - class: 'order-9'
    style: 'order: 9;'
  - class: 'order-10'
    style: 'order: 10;'
  - class: 'order-11'
    style: 'order: 11;'
  - class: 'order-12'
    style: 'order: 12;'
  - class: 'order-first'
    style: 'order: -9999;'
  - class: 'order-last'
    style: 'order: 9999;'
  - class: 'order-none'
    style: 'order: 0;'
shortcutsPartialClass: 'order-first'
translationKey: 'shortcutsOrder'
date: 'git Last Modified'
---

# Order

The order class sets the `order` property. It controls the visual order of items within a flex container. By default, flex items follow the order in which they appear in the HTML. The `order` property can change their position without modifying the HTML structure.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="Use with caution">
  <gcds-text>Using the <code>order</code> property changes the visual order of flex items without altering their order in the HTML. If the visual and reading orders don’t match, it can cause confusion for people who use keyboard navigation or screenreaders. Test with assistive technologies to ensure information is clear and accessible.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Order 1-12<br/>`order-<value>`

The visual order of flex items change by setting the CSS `order` property from `1` to `12`. For example, the item placed third in the HTML appears visually in second position when given the `order-2` class.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex">
  <p class="order-1">1</p>
  <p class="order-3">2</p>
  <p class="order-2">3</p>
</div>
{% endshortcutPreview %}

### Order first<br/>`order-first`

The item placed third in the HTML appears visually at the beginning of the flex container when given the `order-first` class.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex">
  <p>1</p>
  <p>2</p>
  <p class="order-first">3</p>
</div>
{% endshortcutPreview %}

### Order last<br/>`order-last`

The item placed first in the HTML appears visually at the end of the flex container when given the `order-last` class.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex">
  <p class="order-last">1</p>
  <p>2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Order none<br/>`order-none`

This is the default order value. The item placed second in the HTML maintains its default position in the flex container when given the `order-none` class.

{% shortcutPreview "example-styled-items gap-300" %}

<div class="d-flex">
  <p>1</p>
  <p class="order-none">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
