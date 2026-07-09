---
title: Link
layout: 'layouts/component-documentation.njk'
translationKey: 'linkCode'
tags: ['linkEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for links](#coding-and-accessibility-for-links)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for links

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

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `href`

The `href` attribute specifies the URL of the page the link goes to.

{% examplesPreview "80" %}
<gcds-link href="#">Navigation link</gcds-link>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `display`

The `display` attribute sets the display behaviour of the link. The available options are:

- `inline` (default)
- `block`

<!-- Force line break -->

{% examplesPreview "80" %}
<gcds-link display="block" href="#">Navigation link</gcds-link>
{% endexamplesPreview %}

#### `download`

The `download` attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink.

{% examplesPreview "80" %}
<gcds-link href="download.pdf" download="file.pdf" type="application/pdf">
  Download document (PDF, 1.5 MB)
</gcds-link>
{% endexamplesPreview %}

#### `external`

The `external` attribute controls whether the link is external or not. When set to `true`, an external icon is added after the link.

{% examplesPreview "80" %}
<gcds-link external href="#">Navigation link</gcds-link>
{% endexamplesPreview %}

#### `link-role`

The `link-role` sets the main style of the link. The available options are:

- `default` (default)
- `light`

<!-- Force line break -->

{% examplesPreview "130" %}

<div class="bg-dark p-300">
  <gcds-link link-role="light" href="#">Navigation link</gcds-link>
</div>
{% endexamplesPreview %}

#### `rel`

The `rel` attribute specifies the relationship between the current document and the linked document. It is commonly used for security and privacy purposes, especially when links open in a new tab or window.

{% examplesPreview "80" %}
<gcds-link rel="license" href="#license">Navigation link</gcds-link>
{% endexamplesPreview %}

#### `size`

The `size` attribute sets the link size. The available options are:

- `inherit` (default)
- `regular`
- `small`

<!-- Force line break -->

{% examplesPreview "80" %}
<gcds-link size="small" href="#">Navigation link</gcds-link>
{% endexamplesPreview %}

#### `target`

The `target` attribute specifies where the linked resource is opened. For example, it can open the link in the same browsing context or in a new tab or window.

{% examplesPreview "80" %}
<gcds-link target="_blank" href="#">Navigation link</gcds-link>
{% endexamplesPreview %}

#### `type`

The `type` attribute specifies the media type of the linked document.

{% examplesPreview "80" %}
<gcds-link href="download.pdf" download="file.pdf" type="application/pdf">
  Download document (PDF, 1.5 MB)
</gcds-link>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for placing the link text.

{% examplesPreview "80" %}
<gcds-link href="#">Navigation link</gcds-link>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-link properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-link--events-properties&lang=en"
  width="1200"
  height="1300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
