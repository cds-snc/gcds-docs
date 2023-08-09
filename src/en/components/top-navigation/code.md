---
title: Top navigation
layout: "layouts/component-documentation.njk"
translationKey: "topnavigationCode"
tags: ['topnavigationEN', 'code']
date: "git Last Modified"
---

## Build a top navigation

Use a top navigation to help a person find their way around your web page or site.

## Coding and accessibility for top navigation

### Add the top navigation to each page

- Implement the top navigation in the website layout so that it's present on every page.
- Opt to add a nav group with a second level of navigation by placing the `<gcds-nav-link>` in a `<gcds-nav-group>`.

### Use the top navigation with other components

- If using  <a href="{{ links.breadcrumbs }}">breadcrumbs</a>, align the content hierarchy in both set of links, so both components reflect a similar path through the site.
- If you're using the  <a href="{{ links.header }}">header</a> component, add the top navigation directly to the header by passing a child element with the `slot="menu"` attribute into the header. This will place the top nav in the header after the language toggle, signature, and search slots.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-top-nav properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-top-navigation--events-properties"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
