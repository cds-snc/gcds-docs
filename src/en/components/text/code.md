---
title: Text
layout: 'layouts/component-documentation.njk'
translationKey: 'textCode'
tags: ['textEN', 'code']
# date: "git Last Modified"
---

## On this page

- [Coding and accessibility for text](#coding-and-accessibility-for-text)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for text

### Ensure accessible character limits

- Maintain the default line length maximum of 65 characters for each line of text to ensure a comfortable, accessible reading length.
- Opt to shorten the line length by setting the `character-limit` attribute to `false`.

### Set the text size

- Set the text `size` attribute to `body` or `small`.
- Use the default `body` `size` value to render a `p` element with the recommended font size and colour contrast.
- Opt to display smaller text by setting the `size` attribute to `small` to render a `small` element inside a `p` element.

### Use text styling sparingly

- Only use underline for links.
- Use bold text sparingly.
- Avoid using bold text as a heading. [Headings]({{ links.heading }}) are the accessible component for identifying content sections.
- For bold text, use the `strong` tag within the `gcds-text` component to highlight terms and emphasize key points.
- Only use italics for:
  - Legal reference, like the _Accessible Canada Act_.
  - Words in other languages, including Latin.
  - Titles of publications, works of art, and mathematical and scientific material.
- Use the `em` tag within the `gcds-text` component to emphasize specific words or phrases.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `character-limit`

The `character-limit` attribute sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length.

{% examplesPreview %}
<gcds-text character-limit="false">
  This is text that's related to the heading and describes in further detail the heading's subject or action. Text is typically one or several lines or paragraphs that form a section's content or introduce a bulleted list, table, or other content, like an image or video.
</gcds-text>
{% endexamplesPreview %}

#### `display`

The `display` attribute sets the display behaviour of the text. The available options are:

- `block` (default)
- `flex`
- `inline`
- `inline-block`
- `inline-flex`
- `none`

<!-- Force line break -->

{% examplesPreview %}
<gcds-text display="flex">
  This is text that's related to the heading and describes in further detail the heading's subject or action. Text is typically one or several lines or paragraphs that form a section's content or introduce a bulleted list, table, or other content, like an image or video.
</gcds-text>
{% endexamplesPreview %}

#### `margin-bottom`

The `margin-bottom` attribute sets a margin below the text. The default `margin-bottom` is `300`.

{% examplesPreview %}
<gcds-text margin-bottom="600">
  This is text that's related to the heading and describes in further detail the heading's subject or action. Text is typically one or several lines or paragraphs that form a section's content or introduce a bulleted list, table, or other content, like an image or video.
</gcds-text>
{% endexamplesPreview %}

#### `margin-top`

The `margin-top` attribute sets a margin above the text. The default `margin-top` is `0`.

{% examplesPreview %}
<gcds-text margin-top="600">
  This is text that's related to the heading and describes in further detail the heading's subject or action. Text is typically one or several lines or paragraphs that form a section's content or introduce a bulleted list, table, or other content, like an image or video.
</gcds-text>
{% endexamplesPreview %}

#### `size`

The `size` attribute sets the text size. The available options are:

- `body` (default)
- `small`

<!-- Force line break -->

{% examplesPreview %}
<gcds-text size="small">
  This is text that's related to the heading and describes in further detail the heading's subject or action. Text is typically one or several lines or paragraphs that form a section's content or introduce a bulleted list, table, or other content, like an image or video.
</gcds-text>
{% endexamplesPreview %}

#### `text-role`

The `text-role` attribute sets the main style of the text. The available options are:

- `primary` (default)
- `secondary`
- `light`

<!-- Force line break -->

{% examplesPreview %}
<gcds-text text-role="secondary">
  This is text that's related to the heading and describes in further detail the heading's subject or action. Text is typically one or several lines or paragraphs that form a section's content or introduce a bulleted list, table, or other content, like an image or video.
</gcds-text>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for placing the content of the text element.

{% examplesPreview %}
<gcds-text>
  This is text that's related to the heading and describes in further detail the heading's subject or action. Text is typically one or several lines or paragraphs that form a section's content or introduce a bulleted list, table, or other content, like an image or video.
</gcds-text>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-text properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-text--events-properties&lang=en"
  width="1200"
  height="1350"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
