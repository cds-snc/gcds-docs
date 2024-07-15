---
title: Pagination
layout: 'layouts/component-documentation.njk'
translationKey: 'paginationCode'
tags: ['paginationEN', 'code']
date: 'git Last Modified'
---

## Build a pagination component

Use pagination to break up content and spread it over numerous pages. This can help make large content sections easier to read and gives a person a sense of their position within the documents.

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
