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

<gcds-grid columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr">
  <gcds-card
    card-title="Subscribe to mailing list"
    href="{{ links.contactMailingList }}"
    description="Subscribe to our mailing list to get GC Design System updates, release communications, and special events."
  ></gcds-card>
  <gcds-card
    card-title="Attend a demo"
    href="{{ links.registerDemo }}"
    description="Get an intro to prototyping and developing web experiences using the design system, followed by a Q&A."
  ></gcds-card>
</gcds-grid>

<hr class="mt-600" />

## Contribute to our next priorities

You can contribute to upcoming GC Design System work.

We’re actively seeking contributions for the following items:

- **Data tables** to organize and display large amounts of data in rows and columns.

We’re also interested in user interactions that have a common application across GC services.

Submit your contributions to our next priorities directly in GitHub, with an <gcds-link href="{{ links.githubGetStarted }}" external>account</gcds-link>.

Provide any of the following for each component or pattern:

- **Examples of designs**: screenshots, prototypes, links to live services.
- **Research findings**: your discovery, use cases, or usability testing
- **Code**: prototype or production code, or product implementations.

<gcds-button button-role="secondary" type="link" href="{{ links.githubCompsPriority }}" external>Contribute in Github</gcds-button>
<gcds-button button-role="secondary" type="link" href="{{ links.contact }}" external>Contact us</gcds-button>

<hr class="mt-600" />

## What else is coming soon

### Upcoming components and templates

More on our <gcds-link href="{{ links.roadmap }}">roadmap</gcds-link>.

{% include "partials/helpus.njk" %}
