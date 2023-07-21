---
title: Textarea
layout: "layouts/component-documentation.njk"
translationKey: "textareaDesign"
tags: ['textareaEN', 'design']
date: "git Last Modified"
---

## Text area anatomy

<ol class="anatomy-list">
  <li>The <strong>text area label</strong> states the information a person should enter in the field. Label text is left aligned and in sentence case (only the initial letter is capitalized).</li>
  <li>The <strong>hint text</strong> communicates specific requirements for each text area to support task success.</li>
  <li>The <strong>field</strong> is the container a person interacts with to provide their response.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-textarea-anatomy.svg" alt="Text area anatomy showing the Text area label, Hint text/ example message and dark blue outline white box for text input."/>

## Design and accessibility for text areas

### Write a short, specific, unique text area label

- Ask only for the information you need using as few words as possible. Phrasing as a question can make a label unnecessarily long.
- Choose unique labels for each text area and [input]({{ links.input }}) within a page. A person browsing fields will hear the label text in rapid succession without cues to tell which label is for which context.
- Avoid using technical jargon, like "subject email address" or "account ID". Instead be specific and personal, "full name", "child’s age".
- Avoid using colloquialisms and common verb phrases that are unfamiliar to non-fluent speakers.
- Explain any term that may not be clear. For example, "Bio (tell us a bit about your background).

### Support task success for text areas with hint text

- Add hint text to help a person filling in a text area to provide a complete value.
- Write hint text to be instructional, brief, and specific.

### Write error messages for required text areas

- Use [error messages]({{ links.errorMessage }}) to address missing and invalid entries.
- Write an error message for all required inputs. If a field is optional, avoid using an error message.
- Avoid blaming the person using the product. Instead, tell them exactly what to do to move forward.
