---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-fieldset
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2687%3A9818&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['fieldsetEN', 'header']
---

# Fieldset <br>&lt;gcds-fieldset&gt;

_Also called: form field._

A fieldset is a group of multiple form components or elements.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="b-sm b-gray px-250 py-400 my-500">
  <gcds-fieldset
    fieldset-id="fieldset"
    legend="Fieldset legend"
    hint="Fieldset hint."
  >
    <gcds-input
      input-id="form-input"
      label="Input label"
      hint="Hint / example message."
      size="6"
    >
    </gcds-input>
    <gcds-select
      select-id="form-select"
      label="Select label"
      hint="Hint / example message."
    >
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
    </gcds-select>
  </gcds-fieldset>
</div>
