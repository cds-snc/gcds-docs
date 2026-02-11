---
title: Design tokens
layout: 'layouts/base.njk'
eleventyNavigation:
  key: tokensEN
  title: Design tokens
  locale: en
  parent: foundationsEN
  description: GC Design System tokens are the smallest building blocks of the design system.
translationKey: 'designtokens'
date: 'git Last Modified'
---

# {{ title }}

GC Design System tokens are the smallest building blocks of the design system. They have their own GitHub repo and Figma library.

<ul class="d-flex flex-wrap gap-300">
  <li>
    <gcds-link external href="{{ links.githubTokens }}">
      GitHub token repo
    </gcds-link>
  </li>
  <li>
    <gcds-link external href="{{ links.figmaTokens }}">
      Figma token library
    </gcds-link>
  </li>
</ul>

## Capturing design decisions in code

We've created a token to define each style decision in GC Design System. All of our components use tokens.

Design tokens are the documentation of design decisions in variables, reusable pieces of code. They replace any hard-coded values, like colour codes and pixels.

## Scaling styles across your code

Design tokens are made for reuse throughout the entire code base. When we update a [gcds-token]({{ links.githubTokens }}), the change is passed on to every component and block of code using that token.

[Colour]({{ links.colour }}), [spacing]({{ links.spacing }}), and [typography]({{ links.typography }}) tokens are applied consistently across components, pages, and products. The token gives you the exact match for your purpose without chart lookups or guesswork.

## Design token types

### Component design tokens

GC Design System components have their own tokens. These component tokens are component-specific. Using them elsewhere can cause you problems.

When misused component tokens can change unexpectedly. They receive updates any time the component they're attached to gets updated.

<img class="b-sm b-default p-300" src="/images/en/foundations/tokens/design-tokens-component.svg" alt="Three red squares represent three steps to create the component design token for the danger button background colour. To the right of the topmost square, the text reads colour #B3192E. The first arrow points down to the next square whose text reads --gcds-color-red-600. Another arrow points down from the second to the third square, whose text reads --gcds-button-danger-default-background. A third arrow points from the last square to a button with a red background, showing the result of the new component design token."/>

### Global design tokens

Global design tokens (including tokens for states) are made to be used by component tokens and by you. They often form part of component tokens.

Global tokens are semantic. That means they have meanings or contexts associated with them. You can use them based on their stated purpose for your product design.

Global tokens help you minimize future maintenance and establish a visual language for stronger communications.

<img class="b-sm b-default p-300" src="/images/en/foundations/tokens/design-tokens-global.svg" alt="Three lines of text list examples of global design tokens for font size, spacing measurements, and font colour. On the first line, an arrow points from the font size 1.25rem to the token --gcds-font-sizes-text. On the second line, an arow points from the spacing length 3rem to the token --gcds-spacing-600. On the third line, an arrow points from the font colour #333333 to the token --gcds-text-primary."/>

### Base design tokens

Base tokens are for you to use when you've run out of global token options. GC Design System base tokens offer a range of style options to complement the global colour tokens palette.

Base tokens are not semantic so it's harder for everyone to understand what they represent. It's important to use them thoughtfully and consistently to support a familiar and predictable user experience for your service.

<img class="b-sm b-default p-300" src="/images/en/foundations/tokens/design-tokens-base.svg" alt="Three lines of text list examples of base design tokens for greyscale colours. On the first line, an arrow points from the colour Grayscale 50 to the token --gcds-color-grayscale-50. On the second line, an arow points from the colour Grayscale 100 to the token --gcds-color-grayscale-100. On the third line, an arrow points from the colour Grayscale 300 to the token --gcds-color-grayscale-300."/>

## Token anatomy and naming progression

Tokens are characterized by a naming progression.

- **The prefix** `--gcds-` differentiates GC Design System tokens from other, external tokens or variables.
- **The category** states the component, property, state, or colour depending on the type of token.
- **The role** specifies the component sub-type, like primary, secondary, danger, etc.
- **The state** cites the interaction or data state, like default, hover, focus, etc.
- **The property** refers to the specific CSS property the token's being applied to, like `background`, `border`, `color`, etc.
- **The scale** refers to one of a set of proportionally increasing shades, sizes, or weights.

### Component design token

<img class="b-sm b-default p-300" src="/images/en/foundations/anatomy/anatomy-design-tokens-component.svg" alt="A line of five words, each highlighted in a different colour and underlined. Before the first word are two dashes with one dash between each word. A label tag beneath each connects each word to their name type. The first is the prefix: gcds. The second is the category (component): button. The third is the role: primary. The fourth is the state: default. The fifth is the property: background. The token name as a whole reads: --gcds-button-primary-default-background."/>

### Global design token

<img class="b-sm b-default p-300" src="/images/en/foundations/anatomy/anatomy-design-tokens-global.svg" alt="A line of three words, each highlighted in a different colour and underlined. Before the first word are two dashes with one dash between each word. A label tag beneath each connects each word to their name type. The first is the prefix: gcds. The second is the category (property): text. The third is the role or state: primary. The token name as a whole reads: --gcds-text-primary."/>

### Global design token – global state

<img class="b-sm b-default p-300" src="/images/en/foundations/anatomy/anatomy-design-tokens-global-state.svg" alt="A line of three words, each highlighted in a different colour and underlined. Before the first word are two dashes with one dash between each word. A label tag beneath each connects each word to their name type. The first is the prefix: gcds. The second is the category (state): focus. The third is the property: text. The token name as a whole reads: --gcds-focus-text."/>

### Base design tokens

<img class="b-sm b-default mb-600 p-300" src="/images/en/foundations/anatomy/anatomy-design-tokens-base.svg" alt="A line of three words, each highlighted in a different colour and underlined. Before the first word are two dashes with one dash between each word. A label tag beneath each connects each word to their name type. The first is the prefix: gcds. The second is the category (colour): grayscale. The third is the scale: 100. The token name as a whole reads: --gcds-grayscale-100."/>

{% include "partials/helpus.njk" %}
