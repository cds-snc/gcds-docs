---
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-link
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=2646-8407&mode=design&t=Fc8G98RMn9FnseDi-0
permalink: false
tags: ['linkEN', 'header']
---

# Link <br>`<gcds-link>`

_Also called: anchor, hyperlink, call to action._

A link is a navigational element that brings a person to a new page, website, file, or section on the current page.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Link component preview" %}
<gcds-link class="d-block mb-400" href="#">Navigation link</gcds-link>
<gcds-link class="d-block mb-400" href="download.pdf" download="file.pdf" type="application/pdf">Download document (PDF, 1.5 MB)</gcds-link>
<gcds-link class="d-block mb-400" href="mailto:test@test.com?subject=Test%20Email">Email</gcds-link>
<gcds-link class="d-block" href="tel:1234567890">Call</gcds-link>
{% endcomponentPreview %}
