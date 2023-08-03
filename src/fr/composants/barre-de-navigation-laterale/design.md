---
title: Barre de navigation latérale
layout: "layouts/component-documentation.njk"
translationKey: "sidenavigationDesign"
tags: ['sidenavigationFR', 'design']
date: "git Last Modified"
---

## Side navigation anatomy

<ol class="anatomy-list">
  <li>Le <strong>nom du site</strong> identifie le site du produit à l’aide d’un élément texte ou d’un logo.</li>
  <li>Le <strong>lien d’accueil</strong> sert à naviguer vers la page d’accueil.</li>
  <li>L’<strong>icône de chevron</strong> pointe vers le haut lorsque la liste est réduite et vers le bas lorsqu’elle est développée.</li>
  <li>Le <strong>nom du groupe de navigation</strong> identifie le groupe de navigation et agit à titre de bouton pour développer et réduire le groupe de navigation en question.</li>
  <li>L’<strong>indicateur de page active</strong> met en évidence la page actuelle.</li>
  <li>Le <strong>groupe de navigation</strong> est une collection de liens de navigation liés au nom du groupe de navigation. Il peut être développé et réduit.</li>
  <li>Le <strong>lien de navigation</strong> est un lien qui mène vers une page ou une section du site de produit.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-side-nav-anatomy.svg" alt="L'anatomie du composant barre de navigation latérale identifiant le nom du site, le lien d'accueil, l’icône de chevron, le nom du groupe de navigation, l’indicateur de page active, le groupe de navigation, et le lien de navigation."/>

## Design et accessibilité de la barre de navigation latérale

### Définir le nom du site

- Vous pouvez utiliser une forme raccourcie du nom complet.
- Pour les logos, ajoutez du texte descriptif.

Remarque : Sur les appareils mobiles, le nom du site n’est pas un hyperlien vers la page d’accueil.

### Choisissez du texte pertinent pour les liens de navigation

- Rendez le texte du lien clair et précis pour aider une personne à décider si elle doit quitter la page actuelle. Indiquez l’endroit où une personne sera redirigée ou ce qu’elle trouvera en cliquant sur un lien.
- Gardez le texte des liens court et précis afin qu’une personne puisse parcourir les liens et trouver ce qu’elle cherche.
- Si vous utilisez un composant Chemin de navigation, uniformisez la hiérarchie dans les deux ensembles de liens afin que chaque composant reflète le même cheminement sur le site.  

Conseil : Lisez le texte des liens de navigation tout haut dans leur séquence d’affichage afin de repérer les similarités dans la sonorité des textes qui seront lus par une technologie d’assistance.

### Ajoutez des groupes de navigation à la barre de navigation latérale

- Envisagez d’inclure à la barre de navigation latérale un deuxième ou troisième niveau à l’aide d’un groupe de navigation.
- Employez une structure hiérarchique de 1 à 3 niveaux afin de catégoriser et classer les éléments de groupes de navigation de façon logique.  
- Imbriquez les éléments selon des catégories correspondant à l’architecture d’information du produit.

### Classez les éléments de groupe de navigation par ordre alphabétique

Facilitez la recherche au sein des groupes de navigation comportant 7 liens de navigation ou plus en classant les liens par ordre alphabétique — ou numérique si les éléments sont identifiés à l’aide de chiffres.
