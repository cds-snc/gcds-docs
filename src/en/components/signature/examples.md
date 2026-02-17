---
title: Signature
layout: 'layouts/component-documentation.njk'
translationKey: 'signatureExamples'
tags: ['signatureEN', 'examples']
date: 'git Last Modified'
---

{% examplesContent "en", "intro" %}
{% endexamplesContent %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `has-link`

The `has-link` attribute controls whether the signature links to Canada.ca. By default, it's set to `false`, meaning the signature is displayed as static content and isn't clickable:

{% examplesPreview %}
<gcds-signature></gcds-signature>
{% endexamplesPreview %}

When it's set to `true`, the signature becomes clickable and links to Canada.ca:

{% examplesPreview %}
<gcds-signature has-link="true"></gcds-signature>
{% endexamplesPreview %}

#### `type`

The `type` attribute determines which graphic is displayed in the signature component. By default, it is set to `signature`, rendering the signature graphic:

{% examplesPreview %}
<gcds-signature></gcds-signature>
{% endexamplesPreview %}

When it's set to `wordmark`, the component displays the wordmark graphic instead:

{% examplesPreview %}
<gcds-signature type="wordmark"></gcds-signature>
{% endexamplesPreview %}

#### `variant`

The `variant` attribute controls the colour of the signature component. By default, it is set to `colour`, rendering the coloured version of the signature.

{% examplesPreview %}
<gcds-signature></gcds-signature>
{% endexamplesPreview %}

When it's set to `white`, the component displays the white version of the signature, suitable for dark backgrounds:

{% examplesPreview %}

<div class="bg-dark p-300">
  <gcds-signature variant="white"></gcds-signature>
</div>
{% endexamplesPreview %}
