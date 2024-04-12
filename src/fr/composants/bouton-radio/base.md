---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-radio
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=818%3A3759&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['radioFR', 'header']
---

# Bouton radio <br>`<gcds-radio>`
<gcds-error-message message="[FR] This component is deprecated as of v0.21.0"></gcds-error-message>

[FR] Please see <gcds-link href="https://github.com/cds-snc/gcds-components/releases/tag/gcds-components-v0.21.0">Release v0.21.0</gcds-link> for details

_Autres noms : case d’option, groupe radio._

Un bouton radio permet de proposer plusieurs options de réponse pour un choix unique.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de radio" "px-300 pt-400 pb-200" %}
<gcds-fieldset fieldset-id="fieldset" legend="Légende" hint="Texte explicatif/Exemple de message.">
<gcds-radio radio-id="form-radio-1" label="Libellé" hint="Ceci est une description ou un exemple à titre de clarification." name="radio" checked>
</gcds-radio>

<gcds-radio radio-id="form-radio-2" label="Libellé" hint="Ceci est une description ou un exemple à titre de clarification." name="radio">
</gcds-radio>
</gcds-fieldset>
{% endcomponentPreview %}
