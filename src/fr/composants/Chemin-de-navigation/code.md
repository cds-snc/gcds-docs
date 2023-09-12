---
title: Chemin de navigation
layout: 'layouts/component-documentation.njk'
translationKey: 'breadcrumbsCode'
tags: ['breadcrumbsFR', 'code']
date: 'git Last Modified'
---

## Créer un composant Chemin de navigation

Utilisez le chemin de navigation pour indiquer l'emplacement de la page actuelle par rapport à ses pages parents dans la structure du site.

## Codage et accessibilité pour le composant Chemin de navigation

### Commencez par le lien Canada.ca et le lien de la page d'accueil

- Maintenez le lien Canada.ca comme premier lien de chemin de navigation par défaut pour la plupart des pages et sites Web.
- Choisissez de remplacer le lien Canada.ca par le lien de la page d'accueil sur les pages transactionnelles et les sites Web ou produits autonomes. Pour supprimer le lien Canada.ca à la tête du chemin de navigation, définissez l'attribut `hide-canada-link` à `true`.

Conseil : Lorsqu'un processus n'a pas de page d'accueil traditionnelle, insérez le lien vers la page de départ du processus.

### Placez le chemin de navigation avant l'élément `<main>`

Placez le chemin de navigation en haut d'une page, avant l'élément `<main>`. De cette façon, le <a href="{{ links.button }}">bouton « Passer au contenu principal »</a> permettra à l'utilisateur·rice d'ignorer tous les liens de navigation, y compris les chemins de navigation.

### Utiliser les éléments du chemin de navigation pour les liens du chemin de navigation

Ajoutez un nouveau lien au composant Chemin de navigation à l'aide du composant `<gcds-breadcrumbs-item>`. Le lien peut être ajouté par le biais de la propriété `href`.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-breadcrumbs."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&id=components-breadcrumbs--events-properties"
  width="1200"
  height="1000"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
