---
title: Date input
layout: 'layouts/component-documentation.njk'
translationKey: 'dateinputDesign'
tags: ['dateinputEN', 'design']
date: "git Last Modified"
---

## Date input anatomy

<ol class="anatomy-list">
  <li>The <strong>fieldset legend</strong> states the information a person should enter in the date input field. Text is left-aligned and in sentence case (only the initial letter is capitalized). For the date input component, the fieldset is typically labelled as "date" or with the specific date type sought. The hint text shows the format of the date.</li>
  <li>The <strong>month label</strong> identifies the month select field.</li>
  <li>The <strong>month select field</strong> field provides a predefined, chronological list of months for a person to select from.</li>
  <li>The <strong>day label</strong> identifies the day input.</li>
  <li>The <strong>day input</strong> field can be 1 or 2 digits.</li>
  <li>The <strong>year label</strong> identifies the year input field.</li>
  <li>The <strong>year input</strong> field is limited to 4 digits.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-date-input-anatomy.svg" alt="A date input anatomy represented by 6 elements: the fieldset legend, the month label, the month select field, the day label, the day input field, the year label, and the year input field." />


## Design and accessibility for date inputs

### Support task success with hint text
- Use the hint text in the fieldset legend to help a person understand the format they can use to enter the date. For example, showing a single digit number without a leading zero, like September 7, rather than September 07 shows that a leading zero is not needed.

### Write specific error messages
- Write error messages for each field of the date input. Error messages must provide information on what is missing or on incorrect formatting. For example, if the year was input using 2 digits, state that the year should be 4 digits.
