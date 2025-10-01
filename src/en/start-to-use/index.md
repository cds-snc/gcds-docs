---
title: Start to use
translationKey: startusing
layout: 'layouts/base.njk'
eleventyNavigation:
  key: startusingEN
  title: Start to use
  locale: en
  order: 2
date: 'git Last Modified'
---

# Start to use

Whether you’re designing or building in code, get started using GC Design System.

<gcds-grid class="mb-300" tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
  <gcds-card
    card-title="Design"
    href="#design"
    description="Learn how to start designing consistent GC experiences using the asset library in Figma."
    img-src="/images/common/start-to-use/banner-design.svg"
    img-alt=""
    role="listitem"
  ></gcds-card>
  <gcds-card
    card-title="Develop"
    href="#develop"
    description="Learn how to start prototyping and developing accessible GC experiences in code."
    img-src="/images/common/start-to-use/banner-develop.svg"
    img-alt=""
    role="listitem"
  ></gcds-card>
</gcds-grid>

## Design

Use GC Design System library in Figma to create consistent and accessible front-end experiences for Government of Canada tools and services. Our components are designed for both static sites and dynamic applications.

The library includes:

- Accessible components
- Quick-start page templates
- Mandatory branding elements for Canada.ca

### How it works

GC Design System uses Figma to host our component designs. Figma is a tool that lets you create clickable prototypes of apps and websites using the GC Design System library.

<gcds-button button-role="secondary" type="link" href="{{ links.startToUseDesign }}">
  Start designing
</gcds-button>

## Develop

Use GC Design System whether you’re building static HTML pages or dynamic applications using a JavaScript framework.

- Simplify your digital delivery.
- Work in the framework you want to work in.
- Create recognizable and trusted Government of Canada service experiences.
- Build products that <gcds-link href="{{ links.accessibility }}">meet or exceed GC accessibility standards</gcds-link>.

### How it works

GC Design System provides reusable and customizable web components. The components are self-contained, combining their own HTML, CSS, and JavaScript for encapsulation and reuse.

- The components are tech-agnostic and can be used in any web project, regardless of the underlying framework.
- The design system uses <gcds-link href="{{ links.designTokens }}">design tokens</gcds-link> to capture brand and design decisions in code for style elements like colours, typography, and spacing.
- Changes come in a single-version update with tokens, components, and (usually) non-breaking changes.
- The design system is independent of the Web Experience Toolkit (WET) and GCWeb.

<gcds-button button-role="secondary" type="link" href="{{ links.startToUseDevelop }}">
  Start developing
</gcds-button>
