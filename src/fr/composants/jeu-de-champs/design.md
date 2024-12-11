---
title: Jeu de champs
layout: 'layouts/component-documentation.njk'
translationKey: 'fieldsetDesign'
tags: ['fieldsetFR', 'design']
date: 'git Last Modified'
---

## Structure du jeu de champs

Un jeu de champs combine les éléments `<fieldset>` et `<legend>` afin de regrouper de façon accessible les champs ou composants de formulaire connexes sans se fier uniquement à la mise en page visuelle.

<ol class="anatomy-list">
  <li>La <strong>légende du jeu de champs</strong> décrit le contenu du groupe de composants de formulaire. La légende peut être un bref énoncé descriptif ou un appel à l'action.</li>
  <li>Le <strong>texte explicatif du jeu de champs</strong> fournit du contexte additionnel pour le contenu du jeu de champs.</li>
  <li>Le <strong>regroupement des composants</strong> comprend des éléments de chaque composant du jeu de champs.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-fieldset-anatomy.svg" alt="L'anatomie du composant jeu de champ identifiant la légende du jeu de champ et son message d'aide suivi de deux composants un à la suite de l'autre identifié comme un groupe de composants. Le premier un champ de texte et le deuxième un menu de sélection."/>

## Design et accessibilité des jeux de champs

### Regrouper l'information de manière à ce qu'elle soit accessible

- Regroupez les éléments de formulaire qui font partie d'une tâche ou d'une sous-tâche ou qui sont liés d'une manière ou d'une autre.
- Regroupez les composants de formulaire connexes, sans vous fier uniquement à la mise en page visuelle, afin qu'ils soient accessibles aux personnes aveugles ou malvoyantes.

### Rédiger le contenu du jeu de champs pour favoriser la réussite de la tâche

- Utilisez la **légende** pour informer une personne sur l'endroit où elle se trouve dans un flux ou une tâche en incluant des repères comme le nom de la section et le numéro de l'étape.
- Aidez les répondant·e·s à comprendre la relation entre l'information que vous demandez et la tâche ou la sous-tâche qu'ils et elles réalisent en incluant un résumé dans la **légende**.
- Remplacez les questions par des énoncés afin de réduire le texte de la **légende**.

### Clarifier la question pour les boutons radio et les cases à cocher

- Pour les [boutons radio]({{ links.radio }}) et les [cases à cocher]({{ links.checkbox }}), la **légende** se situe là ou on retrouve le libellé de champ dans les autres composants.
- Utilisez le **texte explicatif** du jeu de champs pour donner plus de précisions à une personne sur la façon de répondre. Dans le cas d'une case à cocher, le **texte explicatif** pourrait indiquer : « Sélectionner toutes les options qui s'appliquent ». Dans le cas d'un bouton radio, le **texte explicatif** pourrait indiquer : « Sélectionnez la réponse qui convient le mieux ».
- Évitez d'utiliser un jeu de champs lorsqu'un composant de formulaire ne propose qu'une seule option de réponse et qu'aucune sélection n'est requise.
