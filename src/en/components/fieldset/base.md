---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-fieldset
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=2328-7660&mode=design&t=qwNFRgCKhnoUtRXO-0
permalink: false
tags: ['fieldsetEN', 'header']
---

# Fieldset <br>`<gcds-fieldset>`

_Also called: form field._

A fieldset is a group of multiple form components or elements.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Fieldset component preview" "px-225 pt-300" %}
<gcds-fieldset fieldset-id="fieldset" legend="Legend" hint="Hint / Example message.">
<gcds-input input-id="form-input" label="Input label" hint="Hint / Example message." size="6">
</gcds-input>
<gcds-select select-id="form-select" label="Select label" hint="Hint / Example message." default-value="Select option">

  <option value="option-1">Option 1</option>
  <option value="option-2">Option 2</option>
  <option value="option-3">Option 3</option>
</gcds-select>
</gcds-fieldset>
{% endcomponentPreview %}
