---
title: Image - CSS Shortcuts
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsImageEN
  title: Image
  locale: en
  parent: shortcutsEN
  order: 1
shortcuts:
  - class: 'img-full'
    style: 'width: 100%;'
  - class: 'img-responsive'
    style: 'max-width: 100%;'
translationKey: 'shortcutsImage'
date: 'git Last Modified'
---

# Image

The image class sets the `width` or `max-width` properties of an image. It controls how big the image is.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Full<br/>`img-full`

{% shortcutPreview %}

<figure>
  <img src="/images/common/css-shortcuts/image-example.png" alt="A horizontal banner with purple flowers." class="img-full"/>
  <figcaption>This image takes up 100% of the available width.</figcaption>
</figure>
{% endshortcutPreview %}

### Responsive<br/>`img-responsive`

{% shortcutPreview %}

<figure class="container-md">
  <img src="/images/common/css-shortcuts/image-example.png" alt="A horizontal banner with purple flowers." class="img-responsive"/>
  <figcaption>This image scales with its parent element.</figcaption>
</figure>
{% endshortcutPreview %}
