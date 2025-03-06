---
title: Lien
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: linkFR
  title: Lien
  locale: fr
  parent: componentsFR
  otherNames: ancre, lien hypertexte, appel à l'action.
  description: Un lien est un élément de navigation qui amène une personne à une nouvelle page, à un autre site Web, à un fichier ou à une nouvelle section de la page actuelle.
  thumbnail: /images/common/components/preview-link.svg
  alt: Une représentation abstraite employant une épaise rectangle bleue en dessus d'une mince ligne bleue.
  state: published
translationKey: 'link'
tags: ['linkFR', 'usage']
permalink: /fr/composants/lien/
date: 'git Last Modified'
---

Un lien est un élément de navigation qui amène une personne à un site Web ou ouvre un fichier source, comme un pdf.

## Types de problèmes résolus par les liens

Utilisez des liens pour :

- Permettre à une personne de passer facilement d'une page ou d'une section d'un site Web ou d'une application à une autre.
- Diriger les gens vers des sites Web externes, en indiquant clairement que le lien mène à l'extérieur du site actuel.
- Permettre à une personne de passer à un en-tête de section en utilisant des liens d'ancrage dans une table des matières ou un résumé de page. La personne peut donc accéder directement à des sections ou à du contenu spécifiques sans faire défiler la page.
- Se connecter à des adresses courriel ou à des numéros de téléphone pour qu'une personne puisse amorcer la communication directement en sélectionnant le lien.
- Lancer le téléchargement de fichiers, en donnant l'accès direct aux documents, médias ou tout autre contenu téléchargeable.
- Sauter les éléments de navigation pour passer au contenu principal.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0">Composants connexes</h2>

<a href="{{ links.button }}" class="link-light">Boutons</a> : pour modifier des données, changer d'état ou lancer une action spécifique.

<a href="{{ links.details }}" class="link-light">Détails</a> : lorsque vous cherchez à masquer ou afficher une section de contenu.

</article>

## Choisissez la variante du lien

Une variante sert à définir le style principal du lien.

### Variante Default (par défaut)

Utilisez la variante `default` `variant` pour :

- La plupart des liens.
- Les liens placés sur un fond clair.

### Variante Light (clair)

Utilisez la variante `light` `variant` pour :

Les liens qui doivent apparaître sur un fond sombre. Faites en sorte que le rapport de contraste entre le lien clair et l'arrière-plan sombre soit conforme aux normes WCAG (Web Content Accessibility Guidelines).
