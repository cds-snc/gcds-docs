---
title: Téléverseur de fichiers
layout: 'layouts/component-documentation.njk'
translationKey: 'fileuploaderCode'
tags: ['fileuploaderFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité du téléverseur de fichiers](#codage-et-accessibilite-du-televerseur-de-fichiers)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité du téléverseur de fichiers

### Appliquez les attributs requis

Pour que le téléverseur de fichiers fonctionne correctement, utilisez toujours les attributs suivants avec `<gcds-file-uploader>`:

- `name`
- `label`
- `uploader-id`

{% include "partials/error-message.njk" %}

### Téléchargez plusieurs fichiers

Utilisez l'attribut `multiple` pour permettre la sélection de plus d'un fichier.

### Validez les types de fichiers à téléverser

Utilisez l'attribut `accept` pour définir les types de fichiers acceptés par le téléverseur de fichiers.

### Masquer l’étiquette du téléverseur de fichiers

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

#### `label`

L'attribut `label` définit le libellé du téléverseur de fichiers.

{% examplesPreview %}
<gcds-file-uploader uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `name`

L'attribut `name` identifie le composant dans le formulaire. Il permet de récupérer les fichiers téléversés après la soumission.

{% examplesPreview %}
<gcds-file-uploader uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `uploader-id`

L'attribut `uploader-id` définit l'identifiant unique du téléverseur de fichiers.

{% examplesPreview %}
<gcds-file-uploader uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `accept`

L'attribut `accept` définit les types de fichiers acceptés par le téléverseur.

{% examplesPreview %}
<gcds-file-uploader accept="image/*" uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `autofocus`

L'attribut `autofocus` contrôle si le téléverseur de fichiers est ciblé automatiquement au chargement de la page. Par défaut, il est défini à `false`. Lorsqu'il est défini à `true`, le téléverseur est ciblé à l'affichage.

{% examplesPreview %}
<gcds-file-uploader autofocus uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `disabled`

L'attribut `disabled` contrôle si le téléverseur de fichiers est désactivé ou non. Par défaut, il est défini à `false`.

{% examplesPreview %}
<gcds-file-uploader disabled uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `error-message`

L'attribut `error-message` définit le message d'erreur à afficher pour un fichier invalide.

{% examplesPreview %}
<gcds-file-uploader error-message="Message d'erreur" uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `files`

L'attribut `files` fournit un objet `FileList` contenant les fichiers sélectionnés par l'utilisateur. Cet attribut se met à jour automatiquement lorsque l'utilisateur sélectionne des fichiers.

{% examplesPreview %}
<gcds-file-uploader uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>

<script>
  const uploader = document.querySelector('gcds-file-uploader');
  const dt = new DataTransfer();
  dt.items.add(new File(['hello'], 'hello.txt', {type: 'text/plain'}));
  uploader.files = dt.files;
</script>

{% endexamplesPreview %}

#### `form`

L'attribut `form` définit l'identifiant du formulaire auquel appartient le téléverseur de fichiers.

{% examplesPreview %}
<gcds-file-uploader form="form-id" uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `hide-label`

L'attribut `hide-label` contrôle si le libellé est masqué ou non.

{% examplesPreview %}
<gcds-file-uploader hide-label uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `hint`

L'attribut `hint` définit le texte explicatif affiché sous le libellé.

{% examplesPreview %}
<gcds-file-uploader hint="Texte explicatif / Exemple de message." uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `multiple`

L'attribut `multiple` contrôle si l'utilisateur peut sélectionner plusieurs fichiers.

{% examplesPreview %}
<gcds-file-uploader multiple uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `required`

L'attribut `required` contrôle si le téléverseur de fichiers est obligatoire ou non. Lorsqu'il est défini à `true`, il ajoute « obligatoire » après le libellé et active le validateur de champ obligatoire.

{% examplesPreview %}
<gcds-file-uploader required uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `validate-on`

L'attribut `validate-on` définit l'événement de validation pour le téléverseur de fichiers.

{% examplesPreview %}
<gcds-file-uploader validate-on="other" required uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>
{% endexamplesPreview %}

#### `value`

L'attribut `value` contient les noms de tous les fichiers actuellement sélectionnés. Il se met à jour à chaque changement de sélection.

{% examplesPreview %}
<gcds-file-uploader uploader-id="file-uploader-preview" label="Libellé" name="file-uploader-preview">
</gcds-file-uploader>

<script>
  const uploader = document.querySelector('gcds-file-uploader');
  uploader.value = ['hello.txt', 'resume.pdf'];
</script>

{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-file-uploader."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-file-uploader--events-properties&lang=fr"
  width="1200"
  height="1850"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
