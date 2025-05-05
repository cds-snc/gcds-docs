---
title: Text
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: textEN
  title: Text
  locale: en
  parent: componentsEN
  otherNames: text block, copy, caption, body text, paragraph.
  description: Text is a styled and formatted paragraph that displays written content in an accessible way.
  thumbnail: /images/common/components/preview-text.svg
  alt: An abstract representation of 3 lines of text using 3 grey rectangular rows stacked one on top of another.
  state: published
translationKey: 'text'
tags: ['textEN', 'usage']
permalink: /en/components/text/
# date: "git Last Modified"
---

## Problems text solves

Use the text component to:

- Convey information in small or large blocks of written content to provide essential details about a program or service without adding a high degree of structure or emphasis.
- Insert written content after a heading with a sentence, paragraph, or caption.
- Apply consistent font sizes, colour contrast, and white space that we've optimized for accessibility.
- Reinforce brand identity with consistent messaging styles and formats across web pages. For example, using GC Design System typography as a standard for consistent font style.
- Divide content into understandable sections with vertical and horizontal margins. Breaking up content supports readability, simplifies site navigation, and reduces task abandonment.

<hr/>

## Related components

<a href="{{ links.heading }}">Headings</a> for structuring content by creating levels of hierarchy that organize page content visually and mentally, using GC Design System styles.

<a href="{{ links.screenreaderOnly }}">Screenreader-only</a> for information that is accessible for assistive technologies like screen readers, but invisible for sighted users.

<hr class="mt-600"/>

## Choose a text role

A role is a text sub-type that has a specific use on a page.

### Primary

Use the `primary` `text-role` for:

- Most text content.
- Content that is the main focus of the section.

### Secondary

Use the `secondary` `text-role` for:

- Supporting content that is important but secondary to the main task.
- When the main idea of the section can still be understood if the reader skips the secondary text.

### Light

Use the `light` `text-role` for:

Content that needs to appear on a dark background when the contrast ratio between the light text and dark background meets WCAG (Web Content Accessibility Guidelines) standards.
