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

A growing community of government users helps shape GC Design System through their input. A dedicated team works with the community to continuously improve it for the GC and the people we all serve.

## Find out about GC Design System

<gcds-grid columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
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

## Connect with our community

<gcds-grid columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
  <gcds-card
    card-title="Register for the GC Design System Forum"
    href="https://events.teams.microsoft.com/event/5981a141-75bc-47d3-9050-03a63adb8cb1@9ed55846-8a81-4246-acd8-b1a01abfc0d1"
    description="Register to our recurring Forum events to stay current with GC Design System, our partners and clients."
  ></gcds-card>
</gcds-grid>

<hr class="mt-600" />

## Contribute to our next priorities

You can contribute to upcoming GC Design System work.

We’re actively seeking contributions for the following items:

---

### Components
  - **Tag / Badge:** For categorizing and highlighting content, statuses, or metadata in a clear and consistent way.
  - **Modal:** For interruptive interactions that require user attention, such as confirmations or important actions.
  - **Alert:** For communicating system status, feedback, and important messages to users.
  - **Tabs:** For organizing related content into sections within the same view.
  - **Subway / On this page:** For helping users navigate longer pages or multi-step content with clear structure and orientation.
  - **Autocomplete (Select):** For improving usability when selecting from long or complex lists.

### Styles
  - **More icons:** A consistent set of icons to support common actions and concepts across more GC services.
  - **Colours:** Continued evolution of the colour system to support accessibility, flexibility, and clarity in different contexts.

### Templates and getting started
- **Page templates:** Reusable page structures for common service patterns to help teams get started quickly.
- **Starter apps:** Reference implementations that show how to use GCDS in real environments and reduce setup time.
- **Patterns:** Common interaction patterns and layouts that help teams build consistent, usable services faster.

We’re also interested in user interactions that have a common application across GC services.

Submit your contributions to our next priorities directly in GitHub, with an <gcds-link href="{{ links.githubGetStarted }}" external>account</gcds-link>.

Provide any of the following for each component or pattern:

- **Examples of designs**: screenshots, prototypes, links to live services.
- **Research findings**: your discovery, use cases, or usability testing
- **Code**: prototype or production code, or product implementations.

<gcds-button button-role="secondary" type="link" href="{{ links.githubCompsPriority }}" external>Contribute in Github</gcds-button>
<gcds-button button-role="secondary" type="link" href="{{ links.contact }}" external>Contact us</gcds-button>

<hr class="mt-600" />

## Request a feature

We are always seeking to improve GC Design System and continually evaluating our next priorities. 

Feature requests can include suggestions for new components or added functionality to existing components, templates, frameworks, and CSS Shortcuts.

Submit your feature request directly in GitHub, with an <gcds-link href="{{ links.githubGetStarted }}" external>account</gcds-link>.

<gcds-button button-role="secondary" type="link" href="{{ links.githubCompsPriority }}" external>Contribute in Github</gcds-button>
<gcds-button button-role="secondary" type="link" href="{{ links.contact }}" external>Contact us</gcds-button>

<hr class="mt-600" />

## What else is coming soon

More on our <gcds-link href="{{ links.roadmap }}">roadmap</gcds-link>.

{% include "partials/helpus.njk" %}
