---
title: S'impliquer
translationKey: getinvolved
layout: 'layouts/base.njk'
eleventyNavigation:
  key: getinvolvedFR
  title: S'impliquer
  locale: fr
  order: 3
  hideMain: true
templateEngineOverride: njk,md
---

# S'impliquer

Un système de design ne connaît jamais de fin. Nous nous engageons à construire avec les personnes qui utilisent nos produits. Voici nos travaux en cours et ceux qui s’en viennent.

Nous testons actuellement la version alpha de Système de design GC, ce qui correspond à la première version utilisable d’un produit. Nous faisons évoluer cette version en fonction des besoins courants au sein du GC et de ceux des gens que nous servons tous et toutes.

## Découvrez Système de design GC

<gcds-grid columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
  <gcds-card
    card-title="Recevez nos communications"
    href="{{ links.contactMailingList }}"
    description="Abonnez-vous à notre liste d'envoi pour manquer aucune communication de Système de design GC concernant les mises à jour, les lancements ou encore les évènements spéciaux."
  ></gcds-card>
  <gcds-card
    card-title="Participez à une demo"
    href="{{ links.registerDemo }}"
    description="Assistez à une présentation du prototypage et du développement d’expériences Web à l’aide du système de design et participez à une séance de questions-réponses."
  ></gcds-card>
</gcds-grid>

<hr class="mt-600"/>

## Contribuez à nos prochaines priorités

Vous pouvez contribuer à l’avenir de Système de design GC.

Nous recherchons activement des contributions pour les éléments suivants :

- **Des tableaux de données** pour organiser et afficher une grande quantité de données dans des rangées et des colonnes.

Nous nous intéressons également aux problèmes concernant les interactions avec les utilisateurs et utilisatrice ou aux solutions qui peuvent s’appliquer aux différents services du GC.

Soumettez vos contributions à nos prochaines priorités directement dans GitHub, en <gcds-link href="{{ links.githubGetStarted }}" external>créant un compte</gcds-link>.

Fournissez l'un des éléments suivants pour chaque composant ou modèle de page :

- **Exemples de designs** : captures d'écran, prototypes, liens vers des services en ligne.
- **Résultats de recherche** : recherches préliminaires, exemples de cas d'utilisation ou tests d'utilisabilité.
- **Code** : code de prototype ou de production, ou implémentations du produit.

<gcds-button button-role="secondary" type="link" href="{{ links.githubCompsPriority }}" external>Contribuer sur GitHub</gcds-button>
<gcds-button button-role="secondary" type="link" href="{{ links.contact }}" external>Contactez-nous</gcds-button>

<hr class="mt-600" />

## Autres nouveautés à venir

Plus de renseignements sur notre <gcds-link href="{{ links.roadmap }}" >feuille de route</gcds-link>.

{% include "partials/helpus.njk" %}
