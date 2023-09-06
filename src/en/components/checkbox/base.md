---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-checkbox
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2760%3A8318&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ["checkboxEN", "header"]
---

# Checkbox<br>`<gcds-checkbox>`

_Also called: checklist, check list._

A checkbox is a set of options for one or multiple selections.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Checkbox component preview" "px-300 pt-400" %}
<gcds-fieldset
  fieldset-id="fieldset"
  legend="Legend"
  hint="Hint / Example message."
>
  <gcds-checkbox
    checkbox-id="form-check-1"
    label="Label"
    hint="Description or example to make the option clearer."
    name="radio"
    checked
  ></gcds-checkbox>
  <gcds-checkbox
    checkbox-id="form-check-2"
    label="Label"
    hint="Description or example to make the option clearer."
    name="radio"
  ></gcds-checkbox>
</gcds-fieldset>
{% endcomponentPreview %}
