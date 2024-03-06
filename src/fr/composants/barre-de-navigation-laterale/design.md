---
title: Barre de navigation latérale
layout: 'layouts/component-documentation.njk'
translationKey: 'sidenavigationDesign'
tags: ['sidenavigationFR', 'design']
date: 'git Last Modified'
---

## Structure de la barre de navigation latérale

<ol class="anatomy-list">
  <li>Le <strong>libellé</strong> identifie le site du produit à l’aide d’un élément texte ou d’un logo. Il indique également le point de repère de navigation qui sera utilisé par les technologies d'assistance.</li>
  <li>Le <strong>lien de navigation</strong> est un lien qui mène vers une page ou une section du site de produit.</li>
  <li>Le <strong>groupe de navigation</strong> est une collection de liens de navigation liés au nom du groupe de navigation. Il peut être développé et réduit.</li>
  <li>Le <strong>libellé du groupe de navigation</strong> identifie le groupe de navigation et agit à titre de bouton pour développer et réduire le groupe de navigation en question.</li>
  <li>L’<strong>icône de chevron du groupe de navigation</strong> pointe vers le haut lorsque la liste est réduite et vers le bas lorsqu’elle est développée.</li>
  <li>Le <strong>lien de navigation avec indicateur de page active</strong> met en évidence la page actuelle.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-side-nav-anatomy.svg" alt="L'anatomie du composant barre de navigation latérale identifiant le libellé, le lien de navigation, le groupe de navigation, le libellé du groupe de navigation, l'icône de chevron du groupe de navigation, le lien de navigation avec indicateur de page active."/>

## Design et accessibilité de la barre de navigation latérale

### Définir le libellé

- Vous pouvez utiliser une forme raccourcie du nom complet.
- Pour les logos, ajoutez du texte descriptif.

Remarque : Sur les appareils mobiles, le libellé n’est pas un hyperlien vers la page d’accueil.

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
