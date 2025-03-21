---
title: Link
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: linkEN
  title: Link
  locale: en
  parent: componentsEN
  otherNames: anchor, hyperlink, call to action.
  description: A link is a navigational element that brings a person to a new page, website, file, or section on the current page.
  thumbnail: /images/common/components/preview-link.svg
  alt: An abstract representation using a thick blue rectangle above a thin blue line.
  state: published
translationKey: 'link'
tags: ['linkEN', 'usage']
permalink: /en/components/link/
date: 'git Last Modified'
---

A link is a navigational element that takes a person to a website or opens a source, like a pdf.

## Problems component solves

Use links to:

- Allow a person to move fluidly between different pages or sections of a website or application.
- Direct people to external websites, clearly indicating when the link leads outside the current site.
- Let a person skip to a section heading using anchor links in a table of contents or page summary. They can then directly access specific sections or content without scrolling.
- Connect to email addresses or phone numbers, so a person can initiate communication directly by selecting the link.
- Start downloads for files, providing users with direct access to documents, media, or other downloadable content.
- Skip past navigational elements to get to main content.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0">Related components</h2>

<a href="{{ links.button }}" class="link-light">Buttons</a> to emphasize an action.

<a href="{{ links.details }}" class="link-light">Details</a> to provide a way to hide or show a section of content.

</article>

## Choose a link variant

A variant sets the main style of the link.

### Default variant

Use the `default` `variant` for:

- Most links.
- Links that are placed on a light background.

### Light variant

Use the `light` `variant` for:

Links that need to appear on a dark background. Make sure the contrast ratio between the light link and dark background meets (WCAG) Web Content Accessibility Guidelines standards.
