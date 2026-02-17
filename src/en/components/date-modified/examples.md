---
title: Date modified
layout: 'layouts/component-documentation.njk'
translationKey: 'datemodifiedExamples'
tags: ['datemodifiedEN', 'examples']
date: 'git Last Modified'
---

{% examplesContent "en", "intro" %}
{% endexamplesContent %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `type`

The `type` attribute controls how the date-modified information is presented. By default, it is set to `date`, which displays the last modified date of the content:

{% examplesPreview %}
<gcds-date-modified>
  2023-01-26
</gcds-date-modified>
{% endexamplesPreview %}

When set to `version`, the component displays a version number instead:

{% examplesPreview %}
<gcds-date-modified type="version">
  v1.0.0
</gcds-date-modified>
{% endexamplesPreview %}
