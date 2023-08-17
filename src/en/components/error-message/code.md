---
title: Error message
layout: "layouts/component-documentation.njk"
translationKey: "errormessageCode"
tags: ['errormessageEN', 'code']
date: "git Last Modified"
---

## Build an error message

Use an error message for each response constraint of a component, when that component is required.

All GC Design System components already come with default error handling for required form components.

## Coding and accessibility for error messages

### Use error messages to support accessible task success

- Make sure a person can immediately access the form controls associated with the label the error message is attached to.
- Make your error message specific to avoid a user getting the same error message again after they thought they fixed the error.
- Avoid introducing additional steps. Let a person know exactly what to do to fix the error so they can take action and resubmit or revalidate without having to do extra work.
- Provide one or two solutions for fixing the error, not a multi-step process.

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

{% include "partials/getcode.njk" %}

<div class="iframe-container">
  <iframe
    title="Overview of gcds-error-message properties and events."
    src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-error-message--events-properties"
    width="1200"
    height="900"
    style="display: block; margin: 0 auto;"
    frameBorder="0"
    allow="clipboard-write"
  ></iframe>
</div>
