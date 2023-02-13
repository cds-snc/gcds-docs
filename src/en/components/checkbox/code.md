---
title: Build a checkbox
layout: "layouts/component-documentation.njk"
translationKey: "checkboxCode"
tags: ['checkboxEN', 'code']
date: "git Last Modified"
---

## {{ title }}

Use a checkbox when you are expecting the user to select more than one option from a short list of items.

## Accessibility and coding for checkboxes

### Make checkboxes visible and usable

- Position checkboxes to the left of their corresponding labels. This makes them easier to find, especially with screen magnifiers.
- Avoid removing focus states in checkboxes.

### How to use validators with the required property

When applying the validator to the

- Use the required property to activate the required validator. Validation will happen by default on the onBlur event.
- If you need to change the validation event, use the validate-on attribute. Validation can happen on blur, when the element loses focus, or manually with the validate method.

## Checkbox properties

[`<gcds-checkbox>`](https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-checkbox#properties) on Github
