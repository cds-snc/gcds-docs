---
title: Champ de saisie
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: inputFR
  title: Champ de saisie
  locale: fr
  parent: componentsFR
  otherNames: saisie de texte, champ de texte.
  description: Un espace où saisir des renseignements brefs.
  thumbnail: /images/common/components/preview-input.svg
  alt: Un aperçu du composant champ de saisie qui montre deux boîtes grises alignées verticalement au dessus d'un champ de saisie avec un curseur à l'intérieur. Les boîtes représentent l'étiquette du champ de saisie et le message d'aide.
  state: published
translationKey: 'input'
tags: ['inputFR', 'usage']
permalink: /fr/composants/champ-de-saisie/
date: 'git Last Modified'
---

Examinez ce que font les champs de saisie pour déterminer s'ils répondent à vos besoins. Sélectionnez ensuite le meilleur type de champ de saisie qui répond à votre cas d'utilisation.

## Problèmes résolus par les champs de saisie

Utilisez un champ de saisie lorsque vous attendez de l'utilisateur·rice une réponse d'une seule ligne, par exemple :

- une réponse individuelle ou unique.
- une courte réponse libre.
- une réponse avec des contraintes quant à la longueur du texte ou à son format.
- des renseignements essentiels d'identification ou des coordonnées.
- une date qu'elle connaît déjà, comme une date de naissance (pour la sélection d'une date inconnue, utilisez le sélecteur de dates).

Remarque : Ne recueillez que les renseignements que vous êtes autorisé·e à traiter et veillez à les protéger conformément aux normes du gouvernement du Canada.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0 mb-300">Composants connexes</h2>

<a href="{{ links.textarea }}" class="link-light">Zone de texte</a> : lorsque vous cherchez à obtenir une réponse libre de plusieurs lignes.

Sélecteur de date : lorsque vous souhaitez que l'utilisateur·rice choisisse une date, comme pour la prise de rendez-vous.

</article>

## Choisissez un type de champ de saisie

Définissez le type de champ de saisie en fonction de la méthode de validation des valeurs saisies par une personne.
L’attribut input-type (type de champ de saisie) accepte les options suivantes :

### Saisie textuelle

Utilisez cette option s'il n'existe pas déjà un autre type de champ de saisie approprié pour la réponse à ligne unique.

- Pour recueillir le nom d’une personne (son nom complet dans la plupart des cas).
- En remplacement de la saisie numérique, pour des réponses à valeurs non numériques comme des estimations.

### Saisie d'une adresse courriel

- Pour recueillir des adresses courriel.
- Pour exiger un format d’adresse courriel.

### Saisie de mot de passe

- Pour la collecte et la validation de mots de passe.
- Pour définir des contraintes spécifiques aux mots de passe.

Conseil :  Indiquez toute contrainte liée au mot de passe dans le texte explicatif du champ de saisie afin que les personnes sachent exactement quelles sont les règles.

### Saisie numérique

À utiliser pour rejeter les valeurs qui ne sont pas numériques.

Conseil : Lorsque vous définissez une contrainte, comme une fourchette numérique, utilisez le texte explicatif pour transmettre une directive précise.

### Saisie d'une clé de recherche

- Pour collecter une valeur à rechercher.

### Saisie d'une URL

- Pour collecter une URL, comme une adresse Web ou un nom de domaine.
