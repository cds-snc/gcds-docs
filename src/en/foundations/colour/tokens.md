---
title: Tokens
layout: "layouts/token-documentation.njk"
translationKey: "colourTokens"
tags: ["colourEN", "tokens"]
tokenTable:
  headers:
    color-preview: ""
    token-name: Token name
    contrast: Contrast with white
    value: Hex
    rgb: RGB
date: "git Last Modified"
---

## {{ title }}

Display tokens here

{% include "partials/token_table.njk", token: 'color.grayscale color.blue color.red color.green color.yellow', type: 'color' %}
