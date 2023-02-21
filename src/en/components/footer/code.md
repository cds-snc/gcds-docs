---
title: Footer
layout: "layouts/component-documentation.njk"
translationKey: "footerCode"
tags: ['footerEN', 'code']
date: "git Last Modified"
---

## Build a footer

Use the Government of Canada branded footer landmark for a consistent, accessible, and responsive landmark for your site or product.

## Accessibility and coding for footers

### Choose a display mode using the display property

Use the `display` property to choose one of the two display modes: `compact` or `full`.

Choose the **compact display** to include:
1. The footer links band and the Government of Canada wordmark.

<img class="b-sm b-gray mt-400 mb-500 p-400" src="/images/en/components/example-footer-compact.svg" alt=""/>

Choose the **full display** if you need to include:
1. The main band with a large selection of Government of Canada corporate links.
2. The footer links band and the Government of Canada wordmark.
3. Opt to include the contextual band to add up three footer links for your product.

<img class="b-sm b-gray mt-400 mb-500 p-400" src="/images/en/components/example-footer-all.svg" alt=""/>

### Include the footer links band for Government of Canada sites and products

- Always maintain the integrity of the signature. Absolutely avoid modifying the signature in any way. In particular avoid stretching or changing the colours or text.
- Pass either the `colour` or `white` display mode of the Government of Canada signature using the `signature-variant` attribute. Choose the `colour` display for a white background.
- Optionally, pass a boolean to set the Government of Canada signature link to Canada.ca using the `signature-has-link` attribute.

### Add optional elements to your footer

- Maintain the Canada wordmark and privacy and terms of reference links in the footer links band. Opt to remove the other links.
- Add content to the contextual band by using both the `contextual-heading` and `contextual-links` attributes.
- Use the `contextual-heading` attribute to assign heading text and the navigational landmark label of the contextual band.
- Use the `contextual-links` attribute to set a maximum of three links in the contextual band. Add support links for your product or service, such as contact details for a program.
- Set the `contextual-links`, by passing an object or an object in a string in the following format.
`{
"1st link label": "href"
"2nd link label": "href"
"3rd link label": "href"
}`
- Pass an element with the `slot="list"` attribute to replace the list element in the main band navigation landmark.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-footer properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-footer--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="1110"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
