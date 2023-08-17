---
title: Bouton
layout: "layouts/component-documentation.njk"
translationKey: "buttonCode"
tags: ['buttonFR', 'code']
date: "git Last Modified"
---

## Création d'un bouton

Utilisez un bouton pour les actions importantes que peut initier une personne utilisant un produit.

## Accessibilité et codage des boutons

### Rendez vos boutons accessibles

- Vérifiez la visibilité de la bordure du bouton par rapport à la surface où vous le placez.
- Explicitez clairement l'action correspondant au bouton grâce à un libellé court et spécifique dans un format d'appel à l'action, comme « Démarrer l'application » ou « Enregistrer une copie ».
- Évitez de réutiliser le texte du libellé sur la même page ou d'utiliser des libellés qui se ressemblent beaucoup. Une personne parcourant les champs à l'aide d'une technologie d'assistance entendra le texte de l'étiquette en succession rapide et n'aura pas d'indication pour associer le bouton à son action.

### Ajoutez un bouton «  Passer au contenu  »

- Un bouton « Passer au contenu » permet à une personne de sauter un ensemble de liens de navigation pour passer au contenu principal.
- Pour éviter de dissimuler le contenu, configurez le bouton de manière à ce qu'il pousse le contenu vers le bas de manière à ce qu'il ne flotte pas.
- Pour la version bureau, placez le bouton « Passer au contenu » en haut à gauche de la page afin qu'il n'interrompe pas le flux.

{% include "partials/getcode.njk" %}

<div class="iframe-container">
  <iframe
    title="Survol des propriétés et des évènements relatifs à gcds-button."
    src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-button--events-properties"
    width="1200"
    height="1650"
    style="display: block; margin: 0 auto;"
    frameBorder="0"
    allow="clipboard-write"
  ></iframe>
</div>
