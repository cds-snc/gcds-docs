---
title: Radios
layout: 'layouts/component-documentation.njk'
translationKey: 'radiosDesign'
tags: ['radiosEN', 'design']
date: "git Last Modified"
---

## Radio group anatomy - with fieldset

<ol class="anatomy-list">
  <li>The <strong>legend for radios</strong> acts as a heading to identify the grouped radios. Legend text is left-aligned and in sentence case (only the initial letter is capitalized).</li>
  <li>The <strong>hint text for radios</strong> gives specific requirements for selecting the appropriate response.</li>
  <li>The <strong>radio button</strong> indicates the state of the selection.</li>
  <li>The <strong>checked button</strong> shows what option has been selected.</li>
  <li>The <strong>option label</strong> describes the selection. Label text is in sentence case.</li>
  <li>The <strong>option hint text</strong> gives additional information about the selection.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-radios-anatomy.svg" alt='Radios anatomy showing the labels "legend header" at the top followed by "hint text" underneath. Under that are two stacked circles with labels beside them and hint text. One of the circles is filled in with a smaller black circle.'/>

## Design and accessibility for radios

### Make selections clear

- Limit the number of options to 7.  
- Limit text for each option to a few words or a short phrase. Include hint text if more context is needed.  
- Order options in a logical way. This could mean alphabetically or from most to least common.  
- When possible, include a "None of the above" option to avoid forcing an incorrect selection. A selection can't be unselected unless another option is selected.

### Make instructions clear

- Don't assume a person will know they can only select one answer.  
- Use the hint text to specify they can only make one selection. For example, "Select the response that best applies”.  
- Avoid pre-selecting a radio option. This makes it more likely that a person will miss a question and submit the wrong answer.  
