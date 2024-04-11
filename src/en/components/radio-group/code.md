---
title: Radio Group
layout: 'layouts/component-documentation.njk'
translationKey: 'radiogroupCode'
tags: ['radiogroupEN', 'code']
# TODO: update this after in git
# date: "git Last Modified"
---

## Build a Radio Group

Use a radio group with a [fieldset]({{ links.fieldset }})  when you're expecting a person to select only one option from a short list of responses.

The radio group helps a person to make a choice by limiting their options.

## Coding and accessibility for Radio Group

### Apply required attributes
For the radio group to function properly, always use the following attributes with `<gcds-radio-group>`:

- `name`
- `options`

### Use the options attribute with radio group

The options attribute takes an array of objects to render each radio button. The following is an example of one of the objects:

{% highlight "js" %}
{
  'id'!: '',
  'label'!: '',
  'value'!: '',
  'required'?: '',
  'disabled'?: '',
  'checked'?: '',
  'hint'?: '',
}
{% endhighlight %}


- Within the options attribute, always use the object's `id`, `label` and `value` properties for each radio button. The rest of the properties are optional.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-radio-group properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-radio-group--events-properties"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
