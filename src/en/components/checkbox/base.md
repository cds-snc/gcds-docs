---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-checkbox
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2760%3A8318&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ["checkboxEN", "header"]
---

<h1 class="mb-0">Checkbox</h1>
<h2 class="mt-0 mb-400"><code>&lt;gcds-checkbox&gt;</code></h2>

_Also called: checklist, check list._

A checkbox is a set of options for one or multiple selections.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="my-500 b-sm b-gray">
  <p class="container-full font-semibold px-300 py-200 bb-sm b-gray bg-light">
    Checkbox component preview
  </p>
  <div class="px-300 pt-400">
    <gcds-fieldset
      fieldset-id="fieldset"
      legend="Fieldset legend"
      hint="Fieldset hint."
    >
      <gcds-checkbox
        checkbox-id="form-check-1"
        label="Checkbox label"
        hint="This is a description or example to make it clearer."
        name="radio"
        checked
      ></gcds-checkbox>
      <gcds-checkbox
        checkbox-id="form-check-2"
        label="Checkbox label"
        hint="This is a description or example to make it clearer."
        name="radio"
      ></gcds-checkbox>
    </gcds-fieldset>
  </div>
</div>
