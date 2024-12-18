---
title: Fieldset
layout: 'layouts/component-documentation.njk'
translationKey: 'fieldsetDesign'
tags: ['fieldsetEN', 'design']
date: 'git Last Modified'
---

## Fieldset anatomy

A fieldset combines the `<fieldset>` and `<legend>` elements to accessibly group together related form fields or components – without solely relying on visual layout.

<ol class="anatomy-list">
  <li>The <strong>fieldset legend</strong> provides the caption for the contents of the group of form components. The legend can be a short descriptive statement or a call to action phrase. Legend text is left aligned and in sentence case (only the initial letter is capitalized).</li>
  <li>The <strong>fieldset hint text</strong> communicates specific requirements for the fieldset's content to support task success.</li>
  <li>The <strong>component grouping</strong> is made up of each component within the fieldset.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-fieldset-anatomy.svg" alt="Fieldset legend anatomy showing the labels Legend, Hint text and component grouping. Hint text shows Fieldset legend. Component grouping has Input label underneath explain to give a Hint/Example message. Below is a dark blue boxed with six zeros to indicate where the number label will be put and the format. There is a Input Label with Hint/ Example message with a dark blue box selecting box with Select Option and arrow pointing down showing selection option."/>

## Design and accessibility for fieldsets

### Group information accessibly

- Group together form elements that are part of a task or sub-task or are related in some way.
- Group together related form components, without solely relying on visual layout, to be accessible to people with blindness or low vision.

### Write fieldset content to support task success

- Write a short descriptive statement or a call to action for the **legend** caption.
- Use the **legend** as a signpost to let a person know the kind of information the fieldset group is asking them for.
- Identify the subtask in the **legend** to help people understand the relationship between the information you're requesting and the task they're completing.

### Clarify the question or instruction for radios and checkboxes

- For [radios]({{ links.radio }}) and [checkboxes]({{ links.checkbox }}), the **legend** sits where the [input]({{ links.input }}) label usually is on other form components. Replace a question in the **legend** with a statement for a shorter, clearer caption.
- Use the fieldset **hint** text to give additional context to a person on how to respond. For a checkbox, the fieldset **hint** text could state, "Select all applicable options". For a radio, **hint** text could state "Select the response that best applies".
- Avoid using a fieldset when a form component has a single option for response and no selection is required.
