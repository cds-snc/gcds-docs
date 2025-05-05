---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-breadcrumbs
figma: https://www.figma.com/file/o4SguSZdar2CCFzSkWNrmB/Syst%C3%A8me-de-design-GC?type=design&node-id=48-2119&mode=design&t=1DaL24vHpjRRfHHm-0
permalink: false
tags: ['breadcrumbsFR', 'header']
---

# Chemin de navigation <br>`<gcds-breadcrumbs>`

_Autres noms : fil d’Ariane_

Un chemin d'accès à la page actuelle à partir de chaque niveau précédent de la hiérarchie du site.

{% requiredOn locale true %}
{% endrequiredOn %}

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% baseComponentPreview "Aperçu du composant de chemin de navigation" page.filePathStem "?externalLinks=true" %}
{% endbaseComponentPreview %}
