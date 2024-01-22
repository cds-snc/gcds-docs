---
title: Heading
layout: 'layouts/component-documentation.njk'
translationKey: 'headingCode'
tags: ['headingEN', 'code']
# date: "git Last Modified"
---

## Build a Heading

Headings structure content by establishing levels of hierarchy that organize page content.

## Coding and accessibility for headings

### Order heading levels hierarchically

Heading levels follow a sequential, hierarchical order: higher levels have larger display text than lower ones.

- Set correct and consistent heading levels to align the coded and visual headings on a page. Consistent headings support an equitable experience for people who use assistive technologies.
- Order headings sequentially from lowest to highest (H1–H6).
- Avoid skipping heading levels. Instead, restructure content so headings are used sequentially, from largest (H1) to smallest (H6).
- Only use an H1 heading once on a page. Other heading types can be used multiple times.
- Use H2 headings to describe individual sections. Each section should have one H2 heading.
- Opt to use H3–H6 headings within sections. Sections can contain multiple H3–H6 headings, as long as they are placed in hierarchical order.

### Maintain accessible character limits

- Maintain the default `character-limit` for each heading line by keeping the attribute set to `true` for a comfortable and accessible reading length. These defaults create a balanced, consistent line length across heading font sizes.
- Keep character limits to the following lengths to maintain a visual balance across headings on a page:
  - 31 characters for H1.
  - 35 characters for H2.
  - 40 characters for H3.
  - 45 characters for H4.
  - 50 characters for H5.
    -57 characters for H6.

### Use consistent spacing

- Maintain default spacing for a comfortable and accessible reading experience. These defaults create visual breaks and separation between different sections.
- Keep spacing values to the following to maintain a visual balance across headings on a page:
  - Default `margin-bottom`: `400` for all
  - Default `margin-top`: `0` for H1 and `500` for H2–3

{% include "partials/getcode.njk" %}

<iframe
  title="iframeTitle"
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-heading--events-properties"
  width="1200"
  height="1300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
