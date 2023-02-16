---
title: Header
layout: "layouts/component-documentation.njk"
translationKey: "headerCode"
tags: ['headerEN', 'code']
date: "git Last Modified"
---

## Build a header component

Use this header landmark to communicate a Government of Canada digital service or product.

## Accessibility and coding for headers

### Include the GC header for Government of Canada sites and products

- Always maintain the integrity of the signature. Absolutely avoid modifying the signature in any way. In particular avoid stretching or changing the colours or text.
- Pass either the colour or white display mode of the Government of Canada signature using the signature-variant attribute. Choose the colour display for a white background.
- Optionally, pass a boolean to set the Government of Canada signature link to Canada.ca using the signature-has-link attribute.

### Set up the language toggle

- Include the language toggle by setting the lang-href attribute. Setting the lang-href also sets the href of the language toggle.
- Use the language attribute to set the site language and the toggle will offer the other Official Language.
- If your site is multilingual: Create an option to select other languages by using this header slot for an internationalization pattern. To do so, pass an element with the slot="toggle" attribute to replace the language toggle element in the header.

### Include the skip to content button

- Include the skip-to-content button by setting the href of the "skip to content" link in the header's top navigation using the skipToHref attribute.
- Use the topnav slot to replace the default top navigation with the "skip-to-content" link.
- Pass an element with the slot="topnav" attribute will place the element first in the header.
- Consider making the skip to content button visible so any person navigating the site can benefit from the shortcut.

### Add optional elements to your header

- Add the topbar to include a site menu by passing an element with the slot="menu" attribute. This will place the element in the header below the language toggle, signature and search slot.
- Add a search by passing an element with the slot="search" attribute. This will place the element under the language toggle and beside the signature in the header.
- Add the breadcrumb component by passing an element with the slot="breadcrumb" attribute. This will place the breadcrumb in the header below the language toggle, signature and search slot.
- Add the phase banner by passing an element with the slot="banner" attribute. This will place the element across the top of the header under the topnav element.

## Get your code

Generate code for a component instance by choosing properties in the values column, based on the code elements in the properties table.

Select "Get code" once you have the properties you need. That will generate code for the instance you're building.

Pull that code into your environment and you'll have a component with all the code values you chose.

<iframe
  title="Overview of gcds-header properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-header--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="1600"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
