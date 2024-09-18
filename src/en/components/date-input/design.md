---
title: Date input
layout: 'layouts/component-documentation.njk'
translationKey: 'dateinputDesign'
tags: ['dateinputEN', 'design']
date: "git Last Modified"
---

## Date input anatomy

<ol class="anatomy-list">
  <li>The <strong>fieldset legend</strong> states the information a person should enter in the date input field. Text is left-aligned and in sentence case (only the initial letter is capitalized). For the date input component, the fieldset would typically be labelled as “date” or with the specific date type sought. The hint text shows the format of the date.</li>
  <li>The <strong>month label</strong> for the month select field.</li>
  <li>The <strong>month select field</strong> provides a predefined, chronological list of months for a person to select from.</li>
  <li>The <strong>day label</strong> for the day input.</li>
  <li>The <strong>day input field</strong>. Input can be 1 or 2 digits.</li>
  <li>The <strong>year label</strong> for the year input field.</li>
  <li>The <strong>year input field</strong>. Input is 4 digits only.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-date-input-anatomy.svg" alt="An image of the date input anatomy." />


## Accessibility and Design

### Support task success with hint text
- Use the hint text in the fieldset legend to help a person understand the format they can use to enter the date. For example, showing a single digit number without a leading zero, like September 7, rather than September 07 shows that a leading zero is not needed. 

### Write specific error messages
- Write error messages for each field of the date input. Error messages must provide information on what is missing or on incorrect formatting. For example, if the year was input using 2 digits, state that the year should be 4 digits.
