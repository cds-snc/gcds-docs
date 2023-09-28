---
title: Card
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: cardEN
  title: Card
  locale: en
  parent: componentsEN
  otherNames: tile, content card
  description: A box containing structured, actionable content on a single topic.
  thumbnail: /images/common/components/preview-card.svg
  alt: The card component shows a box containing a rectangular image in the top half. Immediately below is a blue rectangular bar running across three quarters of the box representing the card title. Two longer grey bars are stacked just below the blue bar, representing the card description and context area/metadata sections.
  state: published
translationKey: 'card'
tags: ['cardEN', 'usage']
permalink: /en/components/card/
date: 'git Last Modified'
---

Review these common uses for cards to see if they match the problem you’re solving for.

## Problems cards solve

Cards organize information on the same subject in a static box shaped like a playing card.

Use a card to:

- Group small pieces of related information as a single unit.
- Present bite-sized previews and summaries of information with a means to obtain more details elsewhere.
- Support content discovery by creating more visual interest.

Note: For Canada.ca, avoid using cards in place of the doormats specified in the templates for landing page and theme and topic page.

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">
  <h2 class="mt-0 mb-400">Related components</h2>

<a href="{{ links.details }}" class="link-light">Details</a> to hide secondary information that a person can expand on the same page.

<a href="{{ links.container }}" class="link-light">Container</a> for basic layouts with a set width.

</article>

<div>
  <h2>Component types</h2>
  <div>
    <h3 class="mb-400 mt-400">Link card</h3>
      {% componentPreview "Link card preview" "py-400" %}
<gcds-card card-title="Card title link" tag="Tag" href="#" description="Description or supporting text relating to the headline. Longer text will be truncated with ...">
<div slot="footer">Context info • metadata</div>
</gcds-card>
{% endcomponentPreview %}
    <p class="mb-400">Use the link card to:</p>
    <ul class="list-disc mb-400">
      <li>Structure information on the same topic to progressively offer the reader more details</li>
      <li>Include a link when there’s further information. Adding a link makes the entire card interactive as a large clickable target.</li>
      <li>Provide a large, clickable target leading to more information.</li>
    </ul>
  </div>

<div>
<h3 class="mb-400 mt-400">Action card</h3>
  {% componentPreview "Action card preview" "py-400" "" %}
  <gcds-card card-title="Card title link" href="#" type="action" tag="Tag" description="Description or supporting text relating to the headline. Longer text will be truncated with ..." img-alt="#">
  <div slot="footer">
    <gcds-button>Button label</gcds-button>
  </div>
</gcds-card>
  {% endcomponentPreview %}
    <p class="mb-400">Use the action card to:</p>
    <ul class="list-disc mb-400">
      <li>Group information that supports a task. The main action features on a button in the card footer.</li>
      <li>Highlight an immediate action a person can take using the button.</li>
      <li>Give a person the choice to learn more by selecting the card title headline link before moving to action.</li>
    </ul>
    <p>Note: In the action card, only the card title headline link and the button are interactive. The button is for a specific action</p>
  </div>
</div>
