---
title: Pagination
layout: "layouts/component-documentation.njk"
eleventyNavigation:
  key: paginationEN
  title: Pagination
  locale: en
  parent: componentsEN
  otherNames: page index, page navigation
  description: A page selector for a range of pages.
  thumbnail: /images/common/components/preview-pagination.svg
  alt: Pagination component shows pagination with grey boxes and one dark navy blue box to indicate the page selected sandwhiched by a left arrow and right arrow to allow for previous and next navigation. The boxes are separated by an ellipsis.
  state: published
translationKey: "pagination"
tags: ['paginationEN', 'usage']
permalink: /en/components/pagination/
date: "git Last Modified"
---

Review common uses for pagination to see if they match the problem you’re solving for.

## Pagination use cases

Use pagination for very lengthy content on a single page that might be difficult to navigate, to reduce cognitive load, and to:

- Display search results when there’s a long list of returns, reducing the time it takes to load and amount of scrolling.
- Allow users to move through indexed content using next, previous, and page links.
- Split into sections any long documents, like reports, that have chapters or other natural divisions.
- Highlight the reader’s position in a sequence of content.

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">
  <h2 class="mt-0 mb-400">Related components</h2>

  <a href="{{ links.stepper }}" class="link-light">Stepper</a>  to track progress in a multi-step process.

  Links in the <a href="{{ links.button }}" class="link-light">button</a> component to navigate between non-sequential pages or to external sites.
</article>
