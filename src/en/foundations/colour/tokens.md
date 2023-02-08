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
---

<h2 class="mt-500 mb-400">{{ title }}</h2>

<p class="mb-400">Display tokens here</p>

{% include "partials/token_table.njk", token: 'color.grayscale color.blue color.red color.green color.yellow', type: 'color' %}
