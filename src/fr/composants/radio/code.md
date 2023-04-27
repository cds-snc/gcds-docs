---
title: Radio
layout: "layouts/component-documentation.njk"
translationKey: "radioCode"
tags: ['radioFR', 'code']
date: "git Last Modified"
---

## Créer un bouton radio

Utilisez un bouton radio avec un jeu de champs lorsque vous vous attendez à ce que l’utilisateur·rice choisisse une seule option d’une courte liste d’éléments en réponse à une question ou à une instruction.

Les boutons radio aident les utilisateur·rice·s a faire un choix en limitant leurs options.

## Accessibilité et codage pour les boutons radio

### Utilisez un jeu de champs et l’attribut obligatoire

- Regrouper les boutons radio et nommer ce groupe en utilisant les [composantes de jeu de champs]({{ links.fieldset }}).  
- Utilisez le jeu de champs `legend` et l’attribut `hint` pour le nom du groupe et ses instructions.
- Pour les groupes obligatoires, sélectionnez l’attribut `required` dans le jeu de champs. La sélection de l’attribut `required` permet la validation et la gestion des erreurs dans le groupe des boutons radio.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-radio."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-radio--default"
  width="1200"
  height="1670"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
