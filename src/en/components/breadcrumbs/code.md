---
title: Breadcrumbs
layout: 'layouts/component-documentation.njk'
translationKey: 'breadcrumbsCode'
tags: ['breadcrumbsEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for breadcrumbs](#coding-and-accessibility-for-breadcrumbs)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for breadcrumbs

### Start with the Canada.ca link and the homepage link

- Maintain the Canada.ca link as the default first breadcrumbs link for most websites and pages.
- Opt to replace the Canada.ca link with the homepage link on transactional pages and stand alone websites or products. To remove the Canada.ca link at the head of the breadcrumbs, set the `hide-canada-link` attribute to `true`.

Tip: For a process that does not have a traditional landing page, link to the starting page of the process.

### Place breadcrumbs before the `<main>` element

Place breadcrumbs at the top of a page, before the `<main>` element. This way a skip-to-content link can work to let a person skip all navigation links, including breadcrumbs.

### Use breadcrumb items for breadcrumbs links

Add a new breadcrumbs link to the breadcrumbs component by using the `<gcds-breadcrumbs-item>` component. Add it through the `href` property.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### Breadcrumbs item `href`

Use `href` to define the destination URL for a `gcds-breadcrumbs-item`. This attribute is required for the breadcrumb item to function as a link.

{% examplesPreview %}
<gcds-breadcrumbs>
  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `hide-canada-link`

Use `hide-canada-link` to show or hide the default canada.ca link in the breadcrumbs. By default, it's set to `false`, which means the canada.ca link appears as the first breadcrumb item.

{% examplesPreview %}
<gcds-breadcrumbs>
  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}

When set to `true`, the default canada.ca link is hidden, and only the breadcrumb items provided are displayed.

{% examplesPreview %}
<gcds-breadcrumbs hide-canada-link>
  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

Use the `default` slot to add `gcds-breadcrumbs-item` subcomponents. Use the `default` slot of the breadcrumbs item to add the item's text.

{% examplesPreview %}
<gcds-breadcrumbs hide-canada-link>
  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-breadcrumbs properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&id=components-breadcrumbs--events-properties&lang=en&externalLinks=true"
  width="1200"
  height="1150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
