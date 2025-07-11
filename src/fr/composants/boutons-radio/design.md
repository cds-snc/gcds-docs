---
title: Boutons radio
layout: 'layouts/component-documentation.njk'
translationKey: 'radiosDesign'
tags: ['radiosFR', 'design']
date: 'git Last Modified'
---

## Structure du groupe de boutons radio — avec jeu de champs

<ol class="anatomy-list">
  <li>La <strong>légende pour les boutons radios</strong> agit comme un titre pour identifier les boutons radio groupés. Le texte de la légende est aligné à gauche avec la première lettre en majuscule.</li>
  <li>Le <strong>texte explicatif pour les boutons radios</strong> donne des exigences spécifiques pour saisir une réponse appropriée.</li>
  <li>Le <strong>bouton radio</strong> indique l'état de la sélection.</li>
  <li>Le <strong>bouton coché</strong> indique qu'une option a été sélectionnée.</li>
  <li>Le <strong>étiquette de l'option</strong> décrit la sélection. Le texte de l'étiquette porte la majuscule initiale.</li>
  <li>Le <strong>texte explicatif de l'option</strong> fournit des renseignements additionnels sur la sélection.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-radios-anatomy.svg" alt="Structure des boutons radio montrant les étiquettes « légende » en haut et « texte explicatif » en dessous. Plus bas, il y a deux cercles avec leurs libellés et du texte explicatif à côté. L'un des cercles est rempli d'un cercle noir plus petit."/>

## Conception et accessibilité pour le composant boutons radio

### Offrir des choix clairs

- Limitez le nombre d'options à 7.
- Limitez le texte de chaque option à quelques mots ou à une phrase courte. Incluez du texte explicatif s'il faut du contexte additionnel.
- Ordonnez les options de manière logique. Par exemple, par ordre alphabétique ou du plus au moins commun.
- Lorsque possible, incluez une option «&nbsp;Aucune de ces réponses&nbsp;» pour éviter de forcer une sélection incorrecte. Une sélection ne peut être désactivée à moins qu'une autre option ne soit sélectionnée.

### Fournir des instructions claires

- Expliquez aux utilisateur·rice·s que seule une réponse est acceptée.
- Utilisez le texte explicatif pour indiquer qu'une seule sélection est possible. Par exemple, «&nbsp;Sélectionnez l'option la plus pertinente&nbsp;».
- Évitez de présélectionner une option radio. Cela augmente le risque qu'une personne saute une question ou soumette une mauvaise réponse.
