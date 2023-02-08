---
title: Guidance on using spacing
layout: "layouts/token-documentation.njk"
translationKey: "spacingTokens"
tags: ["spacingEN", "tokens"]
tokenTable:
  headers:
    spacing-preview: ""
    token-name: Token name
    px: Pixel
    value: Rem
---

<h2 class="mt-500 mb-400">{{ title }}</h2>

<p class="mb-400">Spacing of elements can be used to create visual hierarchy for content and guide focus to certain elements. Too dense information can be hard to digest for a user, so make sure to leave enough space in the user interfaces.</p>

{% include "partials/token_table.njk", token: 'spacing', type: 'dimension' %}
