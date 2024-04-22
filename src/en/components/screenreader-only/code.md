---
title: Screenreader-only
layout: 'layouts/component-documentation.njk'
translationKey: 'screenreaderonlyCode'
tags: ['screenreaderonlyEN', 'code']
date: 'git Last Modified'
---

## Build a screenreader-only

Use screenreader-only for assistive technology-specific text content that communicates information solely available by visual means.

## Coding and Accessibility for screenreader-only

### Write helpful screenreader-only content

- Flag contextual information exclusively communicated through visual styling that's absent from ‌semantic HTML.
- Keep screenreader-only content clear and very brief. Adding too much text unnecessarily increases the cognitive load.
- Provide additional text content for assistive technologies only when the interface design relies on visual information to communicate.
- Avoid including additional information that's unavailable in the interface.
- Avoid duplicating any information included in descriptive text (alt-text). If the descriptive text already provides the context, the screenreader-only component may not be needed.

### Provide an equitable experience in both Official Languages

- Use the screenreader-only content to make sure the text will be read in the language associated with the component's language tag.
- Avoid using an `aria-label` attribute to set another language because some assistive technologies will default to page's source language.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-sr-only properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-screen-reader-only--events-properties&lang=en"
  width="1200"
  height="750"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
