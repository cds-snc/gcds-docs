---
title: Search
layout: 'layouts/component-documentation.njk'
translationKey: 'searchExamples'
tags: ['searchEN', 'examples']
date: 'git Last Modified'
---

{% examplesContent "en", "intro" %}
{% endexamplesContent %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `action`

The `action` attribute controls where the form will send the form data.

{% examplesPreview %}
<gcds-search action="/search-results"></gcds-search>
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
<gcds-search search-id="search"></gcds-search>
{% endexamplesPreview %}

#### `suggested`

The `suggested` property specifies a list of predefined search times. The list will appear as a dropdown list on the input when it is focused.

{% examplesPreview %}
<gcds-search suggested="['red', 'green', 'blue']"></gcds-search>
{% endexamplesPreview %}

#### `value`

The `value` attribute specifies the `value` of the input. Setting the value will prepopulate the search input.

{% examplesPreview %}
<gcds-search value="button"></gcds-search>
{% endexamplesPreview %}
