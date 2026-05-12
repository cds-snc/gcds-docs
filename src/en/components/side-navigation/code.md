---
title: Side navigation
layout: 'layouts/component-documentation.njk'
translationKey: 'sidenavigationCode'
tags: ['sidenavigationEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for side navigation](#coding-and-accessibility-for-side-navigation)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for side navigation

### Place the side navigation in the page layouts

Implement the side navigation in the product layout so that it’s present on all pages.

### Use the side navigation with other components

If using breadcrumbs, align the content hierarchy in both sets of links, so the components reflect a similar path through the site.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `label`

The `label` attribute defines the label for the navigation landmark.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
</gcds-side-nav>
{% endexamplesPreview %}

#### `menu-label` (`gcds-nav-group`)

The `menu-label` attribute of the `gcds-nav-group` subcomponent defines the label for the nav group menu.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features">
    <gcds-nav-link href="#">Review in both official languages side-by-side</gcds-nav-link>
    <gcds-nav-link href="#">Get form responses delivered securely</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `open-trigger` (`gcds-nav-group`)

The `open-trigger` attribute of the `gcds-nav-group` subcomponent defines the label for the collapsed button trigger.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features">
    <gcds-nav-link href="#">Review in both official languages side-by-side</gcds-nav-link>
    <gcds-nav-link href="#">Get form responses delivered securely</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `href` (`gcds-nav-link`)

The `href` attribute of the `gcds-nav-link` subcomponent specifies the URL of the page the link goes to.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
</gcds-side-nav>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `close-trigger` (`gcds-nav-group`)

The `close-trigger` attribute of the `gcds-nav-group` subcomponent defines the label for the expanded button trigger.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features" close-trigger="Close Features">
    <gcds-nav-link href="#">Review in both official languages side-by-side</gcds-nav-link>
    <gcds-nav-link href="#">Get form responses delivered securely</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `open` (`gcds-nav-group`)

The `open` attribute of the `gcds-nav-group` subcomponent controls whether the nav group is expanded or not. By default, it is set to `false`.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features" open>
    <gcds-nav-link href="#">Review in both official languages side-by-side</gcds-nav-link>
    <gcds-nav-link href="#">Get form responses delivered securely</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `current` (`gcds-nav-link`)

The `current` attribute of the `gcds-nav-link` subcomponent indicates whether the page is current or not.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>
  <gcds-nav-link current href="#">Contact us</gcds-nav-link>
</gcds-side-nav>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for adding navigation groups and navigation links.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features">
    <gcds-nav-link href="#">Review in both official languages side-by-side</gcds-nav-link>
    <gcds-nav-link href="#">Get form responses delivered securely</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `home`

The `home` slot is for adding the home link or site title.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
</gcds-side-nav>
{% endexamplesPreview %}

#### `default` (`gcds-nav-group`)

The `default` slot of the `gcds-nav-group` subcomponent is for adding the list of navigation links.

{% examplesPreview "120" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-group menu-label="Features" open-trigger="Features">
    <gcds-nav-link href="#">Review in both official languages side-by-side</gcds-nav-link>
    <gcds-nav-link href="#">Get form responses delivered securely</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endexamplesPreview %}

#### `default` (`gcds-nav-link`)

The `default` slot of the `gcds-nav-link` subcomponent is for adding the navigation link content.

{% examplesPreview "120" %}
<gcds-nav-link href="#">GC Forms</gcds-nav-link>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-side-nav properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-side-navigation--events-properties&lang=en"
  width="1200"
  height="1800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
