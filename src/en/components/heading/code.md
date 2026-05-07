---
title: Heading
layout: 'layouts/component-documentation.njk'
translationKey: 'headingCode'
tags: ['headingEN', 'code']
# date: "git Last Modified"
---

## On this page

- [Coding and accessibility for headings](#coding-and-accessibility-for-headings)
- [Examples](#section-examples)
- [Code builder](#code-builder)

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
  - 57 characters for H6.

### Use consistent spacing

- Maintain default spacing for a comfortable and accessible reading experience. These defaults create visual breaks and separation between different sections.
- Keep spacing values to the following to maintain a visual balance across headings on a page:
  - Default `margin-bottom`: `300` for all
  - Default `margin-top`: `0` for H1 and `600` for H2–3

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `tag`

The `tag` attribute sets the appropriate HTML heading element for the selected level.

{% examplesPreview %}
<gcds-heading tag="h2">
  Heading
</gcds-heading>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `character-limit`

The `character-limit` attribute defines the line length to a maximum number of characters per line for each heading level, ensuring a comfortable, accessible reading length.

{% examplesPreview %}
<gcds-heading tag="h2" character-limit="false">
  Heading
</gcds-heading>
{% endexamplesPreview %}

#### `heading-role`

The `heading-role` attribute sets the main style of the heading. The available options are:

- `primary` (default)
- `secondary`
- `light`

<!-- Force line break -->

{% examplesPreview %}
<gcds-heading tag="h2" heading-role="secondary">
  Heading
</gcds-heading>
{% endexamplesPreview %}

#### `margin-bottom`

The `margin-bottom` attribute sets a margin below the heading. The default `margin-bottom` is `300`.

{% examplesPreview %}
<gcds-heading tag="h2" margin-bottom="600">
  Heading
</gcds-heading>
{% endexamplesPreview %}

#### `margin-top`

The `margin-top` attribute sets a margin above the heading. The default `margin-top` for `h1` is set to `0`, while for `h2` to `h6` headings, it's `600`.

{% examplesPreview %}
<gcds-heading tag="h2" margin-top="200">
  Heading
</gcds-heading>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for adding text to the heading.

{% examplesPreview %}
<gcds-heading tag="h2">
  Heading
</gcds-heading>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-heading properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-heading--events-properties&lang=en"
  width="1200"
  height="1300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
