---
title: Recherche
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

<gcds-search
  action="/fr/recherche"
  search-id="ds-search"
  placeholder="Système de design GC"
  id="searchbar"
>
</gcds-search>

<gcds-text size="caption">
  N'incluez pas de renseignements personnels (téléphone, courriel, NAS, renseignements financiers, médicaux ou professionnels).
</gcds-text>

<div id="results-count"></div>

<div id="results"></div>
<div id="pagination"></div>
