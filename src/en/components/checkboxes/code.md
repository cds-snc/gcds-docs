---
title: Checkboxes
layout: 'layouts/component-documentation.njk'
translationKey: 'checkboxesCode'
tags: ['checkboxesEN', 'code']
date: 'git Last Modified'
---

## Build checkboxes

Use checkboxes when you’re expecting a person to select more than one option from a short list of responses.

## Coding and accessibility for checkboxes

### Apply required attributes

For the checkboxes to function properly, always use the following attributes with `gcds-checkboxes`:

- `name`  
- `options`

### Use the `options` attribute with checkboxes

The `options` attribute takes an array of objects to render each checkbox. The following is an example of one of the objects:

```javascript
{
  'id'!: '',
  'label'!: '',
  'value'?: '',
  'checked'?: '',
  'hint'?: '',
}
```

Within the `options` attribute, always use the object's `id` and `label` properties for each checkbox. The rest of the properties are optional.

### Use the `value` attribute

- The `value` attribute provides a quick reference to the values of checked checkboxes inside the `gcds-checkboxes` component.  
- `value` is formatted as an array of strings. Example: `[“checkboxOneValue”, checkboxTwoValue”]`

{% include "partials/error-message.njk" %}

### For a group of checkboxes

- Use the `legend` attribute when passing more than one object to the `options` attribute. `gcds-checkboxes` will not render if there is no `legend` defined with more than one checkbox.  
- Use the `hint` and `error-message` attributes to add additional information to the fieldset built into `gcds-checkboxes`.

### For a single checkbox

- Pass a single object to the `options` attribute to render a single checkbox without a fieldset.  
- Use the `hint` and `error-message` attributes to add additional information to the checkbox.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-checkbox properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-checkboxes--events-properties&lang=en"
  width="1200"
  height="1950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
