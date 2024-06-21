---
title: Bouton radio
layout: 'layouts/component-documentation.njk'
translationKey: 'radioDesign'
tags: ['radioFR', 'design']
date: 'git Last Modified'
nocrawl: true
---

## Structure du bouton radio - avec jeu de champ

<ol class="anatomy-list">
  <li>La <strong>légende du jeu de champ</strong> agit comme un titre pour discerner les boutons radio groupés. Le texte de la légende est aligné à gauche avec la première lettre en majuscule.</li>
  <li>Le <strong>texte explicatif du jeu de champ</strong> précise les exigences spécifiques pour chaque regroupement de boutons radio afin de favoriser la réussite de la tâche.</li>
  <li>Le <strong>bouton radio</strong> montre, par la présence ou l'absence de <strong>bouton coché</strong>, si une option a été sélectionnée ou pas.</li>
  <li>Le <strong>bouton coché</strong> indique qu'une option a été sélectionnée.</li>
  <li>Le <strong>libellé du bouton radio</strong> indique le choix que chaque bouton représente. Le libellé du texte a la première lettre en majuscule.</li>
  <li>Le <strong>texte explicatif du bouton radio</strong> donne plus de renseignements sur le choix.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-radio-anatomy.svg" alt="L'anatomie du composant radio identifiant la légende du jeu de champ et son message d'aide, un bouton radio sélectionné, un bouton radio, l'étiquette du bouton radio et son message d'aide qui forme le composant."/>

## Accessibilité et design des boutons radio

### Rendez les boutons radio visibles et les options claires

- Limitez le nombre d'options à 6 ou 7.
- Limitez le texte de chaque option à quelques mots ou à une courte phrase et ajoutez du texte explicatif pour plus de contexte.
- En règle générale, il est préférable de classer les options par ordre alphabétique. Dans certains cas, il peut être utile de classer les options de la plus commune à la moins commune.
- Lorsque possible, ajoutez une option telle que « Aucun » ou « Aucun des éléments ci-dessus ». Avec les boutons radio, une option ne peut être désélectionnée, ou inversée, à moins de choisir une autre option dans le groupe. Le cas échéant, le répondant est obligé de sélectionner une mauvaise option ou d'abandonner la tâche.

### Aidez les gens à comprendre comment utiliser les boutons radio

- Ne partez pas du principe qu'une personne saura utiliser un bouton radio.
- Utilisez le texte explicatif de [l'ensemble de champs]({{ links.fieldset }}) pour expliquer aux utilisateur·rice·s non initié·e·s aux boutons radio que seule une option peut être sélectionnée. Par exemple, « Sélectionnez l'option la plus pertinente ».
- Évitez de présélectionner une option radio. Cela augmente les risques que les utilisateur·rice·s sautent une question ou soumettent une mauvaise réponse.
