---
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-side-nav
figma: https://www.figma.com/file/o4SguSZdar2CCFzSkWNrmB/Syst%C3%A8me-de-design-GC?type=design&node-id=114-1347&mode=design&t=1DaL24vHpjRRfHHm-0
permalink: false
tags: ['sidenavigationFR', 'header']
---

# Barre de navigation latérale <br>`<gcds-side-nav>`

_Autres noms : menu latéral, navigation à gauche, navigation verticale_

La barre de navigation latérale est une liste de liens de navigation située du côté gauche de l'écran.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant barre de navigation latérale" "px-300 pt-400 pb-200" %}

<div aria-hidden="true">
  <gcds-side-nav label="Formulaires GC" lang="fr">
    <gcds-nav-link href="#">Pourquoi Formulaires GC</gcds-nav-link>
    <gcds-nav-group menu-label="Fonctionnalités" open-trigger="Fonctionnalités">
      <gcds-nav-group menu-label="Créez et gérez des formulaires vous-même" open-trigger="Créez et gérez des formulaires vous-même">
        <gcds-nav-link href="#">Révisez dans les deux langues officielles côte à côte</gcds-nav-link>
        <gcds-nav-link href="#">Obtenez les réponses aux formulaires en toute sécurité</gcds-nav-link>
        <gcds-nav-link href="#">Testez votre formulaire avant la publication</gcds-nav-link>
      </gcds-nav-group>
      <gcds-nav-group menu-label="Publier des formulaires fiables et conviviaux" open-trigger="Publier des formulaires fiables et conviviaux">
        <gcds-nav-link href="#">Des formulaires pouvant être remplis n’importe où</gcds-nav-link>
        <gcds-nav-link href="#">Des formulaires qui aident à gagner du temps et de l’énergie</gcds-nav-link>
        <gcds-nav-link href="#">Des formulaires ayant l’apparence du GC</gcds-nav-link>
      </gcds-nav-group>
    </gcds-nav-group>
    <gcds-nav-link href="#">Guides de référence</gcds-nav-link>
    <gcds-nav-link href="#">Nous contacter</gcds-nav-link>
  </gcds-side-nav>
</div>
{% endcomponentPreview %}
