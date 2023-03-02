---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-stepper
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2945%3A10028&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['stepperEN', 'header']
---

<h1 class="mb-0">Stepper</h1>
<h2 class="mt-0 mb-400"><code>&lt;gcds-stepper&gt;</code></h2>

_Also called: progress indicator, steps._

A stepper is a progress tracker for a multi-step process.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="my-500 b-sm b-gray">
  <p class="container-full font-semibold px-300 py-200 bb-sm b-gray bg-light">
    Stepper component preview
  </p>
  <div class="px-300 pt-400 pb-100">
    <gcds-stepper current-step="1" total-steps="4"></gcds-stepper>
  </div>
</div>
