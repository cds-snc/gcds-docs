---
title: Radio group
layout: 'layouts/component-documentation.njk'
translationKey: 'radiogroupCode'
tags: ['radiogroupEN', 'code']
date: 'git Last Modified'
---

## Build a radio group

Use a radio group with a [fieldset]({{ links.fieldset }}) when you're expecting a person to select only one option from a short list of responses.

The radio group helps a person to make a choice by limiting their options.

## Coding and accessibility for radio group

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

