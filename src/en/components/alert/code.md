---
title: Alert
layout: 'layouts/component-documentation.njk'
translationKey: 'alertCode'
tags: ['alertEN', 'code']
date: 'git Last Modified'
nocrawl: true
---

## On this page

- [Coding and accessibility for alerts](#coding-and-accessibility-for-alerts)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for alerts

### Define the alert role

Use the `alert-role` attribute to categorize the alert as info, warning, danger or success. This choice determines the visual styling of the alert and communicates the urgency or importance of the message to people.

### Specify the alert title

Use the `heading` attribute to create a clear and informative title for the alert. Make sure the title conveys the message’s purpose.

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

#### `heading`

Use `heading` to define the title of the alert.

{% examplesPreview "250" %}
<gcds-alert heading="You already have an application in progress">
</gcds-alert>
{% endexamplesPreview %}


<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}


#### `alert-role`

Use `alert-role` to set the style of the alert. Choose from:

- `info`
- `success`
- `warning`
- `danger`
  
<!-- Force line break -->

{% examplesPreview "250" %}
<gcds-alert heading="Your changes have been saved" alert-role="success">
</gcds-alert>
{% endexamplesPreview %}

#### `container`

Use `container` to define the container width for the alert content.

{% examplesPreview "250" %}
<gcds-alert heading="You already have an application in progress" container="sm">
</gcds-alert>
{% endexamplesPreview %}


#### `hide-close-btn`

Set `hide-close-btn` to `true` to hide the dismiss button. By default, it’s set to `false`, which displays the dismiss button.

{% examplesPreview "250" %}
<gcds-alert heading="You already have an application in progress" hide-close-btn>
</gcds-alert>
{% endexamplesPreview %}


#### `hide-role-icon`

Set `hide-role-icon` to `true` to hide the alert’s role icon. By default, it’s set to `false`, which displays the icon.

{% examplesPreview "250" %}
<gcds-alert heading="You already have an application in progress" hide-role-icon>
</gcds-alert>
{% endexamplesPreview %}

#### `is-fixed`

Set `is-fixed` to `true` to fix the alert’s position at the top. By default, it’s set to `false`.

{% examplesPreview "250" %}
<gcds-alert heading="You already have an application in progress" is-fixed>
</gcds-alert>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

### `default`

Use the `default` slot to add any type of content to the alert’s message. You can add things like text, links, or buttons.

{% examplesPreview "300" %}
<gcds-alert heading="You already have an application in progress">
  <p>Message.</p>
</gcds-alert>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-alert properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-alert--events-properties&lang=en"
  width="1200"
  height="1500"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
