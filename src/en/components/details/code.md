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

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-details properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-details--default"
  width="1200"
  height="865"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
