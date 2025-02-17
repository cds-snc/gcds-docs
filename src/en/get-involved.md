---
title: Get involved
translationKey: getinvolved
layout: 'layouts/base.njk'
eleventyNavigation:
  key: getinvolvedEN
  title: Get involved
  locale: en
  order: 3
  hideMain: true
templateEngineOverride: njk,md
---

# Get involved

A design system is never complete. We're committed to building with the people who use our products.

Right now, we're testing GC Design System in alpha, the first usable phase of a product. We’re iterating based on common needs across the GC and those of the people we all serve.

## Find out about GC Design System

<gcds-grid class="mb-400 hydrated" columns-tablet="1fr 1fr 1fr">
  <gcds-card
    card-title="Subscribe to newsletter"
    href="{{ links.contact }}"
    description="Subscribe to our newsletter to get GC Design System updates, release communications, and special events."
  ></gcds-card>
  <gcds-card
    card-title="Attend a demo"
    href="{{ links.registerDemo }}"
    description="Get an intro to prototyping and developing web experiences using the design system, followed by a Q&A."
  ></gcds-card>
</gcds-grid>

<hr/>

<gcds-heading tag="h2" margin-top="225">How to get involved</gcds-heading>

## Contribute to our next priorities

You can contribute to upcoming GC Design System work. We’re actively seeking contributions for the following items. 

 Data tables to organize and display large amounts of data in rows and columns. 
Tags to label, categorize, or organize items using descriptive key words.

We’re also interested in user interactions that have a common application across GC services.     

Submit your contributions to our next priorities directly in GitHub, with an account.

Submit your contributions to our next priorities directly in GitHub. If this is your first time using Github - follow these <gcds-link href="{{ links.githubGetStarted }}" external>instructions</gcds-link> to create your account.

Provide any of the following for each component or pattern:

- **Examples of designs**: screenshots, prototypes, links to live services.
- **Research findings**: your discovery, use cases, or usability testing.
- **Code**: prototype or production code, or product implementations.

<gcds-link href="{{ links.githubCompsPriority }}" external>Contribute to next priorities</gcds-link>
Provide any of the following for each component or pattern:
- **Examples of designs**: screenshots, prototypes, links to live services.
- **Research findings**: your discovery, use cases, or usability testing
- **Code**: prototype or production code, or product implementations.

<gcds-grid class="mb-400 hydrated" columns-tablet="1fr 1fr">
<gcds-button href="{{ links.githubCompsPriority }}" external>Contribuer sur GitHub</gcds-button>
<gcds-button href="{{ links."/fr/contactez" }}" external>Contactez-nous</gcds-button>

</gcds-grid>
<hr />

<gcds-heading tag="h2" margin-top="225">What else is coming soon</gcds-heading>

### Upcoming components and templates

Here’s what we’ll soon be releasing. More on our roadmap.

<div>
  <gcds-heading tag="h4" margin-bottom="0">Header update</gcds-heading>
  <ul class="mb-300">
    <li>We’re making updates to the header to match the Canada.ca global header pattern.</li>
    <li><strong>Expected release:</strong> Spring 2025</li>
  </ul>
</div>

<div>
  <gcds-heading tag="h4" margin-bottom="0">Footer V2</gcds-heading>
  <ul class="mb-300">
    <li>We’re making updates to the footer to match the Canada.ca global footer pattern.</li>
    <li><strong>Expected release:</strong> Spring 2025</li>
  </ul>
</div>
<div>
  <gcds-heading tag="h4" margin-bottom="0">Button update</gcds-heading>
  <ul class="mb-300">
    <li>We’re making changes to the button to add a new button role and size.</li>
    <li><strong>Expected release:</strong> Spring 2025</li>
  </ul>
</div>

{% include "partials/givefeedback.njk" %}
