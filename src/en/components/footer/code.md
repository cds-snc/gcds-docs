---
title: Footer
layout: 'layouts/component-documentation.njk'
translationKey: 'footerCode'
tags: ['footerEN', 'code']
date: 'git Last Modified'
---

## Build a footer

Use the Government of Canada branded footer landmark for a consistent, accessible, and responsive landmark for your site or product.

## Coding and accessibility for footers

### Choose a display mode using the display property

Use the `display` property to choose one of the two display modes: `compact` or `full`.

Choose the **compact display** to include:

1. The footer links band and the Government of Canada wordmark.

<img class="b-sm b-default mt-400 mb-500 p-400" src="/images/en/components/example/example-footer-compact.svg" alt=""/>

Include the **full display** if you need to include:

1. The main band with a large selection of Government of Canada corporate links.
2. The footer links band and the Government of Canada wordmark.

<img class="b-sm b-default mt-400 mb-500 p-400" src="/images/en/components/example/example-footer-full.svg" alt=""/>

Opt to include the contextual band to add up to three footer links for your product.

<img class="b-sm b-default mt-400 mb-500 p-400" src="/images/en/components/example/example-footer-full-with-contextual-links.svg" alt=""/>

### Include the footer links band for Government of Canada sites and products

- Always maintain the integrity of the signature. Absolutely avoid modifying the signature in any way. In particular avoid stretching or changing the colours or text.
- Pass either the `colour` or `white` display mode of the Government of Canada signature using the `signature-variant` attribute. Choose the `colour` display for a white background.

### Add optional elements to your footer

- Maintain the Canada wordmark and privacy and terms of reference links in the footer links band. Opt to remove the other links.
- Add content to the contextual band by using both the `contextual-heading` and `contextual-links` attributes.
- Use the `contextual-heading` attribute to assign heading text and the navigational landmark label of the contextual band.
- Use the `contextual-links` attribute to set a maximum of three links in the contextual band. Add support links for your product or service, such as contact details for a program.
- For the contextual band, set the `contextual-links`, by passing an object or an object in a string in the following format:

```js
{
“1st link label”: “href”
“2nd link label”: “href”
“3rd link label”: “href”
}
```

- For the footer links band, set the `sub-links`, by passing an object or an object in a string in the following format:

```js
{
“1st link label”: “href”
“2nd link label”: “href”
“3rd link label”: “href”
}
```

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-footer properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-footer--events-properties&lang=en"
  width="1200"
  height="2150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
