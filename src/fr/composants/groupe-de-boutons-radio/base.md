---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-radio-group
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=818%3A3759&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['radiogroupFR', 'header']
---

# Groupe de boutons radio <br>`<gcds-radio-group>`

_Autres noms : radio button, radio._

Le groupe de boutons radio est un ensemble d’options permettant une sélection unique.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant du groupe de boutons radio" "px-225 pt-300 pb-150" %}
<gcds-fieldset fieldset-id="fieldset" legend="Légende" hint="Texte explicatif/Exemple de message.">
<gcds-radio-group name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification."},{"id":"form-radio-2","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification."}]'>
</gcds-radio-group>
</gcds-fieldset>
{% endcomponentPreview %}