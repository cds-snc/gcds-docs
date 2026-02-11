---
title: Notice
layout: 'layouts/component-documentation.njk'
translationKey: 'noticeCode'
tags: ['noticeEN', 'code']
date: "git Last Modified"
---

## Build a notice

Use the notice component to deliver important context-specific messages to people. The notice communicates varying levels of urgency and meaning using content and visual cues.

## Accessibility and code guidance

### Define the notice role

Use the `notice-role` attribute to categorize the notice as `info`, `warning`, `danger` or `success`. This choice determines the visual styling of the notice and communicates the urgency or importance of the message to people.

### Specify the notice title and heading level

- Use the `notice-title` attribute to create a clear and informative heading for the notice. Ensure the title conveys the message’s purpose.
- Set the `notice-title-tag` to define the [correct heading level](/en/components/heading/design/#order-heading-levels-hierarchically) for the notice title. While the font size remains the same regardless of the tag, setting the correct heading level maintains proper hierarchy and accessibility for assistive technologies.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-notice properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-notice--events-properties&lang=en"
  width="1200"
  height="1100"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
