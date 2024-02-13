---
title: Link
layout: 'layouts/component-documentation.njk'
translationKey: 'linkDesign'
tags: ['linkEN', 'design']
# date: "git Last Modified"
---

## Link anatomy

<ol class="anatomy-list">
  <li>The <strong>link text</strong> navigates to a new page, website, or section on the current page. It specifies the link's destination or, for downloads, identifies the file type, and size. Note: Opening links in a new tab or window can be disorienting for people and can cause accessibility issues.</li>
  <li>The <strong>link icon</strong> is attached to certain link types, like download, phone, and email. Otherwise, it’s optional to add an icon.</li>
  <ul>
    <li>The download icon lets a person know that selecting the link will initiate a download.</li>
    <li>The phone icon identifies the phone number and selecting it initiates a phone call.</li>
    <li>The email icon identifies the email address and initiates a message from the default email application.</li>
  </ul>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-link-anatomy.svg" alt="A label with an underline to signal that it's an interactive link that can be followed. An icon wth a downward pointing arrow sits to the right of the link." />

## Accessibility and design for links

### Write specific and descriptive link text

- Make link text clear, descriptive, and specific so a person can predict where the link will take them and what they'll find there.
- Avoid generic or vague link text, like "click here", "read more", or "home".
- Within link text, place the most important information first, as this is helpful to screen-reader users.
- Provide enough information in the link text on the link's purpose, rather than relying on the surrounding content. Some assistive technologies present links separately.
- Keep link text short and distinctive so a person is able to scan the links on a page. Generally limit text to 60 characters and avoid going over 80 characters. When writing in English, keep in mind French content will be around 30% longer.

Tip: Use navigation elements like [breadcrumbs]({{ links.breadcrumbs }}) or [top navigation]({{ links.topNav }}) so a person knows how to return to their original location.

### Limit the number and density of links in your text

- Limit the number of informational links in your text. Too much information increases cognitive load and can be overwhelming to some readers.
- Consider separating links in a list or other format when you need to share several in the same section. If the links are informational, they may not be essential to the task.
- Avoid link density in unstructured text. Multiple links in a paragraph interrupt the flow of reading and can be distracting and repetitive with some assistive technologies.

### Provide information for download files

- Provide information in the link text about the file type and size of files for download.
- Avoid placing the download link within paragraph text.

### Add a skip-to-content link

- A skip-to-content link lets a person skip a cluster of navigation links and jump to the main content.
- To avoid covering up content, configure the link to push down content so it's not floating. For desktop, place skip-to-content button at top left of the page so it doesn't interrupt the flow.

### Avoid external links when possible

- Avoid adding external links:
  - In the middle of a person's progress, like when a person's filling out a form.
  - If changing pages would make them lose unsaved progress.
  - When starting a process would stop if the person follows a link, like when they're watching a video or completing a main task.
  - **When they're invasive and disruptive to the flow of the page.**
  - When it could be a surprise to a person to find themselves somewhere else unexpectedly.
- Make it obvious where a link will lead, so a person can decide if they should leave the current page.
- Communicate clearly when links have special conditions. For example, when they're only available inside a closed network because of a firewall.

### When to use buttons instead of links

- Choose links for most navigation, including within an application, for external sites, jumping to on-page elements, and for email addresses or phone numbers.
- Choose buttons for actions that modify data, change states, or initiate actions, like submitting a form, playing a video, or saving.
