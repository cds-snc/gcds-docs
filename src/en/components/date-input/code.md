---
title: Date input
layout: 'layouts/component-documentation.njk'
translationKey: 'dateinputCode'
tags: ['dateinputEN', 'code']
# date: "git Last Modified"
---

## Build a date input

Use a date input to collect a date from a person when you’re expecting them to enter a date they already know or can verify.

## Coding and accessibility for Date input

### Apply required attributes
For the date input to function properly, always use the following attributes with `<gcds-date-input>`:

- `name`
- `legend`
- `format`

### Format the date input
- Choose the format of the date input by entering either `full` or `compact` in the `format` attribute of the date input.
- The `full` value will render the date input with a year, month, and day form field in the order month, day, and year in English and the order of day, month, and year in French.
- The `compact` value will render the date input with a year and month form field in the order of month and year in both English and French.
- The `format` attribute also formats the value received and outputted by the date input. The value will be formatted `YYYY-MM-DD` while set as `full` and `YYYY-MM` while set as `compact`.

### Entering and receiving the value from date input
Date input can receive and output different value formats depending on the <format> attribute:
- The `full` format will expect/output a value formatted `YYYY-MM-DD`.
- The `compact` format will expect/output a value formatted `YYYY-MM`.

{% include "partials/valid-props.njk" %}

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="iframeTitle"
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-date-input--events-properties"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
