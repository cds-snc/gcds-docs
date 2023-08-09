---
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-top-nav
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=4738-10759&mode=design&t=PaKRkbpFLPNx99bv-0
permalink: false
tags: ['topnavigationFR', 'header']
---

# Barre de navigation supérieure <br>`<gcds-top-nav>`

_Autres noms : menu du site, navigation, barre de navigation._

Une barre de navigation supérieure est une liste horizontale de liens de page.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de barre de navigation supérieure" %}
<gcds-top-nav label="topbar" alignment="right" lang="fr">
  <gcds-nav-link href="#red" slot="home">Accueil</gcds-nav-link>
  <gcds-nav-link href="#red">Installation</gcds-nav-link>
  <gcds-nav-link href="#red">Fondements</gcds-nav-link>
  <gcds-nav-link href="#red" current >Composants</gcds-nav-link>
  <gcds-nav-group menu-label="Nous joindre sous-menu"  open-trigger="Nous joindre">
    <gcds-nav-link href="#red">GitHub</gcds-nav-link>
    <gcds-nav-link href="#red">Slack</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endcomponentPreview %}
