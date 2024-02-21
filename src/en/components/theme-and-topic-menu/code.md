---
title: Theme and topic menu
layout: 'layouts/component-documentation.njk'
translationKey: 'themeand-topic-menuCode'
tags: ['themeand-topic-menuEN', 'code']
date: 'git Last Modified'
---

## Build a theme and topic menu

Use the theme and topic menu to provide global navigation to Government of Canada sites.

## Coding and accessibility for theme and topic menu

### Use the theme and topic menu with other components

Add the theme and topic menu directly to the <gcds-link href="{{ links.header }}">header</gcds-link> component by passing a child element with the `slot="menu"` attribute in the header. This will place the theme and topic menu in the header after the language toggle, signature, and search slots.

**Note**: If applying the theme and topic menu to the front page of Canada.ca, use the `home` attribute to render with the correct styling.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-topic-menu properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-theme-and-topic-menu--events-properties&lang=en"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
