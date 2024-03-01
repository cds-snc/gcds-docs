---
title: Spacing tokens
layout: 'layouts/base.njk'
eleventyNavigation:
  key: spacingEN
  title: Spacing
  locale: en
  parent: foundationsEN
  order: 2
  description: Spacing tokens help position elements onscreen and in components.
  thumbnail: /images/en/foundations/preview/preview-spacing.svg
  alt: A red line vertical line with two darker horizontal lines at either end shows the size of the token, labelled to its right --gcds-spacing-500.
  state: published
permalink: /en/styles/spacing/
translationKey: 'spacing'
tokenTable:
  headers:
    spacing-preview: Preview
    token-name: Token name
    px: Pixel
    value: Rem
date: 'git Last Modified'
---

# {{ title }}

Spacing tokens help position elements onscreen and in components.

## Spacing tokens and accessibility

GC Design System components meet level AAA of the <gcds-link external href="{{ links.wcagTargetSize }}" target="_blank">Web Content Accessibility Guidelines (WCAG 2.1)</gcds-link> for both tap targets and visual presentation.

Spacing establishes visual hierarchy for content and guides focus to certain elements. Information that's too densely packed is difficult to read and increases cognitive load.

## Vertical rhythm and rem spacing sizes

GC Design System spacing is based on vertical rhythm and calculated with the help of a base size.

Vertical rhythm aligns text to evenly spaced horizontal lines in repeated patterns. Consistent vertical spacing helps make content easier to scan, read, and understand. Spacing sizes are configured with rem units. All spacing sizes are relative to a base size of 1.25rem (20px) and what we use to calculate all typography and spacing values.

## Global spacing tokens

### Alignment and spacing

- Use smaller spacing tokens to group related concepts together.
- Use larger spacing tokens to separate elements into logical groups.
- Whenever possible, line objects up both vertically and horizontally.

{% include "partials/token_table.njk", token: 'spacing', type: 'dimension' %}

{% assign removeBorder = true %}

{% include "partials/helpus.njk" %}
