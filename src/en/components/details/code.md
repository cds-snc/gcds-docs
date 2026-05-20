---
title: Details
layout: 'layouts/component-documentation.njk'
translationKey: 'detailsCode'
tags: ['detailsEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for details](#coding-and-accessibility-for-details)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for details

### Present the details component to support understanding

The details component can add to a person's cognitive load when it:

1. Interrupts the flow of reading or scrolling.
2. The content they need is difficult to find and search.
3. They are unfamiliar with the expand and collapse function.

To help a reader's experience accessing details content:

- Use the `open` attribute to define if the details content is open by default or not.
- Make details titles clearly state what the content's about. Avoid non-descriptive titles such as "Read more". Instead, opt for a specific and descriptive summary, like "Maximum coverage amount for your physio benefit".
- Make titles distinct so people know the difference. Identical or similar titles can be confused.
- Avoid placing one details component inside another, where no one would know to look for that content.
- Make details content searchable.

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

#### `details-title`

The `details-title` attribute defines the label that summarizes the details content.

{% examplesPreview "170" %}
<gcds-details details-title="Learn more about this topic">
  <gcds-text margin-bottom="0">Additional information.</gcds-text>
</gcds-details>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `open`

The `open` attribute controls whether the details component is open by default or not.

{% examplesPreview "170" %}
<gcds-details details-title="Learn more about this topic" open>
  <gcds-text margin-bottom="0">Additional information.</gcds-text>
</gcds-details>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for adding content inside the details component.

{% examplesPreview "170" %}
<gcds-details details-title="Learn more about this topic">
  <gcds-text margin-bottom="0">Additional information.</gcds-text>
</gcds-details>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-details properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-details--events-properties&lang=en"
  width="1200"
  height="1050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
