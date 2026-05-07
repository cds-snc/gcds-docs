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

### Appliquer les attributs requis

Pour que les cases à cocher fonctionnent correctement, utilisez toujours les attributs suivants avec `gcds-checkbox` :

- `name`
- `options`

### Utiliser l'attribut `options` avec les cases à cocher

L'attribut `options` utilise un tableau d'objets pour rendre chaque case à cocher. Voici en exemple l'un de ces objets :

```javascript
{
  'id'!: '',
  'label'!: '',
  'value'?: '',
  'checked'?: '',
  'hint'?: '',
}
```

À l'intérieur de l'attribut `options`, utilisez toujours les propriétés `id` et `label` de l'objet pour chaque case à cocher. Les autres propriétés sont facultatives.

### Utiliser l'attribut `value`

- L'attribut `value` fournit une référence rapide aux valeurs des cases cochées à l'intérieur du composant `gcds-checkboxes`.
- L'attribut `value` est formaté comme un tableau de chaînes. Exemple : `[“checkboxOneValue”, checkboxTwoValue”]`

{% include "partials/error-message.njk" %}

### Pour un groupe de cases à cocher

- Utilisez l'attribut `legend` lorsque vous passez plus d'un objet à l'attribut `options`. Lorsqu'il y a plus d'une case à cocher, il faut définir l'attribut `legend` pour que le composant `gcds-checkboxes` puisse afficher son rendu.
- Utilisez les attributs `hint` et `error-message` pour ajouter des renseignements supplémentaires au jeu de champs intégré à `gcds-checkboxes`.

### Pour une seule case à cocher

- Passez un seul objet à l'attribut `options` pour afficher une seule case à cocher sans jeu de champs.
- Utilisez les attributs `hint` et `error-message` pour ajouter des renseignements supplémentaires à la case à cocher.

### Masquer la légende ou les étiquettes des cases à cocher

- Masquez visuellement la légende ou l’étiquette, tout en la conservant pour les technologies d’assistance.
  - Définissez l’attribut `hide-legend` à true afin de masquer visuellement la légende d’un groupe de cases à cocher.
  - Définissez l’attribut `hide-label` à true afin de masquer visuellement l’étiquette d’une seule case à cocher.
- Évitez d’ajouter du texte explicatif lorsque vous masquez la légende. Vous pouvez également fournir une chaîne vide pour le texte explicatif.

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

{% examplesPreview %}
<gcds-checkboxes legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `name`

L'attribut `name` identifie le composant dans le formulaire. Il permet de récupérer les valeurs sélectionnées après la soumission.

{% examplesPreview %}
<gcds-checkboxes legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `options`

L'attribut `options` définit les cases à cocher à afficher en prenant un tableau (array) d'objets, un par case à cocher.

{% examplesPreview %}
<gcds-checkboxes legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `autofocus`

L'attribut `autofocus` contrôle si la première case à cocher est ciblée automatiquement au chargement de la page. Par défaut, il est défini à `false`. Lorsqu'il est défini à `true`, la case à cocher est ciblée à l'affichage.

{% examplesPreview %}
<gcds-checkboxes autofocus legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `disabled`

L'attribut `disabled` contrôle si les cases à cocher sont désactivées ou non. Par défaut, il est défini à `false`.

{% examplesPreview %}
<gcds-checkboxes disabled legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `error-message`

L'attribut `error-message` définit le message d'erreur à afficher pour les cases à cocher invalides.

{% examplesPreview %}
<gcds-checkboxes error-message="Message d'erreur" legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `form`

L'attribut `form` définit l'identifiant du formulaire auquel appartiennent les cases à cocher.

{% examplesPreview %}
<gcds-checkboxes form="form-id" legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `hide-label`

L'attribut `hide-label` contrôle si le libellé est masqué ou non.

{% examplesPreview %}
<gcds-checkboxes hide-label name="checkbox" options='[{ "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `hide-legend`

L'attribut `hide-legend` contrôle si la légende est masquée ou non.

{% examplesPreview %}
<gcds-checkboxes hide-legend legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `hint`

L'attribut `hint` définit le texte explicatif affiché sous le libellé ou la légende.

{% examplesPreview %}
<gcds-checkboxes hint="Texte explicatif/Exemple de message." legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `required`

L'attribut `required` contrôle si le groupe de cases à cocher est obligatoire ou non. Lorsqu'il est défini à `true`, il ajoute « obligatoire » après le libellé ou la légende et active le validateur de champ obligatoire.

{% examplesPreview %}
<gcds-checkboxes required legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `validate-on`

L'attribut `validate-on` définit l'événement de validation pour les cases à cocher.

{% examplesPreview %}
<gcds-checkboxes validate-on="other" legend="Légende" name="checkexample" options='[{"id": "form-check-1", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check1"}, {"id": "form-check-2", "label": "Libellé", "hint": "Ceci est une description ou un exemple à titre de clarification.", "value": "check2"}]'>
</gcds-checkboxes>
{% endexamplesPreview %}

#### `value`

L'attribut `value` contient un tableau (array) des valeurs de toutes les cases actuellement cochées. Il se met à jour à chaque changement de sélection.

{% examplesPreview %}
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
