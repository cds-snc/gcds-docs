---
title: Teams using GC Design System
translationKey: testimonials
layout: 'layouts/base.njk'
eleventyNavigation:
  key: testimonialsEN
  title: Teams using GC Design System
  locale: en
  order: 4
  hideMain: true
---

# Teams using GC Design System

See how government teams are using GC Design System to build accessible, consistent services faster.

## Growing adoption across government

<gcds-grid class="mb-600" tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
{% for stat in testimonials[locale].stats %}
  <li class="testimonial-box">
    <p class="font-size-h1 mb-0"><strong>{{ stat.value }}</strong></p>
    <p class="mb-0">{{ stat.label }}</p>
  </li>
{% endfor %}
</gcds-grid>

Used by departments delivering high-volume, public-facing services, including:

- Employment and Social Development Canada
- Health Canada
- The Royal Canadian Mounted Police
- Transport Canada
- Immigration, Refugees and Citizenship Canada
- Fisheries and Oceans Canada

<hr />

## Real services built with GC Design System

GC Design System is supported by a growing community of public servants. Teams adopt GC Design System in ways that fit their existing technical environments.

Here are some live examples of services built with it.

<gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
{% for service in testimonials[locale].services %}<gcds-card card-title-tag="h3" card-title="{{ service.title }}" href="{{ service.href }}" badge="{{ service.badge }}" img-src="{{ service.img }}" img-alt="{{ service.alt }}" description="{{ service.description }}" target="_blank" role="listitem"></gcds-card>{% endfor %}
</gcds-grid>

### Works across technical environments

Some teams use framework-specific packages for React, Angular, or Vue. Others rely on the HTML package for broader use cases. Teams using the Drupal content management system can get started with the <gcds-link external href="{{ links.gcdsDrupalTheme }}">GC Design System theme</gcds-link>.

<hr />

## What teams say

<ul>
{% for quote in testimonials[locale].quotes %}
  <li class="mb-500 testimonial-box">
    <blockquote>
      <p class="mb-0"><strong>“{{ quote.quote }}”</strong></p>
    </blockquote>
    <p class="mb-0"><cite>{{ quote.author }}</cite></p>
  </li>
{% endfor %}
</ul>

<hr />

## Considering GC Design System?

Attend a demo to get your questions answered from our team, or check our roadmap to help you decide when adopting GC Design System makes sense for you.

<gcds-button type="link" button-role="primary" href="{{ links.registerDemo }}" class="mb-300">
  Attend a demo
</gcds-button>
<gcds-button type="link" button-role="secondary" href="{{ links.roadmap }}">
  Check our roadmap
</gcds-button>
