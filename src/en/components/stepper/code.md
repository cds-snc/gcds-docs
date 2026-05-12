---
title: Stepper
layout: 'layouts/component-documentation.njk'
translationKey: 'stepperCode'
tags: ['stepperEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for steppers](#coding-and-accessibility-for-steppers)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for steppers

### Use each step for a goal

Use the `current-step` attribute to indicate the step that the person is on and the `total-steps` attribute to indicate the overall number of steps.

### Placing the stepper on the page

Use the `tag` attribute to assign the appropriate heading tag to the stepper. The stepper is able to render as either a `h1`, `h2` or `h3`.

{% include "partials/valid-props.njk" %}

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `current-step`

The `current-step` attribute defines the current step.

{% examplesPreview "160" %}
<gcds-stepper current-step="1" total-steps="4">
  Section title
</gcds-stepper>
{% endexamplesPreview %}

#### `total-steps`

The `total-steps` attribute defines the total number of steps.

{% examplesPreview "160" %}
<gcds-stepper current-step="1" total-steps="4">
  Section title
</gcds-stepper>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `tag`

The `tag` attribute sets the HTML heading element for the stepper. By default, it is set to `h2`.

{% examplesPreview "160" %}
<gcds-stepper current-step="1" total-steps="4" tag="h3">
  Section title
</gcds-stepper>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for placing the heading text.

{% examplesPreview "160" %}
<gcds-stepper current-step="1" total-steps="4">
  Section title
</gcds-stepper>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-stepper properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-stepper--events-properties&lang=en"
  width="1200"
  height="950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
