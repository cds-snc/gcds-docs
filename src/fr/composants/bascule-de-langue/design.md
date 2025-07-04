---
title: Bascule de langue
layout: 'layouts/component-documentation.njk'
translationKey: 'langtoggleDesign'
tags: ['langtoggleFR', 'design']
date: 'git Last Modified'
---

## Structure de la bascule de langue

La bascule de langue est un lien menant vers la même page dans l’autre langue officielle.

<ol class="anatomy-list">
  <li>Le <strong>lien de bascule</strong> mène vers la page dans l’autre langue officielle et apparaît sous forme abrégée sur les écrans plus petits, ou les fenêtres d’affichage.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-lang-toggle-anatomy.svg" alt="Une bascule de langue adaptée aux grands écrans avec un lien « Français » et une bascule de langue adaptée au petits écrans avec un lien « FR ». Chaque élément du composant est identifié à l'aide d'un chiffre."/>

## Design et accessibilité de la bascule de langue

### Vérifiez les exigences de la bascule de langue

La bascule de langue est requise dans l'en-tête des pages Canada.ca et des sites du GC.

<gcds-details details-title="Éléments requis sur Canada.ca et les sites du GC" class="mb-300">
  <gcds-text>Insérez toujours le commutateur de langue dans l’en-tête et conservez les paramètres par défaut.</gcds-text>
  <div>
    <ul class="list-disc">
      <li>Gardez la bascule de langue en haut à droite de l’en-tête. Cet emplacement prévisible la rendra plus facile à trouver.</li>
      <li>L’anglais et le français sont les seules options approuvées.</li>
      <li>Précisez l’autre langue officielle dans le lien de la bascule de langue afin d’indiquer qu’il mène vers la page actuelle dans l’autre langue.</li>
    </ul>
  </div>
</gcds-details>

<gcds-details details-title="Éléments facultatifs sur une page Canada.ca" class="mb-300">
  <gcds-text margin-bottom="0">Au besoin, ajoutez des liens vers du contenu dans d'autres langues dans la zone de contenu de la page.</gcds-text>
</gcds-details>
