---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-checkbox
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2760%3A8318&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ["checkboxEN", "header"]
---

# Checkbox<br>&lt;gcds-checkbox&gt;

_Also called: checklist, check list._

A checkbox is a question with a set of options for one or multiple selections.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="b-sm b-gray px-250 pt-400 my-500">
  <gcds-fieldset
    fieldset-id="fieldset"
    legend="Checkbox legend"
    hint="Fieldset hint."
  >
    <gcds-checkbox
      checkbox-id="form-check-1"
      label="Checkbox option"
      hint="This is a description or example to make it clearer."
      name="radio"
      checked
    ></gcds-checkbox>
    <gcds-checkbox
      checkbox-id="form-check-2"
      label="Checkbox option"
      hint="This is a description or example to make it clearer."
      name="radio"
    ></gcds-checkbox>
  </gcds-fieldset>
</div>
