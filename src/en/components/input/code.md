---
title: Input
layout: 'layouts/component-documentation.njk'
translationKey: 'inputCode'
tags: ['inputEN', 'code']
---

## Build an input

Use an input to ask for information short, one-line response.

## Coding and accessibility for inputs

### Apply required attributes

For the input to function properly, always use the following attributes with `<gcds-input>`:

- `name`
- `label`
- `input-id`

### Size inputs to fit response type

- Set the `size` attribute of the input for responses you know have a specific length (size "50" = 50 characters). For example, 6 characters for a postal code or 10 characters for a phone number.
- Set the input to span almost the entire container, like at 90%, when you're unsure of the character count of the response.
- Use the maximum 75 characters for responses without a fixed length.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-input properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-input--events-properties&lang=en"
  width="1200"
  height="2075"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
