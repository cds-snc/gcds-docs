---
title: Pagination
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: paginationEN
  title: Pagination
  locale: en
  parent: componentsEN
  otherNames: page index, page navigation
  description: A page selector for a range of pages.
  thumbnail: /images/common/components/preview-pagination.svg
  alt: A row of four squares between two arrows, each pointing outward. The first square is blue and holds the number 1, representing selection of the first page. Between the two middle boxes is an ellipsis to indicate additional pages besides those represented by the squares.
  state: published
translationKey: 'pagination'
tags: ['paginationEN', 'usage']
permalink: /en/components/pagination/
date: 'git Last Modified'
---

Review common uses for pagination to see if they match the problem you’re solving for.

## Pagination use cases

Use pagination for very lengthy content on a single page that might be difficult to navigate, to reduce cognitive load, and to:

- Display search results when there’s a long list of returns, reducing the time it takes to load and amount of scrolling.
- Allow users to move through indexed content using next, previous, and page links.
- Split into sections any long documents, like reports, that have chapters or other natural divisions.
- Highlight the reader’s position in a sequence of content.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0 mb-300">Related components</h2>

<a href="{{ links.stepper }}" class="link-light">Stepper</a> to track progress in a multi-step process.

Links in the <a href="{{ links.button }}" class="link-light">button</a> component to navigate between non-sequential pages or to external sites.

</article>
