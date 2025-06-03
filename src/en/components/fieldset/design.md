---
title: Fieldset
layout: 'layouts/component-documentation.njk'
translationKey: 'fieldsetDesign'
tags: ['fieldsetEN', 'design']
date: 'git Last Modified'
---

## Fieldset anatomy

<ol class="anatomy-list">
  <li>The <strong>fieldset legend</strong> acts as a heading to identify the grouped form components that follow. Legend text is left aligned and in sentence case (only the initial letter is capitalized).</li>
  <li>The <strong>fieldset hint text</strong> gives specific requirements for completing the grouped form components successfully.</li>
  <li>The <strong>component grouping</strong> is the group of related form components that the legend describes.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-fieldset-anatomy.svg" alt="Fieldset anatomy showing the labels “legend” and ”hint text” and “component grouping”. The component grouping contains two different input form fields, each with its own label heading and hint text."/>

## Design and accessibility for fieldsets

A fieldset combines the `fieldset` and `legend` elements to group together related form fields or components. It helps users of screen readers understand that inputs are all related to that question.

### Group information 

- Group together form elements that are part of a task or are related in some way.
- Avoid using fieldset when you have a single form field that asks for a single piece of information.

### Write fieldset content to support task success

- Write a short descriptive statement or a call to action for the legend caption to let a person know what information the fieldset group is asking.
- Identify the subtask in the legend to help people understand the relationship between the information you're requesting and the task they’re completing.
