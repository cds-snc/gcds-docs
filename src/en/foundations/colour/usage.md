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
headers: ["", Token name, Hex, RGB, Use case]
useCases:
  text-primary: Use the primary text colour for all text on a white or 100 shade background.
  text-secondary: Use the secondary text colour on white backgrounds only. Only use it to contrast with primary text.
  text-light: Use the light text colour on 700 shade backgrounds or darker.
---

## Colour usage

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
