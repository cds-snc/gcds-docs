---
title: Error summary
layout: 'layouts/component-documentation.njk'
translationKey: 'errorsummaryCode'
tags: ['errorsummaryEN', 'code']
---

## On this page

- [Coding and accessibility for error summaries](#coding-and-accessibility-for-error-summaries)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for error summaries

### Use the error summary with GC Design System components

All GC Design System components come with default error handling for required form components. For error summaries this means any required component will prompt an inline error message `onBlur` by default. That error message will be listed in the error summary on form submit.

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

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `error-links`

The `error-links` attribute defines the list of errors to display in the error summary. Format: `{ link-href: link-label }`.

{% examplesPreview %}
<gcds-error-summary error-links='{ "#error-href-1": "Error summary item.", "#error-href-2": "Error summary item.", "#error-href-3": "Error summary item." }'>
</gcds-error-summary>
{% endexamplesPreview %}

#### `heading`

The `heading` attribute defines the error summary heading.

{% examplesPreview %}
<gcds-error-summary heading="Heading" error-links='{ "#error-href-1": "Error summary item.", "#error-href-2": "Error summary item.", "#error-href-3": "Error summary item." }'>
</gcds-error-summary>
{% endexamplesPreview %}

#### `listen`

The `listen` attribute controls whether the error summary should listen for the `GcdsError` event to generate a list of errors or not. By default, it is set to `true`.

{% examplesPreview %}
<gcds-error-summary error-links='{ "#error-href-1": "Error summary item.", "#error-href-2": "Error summary item.", "#error-href-3": "Error summary item." }' listen>
</gcds-error-summary>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

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
