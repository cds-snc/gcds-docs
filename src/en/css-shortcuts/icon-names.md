---
title: Icon names
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsIconNamesEN
  title: Icon names
  locale: en
  parent: shortcutsIconImageEN
  order: 1
shortcuts:
  - class: 'gcds-icon-info-circle'
    style: 'content: "\e90a";'
  - class: 'gcds-icon-warning-triangle'
    style: 'content: "\e90d";'
  - class: 'gcds-icon-exclamation-circle'
    style: 'content: "\e909";'
  - class: 'gcds-icon-checkmark-circle'
    style: 'content: "\e908";'
  - class: 'gcds-icon-chevron-left'
    style: 'content: "\e901";'
  - class: 'gcds-icon-chevron-right'
    style: 'content: "\e902";'
  - class: 'gcds-icon-chevron-up'
    style: 'content: "\e903";'
  - class: 'gcds-icon-chevron-down'
    style: 'content: "\e900";'
  - class: 'gcds-icon-close'
    style: 'content: "\e90b";'
  - class: 'gcds-icon-download'
    style: 'content: "\e906";'
  - class: 'gcds-icon-email'
    style: 'content: "\e905";'
  - class: 'gcds-icon-external'
    style: 'content: "\e904";'
  - class: 'gcds-icon-phone'
    style: 'content: "\e90c";'
  - class: 'gcds-icon-search'
    style: 'content: "\e907";'
shortcutsPartialClass: 'icon-close'
translationKey: 'shortcutsIconNames'
date: 'git Last Modified'
---

# Icon names

The icon class sets the `content` property and other icon base styles like the icon font family, style and weight. It controls what <gcds-link href="{{ links.icon }}">gcds-icon</gcds-link> to display.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Info circle<br/>`gcds-icon-info-circle`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-info-circle"></span> This element has an info circle icon.
</p>
{% endshortcutPreview %}

### Warning triangle<br/>`gcds-icon-warning-triangle`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-warning-triangle"></span> This element has a warning triangle icon.
</p>
{% endshortcutPreview %}

### Exclamation circle<br/>`gcds-icon-exclamation-circle`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-exclamation-circle"></span> This element has an exclamation circle icon.
</p>
{% endshortcutPreview %}

### Checkmark circle<br/>`gcds-icon-checkmark-circle`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-checkmark-circle"></span> This element has an checkmark circle icon.
</p>
{% endshortcutPreview %}

### Chevron left<br/>`gcds-icon-chevron-left`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-chevron-left"></span> This element has a chevron icon pointing left.
</p>
{% endshortcutPreview %}

### Chevron right<br/>`gcds-icon-chevron-right`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-chevron-right"></span> This element has a chevron icon pointing right.
</p>
{% endshortcutPreview %}

### Chevron up<br/>`gcds-icon-chevron-up`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-chevron-up"></span> This element has a chevron icon pointing up.
</p>
{% endshortcutPreview %}

### Chevron down<br/>`gcds-icon-chevron-down`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-chevron-down"></span> This element has a chevron icon pointing down.
</p>
{% endshortcutPreview %}

### Close <br/>`gcds-icon-close`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-close"></span> This element has a close icon.
</p>
{% endshortcutPreview %}

### Download <br/>`gcds-icon-download`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-download"></span> This element has a download icon.
</p>
{% endshortcutPreview %}

### Email <br/>`gcds-icon-email`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-email"></span> This element has an email icon.
</p>
{% endshortcutPreview %}

### External <br/>`gcds-icon-external`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-external"></span> This element has an external icon.
</p>
{% endshortcutPreview %}

### Phone <br/>`gcds-icon-phone`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-phone"></span> This element has a phone icon.
</p>
{% endshortcutPreview %}

### Search <br/>`gcds-icon-search`

{% shortcutPreview %}

<p>
  <span class="gcds-icon-search"></span> This element has a search icon.
</p>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
{% include "partials/state.njk" %}
