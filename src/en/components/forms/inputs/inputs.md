---
title: Input field
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: inputsEN
  title: Input field
  locale: en
  parent: formsEN
  order: 1
translationKey: "inputs"
onThisPage:
  0: Use the basic input field component
  1: Customize the input field
  2: What to use input fields for
  3: Related components
  4: Where to place input fields
  5: How to write a good input field label
  6: When to use hint text and error messages
---

# Input field

An input field is a space, usually on a form, for a person to enter short-form information in response to a question or instruction.

## Use the basic input field component

Use a text input field to collect single-line information from a person.

Input fields have built in states that change when someone interacts with that field: hover, focus, active, disabled.

### Text input type

<gcds-input
  type="text"
  input-id="text-input"
  label="Text input"
/>

Use the text input for short, single-line, response collection.

Use when no other specfic input type is available for single-line entry.

Use in most cases you need to collect a person’s name, to collect the full name.  

Use instead of the number input for things like estimates that may include non-numerical values.

{% viewCode "en" "text-input-show" %}

``` html
<gcds-input
  type="text"
  input-id="text-input"
  label="Text input"
/>
```

{% endviewCode %}

### Number input

<gcds-input
  type="number"
  input-id="number-input"
  label="Number input"
/>

Use the number input field to reject values that are not numerical.

Tip: When you set a constraint, like a numerical range, use hint text to relay an instruction.

{% viewCode "en" "number-input-show" %}

``` html
<gcds-input
  type="number"
  input-id="number-input"
  label="Number input"
/>
```

{% endviewCode %}

### Email input

<gcds-input
  type="email"
  input-id="email-input"
  label="Email input"
/>

Use for email address collection.

{% viewCode "en" "email-input-show" %}

``` html
<gcds-input
  type="email"
  input-id="email-input"
  label="Email input"
/>
```

{% endviewCode %}

### URL input

<gcds-input
  type="url"
  input-id="url-input"
  label="URL input"
/>

Use to collect a URL, like a web address.

{% viewCode "en" "url-input-show" %}

``` html
<gcds-input
  type="url"
  input-id="url-input"
  label="URL input"
/>
```

{% endviewCode %}

## Customize the input field

## What to use input fields for

Use an input field to gather information by:

- capturing a freeform response to a single-line question
- collecting a person’s full name for reference in the product or personalized communications
- collecting a date when it is known to the person completing the field
- collecting a numeric-only response
- collecting an email address or URL

## Related components

Links when an action is less important.  

Radio buttons or dropdowns when you can give someone a set of options for single selections. 

Checkboxes when you can give someone a set of options for multi selections. 

Buttons when you’re asking consent or agreement or offering a binary choice.

Date selectors when you want someone to choose a date, like for appointment scheduling.

## Where to place input fields

Check the visibility of both the label text and entry field line or border against the surface where you’re placing them. 

Use built in or custom hover state to ensure good colour contrast.  (visual)

Avoid placing hint text or error messages below the field where they might be hidden.

## How to write a good input field label

Group input fields by related category so it’s easier for a person to understand what information you’re asking them for. (cognitive)

Mark fields as required using an asterisk and the word “required”.  

Write labels as short and specific requests for information. Phrasing as a question can make a label unecessarily long. Use descriptive text for any icons or images. (auditory)

Avoid repeating input field label text within the same page. A person browsing fields will hear the label text in rapid succession without cues to tell which label is for which context. (auditory)

Avoid using technical jargon, like “subject email address” or “account ID”. Instead be specific and personal, “full name”, “child’s age”. 

Avoid using colloquialisms and common verb phrases that are unfamiliar to non-fluent speakers. Explain a term that may not be clear: “handle (name you’d like to go by)”. (cognitive)

When creating input fields, only ask for the information you need. Using a question protocol can help you choose what you need to ask for on a form. (physical)

## When to use hint text and error messages

### Handling hint text

Add hint text to help a person filling in a field to provide a complete value.

Write hint text to be instructional, brief and specific.

Make sure your hint text is static, so it does not disappear.

### Error messages for all required fields

Use error messages to address missing and invalid entries for all required fields.

Tell the person what the problem is so they can accomplish their goals. Avoid blaming the person using the product. Let them know what they need to do to move forward.

Consider affirmations like confirming valid entries instead when you can validate a correct input field entry instead of flagging an error.
