---
title: Radio
layout: "layouts/component-documentation.njk"
translationKey: "radioDesign"
tags: ['radioEN', 'design']
date: "git Last Modified"
---

## Radio anatomy – with fieldset

The **fieldset legend** acts as a heading to identify the grouped radios. Legend text is left aligned and in sentence case (only the initial letter is capitalized).

The **fieldset hint text** communicates specific requirements for the radio grouping to support task success.

The **radio button** shows, by the presence or absence of the **checked button**, whether an option has been selected or not.

The **radio label** states the choice the radio button represents. Label text is in sentence case.

The **radio hint text** gives a person additional information about the choice.

<img class="b-sm b-gray p-400" src="/images/en/components/anatomy/gcds-radio-anatomy.svg" alt="Radio anatomy showing the labels Fieldset legend, Fieldset hint, Checkmark, Radio label, Radio button and Radio Hint."/>

## Design and accessibility for radios

### Make radios visible and options clear

- Limit the number of options to 6-7.
- Limit text for each option to a few words or a short phrase and include hint text for more context.
- Generally, order options alphabetically. In some cases, it can be helpful for you to order them from most to least common.
- When possible, include an option like "None" or "None of the above". With radios, a selected option cannot be de-selected, or reversed, except by choosing another option within the group. When this happens, the respondent is forced to choose an incorrect response or abandon the task.

### Help a person understand how to use radios

- Avoid assuming a person will know how to use a radio.
- Use the [fieldset's]({{ links.fieldset }}) hint text to include a cue for users unfamiliar with radios so they know they can only make a single selection. For example, "Select the response that best applies".
- Avoid pre-selecting a radio option. This makes it more likely that users will miss a question and submit a wrong answer.
