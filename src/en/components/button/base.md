---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-button
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=850%3A2968&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['buttonEN', 'header']
---

<h1 class="mb-0">Button</h1>
<h2 class="mt-0 mb-400"><code>&lt;gcds-button&gt;</code></h2>

_Also called: call to action, CTA, link._

A button is an interactive object that highlights an important or common action.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="my-500 b-sm b-gray">
  <p class="container-full font-semibold px-300 py-200 bb-sm b-gray bg-light">
    Button component preview
  </p>
  <div class="px-300 py-400">
    <gcds-button button-role="primary">Primary label</gcds-button>
    <gcds-button button-role="secondary">Secondary label</gcds-button>
    <gcds-button button-role="danger">Danger label</gcds-button>
    <gcds-button button-role="skip-to-content">Skip-to-content label</gcds-button>
    <gcds-button type="link" button-style="text-only" href="#">Text-only label</gcds-button>
  </div>
</div>
