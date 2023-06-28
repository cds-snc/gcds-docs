---
title: Breadcrumbs
layout: "layouts/component-documentation.njk"
translationKey: "breadcrumbsCode"
tags: ['breadcrumbsEN', 'code']
date: "git Last Modified"
---

## Build a breadcrumbs component

Use breadcrumbs to indicate the location of the current page in relation to its parents in the site structure.

## Coding and accessibility for breadcrumbs

### Start with the Canada.ca link

From the Canada.ca link, navigate people to the Canada.ca home page in the current language.

### Place breadcrumbs before the `<main>` element

Place breadcrumbs at the top of a page, before the `<main>` element. This way the 'Skip to main content' link can work to let the user skip all navigation links, including breadcrumbs.

### Use breadcrumb items for breadcrumbs links

Add a new breadcrumbs link to the breadcrumbs component by using the `<gcds-breadcrumbs-item>` component. The link can be added through the `<href>` property.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-breadcrumbs properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-breadcrumbs--default"
  width="1200"
  height="950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
