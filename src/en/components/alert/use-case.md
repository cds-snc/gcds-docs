---
title: Alert
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: alertEN
  title: Alert
  locale: en
  parent: componentsEN
  otherNames: message, inline message.
  description: The alert is an event-driven message that communicates contextual feedback without interrupting the current task.
  thumbnail: /images/common/components/preview-alert.svg
  alt: The alert component shows a light blue box with a dark blue border on the left side. Next to the border is an "i" in a circle representing an info icon and below two dark blue boxes representing text.
  state: published
translationKey: 'alert'
tags: ['alertEN', 'usage']
permalink: /en/components/alert/
date: 'git Last Modified'
---

Take a look at what alerts do to see if they fit the problem you’re solving for. Then select the best subtype, called the alert role, for the use case you need to meet.

## Problems alerts solve

Use an alert to:

- Communicate information that appears dynamically in response to an event, such as:
  - a person’s action, like submitting an application or saving progress.
  - a system event, like a report being ready to download or a password about to expire.
- Communicate important or time-sensitive information when users should be made aware of it promptly.
- Display messages without interrupting the current task.

Avoid using an alert for messages that are part of the page content and are already there when the page loads. Use a <gcds-link href="{{ links.notice }}">notice</gcds-link> instead.

<hr class="mt-600"/>

## Related components

Banner for site or product-level messages.

<gcds-link href="{{ links.errorMessage }}">Error messages</gcds-link> or <gcds-link href="{{ links.errorSummary }}">error summary</gcds-link> for errors in form fields.

<gcds-link href="{{ links.notice }}">Notice</gcds-link> for prominent messages that are part of the page content.

Alert dialogue for messages that interrupt a user task.

<hr class="mt-600"/>

## Alert roles

The alert role changes the styling of the alert to visually signal its purpose. Pick the role relevant to your use case.

### Information

Use the information role to:

- Inform people about the current state of their task, access, or eligibility.
- Provide status updates about a task or background process.
- Communicate contextual information that helps people understand why an action is unavailable or no longer needed.
- Inform people about non-critical information that’s relevant to their current task or situation.

<gcds-alert heading="You already have an application in progress" alert-role="info">
  <p>You can only have one application in progress at a time. Finish or withdraw your current application before satrting another one.</p>
</gcds-alert>

### Success

Use the success role to:

- Confirm that a person’s action was completed successfully.
- Notify people when a requested process or task has finished successfully.

<gcds-alert heading="Your changes have been saved" alert-role="success">
  <p>You can always review your preferences in <a href="#">Settings</a>.</p>
</gcds-alert>

### Warning

Use the warning role to:

- Inform people about conditions that may affect their current task.
- Explain the potential consequences of continuing with an action.

<gcds-alert heading="Your password expires in 7 days" alert-role="warning">
  <p>Change your password to keep access to your account.</p>
</gcds-alert>

### Danger

Use the danger role to:

- Communicate when an action could not be completed successfully.
- Explain a problem that’s preventing a person from completing their current task.

<gcds-alert heading="We could not verify your identity" alert-role="danger">
  <p>Check your information and try again.</p>
</gcds-alert>
