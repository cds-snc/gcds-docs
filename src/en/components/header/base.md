---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-header
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2928%3A13680&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['headerEN', 'header']
---

# Header <br>`<gcds-header>`

_Also called: global header, brand header._

The header is the responsive Government of Canada branded header landmark.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Header component preview" "pt-400 pb-200" %}
<gcds-header lang-href="#" skip-to-href="#">
  <gcds-site-menu alignment="right" slot="menu">
    <a href="" class="home-link link-inherit link-no-underline" slot="left">
      Home link
    </a>
    <ul >
    <li><a href="">Site menu link</a></li>
    <li><a href="">Site menu link</a></li>
    <li><a href="">Site menu link</a></li>
    </ul>
  </gcds-site-menu>
  <gcds-breadcrumbs hide-canada-link slot="menu">
    <gcds-breadcrumbs-item href="#">Home</gcds-breadcrumbs-item>
    <gcds-breadcrumbs-item href="#">Components</gcds-breadcrumbs-item>
  </gcds-breadcrumbs>
</gcds-header>
{% endcomponentPreview %}
