---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-textarea
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=856%3A2774&t=CNFu5vZBMMrGho6u-0
permalink: false
tags: ['textareaFR', 'header']
---

<h1 class="mb-0">Zone de texte</h1>
<h2 class="mt-0 mb-400"><code>&lt;gcds-textarea&gt;</code></h2>

_Également appelé : saisie de texte, zone d'entrée._

Une zone de texte est un espace permettant de saisir une réponse détaillée à une question ou à une directive.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="my-500 b-sm b-gray">
  <p class="container-full font-semibold px-300 py-200 bb-sm b-gray bg-light">
    Aperçu du composant de zone de texte
  </p>
  <div class="px-300 pt-400">
    <gcds-textarea
      textarea-id="textarea-example"
      label="Libellé de champ"
      hint="Texte explicatif / Exemple de message."
      value="Contenu de la zone de texte."
    >
    </gcds-textarea>
  </div>
</div>
