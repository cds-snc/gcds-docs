---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-select
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=856%3A2826&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['selectFR', 'header']
---

# Sélection <br>`<gcds-select>`

_Autres noms : menu déroulant, menu de sélection._

Une sélection présente une longue liste d’options parmi lesquelles un seul choix est fait.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de sélection" %}
<gcds-select select-id="select-preview" label="Libellé" hint="Texte explicatif / Exemple de message." default-value="Sélectionner une option">

  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
  <option>Option 5</option>
  <option>Option 6</option>
  <option>Option 7</option>
  <option>Option 8</option>
</gcds-select>
{% endcomponentPreview %}
