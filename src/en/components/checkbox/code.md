---
title: Checkbox
layout: "layouts/component-documentation.njk"
translationKey: "checkboxCode"
tags: ['checkboxEN', 'code']
date: "git Last Modified"
---

## Build a checkbox

Use a checkbox with a [fieldset](/en/components/fieldset) when you are expecting the user to select more than one option from a short list of items in response to a question or instruction.

## Accessibility and coding for checkboxes

### Use a fieldset and the required attribute

- Group checkbox options and name the group using the [fieldset component](/en/components/fieldset).  
- Use the fieldset legend and hint text for the group name and instructions.
- For required groups, set the required attribute in the fieldset. Setting the required attribute  applies validation and error handling to the checkbox group.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-checkbox properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-checkbox--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="1760"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
