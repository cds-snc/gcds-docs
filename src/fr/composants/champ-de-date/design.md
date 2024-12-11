---
title: Champ de date
layout: 'layouts/component-documentation.njk'
translationKey: 'dateinputDesign'
tags: ['dateinputFR', 'design']
date: "git Last Modified"
---

## Structure de la champ de date

<ol class="anatomy-list">
  <li>La <strong>légende du jeu de champs</strong> indique l’information qu’une personne doit saisir dans le champ de date. Le texte est aligné à gauche et porte une majuscule initiale. Pour le champ de date, la légende sera généralement intitulée « Date » ou mentionnera le type de date précis recherché. Le texte explicatif indique le format de la date.</li>
  <li>L’<strong>étiquette Jour</strong> identifie le champ de saisie du jour.</li>
  <li>Le <strong>champ de saisie du jour</strong> peut comporter 1 ou 2 chiffres.</li>
  <li>L’<strong>étiquette Mois</strong> identifie le champ de sélection du mois.</li>
  <li>Le <strong>champ de sélection du mois</strong> offre une liste prédéfinie et chronologique des mois, parmi lesquels une personne fait une sélection.</li>
  <li>L’<strong>étiquette Année</strong> identifie le champ de saisie de l’année.</li>
  <li>Le <strong>champ de saisie</strong> de l’année comporte 4 chiffres.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-date-input-anatomy.svg" alt="L’anatomie du champ de date représentée par 6 éléments: la légende du jeu de champs, l’étiquette Jour, le champ de saisir du jour, l’étiquette Mois, le champ de sélection du mois, l’étiquette année et le champ de saisie de l’année." />

## Accessibilité et design des champ de date

### Favorisez la réussite de la tâche à l’aide d’un texte explicatif
- Utilisez un texte explicatif dans la légende du jeu de champs pour aider une personne à comprendre le format de date qu’elle peut utiliser. Par exemple, le texte explicatif « 7 septembre » plutôt que « 07 septembre » indique qu’un chiffre unique, non précédé d’un zéro, suffit.

### Rédigez des messages d’erreur précis
- Rédigez des messages d’erreur pour chaque champ de la date. Ces messages doivent renseigner sur les informations manquantes ou les erreurs de format. Par exemple, si une personne a saisi une année de 2 chiffres, indiquez que l’année doit comporter 4 chiffres.
