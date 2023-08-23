---
title: Header
layout: "layouts/component-documentation.njk"
translationKey: "headerCode"
tags: ['headerEN', 'code']
date: "git Last Modified"
---

## Build a header component

Use this header landmark to communicate a Government of Canada digital service or product.

## Coding and accessibility for headers

### Set the signature element in the header

- Always maintain the integrity of the Government of Canada signature. Absolutely avoid modifying the signature in any way. In particular avoid stretching or changing the colours or text.
- Pass either the `colour` or `white` display mode of the Government of Canada signature using the `signature-variant` attribute. Choose the `colour` display for a white background.
- Optionally, set the `signature-has-link` attribute to `true` to set the Government of Canada signature link to Canada.ca.

### Set up the language toggle

- Include the language toggle by setting the `lang-href` attribute. Setting the `lang-href` also sets the `href` of the language toggle.
- Use the `lang` attribute to set the site language and the toggle will offer the other Official Language.
- If your site is multilingual: Create an option to select other languages by using this header slot for an internationalization pattern. To do so, pass an element with the `slot="toggle"` attribute to replace the language toggle element in the header.

### Include the skip-to-content button

- Include the skip-to-content button by setting the `href` of the **skip-to-content** link in the header's top navigation using the `skip-to-href` attribute.
- Use the `skip-to-nav` slot to replace the default top navigation with the `skip-to-content` link.
- Pass a child element with the `slot="skip-to-nav"` attribute to place the element first in the header.

### Add optional elements to your header

- Add a menu by passing a child element with the `slot="menu"` attribute. This will place the element in the header below the language toggle, signature and search slots.
- Add a search form by passing a child element with the `slot="search"` attribute. This will place the element under the language toggle and beside the signature in the header.
- Add a breadcrumb component by passing a child element with the `slot="breadcrumb"` attribute. This will place the breadcrumb in the header below the language toggle, signature and search slot.
- Add a banner by passing a child element with the `slot="banner"` attribute. This will place the element across the top of the header under the `skip-to-nav` element.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-header properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-header--events-properties"
  width="1200"
  height="1535"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
