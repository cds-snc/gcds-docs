---
title: Textarea
layout: 'layouts/component-documentation.njk'
translationKey: 'textareaCode'
tags: ['textareaEN', 'code']
date: 'git Last Modified'
---

## Build a text area

Use text areas to ask for information when you're expecting a freeform response that could span multiple lines.

The text area gives users the option to provide the information they want to share in a long form response.

## Coding and accessibility for text areas

### Size text areas to fit response type

- Use text areas for responses that may need more than 75 characters.
- Make the height of a text area proportionate to the amount of text you expect someone to enter. You can set the height of a text area by specifying the `rows` attribute.
- Avoid setting the width any lower than 50% (1/2 width).
- Use the maximum for responses without a fixed length.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-textarea properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-textarea--events-properties"
  width="1200"
  height="1900"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
