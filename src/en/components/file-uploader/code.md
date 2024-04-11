---
title: File uploader
layout: 'layouts/component-documentation.njk'
translationKey: 'fileuploaderCode'
tags: ['fileuploaderEN', 'code']
date: 'git Last Modified'
---

## Build a file uploader

Use the file uploader to allow a person to select and review files they’d like to include with their submission.

## Code and accessibility for file uploader

### Apply required attributes

For the file uploader to function properly, always use the following attributes with `<gcds-file-uploader>`:

- `name`
- `label`
- `uploader-id`

{% include "partials/error-message.njk" %}

### Upload multiple files

Allow the selection of more than one file using the `multiple` attribute.

### Validate file types for upload

Define the file types the file uploader accepts using the `accept` attribute.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-file-uploader properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-file-uploader--events-properties&lang=en"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
