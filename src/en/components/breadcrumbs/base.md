---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-breadcrumbs
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2353%3A7848&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['breadcrumbsEN', 'header']
---

# Breadcrumbs <br>`<gcds-breadcrumbs>`

_Also called: breadcrumb trail._

Breadcrumbs is a path to the current page from each preceding level of the site's hierarchy.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Breadcrumbs component preview" %}
<gcds-breadcrumbs>
<gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
<gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
</gcds-breadcrumbs-item>
{% endcomponentPreview %}
