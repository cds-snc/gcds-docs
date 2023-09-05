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

### Start with the Canada.ca link and the homepage link

- Maintain the Canada.ca link as the default first breadcrumbs link for most websites and pages.
- Opt to replace the Canada.ca link with the homepage link on transactional pages and stand alone websites or products. To remove the Canada.ca link at the head of the breadcrumbs, set the `hide-canada-link` attribute to `true`.

Tip: For a process that does not have a traditional landing page, link to the starting page of the process.

### Place breadcrumbs before the `<main>` element

Place breadcrumbs at the top of a page, before the `<main>` element. This way the <a href="{{ links.button }}">skip-to-content button</a> can work to let a person skip all navigation links, including breadcrumbs.

### Use breadcrumb items for breadcrumbs links

Add a new breadcrumbs link to the breadcrumbs component by using the `<gcds-breadcrumbs-item>` component. The link can be added through the `href` property.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-breadcrumbs properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&id=components-breadcrumbs--events-properties"
  width="1200"
  height="1000"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
