---
title: Card
layout: 'layouts/component-documentation.njk'
translationKey: 'cardCode'
tags: ['cardEN', 'code']
date: 'git Last Modified'
---

## Build a card

Use cards to help a person discover and scan summaries or progressive, bite-sized bits of related information.

### Write a scannable card title

Use the `card-title` attribute to add a short and descriptive title to the card.

### Select the correct heading level

Set the `card-title-tag` to define the [correct heading level](/en/components/heading/design/#order-heading-levels-hierarchically) for the card title. While the font size remains the same regardless of the tag, setting the correct heading level maintains proper hierarchy and accessibility for assistive technologies.

### Add a `description` to provide more information

To provide more information on the card's topic, add a description to the card:

- Use the `description` attribute to provide a concise text description.
- For a description with more complex formatting, like bold or italics text, use the card's default `slot`. **Avoid adding any interactive elements into the slot, as they ‌can cause accessibility issues. The card itself is already interactive and will take the person to the correct location.**

### Use a `badge` to show the status or category of a card

- Use the `badge` attribute to add a status or a category to the top left corner of the card.
- Common examples of statuses include: "New", "Updated", "Coming soon" and "Featured".
- Common examples of categories include: "videos", "articles", "reports".
- The badges are customizable but are limited to 20 characters maximum.

### Group multiple cards for visual consistency

Organize cards within a [grid component]({{ links.grid }}):

- For desktop screens, use either 2 or 3 cards per row.
- For mobile screens, use 1 card per row.
- Try to include the same properties for each card within a section on a page. For example, if one card has an image, then all cards get an image.

{% include "partials/valid-props.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-card properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-card--events-properties&lang=en"
  width="1200"
  height="1900"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
