---
title: Checkbox
layout: "layouts/component-documentation.njk"
translationKey: "checkboxDesign"
tags: ['checkboxEN', 'design']
date: "git Last Modified"
---

## Checkbox anatomy – with fieldset

The **fieldset legend** acts as a heading to identify the grouped checkboxes. Legend text is left aligned and in sentence case (only the initial letter is capitalized).

The **fieldset hint text** communicates specific requirements for the checkbox grouping to support task success.

The **checkbox** shows, by the presence or absence of the **checkmark** (also called the checked box), whether an option has been selected or not.

The **checkbox label** states the choice the checkbox represents. Label text is in sentence case.

The **checkbox hint text** gives users additional information about the choice.

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-checkbox-anatomy-with-fieldset.svg" alt="Checkbox anatomy showing the labels Fieldset legend, Fieldset Hint, Checkbox, Checkbox Label, Checkmark, and Checkbox Hint." />

## Single checkbox anatomy

Use the fieldset component with the checkbox, except for checkboxes with a single box to check.

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-checkbox-anatomy-single.svg" alt="Checkbox anatomy showing the labels Checkbox, Checkbox Label, Checkmark, and Checkbox Hint." />

## Design and accessibility for checkboxes

### Make checkboxes visible and options clear

- Limit the number of options to 6-7.
- Limit text for each option to a few words or a short phrase and include hint text for more context.
- Generally, order options alphabetically. In some cases, it can be helpful for you to order them from most to least common.

### Help people understand how to use checkboxes

- Avoid assuming a person will know how to use a checkbox.
- Use the [fieldset's]({{ links.fieldset }}) hint text to include a cue for users unfamiliar with radios so they know they can only make a single selection. For example, "Select the response that best applies".
- Include fieldset's hint text to include a cue for users unfamiliar with checkboxes so they know they can make multiple selections.  For example, "Select all that apply".
- Avoid pre-selecting checkbox options. This makes it more likely that users will miss a question and submit a wrong answer.
