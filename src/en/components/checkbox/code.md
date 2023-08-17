---
title: Checkbox
layout: "layouts/component-documentation.njk"
translationKey: "checkboxCode"
tags: ['checkboxEN', 'code']
date: "git Last Modified"
---

## Build a checkbox

Use a checkbox with a [fieldset]({{ links.fieldset }}) when you are expecting the user to select more than one option from a short list of items in response to a question or instruction.

## Coding and accessibility for checkboxes

### Use a fieldset and the required attribute

- Group checkbox options and name the group using the [fieldset component]({{ links.fieldset }}).
- Use the fieldset `legend` and `hint` attributes for the group name and instructions.
- For required groups, set the `required` attribute in the fieldset. Setting the `required` attribute applies validation and error handling to the checkbox group.

### For a single checkbox

- Avoid using a [fieldset]({{ links.fieldset }}) for checkboxes with a single box to check, like for a confirmation the terms of reference was read prior to registration.
- Use the `required` attribute to activate  the required validator. Validation will happen by default on the `onBlur` event.
- If you need to change the validation event, use the `validate-on` attribute. Validation can happen on blur, when the element loses focus, or manually with the `validate` method.
- Use the `required` attribute when a single checkbox need to be filled in. This places "(required)" at the end of the checkbox .
- Keep the default `error-message` attribute for a required single checkbox that needs validation. Missing entry will prompt an inline error message.
- Remove the default `error-message` attribute if the checkbox is optional.

{% include "partials/getcode.njk" %}

<div class="iframe-container">
  <iframe
    title="Overview of gcds-checkbox properties and events."
    src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-checkbox--events-properties"
    width="1200"
    height="1650"
    style="display: block; margin: 0 auto;"
    frameBorder="0"
    allow="clipboard-write"
  ></iframe>
</div>
