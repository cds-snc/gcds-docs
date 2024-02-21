---
title: Error summary
layout: 'layouts/component-documentation.njk'
translationKey: 'errorsummaryCode'
tags: ['errorsummaryEN', 'code']
---

## Build an error summary

Use an error summary to help a person understand how much work they need to do before moving to the next task.

All GC Design System components come with default error handling for required form components. For error summaries this means any required component will prompt an inline error message `onBlur` by default. That error message will be listed in the error summary on form submit.

## Coding and accessibility for error summaries

### Use the error summary with GC Design System components

The GC Design System error summary uses the `listen` attribute to collect errors. The error summary will list errors from GC Design System components `onSubmit`. Errors are listed in the same order as they appear on the page.

- Enable any controls the person will need to access to recover from any of the errors.
- Consider replacing any generic default <gcds-link href="{{ links.errorMessage }}">error message</gcds-link> with text that defines the specific problem and how a person can fix it.

### Opt to use the error summary with your own component instances

If you’re using some of your own form components:

- Add errors for those instances by passing the `error-links` attribute for any component or element you’re using that has an error message. Then the error messages will appear.
- Match the error summary item content to each of your error messages.
- Order errors in the error summary in the same order that they appear on the form.

### Opt to change the error heading

Opt to make your error heading more specific by using the `heading` attributes.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-error-summary properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-error-summary--events-properties&lang=en"
  width="1200"
  height="1600"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
