---
title: Radio
layout: 'layouts/component-documentation.njk'
translationKey: 'radioCode'
tags: ['radioEN', 'code']
date: 'git Last Modified'
---

## Build a radio

Use a radio with a [fieldset]({{ links.fieldset }}) when you're expecting the user to select only one option from a short list of items in response to a question or instruction.

The radio helps users to make a choice by limiting their options.

## Coding and accessibility for radios

### Use a fieldset and the required attribute

- Group radio options and name the group using the [fieldset component]({{ links.fieldset }}).
- Use the fieldset `legend` and `hint` attributes for the group name and instructions.
- For required groups, set the `required` attribute in the fieldset. Setting the `required` attribute applies validation and error handling to the radio group.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-radio properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-radio--events-properties"
  width="1200"
  height="1770"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
