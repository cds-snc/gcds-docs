---
title: Fieldset
layout: 'layouts/component-documentation.njk'
translationKey: 'fieldsetCode'
tags: ['fieldsetEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for fieldsets](#coding-and-accessibility-for-fieldsets)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for fieldsets

### Heading hierarchy

Use the `legend-size` attribute to visually place the legend among the headings on the page. Set the attribute value to `h2` | `h3` | `h4` | `h5` | `h6` to render the fieldset legend to the appropriate size.

### Keep hint text static and perceivable

Maintain the default `hint` attribute to provide additional context so a person can provide a complete value and avoid an error state. This places hint text under the fieldset `legend` and above the grouping.

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

#### `legend`

The `legend` attribute defines the legend for the fieldset.

{% examplesPreview %}
<gcds-fieldset legend="Legend" legend-size="h3">
  <gcds-input input-id="form-input" label="Input label">
  </gcds-input>
  <gcds-select select-id="form-select" label="Select label">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
{% endexamplesPreview %}

#### `legend-size`

The `legend-size` attribute sets the appropriate font size for the fieldset legend. The available options are:

- `h2`
- `h3`
- `h4`
- `h5`
- `h6`

<!-- Force line break -->

{% examplesPreview %}
<gcds-fieldset legend="Legend" legend-size="h3">
  <gcds-input input-id="form-input" label="Input label">
  </gcds-input>
  <gcds-select select-id="form-select" label="Select label">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `hint`

The `hint` attribute defines the hint text displayed under the legend.

{% examplesPreview %}
<gcds-fieldset legend="Legend" legend-size="h3" hint="Hint / Example message.">
  <gcds-input input-id="form-input" label="Input label">
  </gcds-input>
  <gcds-select select-id="form-select" label="Select label">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for placing form elements inside the fieldset.

{% examplesPreview %}
<gcds-fieldset legend="Legend" legend-size="h3" hint="Hint / Example message.">
  <gcds-input input-id="form-input" label="Input label">
  </gcds-input>
  <gcds-select select-id="form-select" label="Select label">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-fieldset properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-fieldset--events-properties&lang=en"
  width="1200"
  height="2300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
