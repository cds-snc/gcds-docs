---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-header
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2928%3A13680&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['headerEN', 'header']
---

<h1 class="mb-0">Header</h1>
<h2 class="mt-0 mb-400"><code>&lt;gcds-header&gt;</code></h2>

_Also called: global header, brand header._

The header is the responsive Government of Canada branded header landmark.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="my-500 b-sm b-gray">
  <p class="container-full font-semibold px-300 py-200 bb-sm b-gray bg-light">
    Header component preview
  </p>
  <div class="px-300 pt-400 pb-200">
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
  </div>
</div>
