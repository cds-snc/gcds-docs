---
title: Radios
layout: 'layouts/component-documentation.njk'
translationKey: 'radiosCode'
tags: ['radiosEN', 'code']
date: 'git Last Modified'
---

## Build radios

Use radios when you're expecting a person to select only one option from a short list of responses.

Radios help a person to make a choice by limiting their options.

## Coding and accessibility for radios

### Apply required attributes

For the radios to function properly, always use the following attributes with `gcds-radios`:

- `name`  
- `legend`  
- `options`

### Use the options attribute with radios

The options attribute takes an array of objects to render each radio button. The following is an example of one of the objects:

```javascript
{
  'id'!: '',
  'label'!: '',
  'value'!: '',
  'checked'?: '',
  'hint'?: '',
}
```

Within the options attribute, always use the object’s `id`, `label` and `value` properties for each radio button. The rest of the properties are optional.

### Use the `value` attribute

The `value` attribute provides a quick reference to the values of the checked radio button inside the `gcds-radios` component.

{% include "partials/error-message.njk" %}

### Include hint text for task success

Use the `hint` attribute or the `hint` key in the `options` object to add hint text to help a person choose an input and avoid an error state.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-radios properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-radios--events-properties&lang=en"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
