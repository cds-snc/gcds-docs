---
title: Search
layout: 'layouts/component-documentation.njk'
translationKey: 'searchCode'
tags: ['searchEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for search](#coding-and-accessibility-for-search)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for search

### Place the search in the header

- Place the search component in the <gcds-link href="{{ links.header }}">header</gcds-link> below the language toggle and in line with the <gcds-link href="{{ links.signature }}">Government of Canada signature</gcds-link>.
- Ensure the header is responsive so that the search appears below both the signature and the language toggle on mobile devices.

### Set up search for content on Canada.ca

- Use the search component to perform a global search on Canada.ca. By default, the component is set to search Canada.ca.
- Opt to set the search to an institution or program specific area.

### Opt to replace the search endpoint for applications or transactional sites

- Opt to replace the search endpoint for an application or a transactional site when leaving the site would interrupt a person’s task or flow.
- Use the component’s default HTTP request method, `GET`, or opt to use `POST` by setting the `method` attribute.
- Set the `action` attribute to an endpoint of your choice and set the placeholder attribute, so the text of the search prompt reflects the scope of search. The set placeholder text will also populate the label text.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `action`

The `action` attribute controls where the form will send the form data.

{% examplesPreview %}
<gcds-search action="search.html"></gcds-search>
{% endexamplesPreview %}

#### `method`

The `method` attribute controls how the form will send the form data. The available options are:

- `get`
- `post`

{% examplesPreview %}
<gcds-search method="post"></gcds-search>
{% endexamplesPreview %}

#### `name`

The `name` attribute specifies the name of the search input when submitting the form data.

{% examplesPreview %}
<gcds-search name="search"></gcds-search>
{% endexamplesPreview %}

#### `placeholder`

The `placeholder` attribute specifies the placeholder and label for the input. The input will format the label and placeholder like "Search [`placeholder`]".

{% examplesPreview %}
<gcds-search placeholder="GC Design System"></gcds-search>
{% endexamplesPreview %}

#### `search-id`

The `search-id` attribute specifies the id for the input.

{% examplesPreview %}
<gcds-search search-id="searchform"></gcds-search>
{% endexamplesPreview %}

#### `suggested`

The `suggested` attribute specifies a list of predefined search times. The list will appear as a dropdown list on the input when it is focused.

{% examplesPreview %}
<gcds-search suggested="['red', 'green', 'blue']"></gcds-search>
{% endexamplesPreview %}

#### `value`

The `value` attribute specifies the `value` of the input. Setting the value will prepopulate the search input.

{% examplesPreview %}
<gcds-search value="Design system"></gcds-search>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-search properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-search--events-properties&lang=en"
  width="1200"
  height="1150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
