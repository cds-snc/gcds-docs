---
title: Text area - Components
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: textareaEN
  title: Text area
  locale: en
  parent: formsEN
  order: 2
translationKey: "textarea"
onThisPage:
  0: The basic text area component
  1: How to modify the text area
  2: What problems text areas solve
  3: Related components
  4: Size and placement of text area
  5: How to write good text area labels
  6: When to use hint text and error messages
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-textarea
figma: https://www.figma.com/file/4KWj8wnnXoq6cA6yl0dnsR/GC-Components?node-id=3%3A599
---

<header>

# Text area

`<gcds-textarea>`

A text area is a space, usually on a form, for a person to enter long-form information in response to a question or instruction.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

<section aria-label="The basic text area component">

## The basic text area component

Use a text area to collect multi-line information from a person.

Text areas have built in states that change when someone interacts with that field: default, hover, focus, active, disabled.

### Text area

<div class="comp-show">
  <gcds-textarea
    textarea-id="textarea"
    label="Text area"
    rows="6"
  ></gcds-textarea>
</div>

{% viewCode locale "view-textarea" "Text area" %}
``` html
<gcds-textarea
  textarea-id="textarea"
  label="Text area"
  rows="6"
></gcds-textarea>
```
{% endviewCode %}

Use the text area for longform, multi-line, response collection.

</section>

<section aria-label="How to modify the text area">

## How to modify the text area

Occasionally, the default options may not meet the needs of the people using your product. You can modify the text area component to create a custom text area for a particular use case.

### Apply design system foundations to text areas

Select typography tokens from the GC Design System [foundations]({{ "/en/foundations" | url }}). Colour and spacing tokens coming soon!

</section>

<section aria-label="What problems text areas solve">

## What problems text areas solve

Use an input field to gather information by:

- capturing a freeform response to a multi-line question
- for descriptive entries, like describing a problem or concern
- collecting message text on contact pages

</section>

<section aria-label="Related components">

## Related components

**Text input** for single-line responses.

**Radio buttons or dropdowns** when you can give someone a set of options for single selections.

**Checkboxes** when you can give someone a set of options for multi selections.

**Buttons** when you’re asking consent or agreement or offering a binary choice.

**Date selectors** when you want someone to choose a date, like for appointment scheduling.

</section>

<section aria-label="Size and placement of text area">

## Size and placement of text area

### Text area width

Avoid setting width any lower than 50% (1/2 width).

Make the height of a text area proportional to the amount of text you expect someone to enter. You can set the height of a text area by by specifying the rows attribute.

### Visibility of text area

Check the visibility of both the label text and entry field line or border against the surface where you’re placing them.

Use built in or custom hover state to ensure good colour contrast.

Mark fields as required using the word “required”.

Avoid placing hint text or error messages below the field where they might be hidden.

</section>

<section aria-label="How to write good text area labels">

## How to write good text area labels

Group text areas by related category so it’s easier for a person to understand what information you’re asking them for.

Write labels that are short and specific requests for information. Phrasing as a question can make a label unnecessarily long. Use descriptive text for any icons or images.

Avoid repeating input field label text within the same page. A person browsing fields will hear the label text in rapid succession without cues to tell which label is for which context.

Avoid using technical jargon, like “subject email address” or “account ID”. Instead be specific and personal, “full name”, “child’s age”.

Avoid using colloquialisms and common verb phrases that are unfamiliar to non-fluent speakers. Explain a term that may not be clear: “handle (name you’d like to go by)”.

When creating text areas, only ask for the information you need.

</section>

<section aria-label="When to use hint text and error messages">

## When to use hint text and error messages

### Handling hint text

Add hint text to help a person filling in a field to provide a complete value.

Write hint text to be instructional, brief, and specific.

Make your hint text is static, so it does not disappear.

### Error messages for all required fields

Use error messages to address missing and invalid entries for all required fields.

Tell the person what the problem is so they can accomplish their goals. Avoid blaming the person using the product. Let them know what they need to do to move forward.

Consider affirmations like confirming valid entries instead when you can validate a correct input field entry instead of flagging an error.

</section>
