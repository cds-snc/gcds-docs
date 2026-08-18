---
title: Alert
layout: 'layouts/component-documentation.njk'
translationKey: 'alertDesign'
tags: ['alertEN', 'design']
date: 'git Last Modified'
nocrawl: true
---

## Alert anatomy

<ol class="anatomy-list">
  <li>The <strong>icon</strong> (optional) indicates the alert’s role.</li>
  <li>The <strong>title</strong> briefly communicates the main message of the alert.</li>
  <li>The <strong>message</strong> provides details and any available next steps.</li>
  <li>The <strong>dismiss button</strong> (optional) allows people to clear the alert.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-alert-anatomy.svg" alt="An alert anatomy has 4 elements: the icon, the title, the message, and the dismiss button." />

## Design and accessibility for alerts

### Choose the appropriate alert

- Refer to the use case tab for guidelines on when to use each alert role.
- Use warning and danger alerts only when the message is important and time-sensitive. These use `role="alert"`. A screen reader will interrupt its speech to announce the alert immediately, which can be intrusive. 
- Use info and success alerts when the message is helpful but not urgent. These use `role="status"`. A screen reader will announce the alert at the next available opportunity, without interrupting its current speech.

### Place the alert where it’s most relevant

- When the alert appears after a person’s action, place it inline, close to where the action occurred. For example, place it just after a button that may reveal important new information.
- When the alert is prompted on page refresh or by a server event, and you do not know where the person is on the page, place the alert at the top of the page.
- Avoid using an alert within a form component, like an input or a checkbox.

### Write concise and descriptive titles and messages

- Include the most important piece of information in the title, so that the purpose of the alert is obvious.
- Keep the message concise, using no more than two sentences.
- Write a message that provides complementary information to the title. Avoid repeating or rephrasing the title.
- Describe the impact on the user, and provide a clear next step, when one is available.
- Include a link or another resolution path when it helps people address the issue described in the alert.

### Consider adding a dismiss button 

- Add a dismiss button when people can continue their task without acting on the alert. This is often appropriate for info and success alerts.
- Omit the dismiss button when people must resolve an issue before they can continue. This is often appropriate for danger alerts.
- Consider omitting the dismiss button if you’re already using another button in the message, to maintain a clear layout.

### Avoid unnecessary alerts 

- Only use an alert when the information is important enough to warrant additional attention. Avoid repeating information that’s already on the page.
- Avoid displaying more than one alert at the same time. Combine them if they’re about the same topic, or pick the alert with the highest priority.


