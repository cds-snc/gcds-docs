---
title: Zone de texte
layout: "layouts/component-documentation.njk"
translationKey: "textareaCode"
tags: ['textareaFR', 'code']
date: "git Last Modified"
---

## Créer une zone de texte

Utilisez des zones de texte pour obtenir des réponses libres pouvant s'étendre sur plusieurs lignes.

La zone de texte donne aux utilisateur·rice·s la possibilité de fournir les renseignements qu'ils souhaitent partager dans une réponse détaillée.

## Codage et accessibilité des zones de texte

### Adaptez la zone de texte au type de réponse

- Utilisez des zones de texte pour les réponses qui peuvent nécessiter plus de 75 caractères.
- Faites en sorte que la hauteur d'une zone de texte soit proportionnelle à la quantité de texte que vous attendez de l'utilisateur·rice. Vous pouvez définir la hauteur d'une zone de texte en spécifiant l'attribut « rows ».
- Évitez de définir une largeur inférieure à 50 % (1/2 largeur).
- Utilisez le maximum pour les réponses sans longueur fixe.

### Traitez les messages d'erreur et la validation

- Utilisez la propriété « required » pour activer le validateur nécessaire. La validation s'effectuera par défaut pendant l'événement onBlur.
- Si vous devez modifier l'événement de validation, utilisez l'attribut « validate-on ». Une validation onBlur est possible lorsque l'élément n'est plus ciblé. Il est également possible de procéder à une validation manuelle avec la méthode « validate ».
- Employez l'attribut « required » pour les champs obligatoires. Cet attribut insérera la mention « (obligatoire) » à la fin de la case à cocher.
- Conservez l'attribut « error-message » par défaut pour une zone de texte obligatoire qui doit être validée. Une entrée manquante ou non valide affichera un [message d'erreur](/fr/composants/message-derreur/) intercalé.
- Supprimez l'attribut « error-message » par défaut si la zone de texte est facultative.

### Ajoutez du texte explicatif et un message d'erreur pour favoriser la réussite de la tâche

- Incluez un [message d'erreur](/fr/composants/message-derreur/) pour toutes les zones de texte obligatoires. Évitez d'inclure des [messages d'erreur](/fr/composants/message-derreur/) pour les zones de texte facultatives.
- Ajoutez du texte explicatif pour aider l'utilisateur·rice à fournir une valeur valide dans la zone de texte et ainsi éviter les erreurs.
- Évitez d'ajouter du texte explicatif dans la boîte du champ, où il s'effacera une fois le champ sélectionné.

## TO DO: Get code content

<iframe
  title="Overview of gcds-textarea properties and events."
  src="https://cds-snc.github.io/gcds-components/?path=/docs/components-textarea--default&viewMode=docs&shortcuts=false&singleStory=true"
  width="1200"
  height="1825"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
