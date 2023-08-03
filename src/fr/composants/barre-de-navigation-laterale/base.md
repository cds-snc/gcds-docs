---
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-side-navigation
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=5633-11428&mode=design&t=4ltBpy3FPMc9pXcL-0
permalink: false
tags: ['sidenavigationFR', 'header']
---

# Barre de navigation latérale <br>`<gcds-side-nav>`

_Autres noms : menu latéral, navigation à gauche, navigation verticale_

Une barre de navigation latérale consiste en une liste de liens de navigation située du côté gauche de l’écran.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant barre de navigation latérale" "pt-400 pb-200" %}
<gcds-side-nav label="Aperçu du composant barre de navigation latérale" lang="fr">
  <gcds-nav-link href="#">Top level link 1</gcds-nav-link>
  <gcds-nav-link href="#">Top level link 2</gcds-nav-link>
  <gcds-nav-group menu-label="Preview menu" open-trigger="Top level link 3">
    <gcds-nav-link href="#">Sub level link 1</gcds-nav-link>
    <gcds-nav-link href="#">Sub level link 2</gcds-nav-link>
  </gcds-nav-group>
</gcds-side-nav>
{% endcomponentPreview %}
