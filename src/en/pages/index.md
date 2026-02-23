---
title: Home
layout: 'layouts/base.njk'
permalink: /en/
translationKey: 'index'
redirect_from: /
date: 'git Last Modified'
---

# GC Design System

An official, production-ready design system for the Government of Canada. Build modern, accessible, human government services people can use.

<gcds-button id="start-to-use-btn-en" type="link" href="{{ links.startToUse }}">
  Start to use
</gcds-button>

<gcds-button type="link" href="{{ links.registerDemo }}" button-role="secondary">
  Attend a demo
</gcds-button>

<section class="bt-sm mt-500">

## Choose GC Design System

GC Design System helps public servants deliver Government of Canada websites and products. Build faster without compromising brand identity, accessibility, or bilingualism. Find production-ready code, design assets, and documentation in one place. 

### Learn more

Learn <gcds-link href="{{ links.about }}">about us</gcds-link>, our regular <gcds-link href="{{ links.accessibility }}">accessibility testing</gcds-link>, and how you can improve accessibility in your products and websites.

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

<img class="align-self-center d-none md:d-block" src="/images/common/home/components.jpg" alt="Three separate shapes, a pink rectangle beside a green and a yellow square, form the outline of a larger square." />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.components }}">Components</gcds-link>
  </gcds-heading>

  Meet common service interaction needs with the code, design, and guidance for user interface components.
</div>

<img class="align-self-center d-none md:d-block" src="/images/common/home/templates.jpg" alt="A vertical rectangle with pink that fades to blue." />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.pageTemplates }}">Page templates</gcds-link>
  </gcds-heading>

  Start your project with pre-built page layouts that provide a consistent, recognizable Canada.ca experience.
</div>

<img class="align-self-center d-none md:d-block" src="/images/en/home/shortcuts.jpg" alt="A badge in the top left with the word new. Three slightly overlapping, horizontal dots in darkening shades of blue." />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.shortcuts }}">CSS Shortcuts <gcds-sr-only>(New)</gcds-sr-only></gcds-link>
  </gcds-heading>

  Apply pre-defined styles and layouts by adding our custom CSS utility classes to your HTML. 
</div>

<img class="align-self-center d-none md:d-block" src="/images/common/home/styles.jpg" alt="A cluster of four dots in purple, blue, green, and yellow." />

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

- New: Stable v1.0.0 packages for <gcds-link href="{{ links.github }}" external>components</gcds-link> and <gcds-link href="{{ links.githubTokens }}" external>design tokens</gcds-link>
- Update: Expanded colour scale with new and updated <gcds-link href="{{ links.colour }}">base tokens</gcds-link>
- New: Dedicated <gcds-link href="{{ links.figmaTokens }}" external>Figma library for design tokens</gcds-link>

</section>

<section class="bt-sm mt-500">

## What's up next

Explore our <gcds-link href="{{ links.roadmap }}">roadmap</gcds-link> to follow our progress and check out what we’re working on next.

</section>

<section class="bt-sm mt-500">

## Connect with us

Reach out to us if you have questions, want to <gcds-link href="{{ links.getInvolved }}">get involved</gcds-link>, or want to join our mailing list.

<gcds-button type="link" href="{{ links.contact }}" button-role="secondary">
  Contact us
</gcds-button>

</section>
