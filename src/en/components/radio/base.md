---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-radio
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=818%3A3759&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['radioEN', 'header']
---

<h1 class="mb-0">Radio</h1>
<h2 class="mt-0 mb-400"><code>&lt;gcds-radio&gt;</code></h2>

_Also called: radio button, radio group._

A radio is a set of options for a single selection.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="my-500 b-sm b-gray">
  <p class="container-full font-semibold px-300 py-200 bb-sm b-gray bg-light">
    Radio component preview
  </p>
  <div class="px-300 pt-400 pb-200">
    <gcds-fieldset
      fieldset-id="fieldset"
      legend="Fieldset legend"
      hint="Fieldset hint"
    >
      <gcds-radio
        radio-id="form-radio-1"
        label="Radio label"
        hint="This is a description or example to make it clearer."
        name="radio"
        checked
      >
      </gcds-radio>
        <gcds-radio
        radio-id="form-radio-2"
        label="Radio label"
        hint="This is a description or example to make it clearer."
        name="radio"
      >
      </gcds-radio>
    </gcds-fieldset>
  </div>
</div>
