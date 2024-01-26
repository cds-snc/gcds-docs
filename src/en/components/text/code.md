---
title: Text
layout: 'layouts/component-documentation.njk'
translationKey: 'textCode'
tags: ['textEN', 'code']
# date: "git Last Modified"
---

## Build a text component

Text displays non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.

## Coding and accessibility for text

### Ensure accessible character limits

- Maintain the default line length maximum of 65 characters for each line of text to ensure a comfortable, accessible reading length.
- Opt to shorten the line length by setting the `character-limit` attribute to `false`.

### Set the text size

- Set the text `size` attribute to `body` or `caption`.
- Use the default `body` `size` value to render a `p` element with the recommended font size and colour contrast.
- Choose a caption to present brief context about a section or piece of content.
- Opt to display smaller text by setting the `size` attribute to `caption` to render a `small` element inside a `p` element.

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

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-text properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-text--events-properties"
  width="1200"
  height="1350"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
