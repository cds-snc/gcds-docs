---
title: Lien
layout: 'layouts/component-documentation.njk'
translationKey: 'linkCode'
tags: ['linkFR', 'code']
date: 'git Last Modified'
---

## Créer un lien

Le lien est un élément de navigation qui amène une personne à une nouvelle page, à une nouvelle section de la page actuelle ou à un autre site Web.

## Accessibilité et codage des liens

### Fournissez des informations pour télécharger des fichiers

- Fournissez dans le texte du lien des renseignements sur le type et la taille des fichiers à télécharger : `<gcds-link href="application.pdf" download>Demande 2023 (PDF, 1,5 Mo)</gcds-link>`.
- Évitez de placer le lien de téléchargement dans le texte du paragraphe.

Remarque : Seuls les fichiers dont l'URL est de la même origine que le site Web seront téléchargés sur l'appareil de l'utilisateur·rice.

### Ajoutez un lien «&nbsp;Passer au contenu&nbsp;»

- Un lien «&nbsp;Passer au contenu&nbsp;» permet à une personne de sauter un ensemble de liens de navigation pour passer au contenu principal.
- Pour éviter de dissimuler le contenu, configurez le lien de manière à ce qu'il pousse le contenu vers le bas et ne flotte pas. Pour la version bureau, placez le lien «&nbsp;Passer au contenu&nbsp;» en haut à gauche de la page afin qu'il n'interrompe pas le flux.

### Évitez les liens externes dans la mesure du possible

- Ajoutez un lien externe en définissant l'attribut `external` à `true`.
- Évitez d'ajouter des liens externes dans les cas suivants :
  - Au milieu de la progression d'une personne, par exemple lorsqu'une personne remplit un formulaire.
  - Si changer de page cause une perte de progression non enregistrée.
  - Si le fait de suivre un lien met fin à un processus entamé, par exemple lorsqu'une personne regarde une vidéo ou effectue une tâche principale.
  - **Lorsqu'un lien est envahissant et perturberait le flux de la page.**
  - Lorsqu'une personne serait surprise de se retrouver ailleurs de manière inattendue.
- Indiquez clairement où mène le lien, afin qu'une personne puisse décider si elle doit quitter la page actuelle.
- Communiquez clairement lorsque les liens sont assortis de conditions particulières. Par exemple, lorsqu'ils sont uniquement accessibles à l'intérieur d'un réseau fermé en raison d'un pare-feu.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-link."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-link--events-properties&lang=fr"
  width="1200"
  height="1300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
