---
title: Theme and topic menu
layout: 'layouts/component-documentation.njk'
translationKey: 'themeand-topic-menuCode'
tags: ['themeand-topic-menuEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for theme and topic menu](#coding-and-accessibility-for-theme-and-topic-menu)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for theme and topic menu

### Use the theme and topic menu with other components

Add the theme and topic menu directly to the <gcds-link href="{{ links.header }}">header</gcds-link> component by passing a child element with the `slot="menu"` attribute in the header. This will place the theme and topic menu in the header after the language toggle, signature, and search slots.

**Note**: If applying the theme and topic menu to the front page of Canada.ca, use the `home` attribute to render with the correct styling.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `home`

The `home` attribute sets the homepage styling.

{% examplesPreview %}
<gcds-topic-menu home>
</gcds-topic-menu>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-topic-menu properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-theme-and-topic-menu--events-properties&lang=en&externalLinks=true"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
