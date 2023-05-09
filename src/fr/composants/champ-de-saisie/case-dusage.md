---
title: Champ de saisie
layout: "layouts/component-documentation.njk"
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
translationKey: "input"
tags: ['inputFR', 'usage']
permalink: /fr/composants/champ-de-saisie/
date: "git Last Modified"
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

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">
  <h2 class="mt-0 mb-400">Composants connexes</h2>

  <a href="{{ links.textarea }}" class="link-light">Zone de texte</a> : lorsque vous cherchez à obtenir une réponse libre de plusieurs lignes.

  Sélecteur de date : lorsque vous souhaitez que l'utilisateur·rice choisisse une date, comme pour la prise de rendez-vous.
</article>

## Choisissez un type de champ de saisie

Set the input type based on how the input will validate the values a person enters.
The input-type attribute accepts the following options:

### Saisie textuelle

Use when no other specfic input type is available for single-line entry.

- To collect a person's name, in most cases by full name.
- Instead of the number input, for things like estimates that can have non-numerical values.

### Saisie d'une adresse courriel

- For email address collection.
- To require an email address format.

### Saisie de mot de passe

- For password collection and validation.
- To set specific password constraints.

Tip: Communicate any password constraints in the hint text for the input so the person choosing the password knows exactly what the rules are.

### Saisie numérique

- Utiliser pour rejeter les valeurs qui ne sont pas numériques.
- Conseil : Lorsque vous définissez une contrainte, comme une fourchette numérique, utilisez le texte explicatif pour transmettre une directive précise.

### Saisie d'une clé de recherche

Utiliser pour collecter une valeur à rechercher.

### Saisie d'une URL

Utiliser pour collecter une URL, comme une adresse Web ou un nom de domaine.
