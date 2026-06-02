---
title: Error message
layout: 'layouts/component-documentation.njk'
translationKey: 'errormessageCode'
tags: ['errormessageEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for error messages](#coding-and-accessibility-for-error-messages)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for error messages

### Use error messages to support accessible task success

- Make sure a person can immediately access the form controls associated with the label the error message is attached to.
- Make your error message specific to avoid a user getting the same error message again after they thought they fixed the error.
- Avoid introducing additional steps. Let a person know exactly what to do to fix the error so they can take action and resubmit or revalidate without having to do extra work.
- Provide one or two solutions for fixing the error, not a multi-step process.

Note: All GC Design System components already come with default error handling for required form components.

### Follow a predictable format for error messages

Provide simple, fast guidance that's in context and interrupts the flow of action as minimally as possible:

- Clearly identifies and points to the error.
- Defines the error without making the user's actions the source of the problem.
- Includes a call to action that's specific and actionable.

A person who receives an error message needs to:

- Find the error and be able to access it.
- Know what to do to fix it.
- Be able to make the changes.
- Resubmit or revalidate without having to fill out the whole form again.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Slots](#section-slot)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `message-id`

The `message-id` attribute specifies the unique identifier for the error message.

{% examplesPreview "90" %}
<gcds-error-message message-id="message-default">
  Error message.
</gcds-error-message>
{% endexamplesPreview %}

<!-- ----- Slots section ----- -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for adding the error message text.

{% examplesPreview "90" %}
<gcds-error-message message-id="message-default">
  Error message.
</gcds-error-message>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-error-message properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-error-message--events-properties&lang=en"
  width="1200"
  height="1000"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
