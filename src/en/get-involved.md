---
title: Get involved
translationKey: getinvolved
layout: 'layouts/base.njk'
eleventyNavigation:
  key: getinvolvedEN
  title: Get involved
  locale: en
  order: 4
  hideMain: true
---

# Get involved

A design system is never complete. We're committed to building with the people who use our products.

Right now, we're testing GC Design System in alpha, the first usable phase of a product. We're iterating based on your needs and those of the people you serve.

## Find out what we're up to

We're sharing what we're working on and what we'll work on next. To get updates on GC Design System, sign up for our mailing list through our [Contact form]({{ links.contact }}).

### Coming soon

The next component we're releasing. Keep an eye out!

<div class="my-500">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr" gap="400">
    <gcds-card
      card-title="Icon"
      type="action"
      title-element="h3"
      description="A visual cue to help users understand the context."
      role="listitem"
    >
      <div slot="footer">
        <p class="text-secondary">
          <small>
            <em>{{ documentation[locale].othernames }} Glyphs, Graphic, Symbol.</em>
          </small>
        </p>
      </div>
    </gcds-card>
  </gcds-grid>
</div>

## How to get involved

### Contribute to our next priorities

<div class="my-500">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr" gap="400">
    <gcds-card
      card-title="Card"
      type="action"
      title-element="h3"
      description="A box containing structured, actionable content on a single topic."
      role="listitem"
    >
      <div slot="footer">
        <p class="text-secondary">
          <small>
            <em>{{ documentation[locale].othernames }} tiles, content card.</em>
          </small>
        </p>
      </div>
    </gcds-card>
    <gcds-card
      card-title="Data table"
      type="action"
      title-element="h3"
      description="A way to organize and display large amounts of data in rows and columns."
      role="listitem"
    >
      <div slot="footer">
        <p class="text-secondary">
          <small>
            <em>{{ documentation[locale].othernames }} table, data grid.</em>
          </small>
        </p>
      </div>
    </gcds-card>
  </gcds-grid>
</div>

Submit your contributions to our next priorities directly in GitHub.

Provide any of the following for each component or pattern:

- **Examples of designs**: screenshots, prototypes, links to live services.
- **Research findings**: your discovery, use cases, or usability testing.
- **Code**: prototype or production code, or product implementations.

<gcds-link href="{{ links.githubCompsPriority }}" external>Contribute to next priorities</gcds-link>

### Report an issue

Something's not working? Flag the issue to our team through GitHub.

With a GitHub account, you'll have access to all past issues and get updates on progress.

<gcds-link href="{{ links.githubCompsBug }}" external>Report an issue</gcds-link>

{% include "partials/helpus.njk" %}
