---
title: CSS Shortcuts - Visibility
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsVisibilityEN
  title: CSS Shortcuts - Visibility
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'visibility-hidden'
    style: 'visibility: hidden;'
  - class: 'visibility-visible'
    style: 'visibility: visible;'
  - class: 'visibility-sr-only'
    style: 'display: block;
      width: 0;
      height: 0;
      margin: 0;
      overflow: hidden;'
permalink: /en/css-shortcuts/visibility
translationKey: 'shortcutsVisibility'
date: 'git Last Modified'
---

# Visibility

<!-- TODO: Improve examples -->

The visibility class sets the `visibility` property. It displays or hides an element without affecting the layout or flow of the document.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Hidden<br/>`visibility-hidden`

{% shortcutPreview %}

<p class="visibility-hidden">
  This element is hidden. It can’t receive focus but maintains its position in the document affecting the layout of other elements.
</p>
{% endshortcutPreview %}

### Visible<br/>`visibility-visible`

{% shortcutPreview %}

<p class="visibility-visible">
  This element is visible. It can apply to elements hidden at different screen sizes.
</p>
{% endshortcutPreview %}

### Screenreader-only<br/>`visibility-sr-only`

{% shortcutPreview %}

<p class="visibility-sr-only">
  This element is only visible to assistive technologies.
</p>
{% endshortcutPreview %}
