---
title: Screenreader-only
layout: 'layouts/component-documentation.njk'
translationKey: 'screenreaderonlyCode'
tags: ['screenreaderonlyEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for screenreader-only](#coding-and-accessibility-for-screenreaderonly)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for screenreader-only

### Write helpful screenreader-only content

- Flag contextual information exclusively communicated through visual styling that's absent from ‌semantic HTML.
- Keep screenreader-only content clear and very brief. Adding too much text unnecessarily increases the cognitive load.
- Provide additional text content for assistive technologies only when the interface design relies on visual information to communicate.
- Avoid including additional information that's unavailable in the interface.
- Avoid duplicating any information included in descriptive text (alt-text). If the descriptive text already provides the context, the screenreader-only component may not be needed.

### Provide an equitable experience in both Official Languages

- Use the screenreader-only content to make sure the text will be read in the language associated with the component's language tag.
- Avoid using an `aria-label` attribute to set another language because some assistive technologies will default to page's source language.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `tag`

The `tag` attribute sets the appropriate HTML element for the content. By default, it is set to `p`.

{% examplesPreview %}
<gcds-sr-only tag="h2">
  Text only seen by assistive technologies.
</gcds-sr-only>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for placing the hidden accessible content.

{% examplesPreview %}
<gcds-sr-only>
  Text only seen by assistive technologies.
</gcds-sr-only>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

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
