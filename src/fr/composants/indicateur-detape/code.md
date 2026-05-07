---
title: Indicateur d'étape
layout: 'layouts/component-documentation.njk'
translationKey: 'stepperCode'
tags: ['stepperFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des indicateurs d'étape](#codage-et-accessibilite-des-indicateurs-detape)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des indicateurs d'étape

### Utilisez chaque étape pour un objectif

Utilisez l'attribut `current-step` pour indiquer l'étape à laquelle la personne se trouve. Utilisez l'attribut `total-steps` pour indiquer le nombre total d'étapes.

### Placez l'indicateur d'étape dans la page

Utilisez l'attribut `tag` pour attribuer la balise de titre appropriée à l'indicateur d'étape. L'indicateur d'étape peut s'afficher sous la forme d'un `h1`, `h2` ou `h3`.

{% include "partials/valid-props.njk" %}

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `current-step`

L'attribut `current-step` définit l'étape actuelle.

{% examplesPreview %}
<gcds-stepper current-step="1" total-steps="4">
  Titre de la section
</gcds-stepper>
{% endexamplesPreview %}

#### `total-steps`

L'attribut `total-steps` définit le nombre total d'étapes.

{% examplesPreview %}
<gcds-stepper current-step="1" total-steps="4">
  Titre de la section
</gcds-stepper>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `tag`

L'attribut `tag` définit l'élément de titre HTML pour l'indicateur d'étape. Par défaut, il est défini à `h2`.

{% examplesPreview %}
<gcds-stepper current-step="1" total-steps="4" tag="h3">
  Titre de la section
</gcds-stepper>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à placer le texte du titre.

{% examplesPreview %}
<gcds-stepper current-step="1" total-steps="4">
  Titre de la section
</gcds-stepper>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

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
