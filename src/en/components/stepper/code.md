---
title: Stepper
layout: 'layouts/component-documentation.njk'
translationKey: 'stepperCode'
tags: ['stepperEN', 'code']
date: 'git Last Modified'
---

## Build a stepper

Use a stepper to guide users when a sequence (form or process) can be broken down into clear steps and will take up more than one page.

## Coding and accessibility for steppers

### Use each step for a goal

Use the `current-step` attribute to indicate the step that the person is on and the `total-steps` attribute to indicate the overall number of steps.

### Placing the stepper on the page

Use the `tag` attribute to assign the appropriate heading tag to the stepper. The stepper is able to render as either a `h1`, `h2` or `h3`.

{% include "partials/valid-props.njk" %}

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
