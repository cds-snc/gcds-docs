---
title: Radios
layout: 'layouts/component-documentation.njk'
translationKey: 'radiosCode'
tags: ['radiosEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for radios](#coding-and-accessibility-for-radios)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for radios

### Apply required attributes

Always use the following required attributes with `gcds-radios`:

- `name`
- `legend`
- `options`

### Use the `options` attribute

- The `options` attribute uses an array of objects to render each radio button.
- Within the `options` attribute of each radio button, always use the object's required properties:
  - id  
  - label
- The rest of the properties are optional.

Example:

```javascript
{
  'id'!: '',
  'label'!: '',
  'value'!: '',
  'checked'?: '',
  'hint'?: '',
}
```

### Use the `value` attribute

The `value` attribute provides a quick reference of the value selected inside the `gcds-radios` component.

### Add hint text

Use the `hint` attribute to add hint text.

{% include "partials/error-message.njk", component: "radios" %}

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `legend`

The `legend` attribute defines the legend for a group of radios.

{% examplesPreview "300" %}
<gcds-radios legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `name`

The `name` attribute identifies the radios component within a form. It is used to reference the component after a form is submitted.

{% examplesPreview "300" %}
<gcds-radios legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `options`

The `options` attribute defines the radios to render by taking an array of objects, one per radio button.

{% examplesPreview "300" %}
<gcds-radios legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `autofocus`

The `autofocus` attribute controls whether the first radio button will be focused automatically when the page loads. By default, it is set to `false`. When set to `true`, the radio button is focused on render.

{% examplesPreview "300" %}
<gcds-radios autofocus legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `disabled`

The `disabled` attribute controls whether the radios are disabled or not. By default, it is set to `false`.

{% examplesPreview "300" %}
<gcds-radios disabled legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `error-message`

The `error-message` attribute defines the error message to display for invalid radios.

{% examplesPreview "340" %}
<gcds-radios error-message="Error message" legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `form`

The `form` attribute specifies the ID of the form that the radios belong to.

{% examplesPreview "300" %}
<gcds-radios form="form-id" legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `hide-legend`

The `hide-legend` attribute controls whether the legend is hidden or not.

{% examplesPreview "270" %}
<gcds-radios hide-legend legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `hint`

The `hint` attribute defines the hint text displayed under the label or legend.

{% examplesPreview "340" %}
<gcds-radios hint="Hint / Example message." legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `required`

The `required` attribute controls whether the radio fieldset is required or not. When set to `true`, it adds “required” after the legend, and activates the required validator.

{% examplesPreview "340" %}
<gcds-radios required legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `validate-on`

The `validate-on` attribute defines the validation event for the radios.

{% examplesPreview "300" %}
<gcds-radios validate-on="other" required legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `value`

The `value` attribute contains the value of the currently selected radio button. It updates when the selection changes.

{% examplesPreview "300" %}
<gcds-radios value="radio1" legend="Legend" name="radio" options='[{"id":"form-radio-1","label":"Label 1","hint":"Description or example to make the option clearer", "value": "radio1"},{"id":"form-radio-r","label":"Label 2","hint":"Description or example to make the option clearer", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-radios properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-radios--events-properties&lang=en"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
