---
title: Button
layout: 'layouts/component-documentation.njk'
translationKey: 'buttonCode'
tags: ['buttonEN', 'code']
date: 'git Last Modified'
---

## Build a button

Use a button to initiate important actions.

## Coding and accessibility for buttons

### Check for visual accessibility

Check the button border's visibility against the surface where you're placing it.

### Select the right size

Use the small button attribute for actions when space is limited.

Note: The height of small buttons is WCAG AA compliant, but not AAA compliant.

### Use disabled button sparingly

- Use the disabled button sparingly when something needs to be done before an action can be initiated.
- Where possible, use other interventions like an error message to block incomplete form submissions.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-button properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-button--events-properties&lang=en"
  width="1200"
  height="1800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
