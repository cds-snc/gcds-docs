---
title: Téléverseur de fichiers
layout: 'layouts/component-documentation.njk'
translationKey: 'fileuploaderCode'
tags: ['fileuploaderFR', 'code']
date: 'git Last Modified'
---

## Création d'un téléverseur de fichiers

Utilisez le téléverseur de fichiers pour permettre à une personne de sélectionner et de valider les fichiers qu'elle souhaiterait inclure dans sa soumission.

## Codage et accessibilité du téléverseur de fichiers

{% include "partials/error-message.njk" %}

### Téléchargez plusieurs fichiers

Utilisez l'attribut `multiple` pour permettre la sélection de plus d'un fichier.

### Validez les types de fichiers à téléverser

Utilisez l'attribut `accept` pour définir les types de fichiers acceptés par le téléverseur de fichiers.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-file-uploader."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-file-uploader--events-properties"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
