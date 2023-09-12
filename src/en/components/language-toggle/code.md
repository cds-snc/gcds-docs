---
title: Language toggle
layout: 'layouts/component-documentation.njk'
translationKey: 'langtoggleCode'
tags: ['langtoggleEN', 'code']
date: 'git Last Modified'
---

## Build a language toggle

Use a language toggle so people are able to switch between languages without losing track of where they were before switching.

Place the language toggle in the top right of the header landmark for predictability and findability.

## Coding and accessibility for the language toggle

- Use the `href-attribute` to set the url of the page in the other Official Language.
- Set the `lang` attribute with `en` to indicate the language toggle in French and `fr` will indicate the language toggle in English.

Note: If using the header component, the language toggle can be assigned using the `lang-href` attribute.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-footer properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-language-toggle--events-properties"
  width="1200"
  height="700"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
