---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-button
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=850%3A2968&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['buttonEN', 'header']
---

# Button <br>&lt;gcds-button&gt;

_Also called: call to action, CTA, link._

A button is an interactive object that highlights an important or common action.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="b-sm b-gray px-250 py-400 my-500">
  <gcds-button button-role="primary">Primary label</gcds-button>
  <gcds-button button-role="secondary">Secondary label</gcds-button>
  <gcds-button button-role="danger">Danger label</gcds-button>
  <gcds-button button-role="skip-to-content">Skip-to-content label</gcds-button>
  <gcds-button type="link" button-style="text-only" href="#">Text-only label</gcds-button>
</div>
