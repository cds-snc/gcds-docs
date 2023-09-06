---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-checkbox
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2760%3A8318&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['checkboxFR', 'header']
---

# Case à cocher<br>`<gcds-checkbox>`

_Autres noms : liste de contrôle, liste de vérification._

La case à cocher permet de proposer un ensemble d'options en vue d'une sélection simple ou multiple.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de case à cocher" "px-300 pt-400" %}
<gcds-fieldset
  fieldset-id="fieldset"
  legend="Légende"
  hint="Texte explicatif/Exemple de message."
>
  <gcds-checkbox
    checkbox-id="form-check-1"
    label="Libellé"
    hint="Ceci est une description ou un exemple à titre de clarification."
    name="radio"
    checked
  ></gcds-checkbox>
  <gcds-checkbox
    checkbox-id="form-check-2"
    label="Libellé"
    hint="Ceci est une description ou un exemple à titre de clarification."
    name="radio"
  ></gcds-checkbox>
</gcds-fieldset>
{% endcomponentPreview %}
