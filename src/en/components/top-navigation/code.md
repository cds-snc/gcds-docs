---
title: Top navigation
layout: 'layouts/component-documentation.njk'
translationKey: 'topnavigationCode'
tags: ['topnavigationEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for top navigation](#coding-and-accessibility-for-top-navigation)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for top navigation

### Add the top navigation to each page

- Implement the top navigation in the website layout so that it's present on every page.
- Opt to add a nav group with a second level of navigation by placing the `<gcds-nav-link>` in a `<gcds-nav-group>`.

### Use the top navigation with other components

- If using <gcds-link href="{{ links.breadcrumbs }}">breadcrumbs</gcds-link>, align the content hierarchy in both set of links, so both components reflect a similar path through the site.
- If you're using the <gcds-link href="{{ links.header }}">header</gcds-link> component, add the top navigation directly to the header by passing a child element with the `slot="menu"` attribute into the header. This will place the top nav in the header after the language toggle, signature, and search slots.

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

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

#### `menu-label` (`gcds-nav-group`)

The `menu-label` attribute of the `gcds-nav-group` subcomponent defines the label for the nav group menu.

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features submenu" open-trigger="Features">
    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>
    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `open-trigger` (`gcds-nav-group`)

The `open-trigger` attribute of the `gcds-nav-group` subcomponent defines the label for the collapsed button trigger.

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features submenu" open-trigger="Features">
    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>
    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `href` (`gcds-nav-link`)

The `href` attribute of the `gcds-nav-link` subcomponent specifies the URL of the page the link goes to.

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `alignment`

The `alignment` attribute defines the alignment of the top navigation. The available options are:

- `start` (default)
- `end`

<!-- Force line break -->

{% examplesPreview %}
<gcds-top-nav alignment="end" label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

#### `close-trigger` (`gcds-nav-group`)

The `close-trigger` attribute of the `gcds-nav-group` subcomponent defines the label for the expanded button trigger.

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features submenu" open-trigger="Features" close-trigger="Close Features">
    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>
    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `open` (`gcds-nav-group`)

The `open` attribute of the `gcds-nav-group` subcomponent controls whether the nav group is expanded or not. By default, it is set to `false`.

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features submenu" open-trigger="Features" open>
    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>
    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `current` (`gcds-nav-link`)

The `current` attribute of the `gcds-nav-link` subcomponent indicates whether the page is current or not.

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link current href="#">Contact us</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for adding navigation groups and navigation links.

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
  <gcds-nav-group menu-label="Features submenu" open-trigger="Features">
    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>
    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `home`

The `home` slot is for adding the home link or site title.

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
</gcds-top-nav>
{% endexamplesPreview %}

#### `default` (`gcds-nav-group`)

The `default` slot of the `gcds-nav-group` subcomponent is for adding the list of navigation links.

{% examplesPreview %}
<gcds-top-nav label="Top navigation component preview">
  <gcds-nav-group menu-label="Features submenu" open-trigger="Features">
    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>
    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endexamplesPreview %}

#### `default` (`gcds-nav-link`)

The `default` slot of the `gcds-nav-link` subcomponent is for adding the navigation link content.

{% examplesPreview %}
<gcds-nav-link href="#">GC Notify</gcds-nav-link>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-top-nav properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-top-navigation--events-properties&lang=en"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
