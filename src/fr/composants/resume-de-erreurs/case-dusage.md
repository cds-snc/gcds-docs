---
title: Résumé des erreurs
layout: "layouts/component-documentation.njk"
eleventyNavigation:
  key: errorsummaryFR
  title: Résumé des erreurs
  locale: fr
  parent: componentsFR
  otherNames: liste d'erreurs.
  description: Un résumé des erreurs consiste en une liste des erreurs de saisie dans un formulaire.
  thumbnail: /images/common/components/preview-error-summary.svg
  alt: Un aperçu du composant sommaire d'erreurs qui montre une boîte blanche encadrée d'une ligne rouge avec à l'intérieur 2 grandes boîtes grises représentant du texte et une liste à puce de trois options représentées par des petites boîtes grises.
  state: published
translationKey: "errorsummary"
tags: ['errorsummaryFR', 'usage']
permalink: /fr/composants/resume-de-erreurs/
---

Examinez les situations dans lesquelles on utilise les résumés des erreurs pour voir si elles correspondent au problème que vous cherchez à résoudre.

Les composants de Système de design GC sont livrés avec une gestion des erreurs par défaut. Lorsqu'une personne tente de soumettre un formulaire, toute erreur issue d'un composant requis affichera un résumé des erreurs.

## Problèmes résolus par les résumés des erreurs

Utilisez le résumé des erreurs pour interrompre l'envoi d'un formulaire lorsqu'on constate le besoin de :

- Rendre les erreurs évidentes pour que l'on sache les reconnaître et y remédier;
- Dresser une liste <a href="{{ links.errorMessage }}">des messages d'erreur</a> lorsqu'une personne doit ajouter des renseignements ou apporter des modifications à deux ou plusieurs éléments avant de pouvoir soumettre un formulaire.

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">

  <h2 class="mt-0 mb-400">Composants connexes</h2>

  <a href="{{ links.errorMessage }}" class="link-light">Message d'erreur</a> lorsque vous cherchez à décrire un problème représentant un obstacle à une action menée par l'utilisateur·rice, lié à un seul composant.
</article>
