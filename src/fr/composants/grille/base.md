---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-grid
permalink: false
tags: ['gridFR', 'header']
---

# Grille <br>`<gcds-grid>`

_Autres noms : mise en page, colonnes, disposition en colonnes, boîte de style grille._

Une grille est une mise en page réactive et flexible.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de grille" %}
<gcds-grid tag="article" columns-desktop="1fr 1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" gap="500">
  <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
</gcds-grid>
{% endcomponentPreview %}
