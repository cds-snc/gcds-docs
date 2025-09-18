---
title: Text overflow
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextOverflowEN
  title: Text overflow
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'text-clip'
    style: |
      overflow: hidden;
      text-overflow: clip;
      white-space: nowrap;
  - class: 'text-truncate'
    style: |
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
shortcutsPartialClass: 'text-truncate'
translationKey: 'shortcutsTextOverflow'
date: 'git Last Modified'
---

# Text overflow

The text overflow class sets the `text-overflow` property. It controls if overflow text is clipped with or without an ellipsis.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Clip<br/>`text-clip`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="text-clip">
  This text is clipped abruptly without an ellipsis when it overflows.
</p>
{% endshortcutPreview %}

### Truncate<br/>`text-truncate`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="text-truncate">
  This text ends with an ellipsis when it overflows.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
