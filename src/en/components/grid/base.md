---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-grid
permalink: false
tags: ['gridEN', 'header']
---

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
