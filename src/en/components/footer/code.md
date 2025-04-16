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

<img class="b-sm b-default mb-300 p-300" src="/images/en/components/example/example-footer-compact.svg" alt=""/>

Include the **full display** if you need to include:

1. The main band with a large selection of Government of Canada corporate links.
2. The footer links band and the Government of Canada wordmark.

<img class="b-sm b-default mb-300 p-300" src="/images/en/components/example/example-footer-full.svg" alt=""/>

Opt to include the contextual band to add up three specific links for your site.

<img class="b-sm b-default mb-300 p-300" src="/images/en/components/example/example-footer-full-with-contextual-links.svg" alt=""/>

### Set up the GC footer links band

- Always maintain the integrity of the Government of Canada wordmark. Do not modify the wordmark in any way.
- Keep the Canada wordmark, privacy link, and terms and conditions link. The other links are only required on standard pages, otherwise you can remove.

### Add optional elements

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
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-footer--events-properties&lang=en&externalLinks=true"
  width="1200"
  height="2150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
