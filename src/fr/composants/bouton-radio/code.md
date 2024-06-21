---
title: Bouton radio
layout: 'layouts/component-documentation.njk'
translationKey: 'radioCode'
tags: ['radioFR', 'code']
date: 'git Last Modified'
nocrawl: true
---

## Créer un bouton radio

Utilisez un groupe de boutons radio avec un [jeu de champs]({{ links.fieldset }}) lorsque vous attendez d’une personne qu’elle ne sélectionne qu’une réponse parmi une courte liste d’options.

Le groupe de boutons radio aide les gens à faire un choix grâce à un nombre limité d’options.

## Accessibilité et codage pour les boutons radio

### Utilisez un jeu de champs et l’attribut obligatoire

- Regrouper les boutons radio et nommer ce groupe en utilisant les [composantes de jeu de champs]({{ links.fieldset }}).
- Utilisez le jeu de champs `legend` et l’attribut `hint` pour le nom du groupe et ses instructions.
- Pour les groupes obligatoires, sélectionnez l’attribut `required` dans le jeu de champs. La sélection de l’attribut `required` permet la validation et la gestion des erreurs dans le groupe des boutons radio.