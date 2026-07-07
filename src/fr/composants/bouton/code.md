---
title: Bouton
layout: 'layouts/component-documentation.njk'
translationKey: 'buttonCode'
tags: ['buttonFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des boutons](#codage-et-accessibilite-des-boutons)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des boutons

### Évaluez l’accessibilité visuelle

Vérifiez la visibilité de la bordure du bouton par rapport à la surface où vous le placez.

### Sélectionnez la bonne taille

Utilisez l’attribut petit bouton pour les actions lorsque l’espace est limité.

Remarque : La hauteur des petits boutons est conforme au niveau AA de la norme WCAG, mais pas au niveau AAA.

### Utilisez le bouton désactivé avec parcimonie

- Utilisez le bouton désactivé de façon limitée pour indiquer qu’une personne doit effectuer une action avant d'en lancer une autre.
- Lorsque possible, privilégiez d'autres moyens, comme un message d’erreur, pour empêcher l'envoi d'un formulaire incomplet.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `button-id`

Utilisez `button-id` pour préciser le `id` du bouton.

{% examplesPreview "100", "", "fr" %}
<gcds-button id="submit-ei-application">
  Soumettre
</gcds-button>
{% endexamplesPreview %}

#### `button-role`

Utilisez `button-role` pour définir le style principal d'un bouton. Choisissez parmi :

- `primary` (par défaut)
- `secondary`
- `danger`
- `start`

<!-- Force line break -->

{% examplesPreview "340", "", "fr" %}
<gcds-button button-role="start">Début</gcds-button>
<gcds-button>Soumettre</gcds-button>
<gcds-button button-role="secondary">Annuler</gcds-button>
<gcds-button button-role="danger">Supprimer</gcds-button>
{% endexamplesPreview %}

#### `disabled`

Définissez `disabled` à `true` pour rendre le bouton non interactif. Par défaut, `disabled` est défini à `false`.

{% examplesPreview "100", "", "fr" %}
<gcds-button button-role="danger" disabled>
  Supprimer
</gcds-button>
{% endexamplesPreview %}

#### `name`

Utilisez `name` pour préciser le nom du bouton lors de l'envoi des données du formulaire. Cet attribut permet d'identifier quel bouton a déclenché l'envoi, notamment lorsque plusieurs boutons sont présents dans un formulaire.

{% examplesPreview "180", "", "fr" %}

<form action="..." method="post">
  <gcds-button button-role="secondary" name="save-draft" type="submit">Enregistrer le brouillon</gcds-button>
  <gcds-button button-role="secondary" name="submit-application" type="submit">Soumettre le formulaire</gcds-button>
</form>
{% endexamplesPreview %}

#### `size`

Utilisez `size` pour définir la taille du bouton. Choisissez parmi :

- `regular` (par défaut)
- `small`

<!-- Force line break -->

{% examplesPreview "180", "", "fr" %}
<gcds-button>Taille par défaut</gcds-button>
<gcds-button size="small">Taille petite</gcds-button>
{% endexamplesPreview %}

#### `type`

Utilisez `type` pour définir la fonction du bouton. Choisissez parmi :

- `button` (par défaut)
- `link`
- `reset`
- `submit`

<!-- Force line break -->

{% examplesPreview "340", "", "fr" %}
<gcds-button>Bouton</gcds-button>
<gcds-button type="link">Lien</gcds-button>
<gcds-button type="reset">Réinitialiser</gcds-button>
<gcds-button type="submit">Soumettre</gcds-button>
{% endexamplesPreview %}

#### `value`

Utilisez `value` pour définir les données envoyées au serveur lorsque le bouton sert à soumettre un formulaire. Le bouton ne transmet cette valeur que s'il a un attribut `name` et que c'est lui qui a déclenché la soumission. Si plusieurs boutons `submit` sont présents, seul le bouton sélectionné envoie sa valeur.

{% examplesPreview "180", "", "fr" %}

<form action="..." method="post">
  <gcds-button button-role="secondary" type="submit" name="applicationAction" value="save">Enregistrer le brouillon</gcds-button>
  <gcds-button button-role="secondary" type="submit" name="applicationAction" value="submit">Soumettre le formulaire</gcds-button>
</form>
{% endexamplesPreview %}

<!-- Optional for links section -->

#### `download`

Utilisez `download` pour faire en sorte que le bouton télécharge le fichier référencé par l'attribut `href`, plutôt que d'y naviguer.

**Cet attribut fonctionne uniquement lorsque le `type` du bouton est défini à `link`**.

{% examplesPreview "100", "", "fr" %}
<gcds-button type="link" href="/files/application-receipt.pdf" download>
  Télécharger le reçu
</gcds-button>
{% endexamplesPreview %}

#### `href`

Utilisez `href` pour définir la destination du lien.

**Cet attribut fonctionne uniquement lorsque le `type` du bouton est défini à `link`**.

{% examplesPreview "100", "", "fr" %}
<gcds-button type="link" href="https://www.canada.ca/en/services/benefits.html">
  Voir les prestations
</gcds-button>
{% endexamplesPreview %}

#### `rel`

Utilisez `rel` pour définir la relation entre le document actuel et le document lié. Utilisez-le pour des raisons de sécurité et de confidentialité, notamment lorsque les liens s'ouvrent dans un nouvel onglet ou une nouvelle fenêtre.

**Cet attribut fonctionne uniquement lorsque le `type` du bouton est défini à `link`**.

{% examplesPreview "100", "", "fr" %}
<gcds-button type="link" href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">
  Voir les prestations
</gcds-button>
{% endexamplesPreview %}

#### `target`

Utilisez `target` pour définir où s'ouvre le lien : dans le même contexte de navigation, ou dans un nouvel onglet ou une nouvelle fenêtre.

**Cet attribut fonctionne uniquement lorsque le `type` du bouton est défini à `link`**.

{% examplesPreview "100", "", "fr" %}
<gcds-button type="link" href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">
  Voir les prestations
</gcds-button>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

Utilisez l'emplacement par défaut pour ajouter le texte du bouton ou du lien.

{% examplesPreview "100", "", "fr" %}
<gcds-button>Soumettre</gcds-button>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-button."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-button--events-properties&lang=fr"
  width="1200"
  height="1800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
