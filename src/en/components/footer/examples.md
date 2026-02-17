---
title: Footer
layout: 'layouts/component-documentation.njk'
translationKey: 'footerExamples'
tags: ['footerEN', 'examples']
date: 'git Last Modified'
---

{% examplesContent "en", "intro" %}
{% endexamplesContent %}

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `contextual-heading`

The `contextual-heading` attribute defines the heading text for the contextual navigation section in the footer. This heading is also used to label the footer’s navigation landmark, supporting clearer structure and accessibility.

{% examplesPreview %}
<gcds-footer contextual-heading="Contextual navigation" contextual-links='{ "About us": "#", "Contact": "#" }'>
</gcds-footer>
{% endexamplesPreview %}

#### `contextual-links`

The `contextual-links` attribute defines the set of links displayed in the footer’s contextual navigation section. It accepts an object where each key represents the link label and each value represents the corresponding URL. Format: `{ link-label: link-href }`.

{% examplesPreview %}
<gcds-footer contextual-heading="Contextual navigation" contextual-links='{ "About us": "#", "Contact": "#" }'>
</gcds-footer>
{% endexamplesPreview %}

#### `display`

The `display` attribute controls which sections of the footer are rendered. By default, it is set to `compact`, displaying only the sub-footer section:

{% examplesPreview %}
<gcds-footer>
</gcds-footer>
{% endexamplesPreview %}

When it is set to `full`, both the main footer and sub-footer sections are displayed:

{% examplesPreview %}
<gcds-footer display="full">
</gcds-footer>
{% endexamplesPreview %}

#### `sub-links`

The `sub-links` attribute defines the set of links displayed in the sub-footer section. It accepts an object where each key represents the link label and each value represents the corresponding URL. Format: `{ link-label: link-href }`.

{% examplesPreview %}
<gcds-footer sub-links='{ "Terms and conditions": "#", "Privacy": "#" }'>
</gcds-footer>
{% endexamplesPreview %}
