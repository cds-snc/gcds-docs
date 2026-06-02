---
title: Champ de date
layout: 'layouts/component-documentation.njk'
translationKey: 'dateinputDesign'
tags: ['dateinputFR', 'design']
date: 'git Last Modified'
---

## Structure du champ de date

<ol class="anatomy-list">
  <li>La <strong>légende du jeu de champs</strong> indique l’information qu’une personne doit saisir dans le champ de date. Le texte est aligné à gauche et porte une majuscule initiale. Pour le champ de date, la légende sera généralement intitulée «&nbsp;Date&nbsp;» ou mentionnera le type de date précis recherché. Le texte explicatif indique le format de la date.</li>
  <li>L’<strong>étiquette Jour</strong> identifie le champ de saisie du jour.</li>
  <li>Le <strong>champ de saisie du jour</strong> peut comporter 1 ou 2 chiffres.</li>
  <li>L’<strong>étiquette Mois</strong> identifie le champ du mois.</li>
  <li>Le <strong>champ de saisie du mois</strong> peut prendre la forme soit d’une liste déroulante des mois écrits au long parmi lesquels on fait une sélection, soit d'un champ de saisie permettant la saisie de 1 ou 2 chiffres.</li>
  <li>L’<strong>étiquette Année</strong> identifie le champ de saisie de l’année.</li>
  <li>Le <strong>champ de saisie</strong> de l’année comporte 4 chiffres.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-date-input-anatomy.svg" alt="Structure du champ de date représentée par 6 éléments : la légende du jeu de champs, l’étiquette Jour, le champ de saisie du jour, l’étiquette Mois, le champ de sélection du mois, l’étiquette Année et le champ de saisie de l’année." />


## Accessibilité et design des champs de date

### Sélectionnez un format qui aide à la saisie de données

Utilisez le format qui correspond aux renseignements que vous demandez. Par exemple, si vous demandez pour la date de naissance inscrite sur une carte santé, utilisez le format A/M/J.

### Favorisez la réussite de la tâche à l’aide d’un texte explicatif

Utilisez un texte explicatif dans la légende du jeu de champs pour aider une personne à comprendre le format de date qu’elle peut utiliser. Par exemple, le texte explicatif «&nbsp;7 septembre&nbsp;» plutôt que «&nbsp;07 septembre&nbsp;» indique qu’un chiffre unique, non précédé d’un zéro, suffit.

### Rédigez des messages d’erreur précis

Rédigez des messages d’erreur pour chaque champ de la date. Ces messages doivent renseigner sur les informations manquantes ou les erreurs de format. Par exemple, si une personne a saisi une année de 2 chiffres, indiquez que l’année doit comporter 4 chiffres.
