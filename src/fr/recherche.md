---
title: Résultats de la recherche
translationKey: searchresults
layout: 'layouts/base.njk'
hidesearch: true
nocrawl: true
date: 'git Last Modified'
eleventyNavigation:
  key: searchresultsFR
  title: Recherche
  locale: fr
  order: 5
  hideMain: true
---

# Résultats de la recherche

<gcds-search class="mb-300" action="/fr/recherche" search-id="ds-search" placeholder="Système de design GC" data-placeholder-long="{{ search[locale].placeholder }}" data-placeholder-short="{{ search[locale].shortPlaceholder }}" id="searchbar">
</gcds-search>

<gcds-text size="small">
  N'incluez pas de renseignements personnels (téléphone, courriel, NAS, renseignements financiers, médicaux ou professionnels).
</gcds-text>

<div id="results-count"></div>

<div id="results"></div>

<div id="pagination"></div>
