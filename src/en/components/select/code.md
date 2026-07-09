---
title: Select
layout: 'layouts/component-documentation.njk'
translationKey: 'selectCode'
tags: ['selectEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for select](#coding-and-accessibility-for-select)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for select

### Apply required attributes

Always use the following required attributes with `gcds-select`:

- `name`
- `label`
- `select-id`

### Set the default value

Use the `default-value` attribute to set the first option in the select list. This avoids pre-selection of an option.

{% include "partials/hint.njk" %}

{% include "partials/hide-the-label.njk" %}

{% include "partials/error-message.njk", component: "select" %}

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `label`

The `label` attribute defines the label for the select.

{% examplesPreview "170" %}
<gcds-select select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `name`

The `name` attribute identifies the select component within a form. It is used to reference the component after a form is submitted.

{% examplesPreview "170" %}
<gcds-select select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `select-id`

The `select-id` attribute specifies the unique identifier for the select component.

{% examplesPreview "170" %}
<gcds-select select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `autocomplete`

The `autocomplete` attribute controls whether the browser can suggest previously entered values for the select.

{% examplesPreview "170" %}
<gcds-select autocomplete="on" select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `autofocus`

The `autofocus` attribute controls whether the select will be focused automatically when the page loads. By default, it is set to `false`. When set to `true`, the select is focused on render.

{% examplesPreview "170" %}
<gcds-select autofocus select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `default-value`

The `default-value` attribute defines an optional value that gets displayed before the user selects an option.

{% examplesPreview "170" %}
<gcds-select select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `disabled`

The `disabled` attribute controls whether the radios are disabled or not. By default, it is set to `false`.

{% examplesPreview "170" %}
<gcds-select disabled select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `error-message`

The `error-message` attribute defines the error message to display for invalid radios.

{% examplesPreview "210" %}
<gcds-select error-message="Error message" select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `form`

The `form` attribute specifies the ID of the form that the radios belong to.

{% examplesPreview "170" %}
<gcds-select form="form-id" select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `hide-label`

The `hide-legend` attribute controls whether the legend is hidden or not.

{% examplesPreview "140" %}
<gcds-select hide-label select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `hint`

The `hint` attribute defines the hint text displayed under the label or legend.

{% examplesPreview "210" %}
<gcds-select hint="Hint / Example message." select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `required`

The `required` attribute controls whether the radio fieldset is required or not. When set to `true`, it adds “required” after the legend, and activates the required validator.

{% examplesPreview "210" %}
<gcds-select required select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `validate-on`

The `validate-on` attribute defines the validation event for the radios.

{% examplesPreview "170" %}
<gcds-select validate-on="other" required select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `value`

The `value` attribute contains the value of the currently selected radio button. It updates when the selection changes.

{% examplesPreview "170" %}
<gcds-select value="2" select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

<!-- ----- Slots section ----- -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for adding options and option groups.

{% examplesPreview "170" %}
<gcds-select select-id="select-preview" label="Label" name="select-preview" default-value="Select option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-select properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-select--events-properties&lang=en"
  width="1200"
  height="2200"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
