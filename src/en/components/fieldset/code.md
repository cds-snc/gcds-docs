---
title: Fieldset
layout: 'layouts/component-documentation.njk'
translationKey: 'fieldsetCode'
tags: ['fieldsetEN', 'code']
date: 'git Last Modified'
---

## Build a fieldset

Use a fieldset to group together related form elements or components and make these groups perceivable. Also use them for components with multiple options, like [radios]({{ links.radio }}) and [checkboxes]({{ links.checkbox }}).

## Coding and accessibility for fieldsets

{% include "partials/error-message.njk" %}

### Keep hint text static and perceivable

Maintain the default `hint` attribute to provide additional context so a person can provide a complete value and avoid an error state. This places hint text under the fieldset `legend` and above the grouping.

### Support error message and hint text for radios and checkboxes

- The `required` and `error-message` attributes for the fieldset work best with a group of [checkboxes]({{ links.checkbox }}) or [radio buttons]({{ links.radio }}).
- Maintain the fieldset's default `hint` text, validators, and error messages for radios and checkboxes.
- For radios and checkboxes, making the `legend` the question or instruction (like an [input]({{ links.input }}) label) helps people using assistive technology to understand the options are all related to that question.

### Validators

The fieldset will only validate [checkbox]({{ links.checkbox }}) and [radio button]({{ links.radio }}) children.

- Use the `required` attribute to activate the required validator. Validation will happen by default on the `onBlur` event.
- If you need to change the validation event, use the `validate-on` attribute. Validation can happen on blur, when the element loses focus, or manually with the validate method.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-fieldset properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-fieldset--events-properties"
  width="1200"
  height="2150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
