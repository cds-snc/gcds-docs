---
title: Fieldset
layout: 'layouts/component-documentation.njk'
translationKey: 'fieldsetCode'
tags: ['fieldsetEN', 'code']
date: 'git Last Modified'
---

## Build a fieldset

Use a fieldset to group together related form elements or components.

## Coding and accessibility for fieldsets

### Heading hierarchy

Use the `legend-size` attribute to visually place the legend among the headings on the page. Set the attribute value to `h2` | `h3` | `h4` | `h5` | `h6` to render the fieldset legend to the appropriate size.

### Keep hint text static and perceivable

Maintain the default `hint` attribute to provide additional context so a person can provide a complete value and avoid an error state. This places hint text under the fieldset `legend` and above the grouping.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-fieldset properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-fieldset--events-properties&lang=en"
  width="1200"
  height="2300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
