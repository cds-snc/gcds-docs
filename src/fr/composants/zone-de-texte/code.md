---
title: Zone de texte
layout: 'layouts/component-documentation.njk'
translationKey: 'textareaCode'
tags: ['textareaFR', 'code']
date: 'git Last Modified'
---

## Créer une zone de texte

Utilisez des zones de texte pour obtenir des réponses libres pouvant s'étendre sur plusieurs lignes.

La zone de texte donne aux utilisateur·rice·s la possibilité de fournir les renseignements qu'ils souhaitent partager dans une réponse détaillée.

## Codage et accessibilité des zones de texte

### Appliquez les attributs requis

Pour que la zone de texte fonctionne correctement, utilisez toujours les attributs suivants avec `<gcds-textarea>`:

- `name`
- `label`
- `textarea-id`

### Adaptez la zone de texte au type de réponse

- Utilisez des zones de texte pour les réponses qui peuvent nécessiter plus de 75 caractères.
- Faites en sorte que la hauteur d'une zone de texte soit proportionnelle à la quantité de texte que vous attendez de l'utilisateur·rice. Vous pouvez définir la hauteur d'une zone de texte en spécifiant l'attribut «&nbsp;rows&nbsp;».
- Évitez de définir une largeur inférieure à 50 % (1/2 largeur).
- Utilisez le maximum pour les réponses sans longueur fixe.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

### Masquer l’étiquette de la zone de texte 
- Définissez l’attribut `hide-label` à true afin de masquer visuellement l’étiquette, tout en la conservant pour les technologies d’assistance. 
- Évitez d’ajouter du texte explicatif lorsque vous masquez l’étiquette. Vous pouvez également fournir une chaîne vide pour le texte explicatif.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-textarea."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-textarea--events-properties&lang=fr"
  width="1200"
  height="2050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
