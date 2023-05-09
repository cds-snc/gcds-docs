---
title: Bouton
layout: "layouts/component-documentation.njk"
translationKey: "buttonDesign"
tags: ['buttonFR', 'design']
date: "git Last Modified"
---

## Structure du bouton

Le **libellé** indique l'action qui s'effectuera si quelqu'un interagit avec le bouton. Le texte des étiquettes s'aligne à gauche avec toute icône au point le plus à droite. En français, le texte est en minuscules (il n'y a que la lettre initiale qui est en majuscule).

La **boîte** met le bouton en évidence sur le plan visuel. Elle peut être omise pour donner au bouton l'apparence d'un lien.

**L'icône** est facultative et peut être utile comme support visuel lorsqu'elle utilisée de manière uniforme et modérée. Lorsqu'il y a une icône, alignez le texte du bouton à la gauche.  Évitez d'utiliser une icône sans texte.

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-button-anatomy.svg" alt="L'anatomie d'un bouton identifiant l'étiquette, le conteneur et l'icone qui forme le composant." />

## Accessibilité et design des boutons

### Assurez-vous que le bouton est repérable

- Placez les boutons de manière uniforme.
- Offrez aux utilisateur·rice·s l'option de passer rapidement à l'action suivante afin d'éviter les défilements, les tabulations ou les saisies inutiles.
- Vérifiez la visibilité de la bordure du bouton par rapport à la surface où vous le placez.

### Assurez-vous que le bouton est lisible

- Veillez à la visibilité du texte du libellé en indiquant l'action spécifique au bouton en un minimum de mots, le tout, en minuscules.
- Explicitez clairement l'action correspondant au bouton grâce à un libellé court et spécifique dans un format d'appel à l'action, comme « Démarrer l'application » ou « Enregistrer une copie ».
- Évitez de réutiliser le texte du libellé sur la même page ou d'utiliser des libellés qui se ressemblent beaucoup. Une personne parcourant les champs à l'aide d'une technologie d'assistance entendra le texte de l'étiquette en succession rapide et n'aura pas d'indication pour associer le bouton à son action.
- Évitez d'employer des phrases verbales ou des expressions verbales inconnues aux locuteur·rice·s qui ne parlent pas couramment le français.

Conseil : Les constructions linguistiques telles que « Sign up » et « Sign in » peuvent être troublantes, car les suffixes « up » et « in » n'ajoutent que peu de sens et peuvent être difficiles à différencier.

### Écrivez un texte de lien spécifique pour le type « Lien »

- Faites en sorte que le texte du lien soit clair et précis pour aider une personne à prévoir où le lien la mènera et ce qu'elle y trouvera. Indiquez clairement où mènera le lien, afin qu'une personne puisse décider si elle doit quitter la page où elle se trouve.
- Gardez le texte du lien court et distinctif afin qu'une personne puisse rapidement lire les liens sur votre page.
- Éviter d'utiliser du texte générique ou vague pour les liens, comme « Cliquez ici », « En savoir plus » ou encore « Accueil ».
- Limitez le nombre de liens que contient votre texte. Lorsqu'il y a trop d'information, cela augmente la charge cognitive. Certain·e·s lecteur·rice·s peuvent alors éprouver de la difficulté à se repérer.

### Ajoutez un bouton «  Passer au contenu  »

- Un bouton « Passer au contenu » permet à une personne de sauter un ensemble de liens de navigation pour passer au contenu principal.
- Pour éviter de dissimuler le contenu, configurez le bouton de manière à ce qu'il pousse le contenu vers le bas et ne flotte pas.
- Pour la version bureau, placez le bouton « Passer au contenu » en haut à gauche de la page afin qu'il n'interrompe pas le flux.
