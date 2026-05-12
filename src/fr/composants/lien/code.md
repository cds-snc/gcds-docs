---
title: Lien
layout: 'layouts/component-documentation.njk'
translationKey: 'linkCode'
tags: ['linkFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des liens](#codage-et-accessibilite-des-liens)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des liens

### Fournissez des informations pour télécharger des fichiers

- Fournissez dans le texte du lien des renseignements sur le type et la taille des fichiers à télécharger : `<gcds-link href="application.pdf" download>Demande 2023 (PDF, 1,5 Mo)</gcds-link>`.
- Évitez de placer le lien de téléchargement dans le texte du paragraphe.

Remarque : Seuls les fichiers dont l'URL est de la même origine que le site Web seront téléchargés sur l'appareil de l'utilisateur·rice.

### Ajoutez un lien «&nbsp;Passer au contenu&nbsp;»

- Un lien «&nbsp;Passer au contenu&nbsp;» permet à une personne de sauter un ensemble de liens de navigation pour passer au contenu principal.
- Pour éviter de dissimuler le contenu, configurez le lien de manière à ce qu'il pousse le contenu vers le bas et ne flotte pas. Pour la version bureau, placez le lien «&nbsp;Passer au contenu&nbsp;» en haut à gauche de la page afin qu'il n'interrompe pas le flux.

### Évitez les liens externes dans la mesure du possible

- Ajoutez un lien externe en définissant l'attribut `external` à `true`.
- Évitez d'ajouter des liens externes dans les cas suivants :
  - Au milieu de la progression d'une personne, par exemple lorsqu'une personne remplit un formulaire.
  - Si changer de page cause une perte de progression non enregistrée.
  - Si le fait de suivre un lien met fin à un processus entamé, par exemple lorsqu'une personne regarde une vidéo ou effectue une tâche principale.
  - **Lorsqu'un lien est envahissant et perturberait le flux de la page.**
  - Lorsqu'une personne serait surprise de se retrouver ailleurs de manière inattendue.
- Indiquez clairement où mène le lien, afin qu'une personne puisse décider si elle doit quitter la page actuelle.
- Communiquez clairement lorsque les liens sont assortis de conditions particulières. Par exemple, lorsqu'ils sont uniquement accessibles à l'intérieur d'un réseau fermé en raison d'un pare-feu.

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

#### `href`

L'attribut `href` définit l'URL de la page vers laquelle pointe le lien.

{% examplesPreview "80", "", "fr" %}
<gcds-link href="#">Lien de navigation</gcds-link>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `display`

L'attribut `display` définit le comportement d'affichage du lien. Les options sont&nbsp;:

- `inline` (par défaut)
- `block`

<!-- Force line break -->

{% examplesPreview "80", "", "fr" %}
<gcds-link display="block" href="#">Lien de navigation</gcds-link>
{% endexamplesPreview %}

#### `download`

L'attribut `download` indique que la cible (le fichier spécifié dans l'attribut href) sera téléchargée lorsque l'utilisateur clique sur le lien.

{% examplesPreview "80", "", "fr" %}
<gcds-link href="download.pdf" download="file.pdf" type="application/pdf">
  Télécharger le document (PDF, 1,5 Mb)
</gcds-link>
{% endexamplesPreview %}

#### `external`

L'attribut `external` contrôle si le lien est externe ou non. Lorsqu'il est défini à true, une icône de lien externe est ajoutée après le lien.

{% examplesPreview "80", "", "fr" %}
<gcds-link external href="#">Lien de navigation</gcds-link>
{% endexamplesPreview %}

#### `link-role`

L'attribut `link-role` définit le style principal du lien. Les options sont :

- `default` (par défaut)
- `light`

<!-- Force line break -->

{% examplesPreview "130", "", "fr" %}

<div class="bg-dark p-300">
  <gcds-link link-role="light" href="#">Lien de navigation</gcds-link>
</div>
{% endexamplesPreview %}

#### `rel`

L'attribut `rel` définit la relation entre le document actuel et le document lié. Il est souvent utilisé pour des raisons de sécurité et de confidentialité, notamment lorsque les liens s'ouvrent dans un nouvel onglet ou une nouvelle fenêtre.

{% examplesPreview "80", "", "fr" %}
<gcds-link rel="license" href="#license">Lien de navigation</gcds-link>
{% endexamplesPreview %}

#### `size`

L'attribut `size` définit la taille du lien. Les options sont :

- `inherit` (par défaut)
- `regular`
- `small`

<!-- Force line break -->

{% examplesPreview "80", "", "fr" %}
<gcds-link size="small" href="#">Lien de navigation</gcds-link>
{% endexamplesPreview %}

#### `target`

L'attribut `target` définit où s'ouvre le lien. Par exemple, il peut ouvrir le lien dans le même contexte de navigation ou dans un nouvel onglet ou une nouvelle fenêtre.

{% examplesPreview "80", "", "fr" %}
<gcds-link target="_blank" href="#">Lien de navigation</gcds-link>
{% endexamplesPreview %}

#### `type`

L'attribut `type` définit le type de média du document lié.

{% examplesPreview "80", "", "fr" %}
<gcds-link href="download.pdf" download="file.pdf" type="application/pdf">
  Télécharger le document (PDF, 1,5 Mb)
</gcds-link>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à placer le texte du lien.

{% examplesPreview "80", "", "fr" %}
<gcds-link href="#">Lien de navigation</gcds-link>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-link."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-link--events-properties&lang=fr"
  width="1200"
  height="1300"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
