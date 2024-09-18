---
title: Champ de date
layout: 'layouts/component-documentation.njk'
translationKey: 'dateinputDesign'
tags: ['dateinputFR', 'design']
date: "git Last Modified"
---

## Structure de la Champ de date

<ol class="anatomy-list">
  <li><strong>list</strong></li>
  <li>La <strong>légende du jeu de champs</strong> indique l’information qu’une personne doit saisir dans le champ de date. Le texte est aligné à gauche et porte une majuscule initiale. Pour le champ de date, la légende sera généralement intitulée « Date » ou mentionnera le type de date précis recherché. Le texte explicatif indique le format de la date.</li> 
  <li>Étiquette Mois associée au champ de sélection du mois.</li>
  <li>Le champ de sélection du mois offre une liste prédéfinie et chronologique des mois, parmi lesquels une personne fait une sélection.</li>
  <li>Étiquette Jour associée au champ de saisie du jour.</li>
  <li>Champ de saisie du jour. Le jour peut comporter 1 ou 2 chiffres.</li> 
  <li>Étiquette Année associée au champ de saisie de l’année.</li>
  <li>Champ de saisie de l’année. L’année comporte 4 chiffres.</li>

</ol>

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-date-input-anatomy.svg" alt="L'anatomie de la champ de date." />

## Accessibilité et design des Champ de date

### Favorisez la réussite de la tâche à l’aide d’un texte explicatif
- Utilisez un texte explicatif dans la légende du jeu de champs pour aider une personne à comprendre le format de date qu’elle peut utiliser. Par exemple, le texte explicatif « 7 septembre » plutôt que « 07 septembre » indique qu’un chiffre unique, non précédé d’un zéro, suffit. 

### Rédigez des messages d’erreur précis
- Rédigez des messages d’erreur pour chaque champ de la date. Ces messages doivent renseigner sur les informations manquantes ou les erreurs de format. Par exemple, si une personne a saisi une année de 2 chiffres, indiquez que l’année doit comporter 4 chiffres. 
