---
title: Colour
layout: "layouts/base.njk"
eleventyNavigation:
  key: colourEN
  title: Colour
  locale: en
  parent: foundationsEN
  order: 1
  description: Colour tokens store the colour values for styling components.
  thumbnail: /images/en/foundations/preview/preview-colour.svg
  alt:
  state: published
permalink: /en/foundations/colour/
translationKey: "colour"
tokenTable:
  headers:
    color-preview: Preview
    token-name: Token name
    contrast: Contrast ratio
    value: Hex
    use-case: Purpose
  useCases:
    text-primary: Main text colour on a white or 100 shade background (like --gcds-color-blue-100).
    text-secondary: Contrast text colour (alternative to primary) on a white background.
    text-light: Main light text colour on a 700 shade or darker background (like --gcds-color-blue-700).
    link-default: Default link colour for links on a white background.
    link-hover: Hover link colour for links on a white background.
    link-light: Main light link colour for links on 700 shade or darker background (like --gcds-color-blue-700).
    border-default: Default border colour for borders and icons on a white background.
    danger-background: Danger background colour for background emphasis on a destructive action or critical feedback.
    danger-border: Danger border colour for borders on white or danger backgrounds for emphasis on a destructive action or critical feedback.
    danger-text: Danger text colour for white or danger backgrounds for emphasis on a destructive action or critical feedback.
    disabled-background: Disabled background colour. Use sparingly for a disabled interactive element.
    disabled-text: Disabled text colour. Use sparingly for a disabled interactive element.
    focus-background: Focus background colour, exclusively for focus on an interactive element.
    focus-text: Focus text colour, exclusively for focus on an interactive element.
    focus-textForm: Focus text-form colour, exclusively for focus on a form interactive element. Avoid using for non-form elements.
date: "git Last Modified"
---

# {{ title }}

Colour tokens define colour for components and global styles.

## Colour tokens and accessibility

GC Design System components meet level AA of the <a href="{{ links.wcag }}" target="_blank">Web Content Accessibility Guidelines (WCAG 2.1) <gcds-icon name="external-link" label="Opens in a new tab." margin-left="50" /></a> colour contrast standards for text and interactive elements.

When you use global tokens, check if your colour combinations meet standards for accessible colour contrast using <a href="{{ links.webaim }}" target="_blank">WebAIM Contrast Checker <gcds-icon name="external-link" label="Opens in a new tab." margin-left="50" /></a>.

## Select colour tokens purposefully

Select global tokens based on their purpose and its match to your needs.

Replace hard-coded values in your code with GC Design System colour tokens, like `var(--gcds-text-primary)` instead of #000000.

## Global colour tokens

Use global tokens to:

- Design layouts, text colours, and global (or site-wide) styles for typography or spacing.
- Communicate the meaning associated with that token. Global tokens are semantic.
- Create new component tokens.

Use global state tokens:

- Apply standard styling for states to your own components.

### Text

{% include "partials/token_table.njk", token: 'text', type: 'color' %}

### Link

{% include "partials/token_table.njk", token: 'link', type: 'color' %}

### Border

{% include "partials/token_table.njk", token: 'border', type: 'color' %}

### Danger

{% include "partials/token_table.njk", token: 'danger', type: 'color' %}

### Disabled

{% include "partials/token_table.njk", token: 'disabled', type: 'color' %}

### Focus

{% include "partials/token_table.njk", token: 'focus', type: 'color' %}

Note: Code elements take American spelling for "colour" and "grey".

## Base colour tokens

Only use base tokens when you've already checked for global tokens and you need something else for building your own components, tokens, or even images.

Use base design tokens to:

- Fill a gap when no global tokens are available.
- Design a custom visual, drawing from the full colour palette.
- Support your own components.
- Provide a basis to build (and potentially contribute back) your own tokens.

<div class="table-base-colors">
{% include "partials/token_table.njk", token: 'color.grayscale color.blue color.red color.green color.yellow', type: 'color' %}
</div>

Note: Code elements take American spelling for "colour" and "grey".

{% include "partials/helpus.njk" %}
