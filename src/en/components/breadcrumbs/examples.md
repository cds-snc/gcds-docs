---
title: Breadcrumbs
layout: 'layouts/component-documentation.njk'
translationKey: 'breadcrumbsExamples'
tags: ['breadcrumbsEN', 'examples']
date: 'git Last Modified'
---

{% examplesContent "en", "intro" %}
{% endexamplesContent %}

<!-- Required section -->

{% examplesContent "en", "required" %}
{% endexamplesContent %}

#### Breadcrumbs item `href`

The `href` attribute defines the destination URL for a `gcds-breadcrumbs-item` and is required for the breadcrumb item to function as a link.

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

The `hide-canada-link` attribute controls whether the default canada.ca link is displayed in the breadcrumbs. By default, it is set to `false`, which means the canada.ca link appears as the first breadcrumb item:

{% examplesPreview %}
<gcds-breadcrumbs>
  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}

When set to `true`, the default canada.ca link is hidden, and only the breadcrumb items provided are displayed:

{% examplesPreview %}
<gcds-breadcrumbs hide-canada-link>
  <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}
