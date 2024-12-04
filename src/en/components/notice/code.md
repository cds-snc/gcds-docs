---
title: Notice
layout: 'layouts/component-documentation.njk'
translationKey: 'noticeCode'
tags: ['noticeEN', 'code']
# date: "git Last Modified"
---

## Build a Notice

Use the notice component to deliver important context-specific messages to people. The notice communicates varying levels of urgency and meaning using content and visual cues.

## Accessibility and Code Guidance

### Define the type of notice

Use the `type` attribute to categorize the notice as ‘Info’, ‘Warning’, ‘Danger’ or ‘Success’. This choice determines the visual styling of the notice and communicates the urgency or importance of the message to people.

### Specify the notice title and heading level

- Use the `notice-title` attribute to create a clear and informative heading for the notice. Ensure the title conveys the message’s purpose.
- Set the  `notice-title-tag` to define the correct heading level for the card title. Follow a correct and orderly heading hierarchy to make it equal for people who use assistive technologies.

{% include "partials/getcode.njk" %}

<iframe
  title="iframeTitle"
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-notice--events-properties&lang=en"
  width="1200"
  height="1100"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
