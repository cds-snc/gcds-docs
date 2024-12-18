---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-notice
figma: https://www.figma.com/design/mh2maMG2NBtk41k1O1UGHV/GC-Design-System?node-id=23721-2461&node-type=canvas&t=IEaHSvrdWCzlv6iL-0
permalink: false
tags: ['noticeEN', 'header']
---

# Notice <br>`<gcds-notice>`

_Also called: Contextual alert._

The notice is a short, prominent message that’s part of the page content.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Notice component preview" %}
<gcds-notice
  type="success"
  notice-title="Success notice title"
  notice-title-tag="h2"
>
  <gcds-text margin-bottom="0">This is a success message.</gcds-text>
</gcds-notice>
{% endcomponentPreview %}
