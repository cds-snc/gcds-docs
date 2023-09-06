---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-radio
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=818%3A3759&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['radioEN', 'header']
---

# Radio <br>`<gcds-radio>`

_Also called: radio button, radio group._

A radio is a set of options for a single selection.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Radio component preview" "px-300 pt-400 pb-200" %}
<gcds-fieldset
  fieldset-id="fieldset"
  legend="Legend"
  hint="Hint / Example message."
>
  <gcds-radio
    radio-id="form-radio-1"
    label="Label"
    hint="Description or example to make the option clearer."
    name="radio"
    checked
  >
  </gcds-radio>
    <gcds-radio
    radio-id="form-radio-2"
    label="Label"
    hint="Description or example to make the option clearer."
    name="radio"
  >
  </gcds-radio>
</gcds-fieldset>
{% endcomponentPreview %}
