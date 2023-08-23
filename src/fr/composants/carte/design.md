---
title: carte - Composants
layout: "layouts/component-documentation.njk"
translationKey: "cardDesign"
tags: ['cardFR', 'design']
date: "git Last Modified"
---

## Structure d’une carte

<ol class="anatomy-list">
  <li>La <strong>boîte</strong> contient tous les éléments d’une carte.</li>
  <li>L'<strong>image</strong> est un visuel 1:1 ou 16:9 qui peut être inclus dans la carte.</li>
  <li>La <strong>balise</strong> est un élément supplémentaire pouvant être ajouté pour décrire le type de contenu concerné.</li>
  <li>Le <strong>titre de la carte</strong> est une brève déclaration sur le thème du contenu de la carte. Il inclut un lien permettant d’accéder à davantage de renseignements.</li>
  <li>La <strong>description</strong> contient du texte destiné à accompagner le lien du titre. Elle offre un résumé du thème de la carte en quelques lignes ou une liste progressive de renseignements sur un même thème, comme une liste d’informations relatives à un évènement.</li>
  <li>Le <strong>pied de page de la carte</strong> peut appeler à l’action si un bouton y est inclus, ou contenir des métadonnées. Les métadonnées peuvent inclure une date, un lieu, un auteur ou une autrice ou tout autre renseignement pertinent.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-card-anatomy.svg" alt="Une image détaillant la structure d’une carte."/>

## Design et accessibilité des cartes

### Écrivez un titre facile à lire en un coup d’œil

- Utilisez un titre comme indicateur pour préciser à une personne ce qu’elle va trouver dans la carte.
- Assurez-vous que le titre soit court pour que les gens puissent le lire en un coup d’œil. 
- Choisissez une brève description ou un appel à l’action pour le titre. 
- Écrivez un titre clair pour aider une personne à choisir quoi lire.  

### Choisissez les renseignements à ajouter à la carte

- Envisagez d’ajouter une image correspondant au titre pour rendre les cartes plus reconnaissables.
- Incluez une balise pour indiquer le thème et rendre la carte plus reconnaissable au premier coup d’œil.  
- Choisissez d’ajouter à la carte les métadonnées pertinentes. Celles-ci offriront davantage de contexte aux renseignements de base présentés dans le titre et la description. 

### Sélectionnez les métadonnées à inclure

Si vous incluez des métadonnées, choisissez le renseignement le plus important pour votre lectorat. Par exemple : 

- Estimation de la longueur ou de la durée de lecture
- Source, référence ou auteur ou autrice. 
- Évaluation ou nombre de « J’aime » ou d’enregistrements. 
- Date ou lieu. 

### Regroupez plusieurs cartes pour une meilleure cohérence visuelle

Lorsque votre page comprend plusieurs cartes :

- Organisez plusieurs cartes à l’aide d’un composant Grille.
- Sur une même section, veillez à utiliser le même type de carte. Choisissez des cartes de types liens ou des cartes de type actions pour toutes les cartes au lieu d’utiliser un mélange des deux. 
- Essayez d’inclure les mêmes propriétés pour chaque carte appartenant à la même section d’une page. Exemple : si une carte comporte une image, toutes les cartes comportent une image.
