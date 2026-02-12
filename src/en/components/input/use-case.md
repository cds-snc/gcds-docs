---
title: Input
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: inputEN
  title: Input
  locale: en
  parent: componentsEN
  otherNames: text input, text field.
  description: A space to enter short-form information.
  thumbnail: /images/common/components/preview-input.svg
  alt: Input component shows two cascading greyed boxes above a blank text input field with a cursor icon in it. The boxes represent the input's label and hint message.
  state: published
translationKey: 'input'
tags: ['inputEN', 'usage']
permalink: /en/components/input/
date: 'git Last Modified'
---

Take a look at what inputs do to see if they fit the problem you're solving for. Then select the best input type for the use case you need to meet.

## Problems inputs solve

Use an input to gather single-line information from a person when you're expecting a person will write:

- An individual or unique response.
- A short freeform response.
- A response that needs constraints around text length or the format of the response.
- Essential identifying or contact information.
- A date they already know, like a date of birth (for selection of an unknown date, use a date picker).

Note: Only collect information you're authorized to handle and be sure to safeguard it to Government of Canada standards.

<hr/>

## Related components

<a href="{{ links.textarea }}">Text areas</a> for multi-line freeform responses.

Date selectors when you want someone to choose a not-yet-known date, like for appointment scheduling.

<hr class="mt-600"/>

## Choose an input type

Set the input type based on how the input will validate the values a person enters.
The input `type` attribute accepts the following options:

### Text input

Use when no other specfic input type is available for single-line entry.
- To collect a person's name, in most cases by full name.
- Instead of the number input, for things like:
  - Estimates that can have non-numerical values.
  - Values that are not true numbers, like account numbers, credit card numbers, or authentication codes.
  - Numbers with decimals.

### Email input

- For email address collection.
- To require an email address format.

### Tel input

- To collect phone numbers.
- To enable the phone keyboard on mobile devices.

### Password input

- For password collection and validation.
- To set specific password constraints.

Tip: Communicate any password constraints in the hint text for the input so the person choosing the password knows exactly what the rules are.

### Number input

- To collect whole numbers that can increase or decrease, like quantities.
- To reject values that are non numerical.

Tip: When you set a constraint, like a numerical range, use hint text to relay a precise instruction.

### Search input

To collect search queries.

### URL input

To collect a URL, like a web address or domain name.
