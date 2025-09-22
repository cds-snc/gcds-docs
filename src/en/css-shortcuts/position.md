---
title: Position
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsPositionEN
  title: Position
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'position-static'
    style: 'position: static;'
  - class: 'position-absolute'
    style: 'position: absolute;'
  - class: 'position-fixed'
    style: 'position: fixed;'
  - class: 'position-relative'
    style: 'position: relative;'
  - class: 'position-sticky'
    style: 'position: sticky;'
shortcutsPartialClass: 'position-relative'
translationKey: 'shortcutsPosition'
date: 'git Last Modified'
---

# Position

<!-- TODO: Improve examples -->

The position class sets the `position` property. It determines how the element is positioned in the document.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Static<br/>`position-static`

```html
<p class="position-static">
  This element displays a static position where it exists in the normal document flow.
</p>
```

### Absolute<br/>`position-absolute`

```html
<p class="position-absolute">
  This element is removed from the normal document flow and displays relative to its nearest positioned ancestor or the page itself.
</p>
```

### Fixed<br/>`position-fixed`

```html
<p class="position-fixed">
  This element displays relative to the viewport and stays fixed in place when the page is scrolled.
</p>
```

### Relative<br/>`position-relative`

```html
<p class="position-relative">
  This element is offset relative to its normal position using top, right, bottom, or left.
</p>
```

### Sticky<br/>`position-sticky`

```html
<p class="position-sticky">
  This element scrolls with the page until a specified offset is reached, then sticks in place within its containing block.
</p>
```

{% include "partials/responsive-layout.njk" %}
