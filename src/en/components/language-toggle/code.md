---
title: Language toggle
layout: 'layouts/component-documentation.njk'
translationKey: 'langtoggleCode'
tags: ['langtoggleEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for language toggle](#coding-and-accessibility-for-language-toggle)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for language toggle

- Place the language toggle in the top right of the header landmark for predictability and findability.
- Use the `href-attribute` to set the url of the page in the other Official Language.
- Set the `lang` attribute with `en` to indicate the language toggle in French and `fr` will indicate the language toggle in English.

Note: If using the header component, the language toggle can be assigned using the `lang-href` attribute.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `href`

The `href` attribute specifies the URL of the same page in another language, typically English or French. Use this attribute to provide a link that allows users to switch between available language versions.

{% examplesPreview %}
<gcds-lang-toggle href="#">
</gcds-lang-toggle>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-footer properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-language-toggle--events-properties&lang=en"
  width="1200"
  height="850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
