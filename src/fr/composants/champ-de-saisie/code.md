---
title: Champ de saisie
layout: "layouts/component-documentation.njk"
translationKey: "inputCode"
tags: ['inputFR', 'code']
date: "git Last Modified"
---

## Créer un champ de saisie

Utilisez un champ de saisie pour obtenir une réponse courte d'une ligne.

## Codage et accessibilité des champs de saisie

### Adaptez le champ de saisie au type de réponse

- Définissez l'attribut de la taille du champ de saisie pour les réponses dont vous connaissez la longueur précise (taille "50" = 50 caractères). Par exemple, 6 caractères pour un code postal ou 10 caractères pour un numéro de téléphone.
- Réglez la saisie de manière à ce qu'elle couvre presque toute la boîte, par exemple à 90 %, lorsque vous ne savez pas la longueur exacte de la réponse.
- Utilisez le maximum de 75 caractères pour les réponses sans longueur fixe.

### Traitez les messages d'erreur et la validation

- Utilisez la propriété « required » pour activer le validateur nécessaire. La validation s'effectuera par défaut pendant l'événement onBlur.
- Si vous devez modifier l'événement de validation, utilisez l'attribut « validate-on ». Une validation onBlur est possible lorsque l'élément n'est plus ciblé. Il est également possible de procéder à une validation manuelle avec la méthode « validate ».
- Employez l'attribut « required » pour les champs obligatoires. Cet attribut insérera la mention « (obligatoire) » à la fin de la case à cocher. Une entrée manquante ou non valide affichera un [message d'erreur](/fr/composants/message-derreur/) intercalé.
- Supprimez l'attribut « error-message » par défaut si le champs de saisie est facultatif.

### Ajoutez du texte explicatif et un message d'erreur pour favoriser la réussite de la tâche

- Incluez un [message d'erreur](/fr/composants/message-derreur/) pour tous les champs de saisie obligatoires. Évitez d'inclure des messages d'erreur pour les champs de saisie facultatifs.
- Ajoutez du texte explicatif pour aider l'utilisateur·rice à fournir une valeur valide dans le champs de saisie et ainsi éviter les erreurs.
- Évitez d'ajouter du texte explicatif dans la boîte du champ, où il s'effacera une fois le champ sélectionné.

## TO DO: Get code content

<iframe
  title="Overview of gcds-input properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-input--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="1985"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>