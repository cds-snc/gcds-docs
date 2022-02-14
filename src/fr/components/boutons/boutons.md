---
title: Boutons
layout: "layouts/base.njk"
eleventyNavigation:
  key: buttons
  title: Boutons
  locale: fr
  parent: components
translationKey: "buttons"
---

# Boutons

Un bouton est un objet intéractif qui souligne un action important ou fréquent pour la personne utilisant votre produit.  

## Comment fonctionne le bouton

Une etiquette courte ou one icône signale la fonction du button à la personne qui utilise votre produit. La personne commande un bouton en déclenchant un action de souris, telle qu’une touche de souris, un action keydown, une touche/intéraction tactile, ou clic de souris.

L’activation d’un bouton permet à la personne d’initier une réponse ou changer de lieu ou d’état.

<br/>

## Usage de bouton

Utiliser les boutons comme moyen simple et clair d’initier un action. Les boutons expriment un accord ou un désaccord, un changement de lieu ou d’état, ou une direction respective aux informations, telles que: 
- sauvegarder, supprimer,  télécharger. 
- vider de données saisies.
- envoyer un formulaire ou une demande.
- consentir à ou accepter.
- faire un choix binaire.
- entrer ou quitter un produit web, comme un login à un lieu sécurisé, un formulaire, ou tutoriel.

Dans une application, les buttons sont employés au lieu de lien de text pour des choses comme:   
- le contrôle de mouvement, c’est à dire aller d’un écran à la prochaine dans un flow.
- des liens externes (dans de maniére que signale qu’ils sont externes).

## Composantes connexes

Privilèger les liens lorsque : 
- un action est moins important.  
- un déplacement de la page web est nécessaire.

Privilèger les menus ou selections, telle qu’une liste déroulante ou bouton radio, lorsque: 
- un choix à plus de deux options. 

<br/>

## Composante de base bouton

### Tâches de bouton

Vous choisissez une tâche selon ce que le bouton doit faire. Chaque tâche a une fonction unique. Elles sont présentées de façon qu’une personne utilisant votre produit puisse prévoir où trouver l’action dont elle cherche.

Un bouton primaire est un genre de tâche de bouton.

### États de bouton

Chaque tâche à des états correspondants. La tâche d’un bouton change en relation avec les interactions d’une personne. Les états démontrent comment button peut être utilisé et aussi comment quelqu’un l’a utilisé, si il l’a récemment selectionné.  

## Comment la composante de bouton est accessible

Les couleurs, l’espacement et la typographie sont pré-établis pour être accesssible.   
- Le soulignement démontre que le bouton peut être tapé, cliqué ou activé.
- La taille des marges ainsi que le padding fait en sorte que le plan tactile est accessible.   
- La taille et l’espace blanc sont établis pour que la surface de touche est assez grand. 
- La hauteur et le poid de la fonte appui la conception réactive, l’accessibilité et le design de contenu bilingue.  
- Les boutons sont idenitifiable et en bon contraste à cause des couleurs de bouton et de fonte.


<br/>

[Implementation for Developing]({{ "/fr/components/boutons/development" | url }}) | [Implementation for Designing]({{ "/fr/components/boutons/design" | url }})
