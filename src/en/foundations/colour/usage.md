---
title: Colour - Foundations
layout: "layouts/token-documentation.njk"
eleventyNavigation:
  key: colourEN
  title: Colour
  locale: en
  parent: foundationsEN
  order: 2
  description: This is the foundation
  thumbnail: /images/en/foundations/foundation.png
  alt: This is an image of the foundation
permalink: /en/foundations/colour/
translationKey: "colour"
tags: ["colourEN", "usage"]
type: color
headers:
  color-preview: ""
  token-name: Token name
  value: Hex
  rgb: RGB
  use-case: Use case
useCases:
  text-primary: Use the primary text colour for all text on a white or 100 shade background.
  text-secondary: Use the secondary text colour on white backgrounds only. Only use it to contrast with primary text.
  text-light: Use the light text colour on 700 shade backgrounds or darker.
  link-default: Use the default link colour for links on white backgrounds.
  link-hover: Use the hover link colour for links on white backgrounds.
  link-light: Use the light link colour for links on 700 shade backgrounds or darker.
  border-default: Use the default border colour for borders or icons on a white background.
  danger-background: Use the danger background colour as background emphasis on destructive actions or critical feedback.
  danger-border: Use the danger border colour for borders on destructive actions or critical feedback.
  danger-text: Use the danger text colour on white or danger backgrounds to put emphasis on destructive actions or critical feedback.
  disabled-background: Use the disabled background colour as little as possible. If you have to disable an interactive element, use the disabled colour as a background.
  disabled-text: Use the disabled text colour for any text withing the disabled component.
  focus-background: The focus background colour should only be applied when focusing on an interactive element.
  focus-text: The focus text colour should only be applied when focusing on an interactive element.
  focus-textForm: The focus text form colour should only be applied when focusing on form elements. Do not use this token for elements that aren’t form elements.
---

## Accessibility and colour tokens

Ensure that the contrast ratio of text and interactive elements meets level AA of the Web Content Accessibility Guidelines (WCAG 2.1).

You can check the colour contrast on the Web Aim Contrast Checker.

image

## Global colours

If you are using GC Design System, use our colour tokens instead of hardcoded values. For example, use var(--gcds-brand-default-text) instead of #000000. Using our colour tokens ensures that you are always using the latest colour palette and makes it easier to update colour values if necessary.

Only use the variables in the context they’re designed for. In all other cases, you should reference the colour tokens directly. For example, if you wanted to use blue, you should use `var(--gcds-color-blue-focus)` rather than `var(--gcds-brand-focus)`.

### Text

{% include "partials/token_table.njk", token: 'text' %}

### Link

{% include "partials/token_table.njk", token: 'link' %}

### Border

{% include "partials/token_table.njk", token: 'border' %}

### Danger

{% include "partials/token_table.njk", token: 'danger' %}

### Disabled

{% include "partials/token_table.njk", token: 'disabled' %}

### Focus

{% include "partials/token_table.njk", token: 'focus' %}
