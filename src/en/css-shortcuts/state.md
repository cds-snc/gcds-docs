---
title: State
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsStateEN
  title: State
  locale: en
  parent: shortcutsConditionalRenderingEN
  order: 1
shortcuts:
  - class: 'hover:'
    style: |
      .hover:&lt;class&gt;:hover {
        &lt;property-name&gt;: &lt;property-value&gt;;
      }
  - class: 'focus:'
    style: |
      .focus:&lt;class&gt;:focus {
        &lt;property-name&gt;: &lt;property-value&gt;;
      }
translationKey: 'shortcutsState'
date: 'git Last Modified'
---

# State

The state prefix applies a class based on the specified interaction state. A class without a prefix will apply to all states.

Adding the state prefix lets you create dynamic and user-friendly interfaces without writing custom CSS for each interaction.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Hover<br/>`hover:<class>`

{% shortcutPreview %}

<a href="#" class="link-default hover:link-hover">
  This link uses the link-default colour. On hover, the link will use the link-hover colour instead.
</a>
{% endshortcutPreview %}

### Focus<br/>`focus:<class>`

{% shortcutPreview "font-text-small p-150 b-radius-md" %}

<button class="bg-dark text-light focus:bg-light focus:text-primary">
  This button uses the dark background colour. On focus, the button will use the light background colour instead.
</button>
{% endshortcutPreview %}
