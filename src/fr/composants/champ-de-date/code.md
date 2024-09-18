---
title: Champ de date
layout: 'layouts/component-documentation.njk'
translationKey: 'dateinputCode'
tags: ['dateinputFR', 'code']
date: "git Last Modified"
---

## Créer un champ de date
Utilisez un champ de date pour recueillir une date lorsque vous attendez d’une personne une date qu’elle connaît déjà ou qu’elle peut vérifier.

## Accessibilité et codage des cases un Champ de date

### Appliquez les attributs requis
- Pour que le champ de date fonctionne correctement, utilisez toujours les attributs suivants avec `<gcds-date-input>` :

- `name`
- `legend`
- `format`

### Appliquez un format au champ de date
- Choisissez le format en indiquant soit `full` soit `compact` dans l’attribut `format` du champ de date.
- La valeur `full` affichera un composant de champ de date avec des champs pour le jour, le mois et l’année dont l’ordre en français est Jour, Mois, Année et dont l’ordre en anglais est Mois, Jour, Année.
- La valeur `compact` affichera un composant de champ de date avec des champs pour le mois et l’année dont l’ordre est Mois, Année aussi bien en français qu’en anglais.
- L’attribut `format` applique également un format à la valeur reçue et rendue par le champ de date du côté système. Si la valeur définie est `full`, le format reçu et rendu sera `YYYY-MM-DD`. Si la valeur définie est `compact`, le format reçu et rendu sera  `YYYY-MM`.

### Valeurs du champ de date reçues et rendues
Le champ de date peut recevoir et rendre des valeurs d’un format différent que celui affiché côté utilisateur en fonction de l’attribut `format`.
- Le format `full` produira une valeur dont le format est `YYYY-MM-DD`.
- Le format `compact` produira une valeur dont le format est `YYYY-MM`.

{% include "partials/valid-props.njk" %}

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="iframeTitle"
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-date-input--events-properties"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
