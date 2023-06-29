---
title: Chemin de navigation
layout: "layouts/component-documentation.njk"
translationKey: "breadcrumbsDesign"
tags: ['breadcrumbsFR', 'design']
date: "git Last Modified"
---

## Structure d'un chemin de navigation

Le **lien Canada.ca** permet d'accéder à la page d'accueil Canada.ca dans la langue actuelle.

Le **lien vers la page d'accueil** ramène à la page d'accueil de la page Web ou du site actuel.

Le **lien de la page parent** conduit vers la page parent de la page actuelle. Vous pouvez avoir jusqu'à trois liens vers des pages parents en plus de ceux vers la page d'accueil et la page d'accueil Canada.ca.

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-breadcrumbs-anatomy.svg" alt="La structure du chemin de navigation qui affiche trois liens de suite avec une icône de flèche entre chacun." />

### Structure du chemin de navigation — avec en-tête et titre H1

<a href="{{ links.header }}"><strong>L'en-tête</strong></a>  constitue un élément d'une image de marque fiable — pour les applications, les formulaires ou d'autres services numériques transactionnels.

Le **titre H1** est un élément distinct du composant Chemin de navigation. Il indique aux lecteur·rice·s la nature de la page ou du site et sert de repère.

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-breadcrumbs-anatomy-with-header.svg" alt="La structure du chemin de navigation qui affiche trois liens de suite sous l'en-tête avec une icône de flèche entre chacun." />

## Design et accessibilité du chemin de navigation

### Évitez d'utiliser trop de niveaux dans votre chemin de navigation

Limitez le chemin de navigation à cinq niveaux. L'affichage d'un trop grand nombre de niveaux dans le chemin de navigation peut être accablant pour certaines personnes.

Conseil : Si vous utilisez également d'autres composants de navigation, comme la <a href="{{ links.topNav }}">barre de navigation supérieure</a> et la <a href="{{ links.sideNav }}">barre de navigation latérale</a>, alignez-les sur la hiérarchie du chemin de navigation de façon à ce que les éléments reflètent le parcours d'une personne sur le site. Cela offre une expérience de navigation uniforme et aide les utilisateur·rice·s à comprendre leur emplacement actuel.

### Incluez les bons liens dans votre chemin de navigation.

- Ajoutez jusqu'à trois liens de page parent après les liens vers la page Canada.ca et la page d'accueil.
- N'incluez que les liens de page parent et omettez la page actuelle. C'est indiqué dans le titre de la page, directement sous le chemin de navigation.
- Évitez d'utiliser le composant Chemin de navigation pour illustrer l'évolution du parcours de l'utilisateur·rice.

### Écrivez du texte spécifique pour le lien vers la page parent.

- Rendez le texte du lien clair et précis pour aider une personne à décider si elle doit quitter la page actuelle. Indiquez où et vers quel contenu mène un lien.
- Veillez à ce que le lien vers la page parent soit court (idéalement moins de 20 caractères) et distinctif afin qu'une personne puisse jeter un œil aux liens du chemin de navigation et trouver ce qu'elle recherche.

### Placez le chemin de navigation avant l'élément `<main>`.

Placez le chemin de navigation en haut d'une page, avant l'élément `<main>`. De cette façon, le lien « Passer au contenu principal » peut permettre à l'utilisateur·rice d'ignorer tous les liens de navigation, y compris les chemins de navigation.
