---
title: Barre de navigation latérale
layout: 'layouts/component-documentation.njk'
translationKey: 'sidenavigationDesign'
tags: ['sidenavigationFR', 'design']
date: 'git Last Modified'
---

## Structure de la barre de navigation latérale

<ol class="anatomy-list">
  <li>Le <strong>libellé repère de navigation</strong> affiche le nom du produit ou du site et est utilisé par les technologies d’assistance.</li>
  <li>Le <strong>lien de navigation</strong> mène à une page donnée. Le lien est surligné en bleu pour indiquer l’état actuel de la page.</li>
  <li>Le <strong>groupe de navigation</strong> affiche le nom du groupe et développe et réduit le sous-menu. Le sous-menu est une liste de liens de navigation connexes qui sont révélés lorsque le groupe de navigation se développe. L’icône du chevron pointe vers la droite lorsque le sous-menu est réduit et vers le bas lorsqu’il est développé.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-side-nav-anatomy.svg" alt="L’image illustrant la barre de navigation latérale montre 7 éléments. 1. Le libellé repère de navigation est en haut, aligné à gauche, en caractères gras, avec une taille de police plus grande que le texte qui suit. 2. Le premier exemple de lien de navigation se trouve immédiatement en dessous en caractères bleus soulignés. Le deuxième exemple est surligné d’un rectangle bleu clair et comporte des caractères en gras. 3. Le groupe de navigation est un chevron pointant vers le bas suivi de texte en caractères gras. 4. Le sous-menu pointe vers 3 liens de navigation superposés verticalement sous le groupe de navigation"/>

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

### Classer les éléments de groupe de navigation

- En règle générale, il est recommandé de classer les articles de premier niveau par importance ou priorité absolue pour les personnes qui utilisent votre service.
- Regroupez logiquement les éléments similaires dans des ensembles de catégories. Ordonnez-les selon le type d’information comprise dans l’ensemble et l’utilisation que les personnes en feront.  
- Pour la recherche d’éléments connus, classez les liens par ordre alphabétique — ou numérique pour les éléments représentés par des chiffres.
- Utilisez un ordre séquentiel pour des ensembles de tâches procédurales ou des renseignements situés dans le temps qui pourraient suivre un ordre chronologique naturel.
- Testez les noms de catégories, les regroupements d’ensembles et l’ordre d’affichage dans la barre de navigation latérale afin d’utiliser les mots et les modèles mentaux les plus intuitifs pour les personnes qui les utilisent.
