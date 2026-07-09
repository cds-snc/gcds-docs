---
title: Date input
layout: 'layouts/component-documentation.njk'
translationKey: 'dateinputCode'
tags: ['dateinputEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for date inputs](#coding-and-accessibility-for-date-inputs)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for date inputs

### Apply required attributes

Always use the following required attributes with `gcds-date-input`:

- `name`
- `legend`
- `format`

### Choose a format

Use `full`, `compact`, or `iso` in the format attribute of date input.

- The `full` value will render with a year, month, and day form field.
  - In this format, the month is a word.
  - In English, the order is month, day, year.
  - In French, the order is day, month, year.
  - It will output a value formatted `YYYY-MM-DD`.
- The `compact` value will render with a year and month form fields.
  - In this format, the month is a word.
  - In English and French the order is month, year.
  - It will output a value formatted `YYYY-MM`.
- The `iso` value will render the date input with a year, month, and day form field in that order.
  - In this format, all inputs are numeric, following ISO standards.
  - It will output a value formatted `YYYY-MM-DD`.

{% include "partials/valid-props.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/error-message.njk", component: "date input" %}


<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `format`

The `format` attribute sets how the date is formatted.

{% examplesPreview "200" %}
<gcds-date-input format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `legend`

The `legend` attribute defines the legend for the date input.

{% examplesPreview "200" %}
<gcds-date-input format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `name`

The `name` attribute identifies the date input component within a form. It is used to reference the component after a form is submitted.

{% examplesPreview "200" %}
<gcds-date-input format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `autofocus`

The `autofocus` attribute controls whether the date input will be focused automatically when the page loads. By default, it is set to `false`. When set to `true`, the date input is focused on render.

{% examplesPreview "200" %}
<gcds-date-input autofocus format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `disabled`

The `disabled` attribute controls whether the date input is disabled or not. By default, it is set to `false`.

{% examplesPreview "200" %}
<gcds-date-input disabled format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `error-message`

The `error-message` attribute defines the error message to display for invalid date inputs.

{% examplesPreview "240" %}
<gcds-date-input error-message="Error message" format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `form`

The `form` attribute specifies the ID of the form that the date input belongs to.

{% examplesPreview "200" %}
<gcds-date-input form="form-id" format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `hint`

The `hint` attribute defines the hint text displayed under the legend.

{% examplesPreview "240" %}
<gcds-date-input hint="Day can be 1 or 2 digits. Year must be 4 digits." format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `max`

The `max` attribute defines the maximum date that the date input can accept. Format: `YYYY-MM-DD` or `YYYY-MM`.

{% examplesPreview "280" %}
<gcds-date-input max="2000-01-01" hint="The date must be before 2000-01-01" format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `min`

The `min` attribute defines the minimum date that the date input can accept. Format: `YYYY-MM-DD` or `YYYY-MM`.

{% examplesPreview "280" %}
<gcds-date-input min="2000-01-01" hint="The date must be after 2000-01-01" format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `required`

The `required` attribute controls whether the date input field is required or not. When set to `true`, it adds “required” after the legend, and activates the required validator.

{% examplesPreview "240" %}
<gcds-date-input required format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `validate-on`

The `validate-on` attribute defines the validation event for the date input.

{% examplesPreview "200" %}
<gcds-date-input validate-on="other" required format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `value`

The `value` attribute sets the initial date displayed in the component. It also provides a reference to the entered date. Format: `YYYY-MM-DD` or `YYYY-MM`.

{% examplesPreview "200" %}
<gcds-date-input value="2026-02-22" format="full" legend="Legend" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="iframeTitle"
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-date-input--events-properties&lang=en"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
