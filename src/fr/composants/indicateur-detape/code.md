---
title: Indicateur d'étape
layout: "layouts/component-documentation.njk"
translationKey: "stepperCode"
tags: ['stepperFR', 'code']
date: "git Last Modified"
---

## Création d'un indicateur d'étape

Utilisez un indicateur d'étape comme guide lorsqu'une séquence (formulaire ou processus) qui s'étend sur trois pages ou plus peut être divisée en étapes logiques.

## Codage et accessibilité des indicateurs d'étape

### Utilisez chaque étape pour un objectif

Utilisez l'attribut `current-step` pour indiquer l'étape à laquelle l'utilisateur·rice se trouve. Utilisez l'attibut `total-steps` pour indiquer le nombre total d'étapes.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-stepper properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-stepper--default"
  width="1200"
  height="800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
