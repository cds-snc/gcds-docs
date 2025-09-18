---
title: Visibility
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsVisibilityEN
  title: Visibility
  locale: en
  parent: shortcutsLayoutEN
  order: 1
shortcuts:
  - class: 'visibility-hidden'
    style: 'visibility: hidden;'
  - class: 'visibility-visible'
    style: 'visibility: visible;'
  - class: 'visibility-sr-only'
    style: |
      display: block;
      width: 0;
      height: 0;
      margin: 0;
      overflow: hidden;
shortcutsPartialClass: 'visibility-hidden'
translationKey: 'shortcutsVisibility'
date: 'git Last Modified'
---

# Visibility

The visibility class sets the `visibility` property. It displays or hides an element without affecting the layout or flow of the document.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Hidden<br/>`visibility-hidden`

This element is hidden. It can’t receive focus but maintains its position in the document affecting the layout of other elements.

{% shortcutPreview "example-visibility example-styled-items" %}

<div class="d-flex gap-300">
  <p>1</p>
  <p class="visibility-hidden">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Visible<br/>`visibility-visible`

This element is visible. It can apply to elements hidden at different screen sizes.

{% shortcutPreview "example-visibility example-styled-items" %}

<div class="d-flex gap-300">
  <p>1</p>
  <p class="visibility-visible">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

### Screenreader-only<br/>`visibility-sr-only`

This element is only visible to assistive technologies.

{% shortcutPreview "example-visibility example-styled-items" %}

<div class="d-flex gap-300">
  <p>1</p>
  <p class="visibility-sr-only">2</p>
  <p>3</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
