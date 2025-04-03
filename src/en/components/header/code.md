---
title: Header
layout: 'layouts/component-documentation.njk'
translationKey: 'headerCode'
tags: ['headerEN', 'code']
date: 'git Last Modified'
---

## Build a header component

Use this header landmark to communicate a Government of Canada digital service or product.

## Coding and accessibility for the header

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
