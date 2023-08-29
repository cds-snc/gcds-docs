---
title: Pagination
layout: "layouts/component-documentation.njk"
translationKey: "paginationDesign"
tags: ['paginationEN', 'design']
date: "git Last Modified"
---

## Simple pagination anatomy

### Previous link

<ol class="anatomy-list">
  <li>The <strong>previous arrow</strong> is a visual aid to indicate navigating backward, to previous pages in the page flow.</li>
  <li>The <strong>previous text</strong> is text that accompanies the left arrow and leads to the page that comes before in the flow.</li>
  <li>The <strong>previous label</strong> title states the title of the page before the current page to help a person decide if they’d like to go to that page.</li>
</ol>

<img class="b-sm b-default p-400 mb-500" src="/images/en/components/anatomy/gcds-pagination-simple-previous-anatomy.svg" alt="An image of the anatomy." />

### Next link

<ol class="anatomy-list" style="--start-value: 4">
  <li>The <strong>left arrow</strong> is a visual aid to indicate navigating backward, to previous pages in the page flow.</li>
  <li>The <strong>previous label</strong> is text that accompanies the left arrow and leads to the page that comes before in the flow.</li>
  <li>The <strong>previous page</strong> title states the title of the page before the current page to help a person decide if they’d like to go to that page.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-pagination-simple-previous-anatomy.svg" alt="An image of the anatomy." />

## List styled pagination anatomy

### Large screens

<ol class="anatomy-list">
  <li>The <strong>previous arrow</strong> is a visual aid to indicate navigating backward, to previous pages in the page flow.</li>
  <li>The <strong>previous text</strong> is text that accompanies the left arrow and leads to the page that comes before in the flow.</li>
  <li>The <strong>previous label</strong> title states the title of the page before the current page to help a person decide if they’d like to go to that page.</li>
</ol>

<img class="b-sm b-default p-400 mb-500" src="/images/en/components/anatomy/gcds-pagination-simple-previous-anatomy.svg" alt="An image of the anatomy." />

### Small screens

<ol class="anatomy-list">
  <li>The <strong>previous arrow</strong> is a visual aid to indicate navigating backward, to previous pages in the page flow.</li>
  <li>The <strong>previous text</strong> is text that accompanies the left arrow and leads to the page that comes before in the flow.</li>
  <li>The <strong>previous label</strong> title states the title of the page before the current page to help a person decide if they’d like to go to that page.</li>
</ol>

<img class="b-sm b-default p-400 mb-500" src="/images/en/components/anatomy/gcds-pagination-simple-previous-anatomy.svg" alt="An image of the anatomy." />

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
