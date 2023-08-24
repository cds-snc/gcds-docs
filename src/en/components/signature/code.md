---
title: Signature
layout: "layouts/component-documentation.njk"
translationKey: "signatureCode"
tags: ["signatureEN", "code"]
date: "git Last Modified"
---

## Main use case

Use the signature component for a clear and identifiable Government of Canada landmark identifier for your site or product.

## Coding and accessibility for the signature

### Apply the signature or wordmark types

Use the signature type in the site’s <a href="{{ links.header }}">header</a> and the wordmark type in the site’s <a href="{{ links.footer }}">footer</a>.

- Set the `type` attribute to `signature`.
- Set the `type` attribute to `wordmark`.

### Set the language and colour

- Set the page’s language settings using the `lang` attribute. `En` will render the English version for an English page and `Fr` will render the French version for a French page.
- Link the signature to the Canada.ca homepage in the same Official Language as the current page. Set `has-link` attribute to `true` to link to Canada.ca.
- Set the component to either `colour` or `white` using the `variant` attribute.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-side-nav properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-signature--events-properties#events--properties"
  width="1200"
  height="950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>