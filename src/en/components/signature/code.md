---
title: Signature
layout: 'layouts/component-documentation.njk'
translationKey: 'signatureCode'
tags: ['signatureEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for signature](#coding-and-accessibility-for-signature)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for signature

### Apply the signature or wordmark types

Use the signature type in the site's <gcds-link href="{{ links.header }}">header</gcds-link> and the wordmark type in the site's <gcds-link href="{{ links.footer }}">footer</gcds-link>.

- Set the `type` attribute to `signature`.
- Set the `type` attribute to `wordmark`.

### Set the language and colour

- Set the page's language settings using the `lang` attribute. `En` will render the English version for an English page and `Fr` will render the French version for a French page.
- Link the signature to the Canada.ca homepage in the same Official Language as the current page. Set `has-link` attribute to `true` to link to Canada.ca.
- Set the component to either `colour` or `white` using the `variant` attribute.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `has-link`

The `has-link` attribute controls whether the signature links to Canada.ca. By default, it's set to `false`, meaning the signature is displayed as static content and isn't clickable.

{% examplesPreview %}
<gcds-signature></gcds-signature>
{% endexamplesPreview %}

When it's set to `true`, the signature becomes clickable and links to Canada.ca.

{% examplesPreview %}
<gcds-signature has-link="true"></gcds-signature>
{% endexamplesPreview %}

#### `type`

The `type` attribute determines which graphic is displayed in the signature component. By default, it is set to `signature`, rendering the signature graphic.

{% examplesPreview %}
<gcds-signature></gcds-signature>
{% endexamplesPreview %}

When it's set to `wordmark`, the component displays the wordmark graphic instead.

{% examplesPreview %}
<gcds-signature type="wordmark"></gcds-signature>
{% endexamplesPreview %}

#### `variant`

The `variant` attribute controls the colour of the signature component. By default, it is set to `colour`, rendering the coloured version of the signature.

{% examplesPreview %}
<gcds-signature></gcds-signature>
{% endexamplesPreview %}

When it's set to `white`, the component displays the white version of the signature, suitable for dark backgrounds.

{% examplesPreview %}

<div class="bg-dark p-300">
  <gcds-signature variant="white"></gcds-signature>
</div>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-side-nav properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-signature--events-properties&lang=en"
  width="1200"
  height="1100"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
