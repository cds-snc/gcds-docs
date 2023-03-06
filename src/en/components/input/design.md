---
title: Input
layout: "layouts/component-documentation.njk"
translationKey: "inputDesign"
tags: ['inputEN', 'design']
date: "git Last Modified"
---

## Input anatomy

**The label** states the information the user should enter in the field. Label text is left aligned and in sentence case (only the initial letter is capitalized).

**The hint** text communicates specific requirements for each input to support task success.

**The field** is the container the user interacts with to provide their response.

<img class="b-sm b-gray p-400" src="/images/en/anatomy/gcds-input-anatomy.svg" alt=""/>

## Accessibility and design for inputs

### Write a short, specific, unique input label

- Ask for the information you need using as few words as possible. Phrasing as a question can make a label unnecessarily long and a person may not read the whole thing.
- Choose unique labels for each input and [text area]({{ links.textarea }}) within a page, like "Your full name", "Manager's name".
- Avoid using technical jargon, like "subject email address" or "account ID". Instead be specific and personal, like "full name", "child's age".
- Avoid using colloquialisms and common verb phrases that are unfamiliar to non-fluent speakers.
- Explain any term that may not be clear. For example, "Handle (name you'd like to go by)".

### Size inputs to fit response type

- Use fixed width inputs for content you know has a specific length. For example, 6 characters for a postal code or 10 characters for a phone number.
- Opt to use most of the container width when you do not know the character count of the response and use all 75 characters for responses without a fixed length.
- Avoid using inputs for responses that may need more than 75 characters.

### Support task success with hint text

- Add hint text to help a person filling in an input to provide a complete value.
- Write hint text to be instructional, brief and specific.

### Write error messages for required inputs

- Use [error messages]({{ links.errorMessage }}) to address missing and invalid entries.
- Write an error message for all required inputs. If a field is optional, avoid using an error message.
- Avoid blaming the person using the product. Instead, tell them exactly what to do to move forward.
