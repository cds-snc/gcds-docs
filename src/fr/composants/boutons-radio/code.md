---
title: Boutons radio
layout: 'layouts/component-documentation.njk'
translationKey: 'radiosCode'
tags: ['radiosFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des boutons radio](#codage-et-accessibilite-des-boutons-radio)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des boutons radio

### Appliquer les attributs essentiels

Utilisez toujours les attributs essentiels suivants avec `gcds-radios` :

- `name`
- `legend`
- `options`

### Utiliser l'attribut `options`

- L’attribut `options` utilise un tableau d’objets pour générer chaque bouton radio.
- À l’intérieur de chaque attribut `options` de chaque bouton radio, utilisez toujours les propriétés essentielles à cet objet :
  - `id`  
  - `label`
- Les autres propriétés sont facultatives.

Exemple :

```javascript
{
  'id'!: '',
  'label'!: '',
  'value'!: '',
  'checked'?: '',
  'hint'?: '',
}
```

### Utiliser l'attribut `value`

L’attribut `value` fournit une référence rapide à la valeur sélectionnée à l’intérieur du composant `gcds-radios`.

### Ajouter du texte explicatif

Utilisez l’attribut `hint` pour ajouter du texte explicatif.

{% include "partials/error-message.njk", component: 'les boutons radio' %}

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `legend`

L'attribut `legend` définit la légende du groupe de boutons radio.

{% examplesPreview "300", "", "fr" %}
<gcds-radios legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `name`

L'attribut `name` identifie le composant dans le formulaire. Il permet de récupérer la valeur sélectionnée après la soumission.

{% examplesPreview "300", "", "fr" %}
<gcds-radios legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `options`

L'attribut `options` définit les boutons radio à afficher en prenant un tableau (array) d'objets, un par bouton radio.

{% examplesPreview "300", "", "fr" %}
<gcds-radios legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `autofocus`

L'attribut `autofocus` contrôle si le premier bouton radio est ciblé automatiquement au chargement de la page. Par défaut, il est défini à `false`. Lorsqu'il est défini à `true`, le bouton radio est ciblé à l'affichage.

{% examplesPreview "300", "", "fr" %}
<gcds-radios autofocus legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `disabled`

L'attribut `disabled` contrôle si les boutons radio sont désactivés ou non. Par défaut, il est défini à `false`.

{% examplesPreview "300", "", "fr" %}
<gcds-radios disabled legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `error-message`

L'attribut `error-message` définit le message d'erreur à afficher pour les boutons radio invalides.

{% examplesPreview "340", "", "fr" %}
<gcds-radios error-message="Message d'erreur" legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `form`

L'attribut `form` définit l'identifiant du formulaire auquel appartiennent les boutons radio.

{% examplesPreview "300", "", "fr" %}
<gcds-radios form="form-id" legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `hide-legend`

L'attribut `hide-legend` contrôle si la légende est masquée ou non.

{% examplesPreview "270", "", "fr" %}
<gcds-radios hide-legend legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `hint`

L'attribut `hint` définit le texte explicatif affiché sous la légende.

{% examplesPreview "340", "", "fr" %}
<gcds-radios hint="Texte explicatif/Exemple de message." legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `required`

L'attribut `required` contrôle si le jeu de boutons radio est obligatoire ou non. Lorsqu'il est défini à `true`, il ajoute « obligatoire » après la légende, et active le validateur de champ obligatoire.

{% examplesPreview "340", "", "fr" %}
<gcds-radios required legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `validate-on`

L'attribut `validate-on` définit l'événement de validation pour les boutons radio.

{% examplesPreview "300", "", "fr" %}
<gcds-radios validate-on="other" required legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

#### `value`

L'attribut `value` contient la valeur du bouton radio actuellement sélectionné. Il se met à jour à chaque changement de sélection.

{% examplesPreview "300", "", "fr" %}
<gcds-radios value="radio1" legend="Légende" name="radio" options='[{"id":"form-radio-1","label":"Libellé 1","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio1"},{"id":"form-radio-r","label":"Libellé 2","hint":"Ceci est une description ou un exemple à titre de clarification.", "value": "radio2"}]'>
</gcds-radio>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-radios."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-radios--events-properties&lang=fr"
  width="1200"
  height="1770"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
