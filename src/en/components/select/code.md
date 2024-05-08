---
title: Select
layout: 'layouts/component-documentation.njk'
translationKey: 'selectCode'
tags: ['selectEN', 'code']
date: 'git Last Modified'
---

## Build a select

Use the select to give multiple (7 or more) options to answer a single question. The select helps users make a choice by limiting their options.

## Code and accessibility for select

### Apply required attributes

For the select to function properly, always use the following attributes with `<gcds-select>`:

- `name`
- `label`
- `select-id`

### Set the default value

Use the `default-value` attribute to set the first option in the select list. This avoids pre-selection of an option.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-select properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-select--events-properties&lang=en"
  width="1200"
  height="2200"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
