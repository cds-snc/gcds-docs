---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-pagination
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=1431-4617&mode=design&t=Z9AVq2wKmGmXJc7j-0
permalink: false
tags: ['paginationEN', 'header']
---

# Pagination <br>`<gcds-pagination>`

_Also called: page index, page navigation._

Pagination is a division of content into multiple linked pages.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Pagination component preview" "xs:px-0 sm:px-0 md:px-0" %}
<gcds-pagination
  label="Simple pagination example"
  display="simple"
  previous-href="#"
  next-href="#"
  previous-label="Title of page"
  next-label="3 of 3"
>
</gcds-pagination>

<gcds-pagination
  label="List pagination example"
  display="list"
  total-pages="15"
  current-page="9"
>
</gcds-pagination>
{% endcomponentPreview %}
