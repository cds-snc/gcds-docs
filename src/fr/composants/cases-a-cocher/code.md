---
title: Cases à cocher
layout: 'layouts/component-documentation.njk'
translationKey: 'checkboxesCode'
tags: ['checkboxesFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité les cases à cocher](#codage-et-accessibilite-les-cases-a-cocher)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité les cases à cocher

### Appliquer les attributs essentiels

Utilisez toujours les attributs essentiels suivants avec `gcds-checkboxes` :

- `name`
- `options`

### Utiliser l'attribut `options`

- L’attribut `options` utilise un tableau d’objets pour générer chaque case à cocher.
- À l’intérieur de chaque objet dans le tableau `options`, utilisez toujours les propriétés essentielles à cet objet :
  - `id`
  - `label`
- Les autres propriétés sont facultatives.

Exemple:

```javascript
{
  'id'!: '',
  'label'!: '',
  'value'?: '',
  'checked'?: '',
  'hint'?: '',
}
```

### Définir les attributs en fonction du nombre de cases à cocher

#### Une seule case à cocher

- Ajoutez un seul objet dans l’attribut `options` pour générer une case à cocher unique.
- Le [jeu de champs]({{ links.fieldset }}) est supprimé lorsqu’il n’y a qu’une seule case à cocher.

### Un groupe de cases à cocher

- Ajoutez plus d’un objet dans l’attribut `options` pour générer plusieurs cases à cocher.
- Utilisez l’attribut `legend` pour afficher le [jeu de champs]({{ links.fieldset }}).

### Utiliser l'attribut `value`

- L’attribut `value` fournit une référence rapide aux valeurs des cases à cocher sélectionnées dans le composant `gcds-checkboxes`. 
- L'attribut `value` est formaté comme un tableau de chaînes.

Exemple :

```javascript
[“checkboxOneValue”, checkboxTwoValue”]
```

### Ajouter du texte explicatif

Utilisez l’attribut `hint` pour ajouter du texte explicatif.

### Masquer la légende ou les étiquettes

- Utilisez les attributs `hide-legend` et `hide-label` pour masquer visuellement la légende ou l’étiquette tout en la conservant pour les technologies d’assistance. 
  - Définissez l’attribut `hide-legend` à true afin de masquer visuellement la légende d’un groupe de cases à cocher.
  - Définissez l’attribut `hide-label` à true afin de masquer visuellement l’étiquette d’une seule case à cocher.
- Évitez d’ajouter du texte explicatif lorsque vous masquez la légende. Vous pouvez également fournir une chaîne vide pour le texte explicatif.

{% include "partials/error-message.njk", component: "les cases à cocher" %}

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

L'attribut `legend` définit la légende du groupe de cases à cocher.

{% examplesPreview "310", "", "fr" %}
<gcds-checkboxes legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `name`

L'attribut `name` identifie le composant dans le formulaire. Il permet de récupérer les valeurs sélectionnées après la soumission.

{% examplesPreview "310", "", "fr" %}
<gcds-checkboxes legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `options`

L'attribut `options` définit les cases à cocher à afficher en prenant un tableau (array) d'objets, un par case à cocher.

{% examplesPreview "310", "", "fr" %}
<gcds-checkboxes legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `autofocus`

L'attribut `autofocus` contrôle si la première case à cocher est ciblée automatiquement au chargement de la page. Par défaut, il est défini à `false`. Lorsqu'il est défini à `true`, la case à cocher est ciblée à l'affichage.

{% examplesPreview "310", "", "fr" %}
<gcds-checkboxes autofocus legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `disabled`

L'attribut `disabled` contrôle si les cases à cocher sont désactivées ou non. Par défaut, il est défini à `false`.

{% examplesPreview "310", "", "fr" %}
<gcds-checkboxes disabled legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `error-message`

L'attribut `error-message` définit le message d'erreur à afficher pour les cases à cocher invalides.

{% examplesPreview "350", "", "fr" %}
<gcds-checkboxes error-message="Message d'erreur" legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `form`

L'attribut `form` définit l'identifiant du formulaire auquel appartiennent les cases à cocher.

{% examplesPreview "310", "", "fr" %}
<gcds-checkboxes form="form-id" legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `hide-label`

L'attribut `hide-label` contrôle si le libellé est masqué ou non.

{% examplesPreview "120", "", "fr" %}
<gcds-checkboxes hide-label name="checkbox" options='[{ "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `hide-legend`

L'attribut `hide-legend` contrôle si la légende est masquée ou non.

{% examplesPreview "280", "", "fr" %}
<gcds-checkboxes hide-legend legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `hint`

L'attribut `hint` définit le texte explicatif affiché sous le libellé ou la légende.

{% examplesPreview "350", "", "fr" %}
<gcds-checkboxes hint="Texte explicatif/Exemple de message." legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `required`

L'attribut `required` contrôle si le groupe de cases à cocher est obligatoire ou non. Lorsqu'il est défini à `true`, il ajoute « obligatoire » après le libellé ou la légende et active le validateur de champ obligatoire.

{% examplesPreview "350", "", "fr" %}
<gcds-checkboxes required legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `validate-on`

L'attribut `validate-on` définit l'événement de validation pour les cases à cocher.

{% examplesPreview "310", "", "fr" %}
<gcds-checkboxes validate-on="other" required legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `value`

L'attribut `value` contient un tableau (array) des valeurs de toutes les cases actuellement cochées. Il se met à jour à chaque changement de sélection.

{% examplesPreview "310", "", "fr" %}
<gcds-checkboxes value='["check2"]' legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-checkboxes."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-checkboxes--events-properties&lang=fr"
  width="1200"
  height="1950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
