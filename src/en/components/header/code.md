---
title: Header
layout: 'layouts/component-documentation.njk'
translationKey: 'headerCode'
tags: ['headerEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for headers](#coding-and-accessibility-for-headers)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for headers

GC Design System components are designed to adapt to the size of the screen or frame where they’re being viewed. As an exception, the text size in the header and footer is fixed.

### Preserve the signature element in the header for GC sites

- Maintain the [signature]({{ links.signature }}) for all GC sites.
- Use the `signature-variant` attribute to set the Government of Canada signature to either `colour` or `white`. For white backgrounds, keep the `colour` default setting for the signature.
- Always preserve the integrity of the Government of Canada signature. Avoid modifying it in any way, stretching, or changing the colours or text.
- On Canada.ca pages, set the `signature-has-link` attribute to `true` to set the Government of Canada signature link to Canada.ca.

### Include the language toggle on all GC sites

- Include the [language toggle]({{ links.langToggle }}) by setting the `lang-href` attribute. Setting the `lang-href` also sets the href of the language toggle.
- Use the `lang` attribute to set the site language and the toggle will offer the other Official Language.

### Set up the skip-to-content to improve accessibility

- Set up a skip-to-content [link]({{ links.link }}) as a shortcut for people using an assistive technology and improve keyboard navigation.
- Set the href of the `skip-to-content` link in the header’s top navigation using the `skip-to-href` attribute.
- Use the `skip-to-nav` slot to replace the default top navigation with the `skip-to-content` link.
- Pass a child element with the `slot="skip-to-nav"` attribute to place the element first in the header.

### Include the breadcrumbs and search on Canada.ca sites

- On Canada.ca pages, keep the default setting of `hide-canada-link` to `false`.
- Add the [breadcrumbs]({{ links.breadcrumbs }}) component by passing a child element with the `slot="breadcrumb"` attribute. This will place the breadcrumbs in the header below the language toggle, signature and search slot.
- Add a new breadcrumbs link to the breadcrumbs component by using the `gcds-breadcrumbs-item` component. The link can be added through the `href` property.
- Include a [search]({{ links.search }}) form by adding by adding `<gcds-search slot="search"></gcds-search>` or passing a child element with the `slot="search"` attribute. This will place the element under the language toggle and beside the signature in the header.
- Set the search to a local or global search form. By default, the component is set to search Canada.ca.

### Set up a top navigation

- Add a [top navigation]({{ links.topNav }}) by passing a child element with the `slot="menu"` attribute. This will place the element in the header below the language toggle, signature, and search slots.
- Opt to add a banner by passing a child element with the `slot="banner"` attribute. This will place the element across the top of the header under the `skip-to-nav` element.

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

#### `lang-href`

The `lang-href` attribute specifies the URL of the same page in another language, typically English or French. Use this attribute to provide a link that allows users to switch between available language versions.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
</gcds-header>
{% endexamplesPreview %}

#### `skip-to-href`

The `skip-to-href` attribute specifies the URL or anchor for the "Skip to content" link. This link allows users, especially those using assistive technologies, to quickly navigate to the main content of the page, improving accessibility.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
</gcds-header>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `signature-has-link`

The `signature-has-link` attribute determines whether the header signature links to Canada.ca. By default, it's set to `true`, which means the signature is clickable.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
</gcds-header>
{% endexamplesPreview %}

When it's set to `false`, a non-clickable signature is displayed.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here" signature-has-link="false">
</gcds-header>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `banner`

The `banner` slot is for adding a banner across the top of the header. Use this slot to display site-wide alerts or promotional messages.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
  <div slot="banner">Banner slot</div>
</gcds-header>
{% endexamplesPreview %}

#### `breadcrumb`

The `breadcrumb` slot is for adding [breadcrumbs]({{links.breadcrumbs}}) below the header. Use this slot to show the user’s current page location and navigation path.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
  <gcds-breadcrumbs slot="breadcrumb">
    <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
    <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
  </gcds-breadcrumbs>
</gcds-header>
{% endexamplesPreview %}

#### `menu`

The `menu` slot is for adding a navigation menu below the divider line. For instance, you can use the [top-nav]({{links.topNav}}) component within this slot to provide the site’s primary navigation links.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
  <gcds-top-nav label="Top navigation" alignment="right" slot="menu">
    <gcds-nav-link href="#home" slot="home">GC Notify</gcds-nav-link>
    <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
    <gcds-nav-link href="#">Contact us</gcds-nav-link>
  </gcds-top-nav>
</gcds-header>
{% endexamplesPreview %}

#### `search`

The `search` slot is for adding a [search field]({{links.search}}) to the header. Use this slot to allow users to search site content directly from the header.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
  <gcds-search slot="search"></gcds-search>
</gcds-header>
{% endexamplesPreview %}

#### `signature`

The `signature` slot is for replacing the default [Government of Canada signature]({{links.signature}}). Use this slot to display a custom signature or logo if needed.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
  <gcds-signature slot="signature"></gcds-signature>
</gcds-header>
{% endexamplesPreview %}

#### `skip-to-nav`

The `skip-to-nav` slot is for adding a "skip to content" link at the top of the header. By default, the header includes a “skip to main content” link to improve accessibility for users of assistive technologies. The target for this default link can be set using the [`skip-to-href`](/en/components/header/examples#skiptohref) prop. Use this slot to add additional skip links or a custom “skip to content” link.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
  <gcds-link href="#main-content" slot="skip-to-nav">
    Skip to main content
  </gcds-link>
</gcds-header>
{% endexamplesPreview %}

#### `toggle`

The `toggle` slot is for adding a custom [language toggle]({{links.langToggle}}) in the header. By default, the header includes a language toggle that includes English and French. The target for this default language toggle can be set using the [`lang-href`](/en/components/header/examples#langhref) prop. Use this slot to add additional available languages.

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
  <gcds-lang-toggle href="url-here" slot="toggle">
  </gcds-lang-toggle>
</gcds-header>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-header properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-header--events-properties&lang=en&externalLinks=true"
  width="1200"
  height="1600"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
