---
title: Fieldset
layout: "layouts/component-documentation.njk"
translationKey: "fieldsetDesign"
tags: ['fieldsetEN', 'design']
date: "git Last Modified"
---

## Fieldset anatomy

A fieldset combines the `<fieldset>` and `<legend>` elements to accessibly group together related form fields or components – without solely relying on visual layout.

**The fieldset legend** provides the caption for the content of the group of form components. The content of the legend can be a short descriptive statement or a call to action.

**The fieldset hint** provides more context to the fieldset's content.

**The component grouping** is made up of the elements of each component within the fieldset.

<img class="b-sm b-gray p-400" src="/images/en/anatomy/gcds-fieldset-anatomy.svg" alt="Fieldset legend anatomy showing these labels Legend, Hint text and component grouping. Hint test shows Fieldset legend. Component grouping has Input label underneath explain to give a Hint/ Example messge below is a dark blue boxed with six zero to indicate where the number label will be pout and the format. There is a Input Label with Hint/ Example message with a dark blue box selecting box with Select Option and arrow pointing down showing selection option."/>

## Accessibility and design for fieldsets

### Group information accessibly

- Group together form elements that are part of a task or sub-task or are related in some way.
- Group together related form components, without solely relying on visual layout, to be accessible to people with blindness or low vision.

### Write fieldset content to support task success

- Write a short descriptive statement or a call to action for the `legend` caption.
- Use the `legend` as a signpost to let a person know the kind of information the fieldset group is asking them for.
- Identify the subtask in the `legend` to help people understand the relationship between the information you're requesting and the task they're completing.

### Clarify the question or instruction for radios and checkboxes

- For [radios]({{ links.radio }}) and [checkboxes]({{ links.checkbox }}), the `legend` plays the role of an [input]({{ links.input }}) label. Replace a question in the `legend` with a statement for a shorter, clearer caption.
- Use the fieldset `hint` text to give additional context to a person on how to respond. For a checkbox, the fieldset `hint` text could state, "Select all applicable options". For a radio, `hint` text could state "Select the response that best applies".
- Avoid using a fieldset when a form component has a single option for response and no selection is required.
