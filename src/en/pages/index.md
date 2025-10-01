---
title: Home
layout: 'layouts/base.njk'
permalink: /en/
translationKey: 'index'
redirect_from: /
date: 'git Last Modified'
---

# GC Design System

Build modern, accessible, human government services people can use.

<gcds-button type="link" href="{{ links.startToUse }}">
  Start to use
</gcds-button>

<gcds-button type="link" href="{{ links.registerDemo }}" button-role="secondary">
  Attend a demo
</gcds-button>

<section class="bt-sm mt-500">

## Choose GC Design System

GC Design System is the source for public servants. Deliver digital Government of Canada services faster without compromising brand identity, accessibility, or bilingualism.

### Learn more

Learn <gcds-link href="{{ links.aboutUs }}">about us</gcds-link>, our regular <gcds-link href="{{ links.accessibilityTesting }}">accessibility testing</gcds-link>, and how you can improve accessibility in your products and websites.

### Get involved

We’re continuously scaling our product to better meet your needs and offer you more options.

<gcds-button type="link" href="{{ links.getInvolved }}" button-role="secondary">
  Get involved
</gcds-button>

</section>

<section class="bt-sm mt-500">

## A set of tools for common problems

Apply or combine these tools to address common service scenarios. Design and build trusted, unified experiences faster.

<gcds-grid columns="1fr" columns-tablet="1.5fr 2.5fr" columns-desktop="1fr 3fr" gap="150" gap-tablet="300">

<img class="align-self-center d-none md:d-block" src="/images/common/home/components.jpg" alt="" />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.components }}">Components</gcds-link>
  </gcds-heading>

  Meet common service interaction needs with the code, design, and guidance for user interface components.
</div>

<img class="align-self-center d-none md:d-block" src="/images/common/home/templates.jpg" alt="" />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.pageTemplates }}">Page templates</gcds-link>
  </gcds-heading>

  Start your project with pre-built page layouts that provide a consistent, recognizable Canada.ca experience.
</div>

<img class="align-self-center d-none md:d-block" src="/images/en/home/shortcuts.jpg" alt="" />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.shortcuts }}">CSS Shortcuts</gcds-link>
  </gcds-heading>

  Apply pre-defined styles and layouts by adding our custom CSS utility classes to your HTML. 
</div>

<img class="align-self-center d-none md:d-block" src="/images/common/home/styles.jpg" alt="" />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.styles }}">Styles</gcds-link>
  </gcds-heading>

  Explore coded brand and design decisions that shape a consistent visual experience. 
</div>

</gcds-grid>

</section>

<section class="bt-sm mt-500">

## What's new

Browse the latest code additions and features in the <gcds-link href="{{ links.releaseNotes}}" external>GitHub changelog</gcds-link>.

**Recent releases**:

- New feature: <gcds-link href="{{ links.shortcuts }}">CSS shortcuts</gcds-link>
- Update: Styling and guidance <gcds-link href="{{ links.sideNav }}">Side nav</gcds-link>

</section>

<section class="bt-sm mt-500">

## What's up next

Explore our <gcds-link href="{{ links.roadmap }}">roadmap</gcds-link> to follow our progress and check out what we’re working on next.

</section>

<section class="bt-sm mt-500">

## Connect with us

Reach out to us if you have questions, want to <gcds-link href="{{ getInvolved }}">get involved</gcds-link>, or want to join our mailing list.

<gcds-button type="link" href="{{ links.contact }}" button-role="secondary">
  Contact us
</gcds-button>

</section>
