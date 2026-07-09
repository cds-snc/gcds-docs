---
title: Textarea
layout: 'layouts/component-documentation.njk'
translationKey: 'textareaCode'
tags: ['textareaEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for textareas](#coding-and-accessibility-for-textareas)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for textareas

### Apply required attributes

Always use the following required attributes with `gcds-textarea`:

- `name`
- `label`
- `textarea-id`

### Size the field to fit the response

- Use the `rows` attribute to set the height of a textarea to match the amount of text you expect someone to enter.
- Use [input]({{ links.input }}) for responses that need less than 75 characters.
- Avoid setting the width lower than 50%.
- Use the maximum height of 7 rows for responses without a fixed length.

{% include "partials/hint.njk" %}

{% include "partials/hide-the-label.njk" %}

{% include "partials/error-message.njk", component: "textarea" %}

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `label`

The `label` attribute defines the label for the textarea.

{% examplesPreview "300" %}
<gcds-textarea textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `name`

The `name` attribute identifies the textarea component within a form. It is used to reference the textarea’s value when a form is submitted.

{% examplesPreview "300" %}
<gcds-textarea textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `textarea-id`

The `textarea-id` attribute specifies the unique identifier for the textarea.

{% examplesPreview "300" %}
<gcds-textarea textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `autofocus`

The `autofocus` attribute controls whether the textarea will be focused automatically when the page loads. By default, it is set to `false`. When set to `true`, the textarea is focused on render.

{% examplesPreview "300" %}
<gcds-textarea autofocus textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `cols`

The `cols` attribute defines the visible width of the textarea in average character widths. The minimum width is 50% of its container.

{% examplesPreview "300" %}
<gcds-textarea cols="8" textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `disabled`

The `disabled` attribute controls whether the textarea is disabled or not. By default, it is set to `false`.

{% examplesPreview "300" %}
<gcds-textarea disabled textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `error-message`

The `error-message` attribute defines the error message to display for an invalid textarea.

{% examplesPreview "340" %}
<gcds-textarea error-message="Error message" textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `form`

The `form` attribute specifies the ID of the form that the textarea belongs to.

{% examplesPreview "300" %}
<gcds-textarea form="form-id" textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `hide-label`

The `hide-label` attribute controls whether the label is hidden or not.

{% examplesPreview "260" %}
<gcds-textarea hide-label textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `hide-limit`

The `hide-limit` attribute controls whether the character limit counter is displayed or not. When set to `true`, the character limit counter is not displayed. By default, it is set to `false`.

{% examplesPreview "300" %}
<gcds-textarea hide-limit maxlength="20" textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `hint`

The `hint` attribute defines the hint text displayed under the label.

{% examplesPreview "340" %}
<gcds-textarea hint="Hint / Example message." textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `maxlength`

The `maxlength` attribute defines the maximum number of characters that the textarea field can accept.

{% examplesPreview "350" %}
<gcds-textarea maxlength="10" textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `minlength`

The `minlength` attribute defines the minimum number of characters that the textarea field can accept.

{% examplesPreview "300" %}
<gcds-textarea minlength="5" textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `required`

The `required` attribute controls whether the textarea field is required or not. When set to `true`, it adds “required” after the label, and activates the required validator.

{% examplesPreview "340" %}
<gcds-textarea required textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `rows`

The `rows` attribute defines the number of visible text rows in the textarea, which determines its height.

{% examplesPreview "230" %}
<gcds-textarea rows="3" textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `validate-on`

The `validate-on` attribute defines the validation event for the textarea.

{% examplesPreview "300" %}
<gcds-textarea validate-on="other" required textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `value`

The `value` attribute sets the initial content of the textarea. It updates to reflect the value entered by the user.

{% examplesPreview "300" %}
<gcds-textarea value="Textarea content." textarea-id="textarea-example" label="Label" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

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
