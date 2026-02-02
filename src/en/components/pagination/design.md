---
title: Pagination
layout: 'layouts/component-documentation.njk'
translationKey: 'paginationDesign'
tags: ['paginationEN', 'design']
date: 'git Last Modified'
---

## Pagination anatomy

### Simple pagination anatomy

<ol class="anatomy-list">
  <li>The <strong>previous link</strong> navigates to the previous page in the flow when selected.</li>
  <li>The <strong>previous chevron</strong> is a visual aid to indicate navigating backward, to previous pages in the page flow.</li>
  <li>The <strong>previous text</strong> is the text that accompanies the previous chevron and indicates that the user would be navigating to the previous page in the flow.</li>
  <li>The <strong>previous label</strong> provides context about the page the user will navigate to next.</li>
  <li>The <strong>next link</strong> navigates to the next page in the flow when selected.</li>
  <li>The <strong>next chevron</strong> is a visual aid to signal forward navigation in the flow.</li>
  <li>The <strong>next text</strong> is the text that accompanies the next chevron and indicates that the user would be navigating to the next page in the flow.</li>
  <li>The <strong>next label</strong> provides context about the page the user will navigate back to.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-pagination-simple-previous-anatomy.svg" alt="The pagination component with numbers pointing to individual parts of the simple pagination's anatomy." />

### List-styled pagination anatomy

#### Large screens

<ol class="anatomy-list">
  <li>The <strong>previous link</strong> navigates to the previous page in the flow when selected.</li>
  <li>The <strong>previous chevron</strong> is a visual aid to indicate navigating backward, to previous pages in the page flow.</li>
  <li>The <strong>previous text</strong> is the text that accompanies the previous chevron and indicates that the user would be navigating to the previous page in the flow.</li>
  <li>A <strong>page link</strong> navigates to it’s corresponding page in the flow.</li>
  <li>The <strong>current page</strong> indicates the page the user is currently on.</li>
  <li>An <strong>ellipsis</strong> replaces any pages that are being skipped.</li>
  <li>The <strong>next link</strong> navigates to the next page in the flow when selected.</li>
  <li>The <strong>next text</strong> is the text that accompanies the next chevron and indicates that the user would be navigating to the next page in the flow.</li>
  <li>The <strong>next chevron</strong> is a visual aid indicating that you would be navigating forwards in the page flow.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-pagination-list-large-anatomy.svg" alt="The pagination component with numbers pointing to individual parts of the large screen list pagination anatomy." />

#### Small screens

<ol class="anatomy-list">
  <li>A <strong>page link</strong> navigates to it’s corresponding page in the flow.</li>
  <li>The <strong>current page</strong> indicates the page the user is currently on.</li>
  <li>An <strong>ellipsis</strong> replaces any pages that are being skipped.</li>
  <li>The <strong>previous link</strong> navigates to the previous page in the flow when selected.</li>
  <li>The <strong>previous chevron</strong> is a visual aid to indicate navigating backward, to previous  pages in the page flow.</li>
  <li>The <strong>previous text</strong> is the text that accompanies the previous chevron and indicates  that the user would be navigating to the previous page in the flow.</li>
  <li>The <strong>next text</strong> is the text that accompanies the next chevron and indicates that the user would be navigating to the next page in the flow.</li>
  <li>The <strong>next chevron</strong> is a visual aid indicating that you would be navigating forwards  in the page flow.</li>
  <li>The <strong>next link</strong> navigates to the next page in the flow when selected.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-pagination-list-small-anatomy.svg" alt="The pagination component with numbers pointing to individual parts of the small screen list pagination anatomy." />

## Design and accessibility for pagination

### Make pagination content findable

- Put the most important information on the first few pages so there is a lower chance of it being missed.
- Place the pagination component immediately under the page content, aligned to the left.
- Display navigation links in a way that supports visual scanning:
  - In a single row without wrapping in list-styled pagination.
  - Vertically stacked to support users of screen magnification in simple pagination.
 
### Help people understand where they are
- In simple pagination, use a label under the “Previous” and “Next” text to let the user know where they are in the flow. Include the page title or the page number and total number of pages to provide context on the adjacent pages.
- Avoid showing the “Previous” link on the first page or the “Next” link on the last page.

### Show the relevant number of pages
In list-styled pagination, show enough page links to fill the horizontal space.

Always show:
- The current page
- The first and last pages
- The pages immediately before and after the current page

On larger screens, show additional pages before and after the current page when space allows.
