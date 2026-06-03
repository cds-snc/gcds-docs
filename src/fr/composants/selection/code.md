---
title: Sélection
layout: 'layouts/component-documentation.njk'
translationKey: 'selectCode'
tags: ['selectFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de la sélection](#codage-et-accessibilite-de-la-selection)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de la sélection

### Appliquez les attributs essentiels

Utilisez toujours les attributs essentiels suivants avec `gcds-select` :

- `name`
- `label`
- `select-id`

### Définir la valeur par défaut

Utilisez l'attribut `default-value` pour configurer la première option dans la liste de sélection. Cela empêche la présélection d'une option.

{% include "partials/hint.njk" %}

{% include "partials/hide-the-label.njk" %}

{% include "partials/error-message.njk" %}

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

#### `label`

L'attribut `label` définit le libellé du composant de sélection.

{% examplesPreview "170", "", "fr" %}
<gcds-select select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `name`

L'attribut `name` identifie le composant dans le formulaire. Il permet de récupérer la valeur sélectionnée après la soumission.

{% examplesPreview "170", "", "fr" %}
<gcds-select select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `select-id`

L'attribut `select-id` définit l'identifiant unique du composant de sélection.

{% examplesPreview "170", "", "fr" %}
<gcds-select select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `autocomplete`

L'attribut `autocomplete` contrôle si le navigateur peut suggérer des valeurs précédemment saisies pour le composant de sélection.

{% examplesPreview "170", "", "fr" %}
<gcds-select autocomplete="on" select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `autofocus`

L'attribut `autofocus` contrôle si le composant de sélection est ciblé automatiquement au chargement de la page. Par défaut, il est défini à `false`. Lorsqu'il est défini à `true`, le composant de sélection est ciblé à l'affichage.

{% examplesPreview "170", "", "fr" %}
<gcds-select autofocus select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `default-value`

L'attribut `default-value` définit une valeur facultative affichée avant que l'utilisateur sélectionne une option.

{% examplesPreview "170", "", "fr" %}
<gcds-select select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `disabled`

L'attribut `disabled` contrôle si le composant de sélection est désactivé ou non. Par défaut, il est défini à `false`.

{% examplesPreview "170", "", "fr" %}
<gcds-select disabled select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `error-message`

L'attribut `error-message` définit le message d'erreur à afficher pour une sélection invalide.

{% examplesPreview "210", "", "fr" %}
<gcds-select error-message="Message d'erreur" select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `form`

L'attribut `form` définit l'identifiant du formulaire auquel appartient le composant de sélection.

{% examplesPreview "170", "", "fr" %}
<gcds-select form="form-id" select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `hide-label`

L'attribut `hide-label` contrôle si le libellé est masqué ou non.

{% examplesPreview "140", "", "fr" %}
<gcds-select hide-label select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `hint`

L'attribut `hint` définit le texte explicatif affiché sous le libellé.

{% examplesPreview "210", "", "fr" %}
<gcds-select hint="Texte explicatif / Exemple de message." select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `required`

L'attribut `required` contrôle si la sélection est obligatoire ou non. Lorsqu'il est défini à `true`, il ajoute « obligatoire » après le libellé, et active le validateur de champ obligatoire.

{% examplesPreview "210", "", "fr" %}
<gcds-select required select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `validate-on`

L'attribut `validate-on` définit l'événement de validation pour le composant de sélection.

{% examplesPreview "170", "", "fr" %}
<gcds-select validate-on="other" required select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

#### `value`

L'attribut `value` contient la valeur de l'option actuellement sélectionnée. Il se met à jour à chaque changement de sélection.

{% examplesPreview "170", "", "fr" %}
<gcds-select value="2" select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

<!-- ----- Slots section ----- -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à ajouter des options et des groupes d'options.

{% examplesPreview "170", "", "fr" %}
<gcds-select select-id="select-preview" label="Libellé" name="select-preview" default-value="Sélectionner une option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-select."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-select--events-properties&lang=fr"
  width="1200"
  height="2200"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
