---
title: Jeu de champs
layout: 'layouts/component-documentation.njk'
translationKey: 'fieldsetCode'
tags: ['fieldsetFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des jeux de champs](#codage-et-accessibilite-des-jeux-de-champs)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des jeux de champs

### Hiérarchie des titres

Utilisez l’attribut `legend-size` pour placer visuellement la légende parmi les titres de la page. Définissez la valeur de l’attribut à `h2` | `h3` | `h4` | `h5` | `h6` pour donner à la légende du jeu de champs la taille appropriée.

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

#### `legend`

L'attribut `legend` définit la légende du jeu de champs.

{% examplesPreview "330", "", "fr" %}
<gcds-fieldset legend="Légende" legend-size="h3">
  <gcds-input input-id="form-input" label="Étiquette de champ">
  </gcds-input>
  <gcds-select select-id="form-select" label="Étiquette de sélection">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
{% endexamplesPreview %}

#### `legend-size`

L'attribut `legend-size` définit la taille de police appropriée pour la légende du jeu de champs. Les options sont :

- `h2`
- `h3`
- `h4`
- `h5`
- `h6`

<!-- Force line break -->

{% examplesPreview "330", "", "fr" %}
<gcds-fieldset legend="Légende" legend-size="h3">
  <gcds-input input-id="form-input" label="Étiquette de champ">
  </gcds-input>
  <gcds-select select-id="form-select" label="Étiquette de sélection">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `hint`

L'attribut `hint` définit le texte explicatif affiché sous la légende.

{% examplesPreview "370", "", "fr" %}
<gcds-fieldset legend="Légende" legend-size="h3" hint="Texte explicatif/Exemple de message.">
  <gcds-input input-id="form-input" label="Étiquette de champ">
  </gcds-input>
  <gcds-select select-id="form-select" label="Étiquette de sélection">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à placer des éléments de formulaire à l'intérieur du jeu de champs.

{% examplesPreview "370", "", "fr" %}
<gcds-fieldset legend="Légende" legend-size="h3" hint="Texte explicatif/Exemple de message.">
  <gcds-input input-id="form-input" label="Étiquette de champ">
  </gcds-input>
  <gcds-select select-id="form-select" label="Étiquette de sélection">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-fieldset."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-fieldset--events-properties&lang=fr"
  width="1200"
  height="2300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
