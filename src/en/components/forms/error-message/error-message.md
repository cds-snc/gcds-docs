---
title: Error message - Components
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: errormessageEN
  title: Error message
  locale: en
  parent: formsEN
  order: 3
translationKey: "errormessage"
onThisPage:
  0: The basic error message component
  1: What problems error messages solve
  2: Related components
  3: Avoiding errors
  4: How to write a good error message
  5: Make the error state obvious
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-error-message
---

<header>

# Error message

`<gcds-error-message>`

An error message is a communication that tells a person about a problem to help them accomplish their goals.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

<section aria-label="The basic error message component">

## The basic error message component

Use an error message to let a person know they need to do something before an action can continue.

Use it for inputs or text areas marked as required.

Avoid using error messages and stick to positive feedback when you can.

### Inline error message

<div class="comp-show">
  <gcds-input
    label="Input label"
    input-type="text"
    input-id="input"
    error-message="Error / Validation message"
    size="45"
  ></gcds-input>
  <gcds-textarea
    label="Text area label"
    textarea-id="textarea"
    error-message="Error / Validation message"
  ></gcds-textarea>
</div>

Use inline error messages to highlight the needed action close to the input where a person can make the change while directly referencing the message.

{% viewCode locale "view-inline" "Inline error message" %}

``` html
<gcds-input
  label="Input label"
  input-type="text"
  input-id="input"
  error-message="Error / Validation message"
  size="45"
></gcds-input>

<gcds-textarea
  label="Text area label"
  textarea-id="textarea"
  error-message="Error / Validation message"
></gcds-textarea>
```

{% endviewCode %}

</section>

<section aria-label="What problems error messages solve">

## What problems error messages solve

Use an error message to let a person know what the problem is, why it happened, and how to resolve it.

Use an error message to draw attention to a needed action by:

- flagging a required input that is incomplete or was left blank.
- offering additional formatting instructions, like a missing @ symbol in an email address.
- giving a person extra details so they know what to enter into a field.

</section>

<section aria-label="Related components">

## Related components

Validation for signalling positively that an input response is valid and will be accepted.

Alert for communicating an issue where a person may not need to take corrective action.

</section>

<section aria-label="Avoiding errors">

## Avoiding errors

### Don’t use them if you don’t have to

Try to reduce or eliminate error messages as much as you can. Errors can be stressful to someone using your product.

Use validations to contrast with error messages. Validations can help a person feel better about receiving an error because you’re confirming what they’re doing right.

### Helping people avoid errors

Avoid making an input or text area required if it’s not essential and clearly identify which fields are required. Marking a field as required lets a person know they can’t skip that one.  

Labels that are clear and intuitive help a person to provide the correct information and avoid an error. When a label is too long the person may not read the whole thing.

Useful hint text lets a person know about a format need or other criteria for an input.

</section>

<section aria-label="How to write a good error message">

## How to write a good error message

### Error message basics

A person who receives an error message needs to:
1. know where the error is
2. know what to do to fix it
3. be able to make the changes  
4. resubmit or revalidate without having to fill out the whole form again

Use sentence case and avoid caps and exclamation marks. Don’t include the word error.

Let a person know exactly what to do to fix the error so they can makes the change and resubmit without having to do extra work.

### Give short and specific error guidance

Be concise. If it takes more than a line or two, the ask may be too complex.

Only provide one reason for the error. Focus more on the remedy than the cause.

Be clear and not ambiguous. Connect the dots for the person using your product. Avoid making them need to stop and think to know what to do to correct an error.

Tip: Think about whether the message could be interpreted another way.

### Be human

Never blame the person for the error or imply it’s their fault. State exactly what’s needed and give a way to correct the issue and keep the user on task. You want to avoid frustrating a person with a repeat error.  

Talk the way the people using your product talk. Avoid jargon and negative words.

Tip: A good way to incorporate a more human tone for more user-friendly error messages is to think about explaining it out loud to someone. How does the error message sound when you speak it in conversation?

</section>

<section aria-label="Make the error state obvious">

## Make the error state obvious

If an error is activated upon form submission, set the the label and input border to change to a  danger colour.

Place an inline error message just before the input (either to its immediate left or above it) so it’s noticeable. The error message banner should span the width of the input or text areas.

Inline error messages, in combination with an error summary, let a person know all the actions they need to do to move forward in a task. This reduces the cognitive load of mapping the errors in the list to inputs further down a page.

</section>
