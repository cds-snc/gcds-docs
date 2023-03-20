---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-stepper
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=2945%3A10028&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['stepperFR', 'header']
---

# Indicateur d'étape <br>`<gcds-stepper>`

_Autres noms : indicateur de progrès, étapes_

Un indicateur d'étape offre un suivi de l'avancement d'un processus comportant plusieurs étapes.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant indicateur d'étape" "pt-400 pb-100" %}
<gcds-stepper current-step="1" total-steps="4"></gcds-stepper>
{% endcomponentPreview %}
