---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-date-input
figma: https://www.figma.com/design/o4SguSZdar2CCFzSkWNrmB/Syst%C3%A8me-de-design-GC?node-id=851-3247&node-type=canvas&t=Us7CENqCQWbKIk7H-0
permalink: false
tags: ['dateinputFR', 'header']
---

# Champ de date <br>`<gcds-date-input>`

_Autres noms : date, zone de date, date connue._

Le champ de date est un espace permettant de saisir une date connue.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de champ de date" %}
<gcds-date-input format="full" legend="Légende" name="example-default" lang="fr" hint="Le jour peut être composé de 1 ou 2 chiffres. L’année doit inclure 4 chiffres.">
</gcds-date-input>
<gcds-date-input format="compact" legend="Légende" name="example-default" lang="fr" hint="L’année doit inclure 4 chiffres.">
</gcds-date-input>
{% endcomponentPreview %}
