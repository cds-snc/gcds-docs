---
title: Input
layout: 'layouts/component-documentation.njk'
translationKey: 'inputCode'
tags: ['inputEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for inputs](#coding-and-accessibility-for-inputs)
- [Examples](#section-examples)
- [Code builder](#code-builder)

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

### Use the `inputmode` attribute

- Use the `inputmode` attribute to suggest an appropriate virtual keyboard on mobile devices, without changing how the value is validated.
- Use `inputmode=”numeric”` with `type=”text”` for non-incremental numbers, such as account numbers, credit card numbers, or authentication codes. This will open the numeric keyboard on mobile devices.

### Hide the input label

- Set the `hide-label` attribute to true to visually hide the label while maintaining it for assistive technologies.
- Avoid adding hint text when you’re hiding the label or else provide an empty hint string.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `input-id`

The `input-id` attribute specifies the unique identifier for the input.

{% examplesPreview %}
<gcds-input input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `label`

The `label` attribute defines the label for the input.

{% examplesPreview %}
<gcds-input input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `name`

The `name` attribute identifies the input component within a form. It is used to reference the input’s value when a form is submitted.

{% examplesPreview %}
<gcds-input input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `autocomplete`

The `autocomplete` attribute controls whether the browser can suggest previously entered values for the input.

{% examplesPreview %}
<gcds-input autocomplete="given-name" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `autofocus`

The `autofocus` attribute controls whether the input will be focused automatically when the page loads. By default, it is set to `false`. When set to `true`, the input is focused on render.

{% examplesPreview %}
<gcds-input autofocus input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `disabled`

The `disabled` attribute controls whether the input is disabled or not. By default, it is set to `false`.

{% examplesPreview %}
<gcds-input disabled input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `error-message`

The `error-message` attribute defines the error message to display for an invalid input.

{% examplesPreview %}
<gcds-input error-message="Error message" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `form`

The `form` attribute specifies the ID of the form that the input belongs to.

{% examplesPreview %}
<gcds-input form="form-id" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `hide-label`

The `hide-label` attribute controls whether the label is hidden or not.

{% examplesPreview %}
<gcds-input hide-label input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `hint`

The `hint` attribute defines the hint text displayed under the label.

{% examplesPreview %}
<gcds-input hint="Hint / Example message." input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `inputmode`

The `inputmode` attribute sets the appearance of the virtual keyboard on mobile devices. The available options are:

- `decimal`
- `email`
- `none`
- `numeric`
- `search`
- `tel`
- `text`
- `url`

<!-- Force line break -->

{% examplesPreview %}
<gcds-input inputmode="numeric" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `max`

The `max` attribute defines the maximum value that the input field can accept. It only applies to the `number` input type.

{% examplesPreview %}
<gcds-input max="100" type="number" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `maxlength`

The `maxlength` attribute defines the maximum number of characters that the input field can accept.

{% examplesPreview %}
<gcds-input maxlength="10" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `min`

The `min` attribute defines the minimum value that the input field can accept. It only applies to the `number` input type.

{% examplesPreview %}
<gcds-input min="22" type="number" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `minlength`

The `minlength` attribute defines the minimum number of characters that the input field can accept.

{% examplesPreview %}
<gcds-input minlength="5" type="number" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `pattern`

The `pattern` attribute specifies a regular expression that the input's value must match.

{% examplesPreview %}
<gcds-input pattern="[A-Z]+" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `readonly`

The `readonly` attribute controls whether the input field can be modified or not. When set to `true`, the input field cannot be modified.

{% examplesPreview %}
<gcds-input readonly value="Readonly" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `required`

The `required` attribute controls whether the input is required or not. When set to `true`, it adds “required” after the label, and activates the required validator.

{% examplesPreview %}
<gcds-input required input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `size`

The `size` attribute sets the size of the input field to provide a visual indication of the expected text length to the user.

{% examplesPreview %}
<gcds-input size="6" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `step`

The `step` attribute specifies the granularity that the value must adhere to. Use it with the `number` input type.

{% examplesPreview %}
<gcds-input step="10" type="number" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `suggestions`

The `suggestions` attribute defines an array of suggestion options.

{% examplesPreview %}
<gcds-input suggestions='[{ "label": "Suggestion A"}, { "label": "Suggestion B"}, { "label": "Suggestion C"}]' input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `type`

The `type` attribute defines the input type. The available options are:

- `email`
- `number`
- `password`
- `search`
- `tel`
- `text`
- `url`

<!-- Force line break -->

{% examplesPreview %}
<gcds-input type="email" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `validate-on`

The `validate-on` attribute defines the validation event for the input.

{% examplesPreview %}
<gcds-input validate-on="other" required input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `value`

The `value` attribute sets the initial value displayed in the input. It reflects the current value as the user edits it.

{% examplesPreview %}
<gcds-input value="Text" input-id="input-example" label="Label" name="input-example">
</gcds-input>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

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
