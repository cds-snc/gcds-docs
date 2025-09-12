---
title: Text overflow
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsTextOverflowEN
  title: Text overflow
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'text-clip'
    style: 'text-overflow: clip;'
  - class: 'text-truncate'
    style: |
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
translationKey: 'shortcutsTextOverflow'
date: 'git Last Modified'
---

# Text overflow

The text overflow class sets the `text-overflow` property. It controls if overflow text is clipped with or without an ellipsis.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Clip<br/>`text-clip`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="overflow-hidden text-clip" style="white-space: nowrap;">
  This text is clipped abruptly without an ellipsis when it overflows.
</p>
{% endshortcutPreview %}

### Truncate<br/>`text-truncate`

{% shortcutPreview "container-xs b-sm b-default p-150" %}

<p class="text-truncate">
  This text ends with an ellipsis when it overflows.
</p>
{% endshortcutPreview %}
