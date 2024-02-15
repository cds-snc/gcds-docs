---
title: En-tête
layout: 'layouts/component-documentation.njk'
translationKey: 'headerCode'
tags: ['headerFR', 'code']
date: 'git Last Modified'
---

## Créer un en-tête

Utilisez ce point de repère pour transmettre de l'information sur un service du gouvernement du Canada ou l'un de ses produits numériques.

## Codage et accessibilité de l'en-tête

### Régler l'élément signature dans l'en-tête

- Maintenez toujours l'intégrité de la signature du gouvernement du Canada. Évitez à tout prix de modifier la signature. Évitez surtout d'étirer le texte ou de changer les couleurs.
- Faites passer le mode d'affichage de la signature du gouvernement du Canada en couleur ou en blanc à l'aide de l'attribut `signature-variant`. Choisissez l'affichage `color` pour un fond blanc.
- Facultativement, définissez la signature du gouvernement du Canada comme lien vers Canada.ca en réglant l'attribut `signature-has-link` à `true`.

### Configurer la bascule de langue

- Ajoutez la bascule de langue en définissant l'attribut `lang-href`. L'attribut `lang-href` définit également l'élément « href » de la bascule de langue.
- Utilisez l'attribut `lang` pour définir la langue du site; le bouton à bascule proposera l'autre langue officielle.
- Si votre site est multilingue : Créez une option pour sélectionner d'autres langues en utilisant cet emplacement d'en-tête pour un modèle d'internationalisation. Pour ce faire, passez un élément avec l'attribut `slot="toggle"` afin de remplacer l'élément de la bascule de langue dans l'en-tête.

### Inclure le lien « Passer au contenu »

- Inclure un lien « Passer au contenu » en définissant l'élément `href` du lien **passer au contenu** dans la navigation supérieure de l'en-tête à l'aide de l'attribut `skip-to-href`.
- Utilisez l'emplacement `skip-to-nav` pour remplacer la navigation supérieure par défaut par le lien « Passer au contenu ».
- Passez un élément enfant avec l'attribut `slot="skip-to-nav"` pour placer l'élément en première position dans l'en-tête.

### Ajouter des éléments facultatifs à l'en-tête

- Ajoutez un menu en passant un élément enfant à l'aide de l'attribut `slot="menu"`. Cela placera l'élément dans l'en-tête, sous le bouton de bascule de langue, la signature et la barre de recherche.
- Ajoutez un champ de recherche en faisant passer un élément enfant avec l'attribut `slot="search"`. Cela placera l'élément sous la bascule de langue, à côté de la signature dans l'en-tête.
- Ajoutez un composant chemin de navigation en faisant passer un élément enfant avec l'attribut `slot="breadcrumb"`. Cela placera le chemin de navigation dans l'en-tête, sous le bouton de bascule de langue, la signature et la barre de recherche.
- Ajoutez une bannière en faisant passer un élément enfant avec l'attribut `slot="banner"`. Cela placera l'élément en haut de l'en-tête sous l'élément `skip-to-nav`.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-header."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-header--events-properties"
  width="1200"
  height="1600"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
