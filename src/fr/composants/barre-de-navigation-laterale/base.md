---
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-side-nav
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=5633-11428&mode=design&t=4ltBpy3FPMc9pXcL-0
permalink: false
tags: ['sidenavigationFR', 'header']
---

# Barre de navigation latérale <br>`<gcds-side-nav>`

_Autres noms : menu latéral, navigation à gauche, navigation verticale_

La barre de navigation latérale est une liste de liens de navigation située du côté gauche de l'écran.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant barre de navigation latérale" "px-300 pt-400 pb-200" %}
<gcds-side-nav label="Aperçu du composant barre de navigation latérale" lang="fr">
<gcds-nav-link href="#">Lien de navigation 1</gcds-nav-link>
<gcds-nav-link href="#">Lien de navigation 2</gcds-nav-link>
<gcds-nav-group menu-label="Libellé du groupe de navigation" open-trigger="Libellé du groupe de navigation">
<gcds-nav-group menu-label="Libellé du groupe de navigation" open-trigger="Libellé du groupe de navigation">
<gcds-nav-link href="#">Lien de navigation 1</gcds-nav-link>
<gcds-nav-link href="#">Lien de navigation 2</gcds-nav-link>
</gcds-nav-group>
<gcds-nav-group menu-label="Libellé du groupe de navigation" open-trigger="Libellé du groupe de navigation">
<gcds-nav-link href="#">Lien de navigation 1</gcds-nav-link>
<gcds-nav-link href="#">Lien de navigation 2</gcds-nav-link>
</gcds-nav-group>
<gcds-nav-group menu-label="Libellé du groupe de navigation" open-trigger="Libellé du groupe de navigation">
<gcds-nav-link href="#">Lien de navigation 1</gcds-nav-link>
<gcds-nav-link href="#">Lien de navigation 2</gcds-nav-link>
<gcds-nav-link href="#">Lien de navigation 3</gcds-nav-link>
</gcds-nav-group>
</gcds-nav-group>
<gcds-nav-link href="#">Lien de navigation 3</gcds-nav-link>
</gcds-side-nav>
{% endcomponentPreview %}
