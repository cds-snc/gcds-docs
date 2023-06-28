---
title: Chemin de navigation
layout: "layouts/component-documentation.njk"
translationKey: "breadcrumbsCode"
tags: ['breadcrumbsFR', 'code']
date: "git Last Modified"
---

## Créer un composant Chemin de navigation

Utilisez le chemin de navigation pour indiquer l'emplacement de la page actuelle par rapport à ses pages parents dans la structure du site.

## Codage et accessibilité pour le composant Chemin de navigation

### Commencez par le lien Canada.ca

À partir du lien Canada.ca, conduisez les gens vers la page d'accueil du site Canada.ca dans la langue utilisée.

### Placez le chemin de navigation avant l'élément `<main>`.

Placez le chemin de navigation en haut d'une page, avant l'élément `<main>`. De cette façon, le lien « Passer au contenu principal » peut permettre à l'utilisateur·rice d'ignorer tous les liens de navigation, y compris les chemins de navigation.

### Utiliser les éléments du chemin de navigation pour les liens du chemin de navigation

Ajoutez un nouveau lien au composant Chemin de navigation à l'aide du composant `<gcds-breadcrumbs-item>`. Le lien peut être ajouté par le biais de la propriété `<href>`.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-breadcrumbs."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-breadcrumbs--default"
  width="1200"
  height="950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
