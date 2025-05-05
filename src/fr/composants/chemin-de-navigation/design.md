---
title: Chemin de navigation
layout: 'layouts/component-documentation.njk'
translationKey: 'breadcrumbsDesign'
tags: ['breadcrumbsFR', 'design']
date: 'git Last Modified'
---

## Structure d'un chemin de navigation

<ol class="anatomy-list">
  <li>Le <strong>premier lien</strong> dans le chemin de navigation renvoie par défaut à la page d’accueil de Canada.ca. Pour d’autres sites, le lien peut être modifié. </li>
  <li>Le <strong>chevron</strong> sépare chaque lien et mène vers un lien enfant.</li>
  <li>Le <strong>lien</strong> mène vers une page de niveau parent.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-breadcrumbs-anatomy.svg" alt="Chemin de navigation avec deux liens côte à côte et un chevron pointant vers la droite entre eux. Chaque élément du composant est identifié à l’aide d’un chiffre." />

## Design et accessibilité du chemin de navigation

### Vérifier les exigences du chemin de navigation

Voici les éléments requis pour le chemin de navigation sur les sites du GC.

- Le chemin de navigation est requis dans l’en-tête des pages standard et de campagne de Canada.ca.
- Le chemin de navigation est facultatif pour les autres pages de Canada.ca et les sites du GC.

### Éléments requis sur une page standard ou de campagne de Canada.ca

Toujours inclure le chemin de navigation dans l’en-tête des pages standard et de campagne sur Canada.ca et maintenir les paramètres par défaut.

- Gardez le placement avec alignement sur la gauche, directement en dessous de la ligne séparatrice.
- Gardez la page d’accueil de Canada.ca comme premier lien dans le chemin de navigation.
- N’incluez pas la page actuelle à la fin du chemin de navigation.

### Éléments facultatifs sur une page standard ou de campagne de Canada.ca

- Raccourcissez le texte du lien pour améliorer la lisibilité et réduire l’espace.
- Sur une page de campagne, vous pouvez définir une page d’accueil précise comme premier lien. Il peut s’agir de la page d’accueil de Canada.ca, l’arborescence thématique (catégories de sujets de Canada.ca), le profil institutionnel/organisationnel, ou une page d’index de campagne.

### Incluez les bons liens dans votre chemin de navigation

- N'incluez que les liens de page parent et omettez la page actuelle. C'est indiqué dans le titre de la page, directement sous le chemin de navigation.
- Ajoutez jusqu'à trois liens de page parent si vous utilisez les liens Canada.ca et la page d'accueil, pour un maximum de cinq liens de chemin de navigation.
- Évitez la duplication en associant chaque lien de chemin de navigation à une page unique.

### Structurez les niveaux de chemin de navigation en fonction de la navigation sur le site

Le chemin de navigation représente l'emplacement de la page courante par rapport au modèle de navigation du site.

- Ordonnez les niveaux de chemin de navigation en fonction de leur niveau correspondant dans la hiérarchie du site.
- Évitez d'utiliser le composant Chemin de navigation pour illustrer l'évolution du parcours de l'utilisateur·rice.
- Limitez le chemin de navigation à cinq niveaux. Un trop grand nombre de niveaux dans le chemin de navigation peut être accablant pour certaines personnes.

Conseil : Si vous utilisez également d'autres composants de navigation, comme la <gcds-link href="{{ links.topNav }}">barre de navigation supérieure</gcds-link> et la <gcds-link href="{{ links.sideNav }}">barre de navigation latérale</gcds-link>, harmonisez-les de façon à ce que les éléments reflètent le parcours d'une personne sur le site. Cela offre une expérience de navigation uniforme et aide les utilisateur·rice·s à comprendre leur emplacement actuel.

### Écrivez du texte spécifique pour le lien vers la page parent

- Rendez le texte du lien clair et précis pour aider une personne à décider si elle doit quitter la page actuelle. Indiquez où et vers quel contenu mène un lien.
- Veillez à ce que le lien vers la page parent soit court (idéalement moins de 20 caractères) et distinctif afin qu'une personne puisse jeter un œil aux liens du chemin de navigation et trouver ce qu'elle recherche.
- Raccourcissez le lien de la page parent afin d'améliorer la lisibilité et d'en réduire la longueur. Dans la mesure du possible, indiquez le titre de la page dans le chemin de navigation sans inclure le nom complet de la page.

### Placez le chemin de navigation avant le contenu principal

Placez le chemin de navigation en haut d'une page, avant le contenu principal. De cette façon, un lien « Passer au contenu principal » permettra à l'utilisateur·rice d'ignorer tous les liens de navigation, y compris les chemins de navigation.
