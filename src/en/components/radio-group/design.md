---
title: Radio Group
layout: 'layouts/component-documentation.njk'
translationKey: 'radiogroupDesign'
tags: ['radiogroupEN', 'design']
# TODO: update this after in git
# date: "git Last Modified"
---

## Radio Group anatomy - with fieldset

<ol class="anatomy-list">
  <li>The <strong>fieldset legend</strong> acts as a heading to identify the grouped radios. Legend text is left aligned and in sentence case (only the initial letter is capitalized).</li>
  <li>The <strong>fieldset hint text</strong> communicates specific requirements for the radio grouping to support task success.</li>
  <li>The <strong>radio button</strong> shows, by the presence or absence of the <strong>checked button</strong>, whether an option has been selected or not.</li>
  <li>The <strong>checked button</strong> shows that an option has been selected.</li>
  <li>The <strong>radio label</strong> states the choice the radio button represents. Label text is in sentence case.</li>
  <li>The <strong>radio hint text</strong> gives a person additional information about the choice.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-radio-group-anatomy.svg" alt="Radio group anatomy showing the labels Fieldset legend, Fieldset hint, Checkmark, Radio label, Radio button, and Radio hint."/>

## Design and accessibility for Radio Group

### Make radios visible and options clear

- Limit the number of options to 6-7.
- Limit text for each option to a few words or a short phrase and include hint text for more context.
- Generally, order options alphabetically. In some cases, it can be helpful for you to order them from most to least common.
- When possible, include an option like "None" or "None of the above" to avoid forcing an incorrect selection. With radio groups, if a person accidentally selects an option, it cannot be de-selected, or reversed.

### Help a person understand how to use radios
- Avoid assuming a person will know how to use a radio group.
- Use the [fieldset's]({{ links.fieldset }}) hint text to include a cue for people unfamiliar with radio groups to specify they can only make a single selection. For example, "Select the response that best applies".
- Avoid pre-selecting a radio group option. This makes it more likely that a person will miss a question and submit a wrong answer.
