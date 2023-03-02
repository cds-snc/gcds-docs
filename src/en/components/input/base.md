---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-input
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=855%3A2811&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['inputEN', 'header']
---

<h1 class="mb-0">Input</h1>
<h2 class="mt-0 mb-400"><code>&lt;gcds-input&gt;</code></h2>

_Also called: text input, input field._

An input is a space to enter short-form information in response to a question or instruction.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="my-500 b-sm b-gray">
  <p class="container-full font-semibold px-300 py-200 bb-sm b-gray bg-light">
    Input component preview
  </p>
  <div class="px-300 pt-400">
    <gcds-input
      input-id="input-example"
      label="Input label"
      hint="Hint / example message."
    >
    </gcds-input>
  </div>
</div>
