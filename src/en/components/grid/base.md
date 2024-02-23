---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-grid
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=13172-65&mode=design&t=qwNFRgCKhnoUtRXO-0
permalink: false
tags: ['gridEN', 'header']
---

{{ locale }}

# Grid <br>`<gcds-grid>`

_Also called: layout, columns, columns layout, grid container._

A grid is a responsive, flexible column layout to position elements on a page.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Grid component preview" %}
<gcds-grid tag="article" columns-desktop="1fr 1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" gap="500">

  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
</gcds-grid>
{% endcomponentPreview %}
