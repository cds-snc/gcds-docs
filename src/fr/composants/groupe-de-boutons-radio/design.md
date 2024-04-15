---
title: Groupe de boutons radio
layout: 'layouts/component-documentation.njk'
translationKey: 'radiogroupDesign'
tags: ['radiogroupFR', 'design']
# date: "git Last Modified"
---

## Structure du groupe de boutons radio — avec jeu de champs

<ol class="anatomy-list">
  <li>La <strong>légende du jeu de champ</strong> agit comme un titre pour discerner les boutons radio groupés. Le texte de la légende est aligné à gauche avec la première lettre en majuscule.</li>
  <li>Le <strong>texte explicatif du jeu de champ</strong> précise les exigences spécifiques pour chaque regroupement de boutons radio afin de favoriser la réussite de la tâche.</li>
  <li>Le <strong>bouton radio</strong> montre, par la présence ou l'absence de <strong>bouton coché</strong>, si une option a été sélectionnée ou pas.</li>
  <li>Le <strong>bouton coché</strong> indique qu'une option a été sélectionnée.</li>
  <li>Le <strong>libellé du bouton radio</strong> indique le choix que chaque bouton représente. Le libellé du texte a la première lettre en majuscule.</li>
  <li>Le <strong>texte explicatif du bouton radio</strong> donne plus de renseignements sur le choix.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-radio-group-anatomy.svg" alt="Structure du groupe de boutons radio accompagnée des étiquettes « Légende du jeu de champ », « Texte explicatif du jeu de champ », « Coche », « Libellé du bouton radio », « Bouton radio » et « Texte explicatif du bouton radio »."/>

## Accessibilité et design des boutons radio

### Rendez les groupes de boutons radio visibles et les options claires

- Limitez le nombre d'options à 6 ou 7.
- Limitez le texte de chaque option à quelques mots ou à une courte phrase et ajoutez du texte explicatif pour plus de contexte.
- En règle générale, il est préférable de classer les options par ordre alphabétique. Dans certains cas, il peut être utile de classer les options de la plus commune à la moins commune.
- Lorsque possible, ajoutez une option telle que « Aucun » ou « Aucun des éléments ci-dessus » pour éviter de forcer une sélection inexacte. Si une personne sélectionne une option par accident dans un groupe de boutons radio, elle ne pourra pas la désélectionner ou annuler sa sélection.

### Aidez les gens à comprendre comment utiliser les groupes de boutons radio

- Ne partez pas du principe qu’une personne saura utiliser un groupe de boutons radio.
- Utilisez le texte explicatif du [jeu de champs]({{ links.fieldset }}) pour indiquer aux personnes peu habituées aux groupes de boutons radio qu’elles ne peuvent choisir qu’une seule option. Par exemple, « Sélectionnez l’option la plus pertinente ».
- Évitez de présélectionner une option dans le groupe de boutons radio. Cela augmente le risque qu’une personne saute une question ou soumette une mauvaise réponse.