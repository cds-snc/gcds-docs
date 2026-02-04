---
title: Notice
layout: "layouts/component-documentation.njk"
eleventyNavigation:
  key: noticeEN
  title: Notice
  locale: en
  parent: componentsEN
  otherNames: Contextual alert
  description: A short, prominent message that’s part of the page content.
  thumbnail: /images/common/components/preview-notice.svg
  alt: A blue vertical line truncated at the top by a blue circle, representing the guide line and icon, sits to the left of a stack of three thick grey lines. The top dark grey line represents the heading and the other two represent the lines of text.
  state: published
translationKey: "notice"
tags: ['noticeEN', 'usage']
permalink: /en/components/notice/
date: "git Last Modified"
---

## Problems notice solves

Use notice to:

- Communicate updates, warnings, and confirmations about the tasks on a page or about an activity or event that could affect people using the service.
- Make key messages stand out within page content, through sparing use.
- Provide context or additional information on the page content for better understanding.

<hr/>

## Related components

<a href="{{links.errorMessage}}">Error message</a> or <a href="{{links.errorSummary}}">error summary</a> for errors in a form field, on a page, or in a flow.

Banner for a message that applies to part of or the entire site or product.

<hr class="mt-600"/>

## Notice types

Set the notice type based on the message context and corresponding visual appearance.

### Information

Use the information type to:

- Provide supplementary information to enhance the reader’s understanding of the surrounding content.
- To offer tips or additional context that’s helpful in completing the main tasks on the page.
- Communicate non-critical information that’s important for the job or task a person would want to do.

<gcds-notice
  notice-title="Current status of the call for applications: Closed"
  notice-title-tag="h4"
  notice-role="info"
>
  <gcds-text margin-bottom="0">Thank you for your interest in Canada Summer Jobs. Applications are now closed.</gcds-text>
</gcds-notice>

### Success

Use the success notice type to:

- Communicate the successful completion of a task.
- Reinforce positive outcomes or confirmations within the content.

<gcds-notice
  notice-title="Your request for publicly available data from the list of charities has been successful"
  notice-title-tag="h4"
  notice-role="success"
>
  <gcds-text margin-bottom="0">Processing your request may take up to four (4) weeks. We’ll contact you if we need more information.</gcds-text>
</gcds-notice>

### Warning

Use the warning notice type to:

- Caution people about issues or considerations when there’s no immediate need for action.
- Inform people about changes, alterations to services, or other impactful but non-critical updates.
- Draw attention to information about future changes or possible implications to health and safety,  security, and laws.

<gcds-notice
  notice-title="Changes to impaired driving and cannabis-related crime laws"
  notice-title-tag="h4"
  notice-role="warning"
>
  <gcds-text margin-bottom="0">New penalties for impaired driving and cannabis-related crimes may affect your immigration status in Canada. If you commit one of these crimes, you may not be able to come to or stay in Canada.</gcds-text>
</gcds-notice>

### Danger

Use the danger notice type to:

- Highlight content that people must be aware of due to its severity and that could have major negative impacts if ignored.
- Emphasize an issue or news that has serious implications to health and safety, security, and laws. Include a link to the most current information.
- Flag when a person needs to take action right away and provide a means to do so, like a link.

<gcds-notice
  notice-title="If pregnant or considering pregnancy - Notice regarding both partners"
  notice-title-tag="h4"
  notice-role="danger"
>
  <gcds-text margin-bottom="0">Avoid travel to Costa Rica if you are pregnant or planning to conceive a child in the next 3 months.</gcds-text>
</gcds-notice>
