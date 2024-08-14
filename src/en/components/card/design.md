---
title: Card
layout: 'layouts/component-documentation.njk'
translationKey: 'cardDesign'
tags: ['cardEN', 'design']
date: 'git Last Modified'
---

## Card anatomy

<ol class="anatomy-list">
  <li>The <strong>container</strong> holds all of a card's elements.</li>
  <li>The <strong>badge</strong> (optional) is a visual indicator to inform users of the card's status or category. Badge text should be no more than 20 characters.</li>
  <li>The <strong>image</strong> (optional) is a 1:1, 16:9, or 4:3 ratio visual.</li>
  <li>The <strong>headline</strong> is a short attention-grabbing title about the card's content.</li>
  <li>The <strong>description</strong> (optional) has text that supports the card title. It may include a few lines of summary on the card's topic or a list of details about the same subject, like a list of event details.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-card-anatomy.svg" alt="A card anatomy represented by 5 elements: the container, the badge, the image, the headline, and the description."/>

## Design and accessibility for cards

### Write a scannable card title

- Use a meaningful title to inform users of what they'll find on the card.
- Choose a brief description or call-to-action statement for the title.

### Choose what information to add to the card

- Consider adding an image related to the title to make individual cards more identifiable.
- Consider adding a description to provide more information about the card's topic.
- Consider adding a badge to inform users of the status or the category of the card's content. Common examples of statuses include: "New", "Updated", "Coming soon" and "Featured". Common examples of categories include: "videos", "articles", "reports". The badges are customizable but are limited to 20 characters maximum.

### Group cards for visual consistency

Organize cards within a [grid component]({{ links.grid }}):

- For desktop screens, use either 2 or 3 cards per row.
- For mobile screens, use 1 card per row.
- Try to include the same properties for each card within a section on a page. For example, if one card has an image, then all cards get an image.

<img src="/images/en/components/example/example-cards-in-grid.svg" alt="Cards grouped in two rows. The first row contains 3 cards (4 grid columns per card). The second row contains two cards (6 grid columns per card)."/>
