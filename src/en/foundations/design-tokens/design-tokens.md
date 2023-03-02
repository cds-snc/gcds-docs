---
title: Design tokens
layout: "layouts/base.njk"
eleventyNavigation:
  key: tokensEN
  title: Design tokens
  locale: en
  parent: foundationsEN
  description: GC Design System tokens are the smallest building blocks of the design system.
translationKey: "designtokens"
date: "git Last Modified"
---

# {{ title }}

GC Design System tokens are the smallest building blocks of the design system.

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

<img class="b-sm b-gray p-400" src="/images/en/foundations/tokens/design-tokens-component.svg" alt=""/>

### Global design tokens

Global design tokens (including tokens for states) are made to be used by component tokens and by you. They often form part of component tokens.

Global tokens are semantic. That means they have meanings or contexts associated with them. You can use them based on their stated purpose for your product design.

Global tokens help you minimize future maintenance and establish a visual language for stronger communications.

<img class="b-sm b-gray p-400" src="/images/en/foundations/tokens/design-tokens-global.svg" alt=""/>

### Base design tokens

Base tokens are for you to use when you've run out of global token options. GC Design System base tokens offer a range of style options to complement the global colour tokens palette.

Base tokens are not semantic so it's harder for everyone to understand what they represent. It's important to use them thoughtfully and consistently to support a familiar and predictable user experience for your service.

<img class="b-sm b-gray p-400" src="/images/en/foundations/tokens/design-tokens-base.svg" alt=""/>

## Token anatomy and naming progression

Tokens are characterized by a naming progression.

- **The prefix** `--gcds-` differentiates GC Design System tokens from other, external tokens or variables.
- **The category** states the component, property, state, or colour depending on the type of token.
- **The role** specifies the component sub-type, like primary, secondary, danger, etc.
- **The state** cites the interaction or data state, like default, hover, focus, etc.
- **The property** refers to the specific CSS property the token's being applied to, like  `background`, `border`, `color`, etc.
- **The scale** refers to one of a set of proportionally increasing shades, sizes, or weights.

### Component design token

<img class="b-sm b-gray p-400" src="/images/en/foundations/anatomy/anatomy-design-tokens-component.svg" alt=""/>

### Global design token

<img class="b-sm b-gray p-400" src="/images/en/foundations/anatomy/anatomy-design-tokens-global.svg" alt=""/>

### Global design token – global state

<img class="b-sm b-gray p-400" src="/images/en/foundations/anatomy/anatomy-design-tokens-global-state.svg" alt=""/>

### Base design tokens

<img class="b-sm b-gray mb-500 p-400" src="/images/en/foundations/anatomy/anatomy-design-tokens-base.svg" alt=""/>

{% include "partials/helpus.njk" %}
