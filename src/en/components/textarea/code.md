---
title: Textarea
layout: 'layouts/component-documentation.njk'
translationKey: 'textareaCode'
tags: ['textareaEN', 'code']
date: 'git Last Modified'
---

## Build a textarea

Use textareas to ask for information when you're expecting a freeform response that could span multiple lines.

The textarea gives users the option to provide the information they want to share in a long form response.

## Coding and accessibility for textareas

### Apply required attributes

For the textarea to function properly, always use the following attributes with `<gcds-textarea>`:

- `name`
- `label`
- `textarea-id`

### Size textareas to fit response type

- Use textareas for responses that may need more than 75 characters.
- Make the height of a textarea proportionate to the amount of text you expect someone to enter. You can set the height of a textarea by specifying the `rows` attribute.
- Avoid setting the width any lower than 50% (1/2 width).
- Use the maximum for responses without a fixed length.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

### Hide the textarea label

- Set the hide-label attribute to true to visually hide the label while maintaining it for assistive technologies.
- Avoid adding hint text when you’re hiding the label or else provide an empty hint string.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-textarea properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-textarea--events-properties&lang=en"
  width="1200"
  height="2050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
