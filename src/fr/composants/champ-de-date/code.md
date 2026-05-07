---
title: Champ de date
layout: 'layouts/component-documentation.njk'
translationKey: 'dateinputCode'
tags: ['dateinputFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des champs de date](#codage-et-accessibilite-des-champs-de-date)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des champs de date

### Appliquez les attributs requis

- Pour que le champ de date fonctionne correctement, utilisez toujours les attributs suivants avec `<gcds-date-input>` :

- `name`
- `legend`
- `format`

### Appliquez un format au champ de date

- Choisissez le format en indiquant soit `full` soit `compact` dans l’attribut `format` du champ de date.
- La valeur `full` affichera un composant de champ de date avec des champs pour le jour, le mois et l’année dont l’ordre en français est Jour, Mois, Année et dont l’ordre en anglais est Mois, Jour, Année.
- La valeur `compact` affichera un composant de champ de date avec des champs pour le mois et l’année dont l’ordre est Mois, Année aussi bien en français qu’en anglais.
- L’attribut `format` applique également un format à la valeur reçue et rendue par le champ de date du côté système. Si la valeur définie est `full`, le format reçu et rendu sera `YYYY-MM-DD`. Si la valeur définie est `compact`, le format reçu et rendu sera `YYYY-MM`.

### Valeurs du champ de date reçues et rendues

Le champ de date peut recevoir et rendre des valeurs d’un format différent que celui affiché côté utilisateur en fonction de l’attribut `format`.

- Le format `full` produira une valeur dont le format est `YYYY-MM-DD`.
- Le format `compact` produira une valeur dont le format est `YYYY-MM`.

{% include "partials/valid-props.njk" %}

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `format`

L'attribut `format` définit le format d'affichage de la date.

{% examplesPreview %}
<gcds-date-input format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `legend`

L'attribut `legend` définit la légende du champ de date.

{% examplesPreview %}
<gcds-date-input format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `name`

L'attribut `name` identifie le composant dans le formulaire. Il permet de référencer le composant après l'envoi du formulaire.

{% examplesPreview %}
<gcds-date-input format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `autofocus`

L'attribut `autofocus` contrôle si le champ de date est ciblé automatiquement au chargement de la page. Par défaut, il est défini à `false`. Lorsqu'il est défini à `true`, le champ est ciblé à l'affichage.

{% examplesPreview %}
<gcds-date-input autofocus format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `disabled`

L'attribut `disabled` contrôle si le champ de date est désactivé ou non. Par défaut, il est défini à `false`.

{% examplesPreview %}
<gcds-date-input disabled format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `error-message`

L'attribut `error-message` définit le message d'erreur à afficher pour un champ de date invalide.

{% examplesPreview %}
<gcds-date-input error-message="Message d'erreur" format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `form`

L'attribut `form` définit l'identifiant du formulaire auquel appartient le champ de date.

{% examplesPreview %}
<gcds-date-input form="form-id" format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `hint`

L'attribut `hint` définit le texte explicatif affiché sous la légende.

{% examplesPreview %}
<gcds-date-input hint="Le jour peut être composé de 1 ou 2 chiffres. L’année doit inclure 4 chiffres." format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `max`

L'attribut `max` définit la date maximale acceptée par le champ. Format : `YYYY-MM-DD` ou `YYYY-MM`.

{% examplesPreview %}
<gcds-date-input max="2000-01-01" hint="La date doit être avant le 2000-01-01" format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `min`

L'attribut `min` définit la date minimale acceptée par le champ. Format : `YYYY-MM-DD` ou `YYYY-MM`.

{% examplesPreview %}
<gcds-date-input min="2000-01-01" hint="La date doit être après le 2000-01-01" format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `required`

L'attribut `required` contrôle si le champ de date est obligatoire ou non. Lorsqu'il est défini à `true`, il ajoute « obligatoire » après la légende et active le validateur de champ obligatoire.

{% examplesPreview %}
<gcds-date-input required format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `validate-on`

L'attribut `validate-on` définit l'événement de validation pour le champ de date.

{% examplesPreview %}
<gcds-date-input validate-on="other" format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

#### `value`

L'attribut `value` définit la date initiale affichée dans le composant. Il fournit également une référence à la date saisie. Format : `YYYY-MM-DD` ou `YYYY-MM`.

{% examplesPreview %}
<gcds-date-input value="2026-02-22" format="full" legend="Légende" name="example-default">
</gcds-date-input>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="iframeTitle"
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-date-input--events-properties&lang=fr"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
