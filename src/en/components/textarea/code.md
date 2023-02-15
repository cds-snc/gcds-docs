---
title: Textarea
layout: "layouts/component-documentation.njk"
translationKey: "textareaCode"
tags: ['textareaEN', 'code']
date: "git Last Modified"
---

## Build a text area

Use text areas to ask for information when you're expecting a freeform response that could span multiple lines.

The text area gives users the option to provide the information they want to share in a long form response.

## Accessibility and coding for text areas

### Size text areas to fit response type

- Use text areas for responses that may need more than 75 characters.
- Make the height of a text area proportionate to the amount of text you expect someone to enter. You can set the height of a text area by by specifying the rows attribute.
- Avoid setting width any lower than 50% (1/2 width).
- Use the maximum for responses without a fixed length.

### Handle error messages and validation

- Use the required property to activate the required validator. Validation will happen by default on the onBlur event.
- If you need to change the validation event, use the validate-on attribute. Validation can happen on blur, when the element loses focus, or manually with the validate method.
- Use the required attribute for fields that must be filled in. This places "(required)" at the end of the checkbox.
- Keep the default error-message attribute for a required text area that needs validation. A missing or invalid entry will prompt an inline error message.
- Remove the default error-message attribute if the text area is optional.

### Include hint text and error message text for task success

- Include error message text for all required text areas. Avoid using error messages for optional ones.
- Add hint text to help a person provide a complete value in the text area and avoid an error state.
- Avoid adding hint text in the field container where it will disappear once the field is selected.

## Get your code

Generate code for a component instance by choosing properties in the values column, based on the code elements in the properties table.

Select "Get code" once you have the properties you need. That will generate code for the instance you're building.

Pull that code into your environment and you'll have a component with all the code values you chose.

<iframe
  title="Overview of gcds-textarea properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-textarea--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="1900"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
