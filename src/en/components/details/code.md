---
title: Details
layout: "layouts/component-documentation.njk"
translationKey: "detailsCode"
tags: ['detailsEN', 'code']
date: "git Last Modified"
---

## Build a details component

Use the details component to give a person a summary of content you've hidden that they can choose to reveal.

Use details to let a person toggle the display of additional content related to the details title.

## Accessibility and coding for details

### Present the details component to support understanding

The details component can add to a person's cognitive load if they are unfamiliar with the expand and collapse function.

To help a reader's experience accessing details content:

- Use the open attribute to define if the details content is open by default or not. Limit one open by default for each page.
- Make summary titles distinct so people know the difference. Identical or similar titles can be confused.
- Avoid placing one details component inside another, where no one would know to look for that content.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-details properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-details--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="865"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
