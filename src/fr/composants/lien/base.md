---
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-link
figma: https://www.figma.com/file/o4SguSZdar2CCFzSkWNrmB/Syst%C3%A8me-de-design-GC?type=design&node-id=8-5038&mode=design&t=1DaL24vHpjRRfHHm-0
permalink: false
tags: ['linkFR', 'header']
---

# Lien <br>`<gcds-link>`

_Autres noms : ancre, lien hypertexte, appel à l'action._

Un lien est un élément de navigation qui amène une personne à une nouvelle page, à un autre site Web, à un fichier ou à une nouvelle section de la page actuelle.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de lien" %}
<gcds-link class="d-block mb-300" href="#">Lien de navigation</gcds-link>
<gcds-link class="d-block mb-300" href="long-filename.pdf" download="file.pdf" type="application/pdf">Télécharger le document (PDF, 1,5 Mb)</gcds-link>
<gcds-link class="d-block mb-300" href="mailto:test@test.com?subject=Test%20Email">Envoyer un courriel</gcds-link>
<gcds-link class="d-block" href="tel:1234567890">Appeler</gcds-link>
{% endcomponentPreview %}
