---
title: Stepper
layout: "layouts/component-documentation.njk"
translationKey: "stepperCode"
tags: ['stepperEN', 'code']
date: "git Last Modified"
---

## Build a stepper

Use a stepper as a guide when a sequence (form or process) can be divided into logical steps and will span three or more pages.

## Coding and accessibility for steppers

### Use each step for a goal

Use the `current-step` attribute to indicate the step that the user is on and the `total-steps` attribute to indicate the overall number of steps.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-stepper properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-stepper--default"
  width="1200"
  height="800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
