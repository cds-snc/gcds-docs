---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-grid
figma: https://www.figma.com/file/o4SguSZdar2CCFzSkWNrmB/Syst%C3%A8me-de-design-GC?type=design&node-id=48-9883&mode=design&t=1DaL24vHpjRRfHHm-0
permalink: false
tags: ['gridFR', 'header']
---

# Grille <br>`<gcds-grid>`

_Autres noms : mise en page, colonnes, disposition en colonnes, boîte de style grille._

Une grille est une mise en page réactive et flexible.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de grille" %}
<gcds-grid tag="article" columns-desktop="1fr 1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">

  <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
</gcds-grid>
{% endcomponentPreview %}
