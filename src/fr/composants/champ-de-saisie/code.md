---
title: Champ de saisie
layout: 'layouts/component-documentation.njk'
translationKey: 'inputCode'
tags: ['inputFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des champs de saisie](#codage-et-accessibilite-des-champs-de-saisie)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des champs de saisie

### Appliquez les attributs requis

Pour que le champ de saisie fonctionne correctement, utilisez toujours les attributs suivants avec `<gcds-input>`:

- `name`
- `label`
- `input-id`

### Adaptez le champ de saisie au type de réponse

- Définissez l'attribut `size` pour les réponses dont vous connaissez la longueur précise (taille "50" = 50 caractères). Par exemple, 6 caractères pour un code postal ou 10 caractères pour un numéro de téléphone.
- Réglez la saisie de manière à ce qu'elle couvre presque tout le conteneur, par exemple à 90 %, lorsque vous ne savez pas la longueur exacte de la réponse.
- Utilisez le maximum de 75 caractères pour les réponses sans longueur fixe.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

### Utiliser l’attribut `inputmode`

- Utilisez l’attribut `inputmode` pour suggérer un clavier virtuel approprié sur les appareils mobiles, sans modifier la façon dont la valeur est validée.
- Utilisez `inputmode=”numeric”` avec `type=”text”` pour les nombres ne pouvant pas être incrémentés, tels que les numéros de compte, les numéros de carte de crédit ou les codes d’authentification. Le clavier numérique s’ouvrira sur les appareils mobiles.

### Masquer l’étiquette du champ de saisie

- Définissez l’attribut `hide-label` à true afin de masquer visuellement l’étiquette, tout en la conservant pour les technologies d’assistance.
- Évitez d’ajouter du texte explicatif lorsque vous masquez l’étiquette. Vous pouvez également fournir une chaîne vide pour le texte explicatif.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `input-id`

L'attribut `input-id` définit l'identifiant unique du champ de saisie.

{% examplesPreview %}
<gcds-input input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `label`

L'attribut `label` définit l'étiquette du champ de saisie.

{% examplesPreview %}
<gcds-input input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `name`

L'attribut `name` identifie le champ de saisie dans le formulaire. Il permet de récupérer la valeur saisie après la soumission.

{% examplesPreview %}
<gcds-input input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `autocomplete`

L'attribut `autocomplete` contrôle si le navigateur peut suggérer des valeurs précédemment saisies pour le champ.

{% examplesPreview %}
<gcds-input autocomplete="given-name" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `autofocus`

L'attribut `autofocus` contrôle si le champ de saisie est ciblé automatiquement au chargement de la page. Par défaut, il est défini à `false`. Lorsqu'il est défini à `true`, le champ est ciblé à l'affichage.

{% examplesPreview %}
<gcds-input autofocus input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `disabled`

L'attribut `disabled` contrôle si le champ de saisie est désactivé ou non. Par défaut, il est défini à `false`.

{% examplesPreview %}
<gcds-input disabled input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `error-message`

L'attribut `error-message` définit le message d'erreur à afficher pour un champ invalide.

{% examplesPreview %}
<gcds-input error-message="Message d'erreur" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `form`

L'attribut `form` définit l'identifiant du formulaire auquel appartient le champ de saisie.

{% examplesPreview %}
<gcds-input form="form-id" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `hide-label`

L'attribut `hide-label` contrôle si l'étiquette est masquée ou non.

{% examplesPreview %}
<gcds-input hide-label input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `hint`

L'attribut `hint` définit le texte explicatif affiché sous l'étiquette.

{% examplesPreview %}
<gcds-input hint="Texte explicatif / Exemple de message." input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `inputmode`

L'attribut `inputmode` définit l'apparence du clavier virtuel sur les appareils mobiles. Les options sont :

- `decimal`
- `email`
- `none`
- `numeric`
- `search`
- `tel`
- `text`
- `url`

<!-- Force line break -->

{% examplesPreview %}
<gcds-input inputmode="numeric" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `max`

L'attribut `max` définit la valeur maximale acceptée par le champ. Il s'applique uniquement au type de saisie numérique.

{% examplesPreview %}
<gcds-input max="100" type="number" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `maxlength`

L'attribut `maxlength` définit le nombre maximum de caractères acceptés par le champ de saisie.

{% examplesPreview %}
<gcds-input maxlength="10" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `min`

L'attribut `min` définit la valeur minimale acceptée par le champ de saisie. Il s'applique uniquement au type de saisie numérique.

{% examplesPreview %}
<gcds-input min="22" type="number" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `minlength`

L'attribut `minlength` définit le nombre minimum de caractères acceptés par le champ de saisie.

{% examplesPreview %}
<gcds-input minlength="5" type="number" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `pattern`

L'attribut `pattern` définit l'expression régulière à laquelle la valeur du champ doit correspondre.

{% examplesPreview %}
<gcds-input pattern="[A-Z]+" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `readonly`

L'attribut `readonly` contrôle si le champ peut être modifié ou non. Lorsqu'il est défini à `true`, le champ est en lecture seule.

{% examplesPreview %}
<gcds-input readonly value="Readonly" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `required`

L'attribut `required` contrôle si le champ de saisie est obligatoire ou non. Lorsqu'il est défini à true, il ajoute « obligatoire » après l'étiquette et active le validateur de champ obligatoire.

{% examplesPreview %}
<gcds-input required input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `size`

L'attribut `size` définit la taille du champ de saisie pour indiquer visuellement la longueur de texte attendue.

{% examplesPreview %}
<gcds-input size="6" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `step`

L'attribut `step` définit la granularité à laquelle la valeur doit se conformer. Utilisez-le avec le type de saisie numérique.

{% examplesPreview %}
<gcds-input step="10" type="number" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `suggestions`

L'attribut `suggestions` définit un tableau (array) d'options de suggestions.

{% examplesPreview %}
<gcds-input suggestions='[{ "label": "Suggestion A"}, { "label": "Suggestion B"}, { "label": "Suggestion C"}]' input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `type`

L'attribut `type` définit le type de saisie. Les options sont :

- `email`
- `number`
- `password`
- `search`
- `tel`
- `text`
- `url`

<!-- Force line break -->

{% examplesPreview %}
<gcds-input type="email" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `validate-on`

L'attribut `validate-on` définit l'événement de validation pour le champ de saisie.

{% examplesPreview %}
<gcds-input validate-on="other" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

#### `value`

L'attribut `value` définit la valeur initiale affichée dans le champ de saisie. Il reflète la valeur actuelle au fil des modifications de l'utilisateur.

{% examplesPreview %}
<gcds-input value="Texte" input-id="input-example" label="Étiquette de champ" name="input-example">
</gcds-input>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-input."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-input--events-properties&lang=fr"
  width="1200"
  height="2075"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
