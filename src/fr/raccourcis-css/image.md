---
title: Image
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsImageFR
  title: Image
  locale: fr
  parent: shortcutsIconImageFR
  order: 1
shortcuts:
  - class: 'img-full'
    style: 'width: 100%;'
  - class: 'img-responsive'
    style: 'max-width: 100%;'
shortcutsPartialClass: 'img-responsive'
translationKey: 'shortcutsImage'
date: 'git Last Modified'
---

# Image

La classe image définit les propriétés `width` ou `max-width` d'une image. Elle détermine la taille de l'image.

{% include "partials/shortcuts-table.njk" %}

## Examples

### Pleine<br/>`img-full`

{% shortcutPreview "" %}

<figure>
  <img src="/images/common/css-shortcuts/image-example.png" alt="Une bannière horizontale avec des fleurs violettes." class="img-full"/>
  <figcaption>Cette image occupe 100 % de la largeur disponible.</figcaption>
</figure>
{% endshortcutPreview %}

### Réactive<br/>`img-responsive`

{% shortcutPreview "" %}

<figure class="container-md">
  <img src="/images/common/css-shortcuts/image-example.png" alt="Une bannière horizontale avec des fleurs violettes." class="img-responsive"/>
  <figcaption>Cette image s'adapte à son élément parent.</figcaption>
</figure>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
