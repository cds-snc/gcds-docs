---
title: Tokens
layout: "layouts/token-documentation.njk"
translationKey: "typographyTokens"
tags: ["typographyEN", "tokens"]
tokenTable:
  headers:
    font-preview: ""
    token-name: Token name
    font-value: Value
  previews:
    font-h1: Heading 1
    font-h2: Heading 2
    font-h3: Heading 3
    font-h4: Heading 4
    font-h5: Heading 5
    font-h6: Heading 6
    font-label: Label
    font-text: Text
    font-textLong: Paragraph
    font-caption: Caption
    fontFamilies-heading: Headings
    fontFamilies-body: Text
    fontFamilies-monospace: Monospace
    fontFamilies-icons: icons
    fontWeights-light: Light
    fontWeights-regular: Regular
    fontWeights-medium: Medium
    fontWeights-semibold: Semibold
    fontWeights-bold: Bold
---

<h2 class="mt-500 mb-400">{{ title }}</h2>

<p class="mb-400">Font values in the Text and Heading tables are read using the following template: font weight, font size in rem, line height as a percentage of font size, and the font family. The font family also contains fallback values. The value of font tokens follow the [shorthand font property specification](https://w3c.github.io/csswg-drafts/css-fonts/#font-prop).</p>

<h3 class="mt-500 mb-400">Headings</h3>

{% include "partials/token_table.njk", token: 'font', subTokens: "h1 h2 h3 h4 h5 h6", type: 'typography' %}

<h3 class="mt-500 mb-400">Paragraphs</h3>

{% include "partials/token_table.njk", token: 'font', subTokens: "label text textLong caption", type: 'typography' %}

<h3 class="mt-500 mb-400">Font families</h3>

<p class="mb-400">There are 3 fonts available for text elements. Heading is used for Headings only. Everything else can be set in Text or Monospace. You can use monospace fonts for use cases such as data tables or code examples. You should prefer Text font family for most use cases.</p>

{% include "partials/token_table.njk", token: 'fontFamilies', type: 'fontFamilies' %}

<h3 class="mt-500 mb-400">Font weights</h3>

<p class="mb-400">You may use font weight overrides when composing with the Text font family. Headings may only be set in bold.</p>

<p class="mb-400">Font weights can help you show emphasis on a few keywords within long paragraphs, lists or labels. Be mindful of the quantity of font weights you use, try to only use two or three weights with as much contrast as possible. Avoid using adjacent font weights as they create poor contrast.</p>

{% include "partials/token_table.njk", token: 'fontWeights', type: 'fontWeights' %}
