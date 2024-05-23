---
title: S'impliquer
translationKey: getinvolved
layout: 'layouts/base.njk'
eleventyNavigation:
  key: getinvolvedFR
  title: S'impliquer
  locale: fr
  order: 4
  hideMain: true
---

# S'impliquer

Un système de design ne connaît jamais de fin. Nous sommes déterminés à développer Système de design GC avec les personnes qui utilisent nos produits.

À l'heure actuelle, nous testons le système en alpha, la première phase utilisable d'un produit. Nous y apportons des itérations en fonction de vos besoins et de ceux des personnes que vous servez.

## Découvrez ce que nous préparons

Nous faisons savoir quels sont nos travaux en cours et quels sont ceux qui s'en viennent. Pour obtenir des mises à jour sur Système de design GC, inscrivez-vous à notre liste d'envoi en utilisant notre [formulaire de contact]({{ links.contact }}).

### À venir

Voici les composants qui s'ajouteront bientôt au système. Restez à l'affût!

<div class="my-500">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr" gap="400">
    <gcds-card
      card-title="Icône"
      type="action"
      title-element="h3"
      description="Un repère visuel pour aider les utilisateur·rice·s à comprendre le contexte."
      role="listitem"
    >
      <div slot="footer">
        <p class="text-secondary">
          <small>
            <em>{{ documentation[locale].othernames }} glyphe, image, symbole.</em>
          </small>
        </p>
      </div>
    </gcds-card>
  </gcds-grid>
</div>

## Comment s'impliquer

### Contribuez à nos prochaines priorités

<div class="my-500">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr" gap="400">
    <gcds-card
      card-title="Balise"
      type="action"
      title-element="h3"
      description="Un composant utilisé pour les éléments qui doivent être étiquetés, catégorisés ou organisés à l'aide de mots-clés qui les décrivent."
      role="listitem"
    >
      <div slot="footer">
        <p class="text-secondary">
          <small>
            <em>{{ documentation[locale].othernames }} étiquette, label.</em>
          </small>
        </p>
      </div>
    </gcds-card>
    <gcds-card
      card-title="Image"
      type="action"
      title-element="h3"
      description="Un élément permettant d'afficher un contenu visuel optimisé et réactif."
      role="listitem"
    >
      <div slot="footer">
        <p class="text-secondary">
          <small>
            <em>{{ documentation[locale].othernames }} photo, image réactive, figure, photographie.</em>
          </small>
        </p>
      </div>
    </gcds-card>
    <gcds-card
      card-title="Tableau de données"
      type="action"
      title-element="h3"
      description="Une manière d'organiser et d'afficher une grande quantité de données dans des rangées et des colonnes."
      role="listitem"
    >
      <div slot="footer">
        <p class="text-secondary">
          <small>
            <em>{{ documentation[locale].othernames }} tableau, grille de données.</em>
          </small>
        </p>
      </div>
    </gcds-card>
  </gcds-grid>
</div>

Soumettez vos contributions à nos prochaines priorités directement dans GitHub. Si c’est la première fois que vous utilisez GitHub, suivez ces <gcds-link href="{{ links.githubGetStarted }}" external>instructions</gcds-link> pour créer votre compte.

Fournissez l'un des éléments suivants pour chaque composant ou configuration :

- **Exemples de designs** : captures d'écran, prototypes, liens vers des services en ligne.
- **Résultats de recherche** : recherches préliminaires, exemples de cas d'utilisation ou tests d'utilisabilité.
- **Code** : code de prototype ou de production, ou implémentations du produit.

<gcds-link href="{{ links.githubCompsPriority }}" external>Contribuer à nos prochaines priorités</gcds-link>

### Signalez un problème

Quelque chose ne fonctionne pas? Signalez le problème à notre équipe via GitHub. Si c’est la première fois que vous utilisez GitHub, suivez ces <gcds-link href="{{ links.githubGetStarted }}" external>instructions</gcds-link> pour créer votre compte. Avec un compte, vous pourrez voir tous les problèmes (issues) passés et serez informé des progrès accomplis.

<gcds-link href="{{ links.githubCompsBug }}" external>Signaler un problème</gcds-link>

{% include "partials/helpus.njk" %}
