---
title: Jeu de champs
layout: 'layouts/component-documentation.njk'
translationKey: 'fieldsetDesign'
tags: ['fieldsetFR', 'design']
date: 'git Last Modified'
---

## Structure du jeu de champs

<ol class="anatomy-list">
  <li>La <strong>légende du jeu de champs</strong> agit comme un titre pour identifier les composants de formulaires groupés qui suivent. Le texte de la légende est aligné à gauche avec la première lettre en majuscule.</li>
  <li>Le <strong>texte explicatif du jeu de champs</strong> indique les exigences spécifiques pour bien remplir les composants de formulaire groupés.</li>
  <li>Le <strong>regroupement des composants</strong> est le regroupement de composants de formulaire connexes décrit dans la légende.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-fieldset-anatomy.svg" alt="Structure du jeu de champs montrant les étiquettes « légende » et « texte explicatif ». Le groupe de composants contient deux champs de saisie différents, chacun avec sa propre étiquette inscrite à la hiérarchie des titres et son propre texte explicatif."/>

## Design et accessibilité pour le composant jeu de champs

Un jeu de champs combine les éléments `fieldset` et `legend` pour regrouper des champs ou des composants de formulaire connexes. Il aide les utilisateur·rice·s de lecteurs d’écran à comprendre que les champs de saisie sont tous liés à cette question.

### Regrouper l’information

- Regroupez les éléments de formulaire qui font partie d’une tâche ou qui sont liés d’une manière ou d’une autre.
- Évitez d’utiliser un jeu de champs lorsque vous avez un seul champ de formulaire qui demande une seule information. 

### Rédiger du contenu du jeu de champs qui favorise la réussite de la tâche

- Rédigez un court énoncé descriptif ou un appel à l’action pour la légende afin de rendre claire l'information demandée par le groupe du jeu de champs.
- Identifiez la sous-tâche dans la légende pour aider les gens à comprendre le lien entre les renseignements demandés et la tâche à réaliser.
