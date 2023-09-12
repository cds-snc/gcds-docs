---
title: Case à cocher
layout: 'layouts/component-documentation.njk'
translationKey: 'checkboxCode'
tags: ['checkboxFR', 'code']
date: 'git Last Modified'
---

## Créer une case à cocher

Utilisez une case à cocher avec un [jeu de champs]({{ links.fieldset }}) lorsque vous vous attendez à ce que l’utilisateur·rice choisisse plus d’une option dans une courte liste d’éléments en réponse à une question ou une instruction.

## Accessibilité et codage des cases à cocher

### Utilisez un jeu de champs et l’attribut obligatoire

- Regroupez les options de cases à cocher et nommer le groupe en utilisant la [composante de jeu de champs]({{ links.fieldset }}).
- Utilisez le jeu de champs `legend` et l’attribut `hint` pour le nom du groupe et ses instructions.
- Pour les groupes obligatoires, sélectionnez l’attribut `required` dans le jeu de champs. La sélection de l’attribut `required` permet la validation et la gestion des erreurs pour le groupe de cases à cocher.

### Pour une seule case à cocher

- Évitez d’utiliser un jeu de champs pour les cases à cocher avec une seule case à cocher, comme pour une confirmation que les modalités ont été lues avant l’inscription.
- Utilisez la propriété `required` pour activer le validateur nécessaire. La validation s’effectuera par défaut pendant l’événement `onBlur`.
- Si vous devez modifier l’événement de validation, utilisez l’attribut `validate-on`. Une validation `onBlur` est possible lorsque l’élément n’est plus ciblé. Il est également possible de procéder à une validation manuelle avec la méthode `validate`.
- Employez l’attribut `required` lorsqu’une seule case à cocher doit être remplie. Cet attribut insérera la mention « (obligatoire) » à la fin de la case à cocher.
- Conservez l’attribut `error-message` par défaut pour une seule case à cocher qui doit être validée. Une entrée manquante affichera un message d’erreur intercalé.
- Supprimez l’attribut `error-message` par défaut si la case à cocher est facultative.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-checkbox."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-checkbox--events-properties"
  width="1200"
  height="1800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
