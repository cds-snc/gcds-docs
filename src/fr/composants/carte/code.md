---
title: Carte
layout: 'layouts/component-documentation.njk'
translationKey: 'cardCode'
tags: ['cardFR', 'code']
date: 'git Last Modified'
---

## Créer une carte

Utilisez des cartes pour aider une personne à découvrir et à lire en un coup d'œil des résumés ou des éléments progressifs de renseignements sur un même thème.

## Codage et accessibilité des cartes

### Écrivez un titre facile à parcourir

Utilisez l'attribut `card-title` pour ajouter un titre court et descriptif à la carte.

### Sélectionnez le bon niveau de titre

Utilisez `card-title-tag` pour définir [le bon niveau](/fr/composants/titre/design/#classez-les-niveaux-de-titre-de-maniere-hierarchique) de titre pour la carte. La définition du niveau adapté pour le titre n'a pas d'incidence sur la taille de la police, mais elle permet de maintenir la bonne hiérarchie et l'accessibilité pour les technologies d'assistance.

### Ajoutez une `description` pour fournir plus d'informations

Ajoutez une description pour fournir plus d'informations sur le sujet de la carte:

- Utilisez l'attribut `description` pour fournir une description textuelle concise.
- Pour une description avec une mise en forme plus complexe, comme du texte en gras ou en italique, utilisez l'élément `slot` par défaut de la carte. **Évitez d'ajouter des éléments interactifs dans cet emplacement (slot), car ils peuvent entraîner des problèmes d'accessibilité. La carte elle-même est déjà interactive et dirigera la personne au bon endroit.**

### Utilisez un `badge` pour afficher l'état ou la catégorie d'une carte

- Utilisez l'attribut `badge` pour ajouter un état ou une catégorie dans le coin supérieur gauche de la carte.
- Voici des exemples courants d'états : Nouveau, Mis à jour, Bientôt disponible, En vedette.
- Voici des exemples courants de catégories : Vidéos, Articles, Rapports.
- Les badges sont personnalisables mais sont limités à 20 caractères maximum.

### Regroupez les cartes pour assurer une cohérence visuelle

Organisez les cartes à l'aide du [composant de la grille]({{ links.grid }}).

- Pour les écrans d'ordinateurs, utilisez 2 ou 3 cartes par rangée.
- Pour les écrans d'appareils mobiles, utilisez 1 carte par rangée.
- Essayez d'inclure les mêmes propriétés pour chaque carte d'une même section dans une page. Par exemple : si une carte comporte une image, toutes les cartes comportent une image.

{% include "partials/valid-props.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-card."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-card--events-properties&lang=fr"
  width="1200"
  height="1900"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
