---
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-top-nav
figma: https://www.figma.com/file/o4SguSZdar2CCFzSkWNrmB/Syst%C3%A8me-de-design-GC?type=design&node-id=114-1348&mode=design&t=1DaL24vHpjRRfHHm-0
permalink: false
tags: ['topnavigationFR', 'header']
---

# Barre de navigation supérieure <br>`<gcds-top-nav>`

_Autres noms : menu du site, navigation, barre de navigation._

Une barre de navigation supérieure est une liste horizontale de liens de page.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Aperçu du composant de barre de navigation supérieure" %}

<div aria-hidden="true">
  <gcds-top-nav label="Aperçu du composant de barre de navigation supérieure" alignment="right" lang="fr">
    <gcds-nav-link href="#red" slot="home">Notification GC</gcds-nav-link>
    <gcds-nav-link href="#red">Pourquoi Notification GC</gcds-nav-link>
    <gcds-nav-group menu-label="Fonctionnalités"  open-trigger="Fonctionnalités">
      <gcds-nav-link href="#red" current>Créer des gabarits réutilisables</gcds-nav-link>
      <gcds-nav-link href="#red">Personnaliser les messages</gcds-nav-link>
      <gcds-nav-link href="#red">Planifier la date et l’heure d’envoi</gcds-nav-link>
      <gcds-nav-link href="#red">Envoyer des messages automatiquement</gcds-nav-link>
    </gcds-nav-group>
    <gcds-nav-link href="#red">Nous joindre</gcds-nav-link>
  </gcds-top-nav>
</div>
{% endcomponentPreview %}
