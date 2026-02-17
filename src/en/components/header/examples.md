---
title: Header
layout: 'layouts/component-documentation.njk'
translationKey: 'headerExamples'
tags: ['headerEN', 'examples']
date: 'git Last Modified'
---

{% examplesContent "en", "intro" %}
{% endexamplesContent %}

<!-- Required section -->

{% examplesContent "en", "required" %}
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

The `signature-has-link` attribute determines whether the header signature links to Canada.ca. By default, it's set to `true`, which means the signature is clickable:

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here">
</gcds-header>
{% endexamplesPreview %}

When it's set to `false`, a non-clickable signature is displayed:

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here" signature-has-link="false">
</gcds-header>
{% endexamplesPreview %}

#### `signature-variant`

The `signature-variant` attribute specifies the colour variant of the Government of Canada signature. The available options are:

- `colour` (default)
- `white`

{% examplesPreview %}
<gcds-header lang-href="fr-url-here" skip-to-href="#id-main-content-here" signature-variant="colour">
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
