---
title: Date de modification
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: datemodifiedFR
  title: Date de modification
  locale: fr
  parent: componentsFR
  otherNames: dernière mise à jour, version.
  description: Horodatage de la dernière mise à jour d'une page.
  thumbnail: /images/common/components/preview-date-modified.svg
  alt: Un aperçu du composant date modifiée qui montre une date de la dernière modification de la page.
  tag: De base
  state: published
translationKey: 'datemodified'
tags: ['datemodifiedFR', 'usage']
permalink: /fr/composants/date-de-modification/
date: 'git Last Modified'
---

## Cas d'utilisation

### Problèmes résolus par la date de modification

Utilisez la date de modification pour :

- Indiquer la date de la dernière modification apportée à une page Web;
- Identifier la version actuelle d'une application.

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">
  <h2 class="mt-0 mb-400">Composants connexes</h2>

<a href="{{ links.footer }}" class="link-light">Pied de page</a> : pour placer le pied de page portant l'image de marque du gouvernement du Canada.

</article>

## Types de composants

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Aperçu du le type date" "px-300 py-400" "" %}
  <gcds-date-modified>2023-08-22</gcds-date-modified>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Type « Date »</h3>
    <p class="mb-400">Utilisez le type « date » pour :</p>
    <ul class="list-disc mb-400">
      <li>Indiquer la date de la dernière modification apportée à une page ou à un site Web.</li>
    </ul>
  </div>
</gcds-grid>
<br/>
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Aperçu du le type version" "px-300 py-400" "" %}
  <gcds-date-modified type="version">1.0.0</gcds-date-modified>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Type « Version »</h3>
    <p class="mb-400">Utilisez le type « version » pour :</p>
    <ul class="list-disc mb-400">
      <li>Identifier la version actuelle d'une application.</li>
    </ul>
  </div>
</gcds-grid>
</br>
