---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-breadcrumbs
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2353%3A7848&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['breadcrumbsFR', 'header']
---

# Chemin de navigation <br>`<gcds-breadcrumbs>`

_Autres noms : fil d’Ariane_

Un chemin d'accès à la page actuelle à partir de chaque niveau précédent de la hiérarchie du site.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de chemin de navigation" %}
<gcds-breadcrumbs>
<gcds-breadcrumbs-item href="#">Page d'accueil</gcds-breadcrumbs-item>
<gcds-breadcrumbs-item href="#">Lien vers la page parent</gcds-breadcrumbs-item>
</gcds-breadcrumbs-item>
{% endcomponentPreview %}
