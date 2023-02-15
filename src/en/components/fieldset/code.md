---
title: Fieldset
layout: "layouts/component-documentation.njk"
translationKey: "fieldsetCode"
tags: ['fieldsetEN', 'code']
date: "git Last Modified"
---

## Build a fieldset

Use a fieldset to group together related form elements or components and make these groups perceivable. Also use them for components with multiple options, like radios and checkboxes.

## Accessibility and coding for fieldsets

### Handling required fields and error messages

- Use the required attribute for fieldset groupings that need to be filled in. This places "required" at the end of the legend.
- Use the disabled attribute to disable the group of form fields within the fieldset. Avoid disabling required fields.
- Keep the default error-message attribute for required fieldset groupings and for components that need validation, like an email input. Missing and invalid entries will prompt an inline error message just before the fieldset grouping.
- Remove the default error-message attribute if a fieldset is optional.

### Keep hint text static and perceivable

Maintain the default hint attribute to provide additional context so a person can provide a complete value and avoid an error state. This places hint text under the fieldset legend and above the grouping.

### Support error message and hint text for radios and checkboxes

- The required and error-message attributes for the fieldset work best with a group of checkboxes or radio buttons.
- Maintain the fieldset's default hint text, validators, and error messages for radios and checkboxes.
- For radios and checkboxes, making the legend the question or instruction (like an input label) helps people using assistive technology to understand the options are all related to that question.

### Validators

The fieldset will only validate checkbox and radio button children.

- Use the required property to activate  the required validator. Validation will happen by default on the onBlur event.
- If you need to change the validation event, use the validate-on attribute. Validation can happen on blur, when the element loses focus, or manually with the validate method.

## Get your code

Generate code for a component instance by choosing properties in the values column, based on the code elements in the properties table.

Select "Get code" once you have the properties you need. That will generate code for the instance you're building.

Pull that code into your environment and you'll have a component with all the code values you chose.

<iframe
  title="Overview of gcds-fieldset properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-fieldset--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="1600"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
