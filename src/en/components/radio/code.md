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