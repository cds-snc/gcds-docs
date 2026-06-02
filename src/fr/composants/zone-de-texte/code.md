---
title: Zone de texte
layout: 'layouts/component-documentation.njk'
translationKey: 'textareaCode'
tags: ['textareaFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des zones de texte](#codage-et-accessibilite-des-zones-de-texte)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des zones de texte

### Appliquez les attributs essentiels

Utilisez toujours les attributs essentiels suivants avec `gcds-textarea` :

- `name`
- `label`
- `textarea-id`

### Adapter la taille du champ à la réponse

- Utilisez l’attribut `rows` pour définir la hauteur d’une zone de texte de façon à ce qu’elle corresponde à la quantité de texte attendue.
- Utilisez [le composant champ de saisie]({{ links.input }}) pour les réponses qui nécessitent moins de 75 caractères.
- Évitez de définir une largeur inférieure à 50 %.
- Utilisez une hauteur maximale de 7 lignes pour les réponses sans longueur fixe.

{% include "partials/hint.njk" %}

{% include "partials/hide-the-label.njk" %}

{% include "partials/error-message.njk" %}

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `label`

L'attribut `label` définit l'étiquette de la zone de texte.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `name`

L'attribut `name` identifie la zone de texte dans le formulaire. Il permet de récupérer la valeur saisie après la soumission.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `textarea-id`

L'attribut `textarea-id` définit l'identifiant unique de la zone de texte.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `autofocus`

L'attribut `autofocus` contrôle si la zone de texte est ciblée automatiquement au chargement de la page. Par défaut, il est défini à `false`. Lorsqu'il est défini à `true`, la zone de texte est ciblée à l'affichage.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea autofocus textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `cols`

L'attribut `cols` définit la largeur visible de la zone de texte en nombre de caractères moyens. La largeur minimale est de 50 % de son conteneur.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea cols="8" textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `disabled`

L'attribut `disabled` contrôle si la zone de texte est désactivée ou non. Par défaut, il est défini à `false`.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea disabled textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `error-message`

L'attribut `error-message` définit le message d'erreur à afficher pour une zone de texte invalide.

{% examplesPreview "340", "", "fr" %}
<gcds-textarea error-message="Message d'erreur" textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `form`

L'attribut `form` définit l'identifiant du formulaire auquel appartient la zone de texte.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea form="form-id" textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `hide-label`

L'attribut `hide-label` contrôle si l'étiquette est masquée ou non.

{% examplesPreview "260", "", "fr" %}
<gcds-textarea hide-label textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `hide-limit`

L'attribut `hide-limit` contrôle si le compteur de limite de caractères est affiché ou non. Lorsqu'il est défini à `true`, le compteur n'est pas affiché. Par défaut, il est défini à `false`.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea hide-limit maxlength="20" textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `hint`

L'attribut `hint` définit le texte explicatif affiché sous l'étiquette.

{% examplesPreview "340", "", "fr" %}
<gcds-textarea hint="Texte explicatif / Exemple de message." textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `maxlength`

L'attribut `maxlength` définit le nombre maximum de caractères acceptés par la zone de texte.

{% examplesPreview "350", "", "fr" %}
<gcds-textarea maxlength="10" textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `minlength`

L'attribut `minlength` définit le nombre minimum de caractères acceptés par la zone de texte.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea minlength="5" textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `required`

L'attribut `required` contrôle si la zone de texte est obligatoire ou non. Lorsqu'il est défini à `true`, il ajoute « obligatoire » après l'étiquette, et active le validateur de champ obligatoire.

{% examplesPreview "340", "", "fr" %}
<gcds-textarea required textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `rows`

L'attribut `rows` définit le nombre de lignes visibles dans la zone de texte, ce qui détermine sa hauteur.

{% examplesPreview "230", "", "fr" %}
<gcds-textarea rows="3" textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `validate-on`

L'attribut `validate-on` définit l'événement de validation pour la zone de texte.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea validate-on="other" required textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

#### `value`

L'attribut `value` définit le contenu initial de la zone de texte. Il se met à jour pour refléter la valeur saisie par l'utilisateur.

{% examplesPreview "300", "", "fr" %}
<gcds-textarea value="Contenu de la zone de texte." textarea-id="textarea-example" label="Libellé de champ" name="textarea-example">
</gcds-textarea>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-textarea."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-textarea--events-properties&lang=fr"
  width="1200"
  height="2050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
