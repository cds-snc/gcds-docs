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
  alt: Une épaisse ligne grise surmontant une représentation du pied-de-page représente le libellé pour la date de dernière mise à jour de la page.
  tag: Requis sur Canada.ca
  state: published
translationKey: 'datemodified'
tags: ['datemodifiedFR', 'usage']
permalink: /fr/composants/date-de-modification/
date: 'git Last Modified'
---

La date de modification est un composant requis pour les sites Web du gouvernement du Canada. Elle est sujette à des exigences spécifiques pour les pages Canada.ca.

## Problèmes résolus par la date de modification

Utilisez la date de modification pour :

- Indiquer la date de la dernière modification apportée à une page Web;
- Identifier la version actuelle d'une application.

<hr/>

## Composants connexes

<a href="{{ links.footer }}">Pied de page</a> : pour placer le pied de page portant l'image de marque du gouvernement du Canada.

<hr class="mt-600" />

## Types de composants

<div class="remove-empty-p">
<gcds-grid class="mb-300" columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "Aperçu du le type date" "px-225 py-300" "" %}
  <gcds-date-modified>2023-08-22</gcds-date-modified>
  {% endcomponentPreview %}
  <div>
    <h3 class="mt-0">Type « Date »</h3>
    <p>Utilisez le type « date » pour :</p>
    <ul class="list-disc mb-300">
      <li>Indiquer la date de la dernière modification apportée à une page ou à un site Web.</li>
    </ul>
  </div>
</gcds-grid>

<gcds-grid columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "Aperçu du le type version" "px-225 py-300" "" %}
  <gcds-date-modified type="version">1.0.0</gcds-date-modified>
  {% endcomponentPreview %}
  <div>
    <h3 class="mt-0">Type « Version »</h3>
    <p>Utilisez le type « version » pour :</p>
    <ul class="list-disc mb-300">
      <li>Identifier la version actuelle d'une application.</li>
    </ul>
  </div>
</gcds-grid>
</div>
