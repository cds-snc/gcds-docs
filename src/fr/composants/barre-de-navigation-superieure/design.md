---
title: Barre de navigation supérieure
layout: "layouts/component-documentation.njk"
translationKey: "topnavigationDesign"
tags: ['topnavigationFR', 'design']
date: "git Last Modified"
---

## Structure de la barre de navigation supérieure — sur un ordinateur de bureau

<ol class="anatomy-list">
  <li>Le <strong>lien d'accueil</strong> identifie le site à l'aide d'un élément texte ou d'un logo et sert à naviguer vers la page d'accueil. Il utilise un lien de navigation qui est ajouté dans l'empacement <code>home</code>.</li>
  <li>Le <strong>lien de navigation</strong> est un lien vers une page ou une section populaire du site. Les liens de navigation peuvent se trouver au niveau supérieur s'ils sont autonomes.</li>
  <li>Le <strong>groupe de navigation</strong> eut être développé et réduit et contient généralement une liste de 2 à 5 liens.</li>
  <li>Le <strong>libellé du groupe de navigation</strong> identifie le groupe de navigation et agit à titre de bouton pour développer et réduire le groupe de navigation en question.</li>
  <li>L'<strong>icône de chevron du groupe de navigation</strong> pointe vers le haut lorsque le groupe de navigation est réduit et
vers le bas lorsqu'il est développé.</li>
  <li>Le <strong>lien de navigation avec indicateur de page active</strong> met en évidence la page actuelle.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-top-nav-anatomy.svg" alt="Un aperçu de la barre de navigation supérieure qui affiche la navigation du site représentée par des cases grises alignées horizontalement. Une case bleue suivie de deux cases grises représentent des liens où la dernière case est mise en surbrillance pour représenter le lien actif." />

## Design et accessibilité de la barre de navigation supérieure

### Définir le nom du site

- Vous pouvez utiliser une forme raccourcie du nom complet.
- Pour les logos, ajoutez du texte descriptif.

Remarque : Sur les appareils mobiles, le nom du site n'est pas un hyperlien vers la page d'accueil.

### Choisissez du texte pertinent pour les liens de navigation

- Rendez le texte du lien clair et précis pour aider une personne à décider si elle doit quitter la page actuelle. Indiquez où et vers quel contenu mène un lien.
- Veillez à ce que le texte du lien soit court et distinctif afin qu'une personne puisse y jeter un œil et trouver ce qu'elle recherche.
- Limitez le nombre de liens dans votre barre de navigation supérieure. Une trop grande quantité d'informations augmente la charge cognitive et peut être accablante pour certaines personnes.
- Si vous utilisez un chemin de navigation, uniformisez la hiérarchie dans les deux ensembles sur le site.

Conseil : Lisez le texte des liens de la barre de navigation supérieure tout haut dans leur séquence d'affichage afin de repérer les similarités dans la sonorité des textes qui seront lus par une technologie d'assistance.

### Ajoutez des groupes de navigation à la barre de navigation supérieure

- Choisissez d'inclure un deuxième niveau avec un groupe de navigation, parfois appelé escalier ou liste déroulante, à la barre de navigation supérieure.
- Au deuxième niveau, limitez le groupe à 7 liens. Visez 2 à 5 liens par groupe.
