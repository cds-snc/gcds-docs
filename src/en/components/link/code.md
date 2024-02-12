---
title: Link
layout: 'layouts/component-documentation.njk'
translationKey: 'linkCode'
tags: ['linkEN', 'code']
# date: "git Last Modified"
---

## Build a Link

A link is a navigational element that takes a person to a website or opens a source, like a pdf.

## Accessibility and coding for links

### Provide information for download files

- Provide information in the link text about the file type and size of files for download: `<gcds-link href="application.pdf" download>Application 2023 (PDF, 1.5 MB)</gcds-link>`.
- Avoid placing the download link within paragraph text.

Note: Only files with URLs of the same origin as the website will be downloaded to the user’s device.

### Add a skip-to-content link

- A skip-to-content link lets a person skip a cluster of navigation links and jump to the main content.
- To avoid covering up content, configure the link to push down content so it’s not floating, For desktop, place skip-to-content link at top left of the page so it doesn’t interrupt the flow.

### Avoid external links when possible

- Add an external link by setting the `external` attribute to `true`.
- Avoid adding external links:
  - In the middle of a person’s progress, like when a person’s filling out a form.
  - If changing pages would make them lose unsaved progress.
  - When starting a process would stop if the person follows a link, like when they’re watching a video or completing a main task.
  - **When they’re invasive and disruptive to the flow of the page.**
  - When it could be a surprise for a person to find themselves somewhere else unexpectedly.
- Make it obvious where a link will lead, so a person can decide if they should leave the current page.
- Communicate clearly when links have special conditions. For example, when they’re only available inside a closed network because of a firewall.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-link properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-link--events-properties"
  width="1200"
  height="1300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
