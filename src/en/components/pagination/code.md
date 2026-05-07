---
title: Pagination
layout: 'layouts/component-documentation.njk'
translationKey: 'paginationCode'
tags: ['paginationEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for pagination](#coding-and-accessibility-for-pagination)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for pagination

### Set up simple pagination

Use simple pagination for a smaller number of pages.

- Set the `display` attribute to `simple`.
- Set the previous page’s URL with the `previous-href` attribute.
- Set the previous page’s label with the `previous-label` attribute.
- Set the next page’s URL with the `next-href` attribute.
- Set the next page’s label with the `next-label` attribute.

### Set up list styled pagination

Use list styled pagination when you are dealing with a larger number of pages.

- Set the `display` attribute to `list`.
- Set the total number of pages in your sequence with the `total-pages` attribute using a numeric value.
- Set the current or active page with the `current-page` attribute using a numeric value.
- Opt to use the `url` attribute to provide the component with a group of page links. This can be an object if you are working in a JS environment, or a string if you are using HTML.

#### Apply the URL object for list-style pagination

Use the `url` object to generate the query strings and fragments for the list pagination’s links.

```js
url = {
  queryStrings: {
    // Key value pairs
    key: value,
  },
  fragment: string, // Target id
};
```

To modify the value based on the page link being rendered, add the object modifiers `::offset` or `::match` to a key in the queryStrings object.

`::offset` counts up with the given value starting from the second page link.

```js
url = {
  queryStrings: {
    'index::offset': 100,
  },
};
```

Using `::match` on the current page link being rendered, multiplies it by the value provided.

```js
url = {
  queryStrings: {
    'page::match': 1,
  },
};
```

{% raw %}
Using either `::offset` or `::match`, allows a number to be injected into a string. Using `{{#}}`, the modifier will inject the modified number based on the counting method into the string when rendering.

```js
url = {
  queryStrings: {
    'index::offset': 'index_{{100}}',
    'page::match': 'page_{{1}}',
  },
};
```

{% endraw %}

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Essential attributes](#section-essential)
- [Optional attributes](#section-optional)

<!-- Required section -->

{% examplesContent "en", "essential" %}
{% endexamplesContent %}

#### `label`

The `label` attribute defines the text that labels the pagination navigation landmark, giving it a clear and accessible name.

{% examplesPreview %}
<gcds-pagination label="List pagination example" total-pages="15" current-page="9">
</gcds-pagination>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `current-page`

The `current-page` attribute sets the current page for a pagination with list display.

{% examplesPreview %}
<gcds-pagination label="List pagination example" total-pages="15" current-page="9">
</gcds-pagination>
{% endexamplesPreview %}

#### `display`

The `display` attribute sets the display style of the pagination. The available options are:

- `list` (default)
- `simple`

<!-- Force line break -->

{% examplesPreview %}
<gcds-pagination label="List pagination example" display="list" total-pages="15" current-page="9">
</gcds-pagination>
{% endexamplesPreview %}

#### `next-href`

The `next-href` attribute specifies the next page’s URL for a pagination with simple display.

{% examplesPreview %}
<gcds-pagination label="Simple pagination example" display="simple" previous-href="#" next-href="#" previous-label="Title of page" next-label="3 of 3">
</gcds-pagination>
{% endexamplesPreview %}

#### `next-label`

The `next-label` attribute defines the next page’s label for a pagination with simple display.

{% examplesPreview %}
<gcds-pagination label="Simple pagination example" display="simple" previous-href="#" next-href="#" previous-label="Title of page" next-label="3 of 3">
</gcds-pagination>
{% endexamplesPreview %}

#### `previous-href`

The `previous-href` attribute specifies the previous page’s URL for a pagination with simple display.

{% examplesPreview %}
<gcds-pagination label="Simple pagination example" display="simple" previous-href="#" next-href="#" previous-label="Title of page" next-label="3 of 3">
</gcds-pagination>
{% endexamplesPreview %}

#### `previous-label`

The `previous-label` attribute defines the previous page’s label for a pagination with simple display.

{% examplesPreview %}
<gcds-pagination label="Simple pagination example" display="simple" previous-href="#" next-href="#" previous-label="Title of page" next-label="3 of 3">
</gcds-pagination>
{% endexamplesPreview %}

#### `total-pages`

The `total-pages` attribute sets the total number of pages for a pagination with list display.

{% examplesPreview %}
<gcds-pagination label="List pagination example" total-pages="15" current-page="9">
</gcds-pagination>
{% endexamplesPreview %}

#### `url`

The `url` attribute defines the object (in a JavaScript environment) or string (in HTML) that generates the query strings and fragment for the list-styled pagination links.

{% examplesPreview %}
<gcds-pagination label="List pagination example" total-pages="15" current-page="9" url='{"queryStrings": { "querystring::offset": 10 }, "fragment": "main" }'>
</gcds-pagination>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-pagination properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-pagination--events-properties&lang=en"
  width="1200"
  height="1500"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
