---
title: Champ de date
layout: "layouts/component-documentation.njk"
eleventyNavigation:
  key: dateinputFR
  title: Champ de date
  locale: fr
  parent: componentsFR
  otherNames: date, zone de date, date connue.
  description: Le champ de date est un espace permettant de saisir une date connue.
  thumbnail: /images/fr/components/preview/preview-date-input.svg
  alt: "Des lignes grises épaisses représentent la légende et le texte explicatif. En dessous, trois cases blanches à fine bordure grise sont alignées horizontalement : une petite case représentant le champ de texte pour le jour, une case contenant une ligne grise et une flèche grise et représentant le champ de sélection du mois, puis une petite case représentant le champ de texte pour l’année."
  state: published
translationKey: "dateinput"
tags: ['dateinputFR', 'usage']
permalink: /fr/composants/champ-de-date/
date: "git Last Modified"
---

## Problèmes résolus par les champs de date

Examinez ce que font les champs de date pour déterminer s’ils permettent de résoudre votre problème. Sélectionnez ensuite le type de champ de date le plus approprié à votre cas de figure.

Utilisez un champ de date pour recueillir une date lorsque vous attendez d’une personne :
- Une date qu’elle connaît déjà, comme sa date de naissance.
- Une date qu’elle peut facilement trouver, comme une date d’expiration de carte d’assurance maladie.
- Une date précise, comme la date à laquelle elle a déménagé dans une nouvelle maison.
- Une date qui n’inclut pas le jour précis de la semaine.
- Évitez d’utiliser un champ de date si la date n’est pas connue de la personne. Utilisez alors un sélecteur de date.

<hr/>

## Composants connexes

<a href="{{ links.input }}">Champs de saisie</a> : lorsque vous voulez que la personne saisisse seulement une année ou un jour du mois.

<a href="{{ links.select }}">Sélection</a> : lorsque vous voulez que la personne saisisse seulement un mois.

Sélecteur de date : lorsque vous voulez que la personne choisisse une date qui n’est pas encore connue, par exemple pour planifier un rendez-vous.

<hr class="mt-600" />

## Types du composant

### Format Jour, Mois, Année
- Pour une date précise que la personne connaît ou peut facilement trouver.

### Format Mois, Année
- Pour une date qui n’inclut pas de jour, comme la date d’expiration d’un permis de conduire.
- Pour une date approximative, comme la date où une carte d’identité a été perdue (mois et année).
- Pour une date dont la personne risque d’ignorer le jour exact.

