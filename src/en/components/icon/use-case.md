---
title: Icon
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: iconEN
  title: Icon
  locale: en
  parent: componentsEN
  otherNames: symbol, glyph, graphic.
  description: A symbol that represents an action or idea.
  thumbnail: /images/common/components/preview-icon.svg
  alt: 'Four symbols: An envelope, a magnifying class, a phone, and an arrow pointing down towards a horizontal line.'
  state: published
translationKey: 'icon'
tags: ['iconEN', 'usage']
permalink: /en/components/icon/
date: 'git Last Modified'
---

## Problems icons solve

Use an icon to:

- Clarify information with a visual reference.
- Highlight key actions or states, like a checkmark for validation.
- Scan content quicker and reduce cognitive load.

<hr/>

## Related components

<a href="{{ links.text }}">Text</a> to display written content in a styled and formatted paragraph.

<a href="{{ links.notice }}">Notice</a> to display a short, prominent message.

<hr class="mt-600"/>

## Icon use cases

### Emphasize information

Choose an icon to match the information you want to emphasize.

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 3fr" align-items="start">
  {% componentPreview "" "px-225 py-450" "mt-500" %}
    <p class="text-center">
      <gcds-icon size="h2" name="info-circle" label="A filled-in circle with the letter “i” in the centre."></gcds-icon>
    </p>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Info-circle</gcds-heading>
    <gcds-text>Non-critical but helpful information.</gcds-text>
  </div>

{% componentPreview "" "px-225 py-450" "mt-500" %}

<p class="text-center">
<gcds-icon size="h2" name="warning-triangle" label="A filled-in triangle with the letter “i” in the centre."></gcds-icon>
</p>
{% endcomponentPreview %}

  <div>
    <gcds-heading tag="h3">Warning-triangle</gcds-heading>
    <gcds-text>Cautionary warning with no action needed.</gcds-text>
  </div>

{% componentPreview "" "px-225 py-450" "mt-500" %}

<p class="text-center">
<gcds-icon size="h2" name="exclamation-circle" label="A filled-in circle with an exclamation mark in the centre."></gcds-icon>
</p>
{% endcomponentPreview %}

  <div>
    <gcds-heading tag="h3">Exclamation-circle</gcds-heading>
    <gcds-text>Critical warning before an action.</gcds-text>
  </div>

{% componentPreview "" "px-225 py-450" "mt-500" %}

<p class="text-center">
<gcds-icon size="h2" name="checkmark-circle" label="A filled-in circle with a checkmark in the centre."></gcds-icon>
</p>
{% endcomponentPreview %}

  <div>
    <gcds-heading tag="h3">Checkmark-circle</gcds-heading>
    <gcds-text>Confirmation of completion or successful actions.</gcds-text>
  </div>
</gcds-grid>
</div>

### Indicate action

Choose an icon to match the action you want to indicate.

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 3fr" align-items="start">
  {% componentPreview "" "px-50 py-400" "mt-500" %}
  <gcds-grid columns="repeat(4, 50px)" columns-tablet="repeat(4, 50px)" gap="150" justify-content="center">
    <gcds-icon size="h2" name="chevron-left" label="An arrow pointing left."></gcds-icon>
    <gcds-icon size="h2" name="chevron-right" label="An arrow pointing right."></gcds-icon>
    <gcds-icon size="h2" name="chevron-up" label="An arrow pointing up."></gcds-icon>
    <gcds-icon size="h2" name="chevron-down" label="An arrow pointing down."></gcds-icon>
  </gcds-grid>
  {% endcomponentPreview %}
  <div>
    <gcds-heading tag="h3">Chevron-[left/right/up/down]</gcds-heading>
    <gcds-text>Expand / collapse content or indicate direction.</gcds-text>
  </div>

{% componentPreview "" "px-225 py-450" "mt-500" %}

<p class="text-center">
<gcds-icon size="h2" name="close" label="An “x”."></gcds-icon>
</p>
{% endcomponentPreview %}

  <div>
    <gcds-heading tag="h3">Close</gcds-heading>
    <gcds-text>Cancel an action or close a flow.</gcds-text>
  </div>

{% componentPreview "" "px-225 py-450" "mt-500" %}

<p class="text-center">
<gcds-icon size="h2" name="download" label="An arrow pointing down towards a horizontal line."></gcds-icon>
</p>
{% endcomponentPreview %}

  <div>
    <gcds-heading tag="h3">Download</gcds-heading>
    <gcds-text>Download a file.</gcds-text>
  </div>

{% componentPreview "" "px-225 py-450" "mt-500" %}

<p class="text-center">
<gcds-icon size="h2" name="email" label="An envelope."></gcds-icon>
</p>
{% endcomponentPreview %}

  <div>
    <gcds-heading tag="h3">Email</gcds-heading>
    <gcds-text>Send an email.</gcds-text>
  </div>

{% componentPreview "" "px-225 py-450" "mt-500" %}

<p class="text-center">
<gcds-icon size="h2" name="external" label="An arrow pointing outside of the top right corner of a square."></gcds-icon>
</p>
{% endcomponentPreview %}

  <div>
    <gcds-heading tag="h3">External-link</gcds-heading>
    <gcds-text>Open a link in a new tab or window.</gcds-text>
  </div>

{% componentPreview "" "px-225 py-450" "mt-500" %}

<p class="text-center">
<gcds-icon size="h2" name="phone" label="A telephone."></gcds-icon>
</p>
{% endcomponentPreview %}

  <div>
    <gcds-heading tag="h3">Phone</gcds-heading>
    <gcds-text>Call a phone number.</gcds-text>
  </div>

{% componentPreview "" "px-225 py-450" "mt-500" %}

<p class="text-center">
<gcds-icon size="h2" name="search" label="A magnifying glass."></gcds-icon>
</p>
{% endcomponentPreview %}

  <div>
    <gcds-heading tag="h3">Search</gcds-heading>
    <gcds-text>Search for specific information.</gcds-text>
  </div>
</gcds-grid>
</div>
