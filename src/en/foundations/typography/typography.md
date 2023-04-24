---
title: Typography tokens
layout: "layouts/base.njk"
eleventyNavigation:
  key: typographyEN
  title: Typography
  locale: en
  parent: foundationsEN
  order: 3
  description: Typography tokens include   the style, arrangement, and appearance of letters, numbers, and symbols.
  thumbnail: /images/en/foundations/preview/preview-typography.svg
  alt:
  state: published
permalink: /en/foundations/typography/
translationKey: "typography"
tokenTable:
  headers:
    font-preview: Preview
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
    fontFamilies-heading: Heading
    fontFamilies-body: Text
    fontFamilies-monospace: Monospace
    fontFamilies-icons: icons
    fontWeights-light: Light
    fontWeights-regular: Regular
    fontWeights-medium: Medium
    fontWeights-semibold: Semibold
    fontWeights-bold: Bold
date: "git Last Modified"
---

# {{ title }}

Typography tokens include the style, arrangement, and appearance of letters, numbers, and symbols.

## Typography and and accessibility

GC Design System components meet <a href="{{ links.wcagTextSpacing }}" target="_blank">level AA of the Web Content Accessibility Guidelines (WCAG 2.1) <gcds-icon name="external-link" label="Opens in a new tab." margin-left="50" /></a> for text spacing and AAA for visual presentation.

## Vertical rhythm and rem spacing sizes

GC Design System typography spacing is based on vertical rhythm and calculated with the help of a base size.

Vertical rhythm aligns text to evenly spaced horizontal lines in repeated patterns. Consistent vertical spacing helps make content easier to scan, read, and understand. Spacing sizes are configured with rem units. All spacing sizes are relative to a base size of 1.25rem (20px) and what we use to calculate all typography and spacing values.

## Global typography tokens

### Headings

Heading tags for headings and subheadings give a page structure, organize content. They also  support navigation, especially for people using assistive technology.

- All headings and subheadings need a heading tag (`<h1>` - `<h6>`).
- Start main content with an H1. Use no more than one H1 for each page.
- Order heading levels numerically. H3 follows H2, H2 follows H1, and so on.
- Avoid skipping hierarchical heading levels.
- Match an H1 font size with an H1 line height, an H2 font size with an H2 line height, etc.
- Use headings for calls to action and to create emphasis.
- Make each heading distinctive and make it obvious what the content is about.

{% include "partials/token_table.njk", token: 'font', subTokens: "h1 h2 h3 h4 h5 h6", type: 'typography' %}

Note: The font property is a shorthand property for font-weight, font-size/line-height, font-family.

### Text

- For font size, keep text line length below 75 characters for a comfortable, accessible reading length.
- Use the css unit `75ch` or lower to set the maximum width of your paragraphs.

{% include "partials/token_table.njk", token: 'font', subTokens: "label text textLong caption", type: 'typography' %}

### Font families

Headings use the font "Lato". Paragraphs and other text use the font "Noto Sans".

The font family contains fallback values. The fallback is a substitute value for font families only in case the font is not available.

- Only use the heading tokens for headings. Everything else can be set in text.
- Use text font family for most purposes.
- Opt to use monospace when citing code to give specific code examples.

{% include "partials/token_table.njk", token: 'fontFamilies', type: 'fontFamilies' %}

### Font weights

- Limit the quantity of font weights you use in the same space to avoid compromising contrast. Only use two or three weights with as much contrast as possible.
- Use font weights to emphasize words within a table, at the start of a paragraph, or in long blocks of text when you've exhausted available headings and other style elements.
- Be mindful in establishing emphasis in an accessible way, many assistive technologies ignore font weights.
- Instead of font weights, consider using bullets or increasing white space to break up text.

### Bold text

- Maintain the default bold setting for headings.
- Overuse of bold text can create cognitive processing difficulties for sighted readers.

### Italics

- Use italics when referencing a Canadian law (Accessible Canada Act).
- Limit your use of italics to short strings of text. Long passages in italics can create cognitive processing difficulties for sighted readers.

{% include "partials/token_table.njk", token: 'fontWeights', type: 'fontWeights' %}

<br/>

{% assign removeBorder = true %}

{% include "partials/helpus.njk" %}

