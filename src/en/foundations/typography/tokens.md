---
title: Tokens
order: 2
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

## Tokens

Font values in the Text and Heading tables are read using the following template: font weight, font size in rem, line height as a percentage of font size, and the font family. The font family also contains fallback values. The value of font tokens follow the [shorthand font property specification](https://w3c.github.io/csswg-drafts/css-fonts/#font-prop).

### Headings

{% include "partials/token_table.njk", token: 'font', subTokens: "h1 h2 h3 h4 h5 h6", type: 'typography' %}

### Paragraphs

{% include "partials/token_table.njk", token: 'font', subTokens: "label text textLong caption", type: 'typography' %}

### Font families

There are 3 fonts available for text elements. Heading is used for Headings only. Everything else can be set in Text or Monospace. You can use monospace fonts for use cases such as data tables or code examples. You should prefer Text font family for most use cases.

{% include "partials/token_table.njk", token: 'fontFamilies', type: 'fontFamilies' %}

### Font weights

You may use font weight overrides when composing with the Text font family. Headings may only be set in bold.

Font weights can help you show emphasis on a few keywords within long paragraphs, lists or labels. Be mindful of the quantity of font weights you use, try to only use two or three weights with as much contrast as possible. Avoid using adjacent font weights as they create poor contrast.

{% include "partials/token_table.njk", token: 'fontWeights', type: 'fontWeights' %}
