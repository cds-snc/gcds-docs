---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-textarea
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=856%3A2774&t=CNFu5vZBMMrGho6u-0
permalink: false
tags: ['textareaEN', 'header']
---

# Text area <br>`<gcds-textarea>`

_Also called: text box._

A text area is a space to enter long-form information in response to a question or instruction.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Text area component preview" "px-300 pt-400" %}
<gcds-textarea textarea-id="textarea-example" label="Label" hint="Hint / Example message." value="Text area content.">
</gcds-textarea>
{% endcomponentPreview %}
