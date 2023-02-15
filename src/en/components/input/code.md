---
title: Input
layout: "layouts/component-documentation.njk"
translationKey: "inputCode"
tags: ['inputEN', 'code']
---

## Build an input

Use an input to ask for information short, one-line response.

## Accessibility and coding for inputs

### Size inputs to fit response type

- Set the size attribute of the input for responses you know have a specific length (size "50" = 50 characters). For example, 6 characters for a postal code or 10 characters for a phone number.
- Set the input to span almost the entire container, like at 90%, when you're usure of the character count of the response.
- Use the maximum 75 characters for responses without a fixed length.

### Handle error messages and validation

- Use the required property to activate the required validator. Validation will happen by default on the onBlur event.
- If you need to change the validation event, use the validate-on attribute. Validation can happen on blur, when the element loses focus, or manually with the validate method.
- Use the required attribute for fields that must be filled in. This places "(required)" at the end of the checkbox.
- Keep the default error-message attribute for a required input that needs validation. A missing or invalid entry will prompt an inline error message.
- Remove the default error-message attribute if the input is optional.

### Include hint text and error message text for task success

- Include error message text for all required text areas. Avoid using error messages for optional ones.
- Add hint text to help a person provide a complete value in the input and avoid an error state.
- Avoid adding hint text in the field container where it will disappear once the field is selected.

## Get your code

Generate code for a component instance by choosing properties in the values column, based on the code elements in the properties table.

Select "Get code" once you have the properties you need. That will generate code for the instance you're building.

Pull that code into your environment and you'll have a component with all the code values you chose.

<iframe
  title="Overview of gcds-input properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-input--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="2050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
