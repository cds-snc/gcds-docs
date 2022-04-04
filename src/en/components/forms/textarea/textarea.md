---
title: Textarea
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: textareaEN
  title: Textarea
  locale: en
  parent: formsEN
  order: 2
translationKey: "textarea"
onThisPage:
  0: Use the basic text area component
  1: Customize the text area
  2: What to use text area for
  3: Related components
  4: Making text areas visible
  5: How to write good text area labels
  6: When to use hint text and error messages
---

# Text area

A text area is a space, usually on a form, for a person to enter long-form information in response to a question or instruction.

## Use the basic text area component

Use a text area to collect multi-line information from a person.

Text areas have built in states that change when someone interacts with that field: hover, focus, active, disabled.

### Text area

<gcds-textarea
  textarea-id="textarea"
  label="Text area"
/>

Use the text area for longform, multi-line, response collection.

{% viewCode "en" "textarea-show" %}

``` html
<gcds-textarea
  textarea-id="textarea"
  label="Text area"
/>
```

{% endviewCode %}

## Customize the text area

## What to use text area for

Use an input field to gather information by:

- capturing a freeform response to a multi-line question
- for descriptive entries, like describing a problem or concern
- collecting message text on contact pages

## Related components

Text input for single-line responses.

Links when an action is less important.  

Radio buttons or dropdowns when you can give someone a set of options for single selections. 

Checkboxes when you can give someone a set of options for multi selections. 

Buttons when you’re asking consent or agreement or offering a binary choice.

Date selectors when you want someone to choose a date, like for appointment scheduling.

## Making text areas visible

Check the visibility of both the label text and entry field line or border against the surface where you’re placing them. 

Use built in or custom hover state to ensure good colour contrast.  (visual)
 
Mark fields as required using an asterisk and the word “required”.  

Avoid placing hint text or error messages below the field where they might be hidden.

## How to write good text area labels

Group text areas by related category so it’s easier for a person to understand what information you’re asking them for. (cognitive)

Write labels that are short and specific requests for information. Phrasing as a question can make a label unecessarily long. Use descriptive text for any icons or images. (auditory)

Avoid repeating input field label text within the same page. A person browsing fields will hear the label text in rapid succession without cues to tell which label is for which context. (auditory)

Avoid using technical jargon, like “subject email address” or “account ID”. Instead be specific and personal, “full name”, “child’s age”.

Avoid using colloquialisms and common verb phrases that are unfamiliar to non-fluent speakers. Explain a term that may not be clear: “handle (name you’d like to go by)”. (cognitive)

When creating text areas, only ask for the information you need. Using a question protocol can help you choose what you need to ask for on a form. (physical)

## When to use hint text and error messages

### Handling hint text

Add hint text to help a person filling in a field to provide a complete value.

Write hint text to be instructional, brief, and specific.

Make your hint text is static, so it does not disappear.

### Error messages for all required fields

Use error messages to address missing and invalid entries for all required fields.

Tell the person what the problem is so they can accomplish their goals. Avoid blaming the person using the product. Let them know what they need to do to move forward.

Consider affirmations like confirming valid entries instead when you can validate a correct input field entry instead of flagging an error.
