---
title: Notice
layout: 'layouts/component-documentation.njk'
translationKey: 'noticeCode'
tags: ['noticeEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for notice](#coding-and-accessibility-for-notice)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for notice

### Define the notice role

Use the `notice-role` attribute to categorize the notice as `info`, `warning`, `danger` or `success`. This choice determines the visual styling of the notice and communicates the urgency or importance of the message to people.

### Specify the notice title and heading level

- Use the `notice-title` attribute to create a clear and informative heading for the notice. Ensure the title conveys the message’s purpose.
- Set the `notice-title-tag` to define the [correct heading level](/en/components/heading/design/#order-heading-levels-hierarchically) for the notice title. While the font size remains the same regardless of the tag, setting the correct heading level maintains proper hierarchy and accessibility for assistive technologies.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Slots](#section-slot)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `notice-role`

The `notice-role` attribute sets the style of notice to be displayed.

{% examplesPreview "150" %}
<gcds-notice notice-role="success" notice-title="Success notice title" notice-title-tag="h2">
  <gcds-text margin-bottom="0">
    This is a success message.
  </gcds-text>
</gcds-notice>
{% endexamplesPreview %}

#### `notice-title`

The `notice-title` attribute defines the title of the notice.

{% examplesPreview "150" %}
<gcds-notice notice-role="success" notice-title="Success notice title" notice-title-tag="h2">
  <gcds-text margin-bottom="0">
    This is a success message.
  </gcds-text>
</gcds-notice>
{% endexamplesPreview %}

#### `notice-title-tag`

The `notice-title-tag` attribute sets the HTML heading element for the title. This attribute does not modify the font size. It is used to assign the heading level in order to maintain heading hierarchy and accessibility for assistive technologies.

{% examplesPreview "150" %}
<gcds-notice notice-role="success" notice-title="Success notice title" notice-title-tag="h2">
  <gcds-text margin-bottom="0">
    This is a success message.
  </gcds-text>
</gcds-notice>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for placing the message of the notice.

{% examplesPreview "150" %}
<gcds-notice notice-role="success" notice-title="Success notice title" notice-title-tag="h2">
  <gcds-text margin-bottom="0">
    This is a success message.
  </gcds-text>
</gcds-notice>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-notice properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-notice--events-properties&lang=en"
  width="1200"
  height="1100"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
