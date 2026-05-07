---
title: Card
layout: 'layouts/component-documentation.njk'
translationKey: 'cardCode'
tags: ['cardEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for cards](#coding-and-accessibility-for-cards)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for cards

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

#### `card-title`

The `card-title` attribute defines the title that appears on the card.

{% examplesPreview %}
<gcds-card card-title="Card title link" href="#">
</gcds-card>
{% endexamplesPreview %}

#### `href`

The `href` attribute specifies the URL of the page the link goes to.

{% examplesPreview %}
<gcds-card card-title="Card title link" href="#">
</gcds-card>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `badge`

The `badge` attribute defines the badge text that appears in the top left corner of the card. The badge has a 20 character limit.

{% examplesPreview %}
<gcds-card card-title="Card title link" badge="Tag" href="#">
</gcds-card>
{% endexamplesPreview %}

#### `card-title-tag`

The `card-title-tag` attribute sets the HTML heading element for the title. This attribute does not modify the font size. It is used to assign the heading level in order to maintain heading hierarchy and accessibility for assistive technologies. The available options are:

- `h3`
- `h4`
- `h5`
- `h6`

<!-- Force line break -->

{% examplesPreview %}
<gcds-card card-title="Card title link" card-title-tag="h3" href="#">
</gcds-card>
{% endexamplesPreview %}

#### `description`

The `description` attribute defines the body of text that appears on the card.

{% examplesPreview %}
<gcds-card card-title="Card title link" href="#" description="Description or supporting text relating to the headline.">
</gcds-card>
{% endexamplesPreview %}

#### `img-alt`

The `img-alt` attribute defines the alt text for the image provided. If no img-alt is specified, the image will be decorative.

{% examplesPreview %}
<gcds-card card-title="Card title link" href="#" img-alt="The card component shows a box containing a rectangular image in the top half. Immediately below is a blue rectangular bar running across three quarters of the box representing the card title. Two longer grey bars are stacked just below the blue bar, representing the card description and context area/metadata sections." img-src="/images/common/components/preview-card.svg">
</gcds-card>
{% endexamplesPreview %}

#### `img-src`

The `img-src` attribute specifies the URL or file path of the image to display.

{% examplesPreview %}
<gcds-card card-title="Card title link" href="#" img-alt="The card component shows a box containing a rectangular image in the top half. Immediately below is a blue rectangular bar running across three quarters of the box representing the card title. Two longer grey bars are stacked just below the blue bar, representing the card description and context area/metadata sections." img-src="/images/common/components/preview-card.svg">
</gcds-card>
{% endexamplesPreview %}

#### `rel`

The `rel` attribute specifies the relationship between the current document and the linked document. It is commonly used for security and privacy purposes, especially when links open in a new tab or window.

{% examplesPreview %}
<gcds-card card-title="Card title link" href="#" rel="noopener noreferrer">
</gcds-card>
{% endexamplesPreview %}

#### `target`

The target attribute specifies where the linked resource is opened. For example, it can open the link in the same browsing context or in a new tab or window.

{% examplesPreview %}
<gcds-card card-title="Card title link" href="#" target="_blank">
</gcds-card>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for adding description content to the card. It will overwrite the description attribute if it’s used.

{% examplesPreview %}
<gcds-card card-title="Card title link" href="#">
  Description or supporting text relating to the headline.
</gcds-card>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

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
