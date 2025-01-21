---
title: Grille
layout: 'layouts/component-documentation.njk'
translationKey: 'gridDesign'
tags: ['gridFR', 'design']
date: 'git Last Modified'
---

## Structure d'une grille

<ol class="anatomy-list">
  <li>La <strong>boîte</strong> contient tous les éléments de la grille et s'étend sur leur largeur combinée. Elle est réactive et peut être centrée.</li>
  <li>La <strong>colonne</strong> , également appelée élément de grille, définit une limite autour de son contenu pour le maintenir dans la largeur définie pour cette colonne.</li>
  <li>L’<strong>espace</strong>, parfois appelé gouttière, définit la largeur de l’espace entre les colonnes.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-grid-anatomy.svg" alt="Image montrant la structure d'une grille avec quatre rectangles distincts représentant les colonnes d'une grille." />

## Design et accessibilité des grilles

### Ajustez les mises en page pour optimiser l'expérience sur différentes tailles d'écran

- Optimisez chaque composant Grille pour les différentes tailles d'écran qu'une personne utilisera (y compris en passant d'un écran à l'autre) lorsqu'elle visitera votre site ou utilisera votre produit.
- Adaptez votre contenu aux appareils mobiles, aux tablettes et aux grands écrans en définissant la mise en page de chaque fenêtre d'affichage pour ce composant.
  - Les petits écrans, comme ceux des appareils mobiles, affichent généralement une mise en page à une colonne.
  - Les écrans de taille moyenne, comme les tablettes, affichent généralement une mise en page d'une à deux colonnes.
  - Les écrans plus grands, comme ceux des ordinateurs de bureau, affichent généralement une mise en page de trois ou quatre colonnes.

Conseil : Visez la simplicité pour la disposition des grilles en concevant des expériences pour les appareils mobiles, tablettes et ordinateurs de bureau compatibles avec n'importe quelle taille d'écran.

### Limitez la largeur du contenu

- Veillez à ce que les lignes de texte n'excèdent pas 75 caractères pour que la lecture reste accessible.
- Limitez la largeur des colonnes pour éviter que les grands écrans n'affichent des lignes de texte trop longues et difficiles à lire.
- Évitez de dépasser la largeur maximale de 71,25 rem (1140 px).

### Utilisez l'espacement pour véhiculer un sens particulier

Choisissez l'espacement pour faciliter la lecture et aider les utilisateurs à mieux comprendre les messages que vous communiquez.

- Utilisez de plus petites unités de style d'espacement pour regrouper des éléments connexes.
- Employez de plus grandes unités de style d'espacement pour former des groupes logiques d'éléments.
