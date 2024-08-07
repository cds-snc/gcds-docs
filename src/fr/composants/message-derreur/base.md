---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-error-message
figma: https://www.figma.com/file/o4SguSZdar2CCFzSkWNrmB/Syst%C3%A8me-de-design-GC?type=design&node-id=48-7032&mode=design&t=1DaL24vHpjRRfHHm-0
permalink: false
tags: ['errormessageFR', 'header']
---

# Message d'erreur <br>`<gcds-error-message>`

_Autres noms : erreur ou indicateur d’erreur._

Un message d’erreur est une description d’un problème représentant un obstacle à l’objectif de l’utilisateur·rice.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de message d'erreur" "px-300 pt-400 pb-100" %}
<gcds-error-message message-id="example-message">
Message d'erreur.
</gcds-error-message>
{% endcomponentPreview %}
