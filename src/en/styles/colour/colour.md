---
title: Colour tokens
layout: 'layouts/base.njk'
eleventyNavigation:
  key: colourEN
  title: Colour
  locale: en
  parent: foundationsEN
  order: 1
  description: Colour tokens store the colour values for styling components.
  thumbnail: /images/en/foundations/preview/preview-colour.svg
  alt: Coloured squares in a four by three grid arrangement, with each column progressively shifting to a deeper hue of the initial square's colour. The first row has blue squares, the second row has grey squares, and the third row has red squares.
  state: published
permalink: /en/styles/colour/
translationKey: 'colour'
tokenTable:
  headers:
    color-preview: Preview
    token-name: Token name
    contrast: Contrast ratio
    value: Hex
    use-case: Purpose
  useCases:
    text-light: Main light text colour. Use on a background shade of 700 or darker (like --gcds-bg-dark).
    text-primary: Main text colour. Use on a background shade of 50 or lighter (like --gcds-bg-white).
    text-secondary: Contrast text colour (alternative to primary). Use on a background shade of 50 or lighter (like --gcds-bg-white).
    link-default: Default link colour for links on a white background.
    link-hover: Hover link colour for links on a white background.
    link-light: Main light link colour for links on 700 shade or darker background (like --gcds-color-blue-700).
    link-visited: Visited link colour for links on a white background.
    bg-dark: Main dark background colour. Use with a text shade of 100 or lighter (like --gcds-text-light).
    bg-light: Light background colour (alternative to white). Use with a text shade of 700 or darker (like --gcds-text-primary).
    bg-primary: Highlight background colour. Use with a text shade of 100 or lighter (like --gcds-text-light).
    bg-white: Main background colour. Use with a text shade of 700 or darker (like --gcds-text-primary).
    border-default: Default border colour for borders and icons on a white background.
    danger-background: Danger background colour for background emphasis on a destructive action or critical feedback.
    danger-border: Danger border colour for borders on white backgrounds emphasizing a destructive action or critical feedback.
    danger-text: Danger text colour for white backgrounds emphasizing a destructive action or critical feedback.
    disabled-background: Disabled background colour. Use sparingly for a disabled interactive element.
    disabled-text: Disabled text colour. Use sparingly for a disabled interactive element.
    focus-background: Focus background colour, exclusively for focus on an interactive element.
    focus-border: Focus border colour, exclusively for focus on an interactive element.
    focus-text: Focus text colour, exclusively for focus on an interactive element.
    focus-textForm: Focus text-form colour, exclusively for focus on a form interactive element. Avoid using for non-form elements.
date: 'git Last Modified'
---

# {{ title }}

Colour tokens define colour for components and global styles.

## Colour tokens and accessibility

GC Design System components meet level AA of the <gcds-link external href="{{ links.wcag }}" target="_blank">Web Content Accessibility Guidelines (WCAG 2.1)</gcds-link> colour contrast standards for text and interactive elements.

When you use global colour tokens, check if your colour combinations meet standards for accessible colour contrast using <gcds-link external href="{{ links.webaim }}" target="_blank">WebAIM Contrast Checker</gcds-link>.

## Select colour tokens purposefully

Select global colour tokens based on their purpose and its match to your needs.

Replace hard-coded values in your code with GC Design System colour tokens, like `var(--gcds-text-primary)` instead of #333333.

## Global colour tokens

Use global colour tokens to:

- Design layouts, text colours, and global (or site-wide) styles.
- Communicate the meaning associated with that token. Global tokens are semantic.
- Create new component tokens.

Use global state tokens:

- Apply standard styling for states to your own components.

### Text

{% include "partials/token_table.njk", token: 'text', type: 'color' %}

### Link

{% include "partials/token_table.njk", token: 'link', type: 'color' %}

### Background

{% include "partials/token_table.njk", token: 'bg', type: 'color' %}

### Border

{% include "partials/token_table.njk", token: 'border', type: 'color' %}

### Danger

{% include "partials/token_table.njk", token: 'danger', type: 'color' %}

### Disabled

{% include "partials/token_table.njk", token: 'disabled', type: 'color' %}

### Focus

{% include "partials/token_table.njk", token: 'focus', type: 'color' %}

## Base colour tokens

Only use base tokens when you've already checked for global tokens and you need something else for building your own components, tokens, or even images.

Use base colour design tokens to:

- Fill a gap when no global tokens are available.
- Design a custom visual, drawing from the full colour palette.
- Support your own components.
- Provide a basis to build (and potentially contribute back) your own tokens.

<div class="table-base-colors">
{% include "partials/token_table.njk", token: 'color.black color.blue color.blue-muted color.blue-vivid color.grayscale color.green color.purple color.red color.white color.yellow', type: 'color' %}
</div>

Note: Code elements take American spelling for "colour" and "grey".

{% include "partials/helpus.njk" %}
