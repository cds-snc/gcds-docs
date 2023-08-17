---
title: Input
layout: "layouts/component-documentation.njk"
translationKey: "inputCode"
tags: ['inputEN', 'code']
---

## Build an input

Use an input to ask for information short, one-line response.

## Coding and accessibility for inputs

### Size inputs to fit response type

- Set the `size` attribute of the input for responses you know have a specific length (size "50" = 50 characters). For example, 6 characters for a postal code or 10 characters for a phone number.
- Set the input to span almost the entire container, like at 90%, when you're unsure of the character count of the response.
- Use the maximum 75 characters for responses without a fixed length.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/getcode.njk" %}

<div class="iframe-container">
  <iframe
    title="Overview of gcds-input properties and events."
    src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-input--events-properties"
    width="1200"
    height="1900"
    style="display: block; margin: 0 auto;"
    frameBorder="0"
    allow="clipboard-write"
  ></iframe>
</div>
