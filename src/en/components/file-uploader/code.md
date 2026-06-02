---
title: File uploader
layout: 'layouts/component-documentation.njk'
translationKey: 'fileuploaderCode'
tags: ['fileuploaderEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for file uploader](#coding-and-accessibility-for-file-uploader)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for file uploader

### Apply required attributes

For the file uploader to function properly, always use the following attributes with `<gcds-file-uploader>`:

- `name`
- `label`
- `uploader-id`

{% include "partials/error-message.njk" %}

### Upload multiple files

Allow the selection of more than one file using the `multiple` attribute.

### Validate file types for upload

Define the file types the file uploader accepts using the `accept` attribute.

### Hide the file uploader label

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

#### `label`

The `label` attribute defines the label for the file uploader.

{% examplesPreview "160" %}
<gcds-file-uploader uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `name`

The `name` attribute identifies the file uploader component within a form. It is used to reference the uploaded files when a form is submitted.

{% examplesPreview "160" %}
<gcds-file-uploader uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `uploader-id`

The `uploader-id` attribute specifies the unique identifier for the file uploader.

{% examplesPreview "160" %}
<gcds-file-uploader uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `accept`

The `accept` attribute defines the file types the file uploader accepts.

{% examplesPreview "160" %}
<gcds-file-uploader accept="image/*" uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `autofocus`

The `autofocus` attribute controls whether the file uploader will be focused automatically when the page loads. By default, it is set to `false`. When set to `true`, the file uploader is focused on render.

{% examplesPreview "160" %}
<gcds-file-uploader autofocus uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `disabled`

The `disabled` attribute controls whether the file uploader is disabled or not. By default, it is set to `false`.

{% examplesPreview "160" %}
<gcds-file-uploader disabled uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `error-message`

The `error-message` attribute defines the error message to display for an invalid file input.

{% examplesPreview "200" %}
<gcds-file-uploader error-message="Error message" uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `form`

The `form` attribute specifies the ID of the form that the file uploader belongs to.

{% examplesPreview "160" %}
<gcds-file-uploader form="form-id" uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `hide-label`

The `hide-label` attribute controls whether the label is hidden or not.

{% examplesPreview "120" %}
<gcds-file-uploader hide-label uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `hint`

The `hint` attribute defines the hint text displayed under the label.

{% examplesPreview "200" %}
<gcds-file-uploader hint="Hint / Example message." uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `multiple`

The `multiple` attribute controls whether the user is allowed to select more than one file.

{% examplesPreview "160" %}
<gcds-file-uploader multiple uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `required`

The `required` attribute controls whether the file input is required or not. When set to `true`, it adds “required” after the label, and activates the required validator.

{% examplesPreview "200" %}
<gcds-file-uploader required uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `validate-on`

The `validate-on` attribute defines the validation event for the file uploader.

{% examplesPreview "160" %}
<gcds-file-uploader validate-on="other" required uploader-id="file-uploader-preview" label="Label" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-file-uploader properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-file-uploader--events-properties&lang=en"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
