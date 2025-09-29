---
title: Carte
layout: 'layouts/component-documentation.njk'
translationKey: 'cardDesign'
tags: ['cardFR', 'design']
date: 'git Last Modified'
---

## Structure de la carte

<ol class="anatomy-list">
  <li>Le <strong>conteneur</strong> contient tous les éléments d'une carte.</li>
  <li>Le <strong>badge</strong> (facultatif) est un indicateur visuel renseignant sur l'état ou la catégorie de la carte. Le texte du badge ne devrait pas dépasser 20 caractères.</li>
  <li>L'<strong>image</strong> (facultative) a un format de 1:1, 16:9 ou 4:3.</li>
  <li>Le <strong>titre</strong> est court et attire l'attention sur le sujet du contenu de la carte.</li>
  <li>La <strong>description</strong> (facultative) contient du texte destiné à accompagner le titre. Elle résume en quelques lignes le sujet de la carte ou affiche une liste de renseignements sur un même sujet, comme les informations sur un évènement.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-card-anatomy.svg" alt="La structure d'une carte représentée par 5 éléments: le conteneur, le badge, l'image, le titre et la description."/>

## Design et accessibilité des cartes

### Écrivez un titre facile à parcourir

- Utilisez un titre qui informe les personnes sur le contenu de la carte.
- Choisissez une brève description ou un appel à l'action pour le titre.

### Choisissez les renseignements à ajouter à la carte

- Envisagez d'ajouter une image reflétant le titre pour rendre les cartes plus reconnaissables.
- Envisagez d'ajouter une description pour fournir plus d'informations sur le sujet de la carte.
- Envisagez d'ajouter un badge pour renseigner les personnes sur l'état ou la catégorie du contenu de la carte.  Voici des exemples courants d'états : Nouveau, Mis à jour, Bientôt disponible, En vedette. Voici des exemples courants de catégories : Vidéos, Articles, Rapports. Les badges sont personnalisables mais sont limités à 20 caractères maximum.

### Regroupez les cartes pour assurer une cohérence visuelle

Organisez les cartes à l'aide du [composant grille]({{ links.grid }}).

- Pour les écrans d'ordinateur, utilisez 2 ou 3 cartes par rangée.
- Pour les écrans d'appareils mobiles, utilisez 1 carte par rangée.
- Essayez d'inclure les mêmes propriétés pour chaque carte d'une même section dans une page. Par exemple : si une carte comporte une image, toutes les cartes comportent une image.

<img src="/images/fr/components/example/example-cards-in-grid.svg" alt="Cartes groupées en deux rangées. La première rangée contient 3 cartes (carte à 4 colonnes de largeur). La deuxième rangée contient deux cartes (carte à 6 colonnes de largeur)"/>
