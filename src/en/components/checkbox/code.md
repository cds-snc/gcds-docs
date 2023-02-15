---
title: Checkbox
layout: "layouts/component-documentation.njk"
translationKey: "checkboxCode"
tags: ['checkboxEN', 'code']
date: "git Last Modified"
---

## Build a checkbox

Use a checkbox when you are expecting the user to select more than one option from a short list of items.

## Accessibility and coding for checkboxes

### Make checkboxes visible and usable

- Position checkboxes to the left of their corresponding labels. This makes them easier to find, especially with screen magnifiers.
- Avoid removing focus states in checkboxes.

### How to use validators with the required property

When applying the validator to the

- Use the required property to activate the required validator. Validation will happen by default on the onBlur event.
- If you need to change the validation event, use the validate-on attribute. Validation can happen on blur, when the element loses focus, or manually with the validate method.

## Get your code

Generate code for a component instance by choosing properties in the values column, based on the code elements in the properties table.

Select "Get code" once you have the properties you need. That will generate code for the instance you're building.

Pull that code into your environment and you'll have a component with all the code values you chose.

<iframe
  title="Overview of gcds-checkbox properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-checkbox--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
