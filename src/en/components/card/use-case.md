---
title: card - Components
layout: "layouts/component-documentation.njk"
eleventyNavigation:
  key: cardEN
  title: Card
  locale: en
  parent: componentsEN
  otherNames: tile, content card
  description: A card is a box containing structured, actionable content on a single topic.
  thumbnail: /images/en/components/card.png
  alt: This is an image of the component
  state: published
translationKey: "card"
tags: ['cardEN', 'usage']
permalink: /en/components/card/
date: "git Last Modified"
---

Review these common uses for cards to see if they match the problem you’re solving for. 

## Problems cards solve 

Cards organize information on the same subject in a static box shaped like a playing card.   

Use a card to:

- Group small pieces of related information as a single unit.
- Present bite-sized previews and summaries of information with a means to obtain more details elsewhere. 
- Support content discovery by creating more visual interest.

Note: For Canada.ca, avoid using cards in place of the doormats specified in the templates for landing page and theme and topic page.

<div>
  <h2>Component types</h2>
  {% componentPreview "Primary button preview" "py-400" "" %}
  <gcds-card
  card-title="Title of the article"
  href="#"
  tag="tag"
  description="This is a description"
  img-alt="#"
>
  <div slot="footer">Metadata</div>
</gcds-card>
  {% endcomponentPreview %}

  <div>
    <h3 class="mb-400 mt-400">Link card</h3>
    <p>Use the link card to:</p>
    <ul class="list-disc mb-400">
      <li>Structure information on the same topic to progressively offer the reader more details</li>
      <li>Include a link when there’s further information. Adding a link makes the entire card interactive as a large clickable target.</li>
      <li>Provide a large, clickable target leading to more information.</li>
    </ul>
  </div>

  {% componentPreview "Primary button preview" "py-400" "" %}
  <gcds-card
  card-title="Title of the article"
  href="#"
  type="action"
  tag="tag"
  description="This is a description"
  img-alt="#"
>
  <div slot="footer"></div>
</gcds-card>
  {% endcomponentPreview %}

  <div>
    <h3 class="mb-400 mt-400">Action card</h3>
    <p>use the action card to:</p>
    <ul class="list-disc mb-400">
      <li>Group information that supports a task. The main action features on a button in the card footer.</li>
      <li>Highlight an immediate action a person can take using the button.</li>
      <li>Give a person the choice to learn more by selecting the card title headline link before moving to action.</li>
    </ul>
    <p>Note: In the action card, only the card title headline link and the button are interactive. The button is for a specific action</p>
  </div>
</div>

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">
  <h2 class="mt-0 mb-400">Related components</h2>

  <a href="{{ links.details }}" class="link-light">Details</a> to hide secondary information that a person can expand on the same page.

  <a href="{{ links.container }}" class="link-light">Container</a> for basic layouts with a set width.
</article>

