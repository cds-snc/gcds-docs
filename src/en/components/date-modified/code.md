---
title: Date modified
layout: 'layouts/component-documentation.njk'
translationKey: 'datemodifiedCode'
tags: ['datemodifiedEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for date modified](#coding-and-accessibility-for-date-modified)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for date modified

### Keep the format consistent

- Use the YYYY-MM-DD date format across all web pages.
- If using the `type: version`, consider using a standard version number format across all products.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `type`

The `type` attribute controls how the date-modified information is presented. By default, it is set to `date`, which displays the last modified date of the content.

{% examplesPreview "140" %}
<gcds-date-modified>
  2023-01-26
</gcds-date-modified>
{% endexamplesPreview %}

When set to `version`, the component displays a version number instead.

{% examplesPreview "140" %}
<gcds-date-modified type="version">
  v1.0.0
</gcds-date-modified>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for adding the date modified or version text.

{% examplesPreview "140" %}
<gcds-date-modified>
  2023-01-26
</gcds-date-modified>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-date-modified properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-date-modified--events-properties&lang=en"
  width="1200"
  height="1100"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
