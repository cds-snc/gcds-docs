---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-pagination
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=1431-4617&mode=design&t=Z9AVq2wKmGmXJc7j-0
permalink: false
tags: ['paginationFR', 'header']
---

# Pagination <br>`<gcds-pagination>`

_Autres noms : index de pages, navigation de pages._

La pagination est une division du contenu entre plusieurs pages liées.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de la pagination" "px-0 lg:px-300 xl:px-300 py-400" %}
<gcds-pagination label="pagination simple" display="simple" previous-href="#" next-href="#" previous-label="Titre de la page" next-label="3 de 3" lang="fr">
</gcds-pagination>

<gcds-pagination label="pagination sous forme de liste" display="list" total-pages="15" current-page="9" lang="fr">
</gcds-pagination>
{% endcomponentPreview %}
