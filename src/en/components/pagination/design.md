---
title: Pagination
layout: "layouts/component-documentation.njk"
translationKey: "paginationDesign"
tags: ['paginationEN', 'design']
date: "git Last Modified"
---

## Pagination anatomy

### Simple pagination anatomy

#### Previous link

<ol class="anatomy-list">
  <li>The <strong>previous arrow</strong> is a visual aid to indicate navigating backward, to previous pages in the page flow.</li>
  <li>The <strong>previous text</strong> is the text that accompanies the previous arrow and indicates that the user would be navigating to the previous page in the flow.</li>
  <li>The <strong>previous label</strong> indicates the label of the previous page to the user.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-pagination-simple-previous-anatomy.svg" alt="The pagination component with numbers pointing to individual parts of the simple pagination's previous link anatomy." />

#### Next link

<ol class="anatomy-list" style="--start-value: 4">
  <li>The <strong>next text</strong> is the text that accompanies the next arrow and indicates that the user would be navigating to the next page in the flow.</li>
  <li>The <strong>next arrow</strong> is a visual aid indicating that you would be navigating forwards in the page flow.</li>
  <li>The <strong>next label</strong> indicates the label of the previous page to the user.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-pagination-simple-next-anatomy.svg" alt="The pagination component with numbers pointing to individual parts of the simple pagination's next link anatomy." />

### List styled pagination anatomy

#### Large screens

<ol class="anatomy-list">
  <li>The <strong>previous link</strong> navigates to the previous page in the flow when selected.</li>
  <li>A <strong>page link</strong> navigates to it’s corresponding page in the flow.</li>
  <li>The <strong>current page</strong> indicates the page the user is currently on.</li>
  <li>An <strong>ellipsis</strong> replaces any pages that are being skipped.</li>
  <li>The <strong>next link</strong> navigates to the next page in the flow when selected.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-pagination-list-large-anatomy.svg" alt="The pagination component with numbers pointing to individual parts of the large screen list pagination anatomy." />

#### Small screens

<ol class="anatomy-list">
  <li>A <strong>page link</strong> navigates to it’s corresponding page in the flow.</li>
  <li>The <strong>current page</strong> indicates the page the user is currently on.</li>
  <li>An <strong>ellipsis</strong> replaces any pages that are being skipped.</li>
  <li>The <strong>previous link</strong> navigates to the previous page in the flow when selected.</li>
  <li>The <strong>next link</strong> navigates to the next page in the flow when selected.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-pagination-list-small-anatomy.svg" alt="The pagination component with numbers pointing to individual parts of the small screen list pagination anatomy." />

#### Previous link

<ol class="anatomy-list">
  <li>The <strong>previous arrow</strong> is a visual aid to indicate navigating backward, to previous pages in the page flow.</li>
  <li>The <strong>previous text</strong> is the text that accompanies the previous arrow and indicates that the user would be navigating to the previous page in the flow.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-pagination-list-previous-anatomy.svg" alt="The pagination component with numbers pointing to individual parts of the list pagination's previous link anatomy." />

#### Next link

<ol class="anatomy-list" style="--start-value: 3">
  <li>The <strong>next text</strong> is the text that accompanies the next arrow and indicates that the user would be navigating to the next page in the flow.</li>
  <li>The <strong>next arrow</strong> is a visual aid indicating that you would be navigating forwards in the page flow.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-pagination-list-next-anatomy.svg" alt="The pagination component with numbers pointing to individual parts of the list pagination's next link anatomy." />

## Design and accessibility for pagination

### Make pagination content findable

- Put the most important information on the first few pages so there is a lower chance of it being missed.
- Place the pagination component immediately under the page content you’re displaying, aligned to the left.
- Ensure the navigational links appear as a single row and don't wrap onto the next line.

### Use simple pagination for a small number of pages

Simple pagination is most suitable for 2-5 pages.

- Use subheadings in simple pagination to let the user know where they are in the flow.
- Include the page number and total number of pages, or the page title in the subheading to give more more context.

### Use list styled pagination for a large number of pages

Use list styled pagination for large numbers of pages when using the ‘Previous’ and ‘Next’ links would make navigation cumbersome.
