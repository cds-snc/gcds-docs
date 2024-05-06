---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-button
figma: https://www.figma.com/file/o4SguSZdar2CCFzSkWNrmB/Syst%C3%A8me-de-design-GC?type=design&node-id=8-2054&mode=design&t=1DaL24vHpjRRfHHm-0
permalink: false
tags: ['buttonFR', 'header']
---

# Bouton <br>`<gcds-button>`

_Autres noms : appel à l’action._

Le bouton est un composant interactif qui met en évidence une action importante ou commune.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de bouton" %}
<gcds-button class="me-400" button-role="primary">Soumettre</gcds-button>
<gcds-button class="me-400" button-role="secondary">Annuler</gcds-button>
<gcds-button class="me-400" button-role="danger">Supprimer</gcds-button>
{% endcomponentPreview %}
