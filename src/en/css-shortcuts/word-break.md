---
title: Word break
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsWordBreakEN
  title: Word break
  locale: en
  parent: shortcutsTypographyEN
  order: 1
shortcuts:
  - class: 'break-normal'
    style: 'word-break: normal;'
  - class: 'break-word'
    style: 'word-break: break-word;'
  - class: 'break-all'
    style: 'word-break: break-all;'
shortcutsPartialClass: 'break-word'
translationKey: 'shortcutsWordBreak'
date: 'git Last Modified'
---

# Word break

The word break class sets the `word-break` property. It controls how words or unbreakable strings break when reaching the end of a line.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Normal<br/>`break-normal`

{% shortcutPreview "container-xs b-sm b-default p-550" %}

<p class="break-normal">
  These are long words: supercalifragilisticexpialidocious and Sutton-under‑Whitestonecliffe. This text breaks only at natural breakpoints, like spaces and hyphens. If there are no natural breakpoints, long words may overflow the container.
</p>
{% endshortcutPreview %}

### Word<br/>`break-word`

{% shortcutPreview "container-xs b-sm b-default p-550" %}

<p class="break-word">
  These are long words: supercalifragilisticexpialidocious and Sutton-under‑Whitestonecliffe. This text breaks long words when necessary to prevent overflow, by breaking anywhere within the word if no natural breakpoints (spaces and hyphens) exist.
</p>
{% endshortcutPreview %}

### All<br/>`break-all`

{% shortcutPreview "container-xs b-sm b-default p-550" %}

<p class="break-all">
  These are long words: supercalifragilisticexpialidocious and Sutton-under‑Whitestonecliffe. This text breaks at any point, even in the middle of a word.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
