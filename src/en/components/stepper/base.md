---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-stepper
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=970-2581&mode=design&t=qwNFRgCKhnoUtRXO-0
permalink: false
tags: ['stepperEN', 'header']
---

# Stepper <br>`<gcds-stepper>`

_Also called: progress indicator, steps._

A stepper is a progress tracker for a multi-step process.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Stepper component preview" "px-300 pt-400 pb-100" %}
<gcds-stepper current-step="1" total-steps="4"></gcds-stepper>
{% endcomponentPreview %}
