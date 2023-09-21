---
title: Search
layout: 'layouts/component-documentation.njk'
translationKey: 'searchCode'
tags: ['searchEN', 'code']
date: "git Last Modified"
---

## Build a search component

Use the search component so people can find information based on keywords.

- Place the search component in the <a href="{{ links.header }}">header</a> below the language toggle and in line with the <a href="{{ links.signature }}">Government of Canada signature</a>.
- Ensure the header is responsive so that the search appears below both the signature and the language toggle on mobile devices.

## Coding and accessibility for search

### Set up search for content on Canada.ca

- Use the search component to perform a global search on Canada.ca. By default, the component is set to search Canada.ca.  
- Opt to set the search to an institution or program specific area.

### Opt to replace the search endpoint for applications or transactional sites

- Opt to replace the search endpoint for an application or a transactional site when leaving the site would interrupt a person’s task or flow.
- Use the component’s default HTTP request method, `GET`, or opt to use `POST` by setting the `method` attribute.
- Set the `action` attribute to an endpoint of your choice and set the placeholder attribute, so the text of the search prompt reflects the scope of search. The set placeholder text will also populate the label text.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-search properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-search--events-properties"
  width="1200"
  height="1000"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
