---
title: Checkboxes
layout: 'layouts/component-documentation.njk'
translationKey: 'checkboxesCode'
tags: ['checkboxesEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for checkboxes](#coding-and-accessibility-for-checkboxes)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for checkboxes

### Apply required attributes

For the checkboxes to function properly, always use the following attributes with `gcds-checkboxes`:

- `name`
- `options`

### Use the `options` attribute with checkboxes

The `options` attribute takes an array of objects to render each checkbox. The following is an example of one of the objects:

```javascript
{
  'id'!: '',
  'label'!: '',
  'value'?: '',
  'checked'?: '',
  'hint'?: '',
}
```

Within the `options` attribute, always use the object's `id` and `label` properties for each checkbox. The rest of the properties are optional.

### Use the `value` attribute

- The `value` attribute provides a quick reference to the values of checked checkboxes inside the `gcds-checkboxes` component.
- `value` is formatted as an array of strings. Example: `[“checkboxOneValue”, checkboxTwoValue”]`

{% include "partials/error-message.njk" %}

### For a group of checkboxes

- Use the `legend` attribute when passing more than one object to the `options` attribute. `gcds-checkboxes` will not render if there is no `legend` defined with more than one checkbox.
- Use the `hint` and `error-message` attributes to add additional information to the fieldset built into `gcds-checkboxes`.

### For a single checkbox

- Pass a single object to the `options` attribute to render a single checkbox without a fieldset.
- Use the `hint` and `error-message` attributes to add additional information to the checkbox.

### Hide the checkboxes legend or labels

- Visually hide the legend or label, while maintaining it for assistive technologies.
  - Set the `hide-legend` attribute to true to visually hide the legend for checkbox groups.
  - Set the `hide-label` attribute to true to visually hide the label for a single checkbox.
- Avoid adding hint text when you’re hiding the legend or else provide an empty hint string.

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

The `legend` attribute defines the legend for a group of checkboxes.

{% examplesPreview %}
<gcds-checkboxes legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `name`

The `name` attribute identifies the checkboxes component within a form. It is used to reference the component after a form is submitted.

{% examplesPreview %}
<gcds-checkboxes legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `options`

The `options` attribute defines the checkboxes to render by taking an array of objects, one per checkbox.

{% examplesPreview %}
<gcds-checkboxes legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `autofocus`

The `autofocus` attribute controls whether the first checkbox will be focused automatically when the page loads. By default, it is set to `false`. When set to `true`, the checkbox is focused on render.

{% examplesPreview %}
<gcds-checkboxes autofocus legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `disabled`

The `disabled` attribute controls whether the checkboxes are disabled or not. By default, it is set to `false`.

{% examplesPreview %}
<gcds-checkboxes disabled legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `error-message`

The `error-message` attribute defines the error message to display for invalid checkboxes.

{% examplesPreview %}
<gcds-checkboxes error-message="Error message" legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `form`

The `form` attribute specifies the ID of the form that the checkboxes belong to.

{% examplesPreview %}
<gcds-checkboxes form="form-id" legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `hide-label`

The `hide-label` attribute controls whether the label is hidden or not.

{% examplesPreview %}
<gcds-checkboxes hide-label name="checkbox" options='[{ "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `hide-legend`

The `hide-legend` attribute controls whether the legend is hidden or not.

{% examplesPreview %}
<gcds-checkboxes hide-legend legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `hint`

The `hint` attribute defines the hint text displayed under the label or legend.

{% examplesPreview %}
<gcds-checkboxes hint="Hint / Example message." legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `required`

The `required` attribute controls whether the checkbox fieldset is required or not. When set to `true`, it adds “required” after the label or legend, and activates the required validator.

{% examplesPreview %}
<gcds-checkboxes required legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `validate-on`

The `validate-on` attribute defines the validation event for the checkboxes.

{% examplesPreview %}
<gcds-checkboxes validate-on="other" legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `value`

The `value` attribute contains an array of the values of all currently checked checkboxes. It updates as selections change.

{% examplesPreview %}
<gcds-checkboxes value='["check2"]' legend="Legend" name="checkexample" options='[{"id": "form-check-1", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check1"}, {"id": "form-check-2", "label": "Label", "hint": "Description or example to make the option clearer.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-checkboxes properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-checkboxes--events-properties&lang=en"
  width="1200"
  height="1950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
