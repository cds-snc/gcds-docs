---
title: Select
layout: 'layouts/component-documentation.njk'
translationKey: 'selectDesign'
tags: ['selectEN', 'design']
date: 'git Last Modified'
---

## Select anatomy

<ol class="anatomy-list">
  <li>The <strong>label</strong> states the choice the select represents.</li>
  <li>The <strong>hint text</strong> communicates additional context or requirements about the question and expected response.</li>
  <li>The <strong>default value</strong> can be used as a placeholder for the select.</li>
  <li>The <strong>icon</strong> is used as a visual aid to indicate that the field can be expanded.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-select-anatomy.svg" alt="The select component with numbers pointing to individual parts of the select anatomy." />

## Design and accessibility for select

### Make select options clear

- Limit text for each option to a few words or a short phrase.
- Generally, order options alphabetically. In some cases, it can be helpful for you to order them from most to least common.
- When possible, include an option like "None" or "None of the above".

### Help a person understand how to use selects

- Avoid assuming a person will know how to use a select.
- Use hint text to include a cue for users unfamiliar with selects so they know they can only make a single selection. For example, "Select the response that best applies".
- Avoid pre-selecting a select option. This makes it more likely that users will miss a question and submit a wrong answer.
- When possible, include an option like "None" or "None of the above". Once selected, the option cannot be de-selected, or reversed, except by choosing another option within the group. When this happens, the respondent is forced to choose an incorrect response or abandon the task.

### Use other questions to reduce select option size

- Try asking the users other questions before using the select in order to reduce the amount of options.
- If the list of items is smaller (6-7 items or less), consider using <gcds-link href="{{ links.radio }}">radio buttons</gcds-link> instead.
