---
title: Checkbox
layout: 'layouts/component-documentation.njk'
translationKey: 'checkboxDesign'
tags: ['checkboxEN', 'design']
date: 'git Last Modified'
---

## Checkbox anatomy – with fieldset

<ol class="anatomy-list">
  <li>The <strong>fieldset legend</strong> acts as a heading to identify the grouped checkboxes. Legend text is left aligned and in sentence case (only the initial letter is capitalized).</li>
  <li>The <strong>fieldset hint text</strong> communicates specific requirements for the checkbox grouping to support task success.</li>
  <li>The <strong>checkbox</strong> shows, by the presence or absence of the <strong>checkmark</strong> (also called the checked box), whether an option has been selected or not.</li>
  <li>The <strong>checkmark</strong> shows that an option has been selected.</li>
  <li>The <strong>checkbox label</strong> states the choice the checkbox represents. Label text is in sentence case.</li>
  <li>The <strong>checkbox hint text</strong> gives users additional information about the choice.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-checkbox-anatomy-multiple.svg" alt="Checkbox anatomy showing the labels Fieldset legend, Fieldset Hint, Checkbox, Checkbox Label, Checkmark, and Checkbox Hint." />

## Single checkbox anatomy

Use the fieldset component with the checkbox, except for checkboxes with a single box to check.

<ol class="anatomy-list">
  <li>The <strong>checkbox</strong> shows, by the presence or absence of the <strong>checkmark</strong> (also called the checked box), whether an option has been selected or not.</li>
  <li>The <strong>checkmark</strong> shows that an option has been selected.</li>
  <li>The <strong>checkbox label</strong> states the choice the checkbox represents. Label text is in sentence case.</li>
  <li>The <strong>checkbox hint text</strong> gives users additional information about the choice.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-checkbox-anatomy-single.svg" alt="Checkbox anatomy showing the labels Checkbox, Checkbox Label, Checkmark, and Checkbox Hint." />

## Design and accessibility for checkboxes

### Make checkboxes visible and options clear

- Limit the number of options to 6-7.
- Limit text for each option to a few words or a short phrase and include hint text for more context.
- Generally, order options alphabetically. In some cases, it can be helpful for you to order them from most to least common.

### Help people understand how to use checkboxes

- Avoid assuming a person will know how to use a checkbox.
- Use the [fieldset's]({{ links.fieldset }}) hint text to include a cue for users unfamiliar with radios so they know they can only make a single selection. For example, "Select the response that best applies".
- Include fieldset's hint text to include a cue for users unfamiliar with checkboxes so they know they can make multiple selections. For example, "Select all that apply".
- Avoid pre-selecting checkbox options. This makes it more likely that users will miss a question and submit a wrong answer.
