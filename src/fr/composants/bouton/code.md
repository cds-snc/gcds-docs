---
title: Bouton
layout: 'layouts/component-documentation.njk'
translationKey: 'buttonCode'
tags: ['buttonFR', 'code']
date: 'git Last Modified'
---

## Création d'un bouton

Utilisez un bouton pour lancer des actions importantes.

## Accessibilité et codage des boutons

### Évaluez l’accessibilité visuelle

- Vérifiez la visibilité de la bordure du bouton par rapport à la surface où vous le placez.

### Sélectionnez la bonne taille

- Utilisez l’attribut petit bouton pour les actions lorsque l’espace est limité.

Remarque : La hauteur des petits boutons est conforme au niveau AA de la norme WCAG, mais pas au niveau AAA.

### Utilisez le bouton désactivé avec discernement

- Utilisez le bouton désactivé de façon judicieuse afin d’indiquer qu’il faut faire quelque chose avant qu’une action puisse être prise.
- Là où c’est possible, utilisez d’autres méthodes d’intervention comme un message d’erreur pour empêcher la soumission de formulaires incomplets.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-button."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-button--events-properties&lang=fr"
  width="1200"
  height="1800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
