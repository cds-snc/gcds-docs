---
title: Détails
layout: "layouts/component-documentation.njk"
translationKey: "detailsCode"
tags: ['detailsFR', 'code']
date: "git Last Modified"
---

## Création d'un composant Détails

Utilisez le composant Détails pour offrir un aperçu du contenu que vous avez dissimulé et qu'il est possible d'afficher.

Utilisez le composant Détails pour permettre à une personne d'activer l'affichage de contenu supplémentaire correspondant au titre affiché.

## Codage et accessibilité pour le composant Détails

### Présentez le composant Détails pour en faciliter la compréhension

Le composant Détails peut ajouter à la charge cognitive d'une personne si :

1. Il interrompt le flux de lecture ou de défilement;
2. Le contenu dont la personne a besoin est difficile à chercher et à trouver;
3. La personne ne connaît pas la fonction développer/réduire.

Pour aider une personne à accéder au contenu du composant Détails :

- Utilisez l'attribut `open` pour définir si le contenu du composant Détails est affiché par défaut ou non;
- Faites en sorte que les titres utilisés dans le composant Détails indiquent clairement la nature du contenu. Évitez les titres non descriptifs tels que « En savoir plus ». Au lieu de cela, optez pour un résumé spécifique et descriptif, comme « Montant de couverture maximal pour vos prestations de physiothérapie ».
- Choisissez des titres distinctifs pour que les gens comprennent la différence. Les titres identiques ou similaires peuvent prêter à confusion.
- Évitez de placer un composant Détails dans un autre, là où personne ne penserait à chercher ce contenu.
0 Faites en sorte que le contenu du composant Détails puisse faire l'objet d'une recherche.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-details properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-details--default"
  width="1200"
  height="865"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
