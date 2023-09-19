---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-select
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=856%3A2826&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['selectEN', 'header']
---

# Select <br>`<gcds-select>`

_Also called: dropdown, select menu._

A select provides a large list of options for single selection.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Select component preview" %}
<gcds-select select-id="select-preview" label="Label" hint="Hint / Example message." default-value="Select option.">

  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
  <option>Option 5</option>
  <option>Option 6</option>
  <option>Option 7</option>
  <option>Option 8</option>
</gcds-select>
{% endcomponentPreview %}
