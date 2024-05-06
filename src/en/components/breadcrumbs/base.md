---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-breadcrumbs
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/GC-Design-System?type=design&node-id=2353-7841&mode=design&t=TM0vYuC6hpDwd6Un-0
permalink: false
tags: ['breadcrumbsEN', 'header']
---

# Breadcrumbs <br>`<gcds-breadcrumbs>`

_Also called: breadcrumb trail._

Breadcrumbs is a path to the current page from each preceding level of the site's hierarchy.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Breadcrumbs component preview" %}

<div aria-hidden="true">
  <gcds-breadcrumbs>
    <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
    <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
    </gcds-breadcrumbs-item>
  </gcds-breadcrumbs>
</div>
{% endcomponentPreview %}
