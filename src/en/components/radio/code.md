---
title: Radio
layout: "layouts/component-documentation.njk"
translationKey: "radioCode"
tags: ['radioEN', 'code']
date: "git Last Modified"
---

## Build a radio

Use a radio with a [fieldset]({{ links.fieldset }}) when you're expecting the user to select only one option from a short list of items in response to a question or instruction.

The radio helps users to make a choice by limiting their options.

## Accessibility and coding for radios

### Use a fieldset and the required attribute

- Group radio options and name the group using the [fieldset]({{ links.fieldset }}) component.
- Use the [fieldset]({{ links.fieldset }}) `legend` and `hint` text for the group name and instructions.
- For required groups, set the `required` attribute in the [fieldset]({{ links.fieldset }}). Setting the `required` attribute applies validation and error handling to the radio group.
- For required radios, add the `required` attribute to the first and last of the set of radio buttons. This way a person using assistive technology can read the group from either the top or bottom and still see that it's required.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-radio properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-radio--default"
  width="1200"
  height="1670"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
