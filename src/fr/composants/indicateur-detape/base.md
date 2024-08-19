---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-stepper
figma: https://www.figma.com/file/o4SguSZdar2CCFzSkWNrmB/Syst%C3%A8me-de-design-GC?type=design&node-id=114-2656&mode=design&t=1DaL24vHpjRRfHHm-0
permalink: false
tags: ['stepperFR', 'header']
---

# Indicateur d'étape <br>`<gcds-stepper>`

_Autres noms : indicateur de progrès, étapes._

L'indicateur d'étape est un marqueur de progression pour un processus à plusieurs étapes.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant indicateur d'étape" "px-300 pt-400 pb-100" %}
<gcds-stepper current-step="1" total-steps="4">Titre de la section</gcds-stepper>
{% endcomponentPreview %}
