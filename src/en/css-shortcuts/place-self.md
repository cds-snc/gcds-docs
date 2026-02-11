---
title: Place self
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPlaceSelfEN
  title: Place self
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'place-self-auto'
    style: 'place-self: auto;'
  - class: 'place-self-center'
    style: 'place-self: center;'
  - class: 'place-self-stretch'
    style: 'place-self: stretch;'
  - class: 'place-self-start'
    style: 'place-self: start;'
  - class: 'place-self-end'
    style: 'place-self: end;'
shortcutsPartialClass: 'place-self-center'
translationKey: 'shortcutsPlaceSelf'
date: 'git Last Modified'
---

# Place self

The place self class sets the `place-self` property. It is a shorthand for setting both the cross axis the main axis on a single grid item. It overrides the container’s `place-items` setting and controls how that individual item is aligned within its grid area.

<gcds-notice notice-role="info" notice-title-tag="h2" notice-title="No effect in flexbox">
  <gcds-text>In flexbox, <code>justify-self</code> is ignored, so <code>place-self</code> has no effect.</gcds-text>
</gcds-notice>

{% include "partials/shortcuts-table.njk" %}

## Examples

### Auto<br/>`place-self-auto`

The item with the `place-self-auto` class follows the container’s `place-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-stretch">
  <p>1</p>
  <p class="place-self-auto">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Centre<br/>`place-self-center`

The item with the `place-self-center` class is centred both vertically and horizontally within its grid area, overriding the container’s `place-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-stretch">
  <p>1</p>
  <p class="place-self-center">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### stretch<br/>`place-self-stretch`

The item with the `place-self-stretch` class stretches to fill the entire grid area along both axes, overriding the container’s `place-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-start">
  <p>1</p>
  <p class="place-self-stretch">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### Start<br/>`place-self-start`

The item with the `place-self-start` class aligns to the start edge of both axes within its grid area, overriding the container’s `place-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-stretch">
  <p>1</p>
  <p class="place-self-start">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

### End<br/>`place-self-end`

The item with the `place-self-end` class aligns to the end edge of both axes within its grid area, overriding the container’s `place-items` setting.

{% shortcutPreview "p-300 example-styled-items example-flex-items example-flex-place" %}

<div class="d-grid grid-cols-3 gap-300 place-items-stretch">
  <p>1</p>
  <p class="place-self-end">2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
