---
title: Indicateur d'étape
layout: 'layouts/component-documentation.njk'
translationKey: 'stepperCode'
tags: ['stepperFR', 'code']
date: 'git Last Modified'
---

## Créer un indicateur d'étape

Utilisez un indicateur d'étape pour guider les personnes lorsqu'une séquence (formulaire ou processus) peut être divisée en étapes claires qui s'étendent sur plus d'une page.

## Codage et accessibilité des indicateurs d'étape

### Utilisez chaque étape pour un objectif

Utilisez l'attribut `current-step` pour indiquer l'étape à laquelle la personne se trouve. Utilisez l'attribut `total-steps` pour indiquer le nombre total d'étapes.

### Placez l'indicateur d'étape dans la page

Utilisez l'attribut `tag` pour attribuer la balise de titre appropriée à l'indicateur d'étape. L'indicateur d'étape peut s'afficher sous la forme d'un `h1`, `h2` ou `h3`.

{% include "partials/valid-props.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-stepper."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-stepper--events-properties&lang=fr"
  width="1200"
  height="950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
