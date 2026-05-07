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

### Utilisez le bouton désactivé avec discernement

- Utilisez le bouton désactivé de façon judicieuse afin d’indiquer qu’il faut faire quelque chose avant qu’une action puisse être prise.
- Là où c’est possible, utilisez d’autres méthodes d’intervention comme un message d’erreur pour empêcher la soumission de formulaires incomplets.

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

L'attribut `button-id` précise le `id` du bouton.

{% examplesPreview %}
<gcds-button id="submit-ei-application">
  Soumettre
</gcds-button>
{% endexamplesPreview %}

#### `button-role`

L'attribut `button-role` définit le style principal d'un bouton. Les options sont :

- `primary` (par défaut)
- `secondary`
- `danger`
- `start`

<!-- Force line break -->

{% examplesPreview %}
<gcds-button button-role="start">Début</gcds-button>
<gcds-button>Soumettre</gcds-button>
<gcds-button button-role="secondary">Annuler</gcds-button>
<gcds-button button-role="danger">Supprimer</gcds-button>
{% endexamplesPreview %}

#### `disabled`

L'attribut `disabled` est un `booléen` qui contrôle si un bouton est interactif ou non.

{% examplesPreview %}
<gcds-button button-role="danger" disabled>
  Supprimer
</gcds-button>
{% endexamplesPreview %}

#### `name`

L'attribut `name` précise le nom du bouton lors de l'envoi des données du formulaire. Il permet d'identifier quel bouton a déclenché l'envoi du formulaire, notamment lorsque plusieurs boutons sont présents dans un formulaire.

{% examplesPreview %}

<form action="..." method="post">
  <gcds-button button-role="secondary" name="save-draft" type="submit">Enregistrer le brouillon</gcds-button>
  <gcds-button button-role="secondary" name="submit-application" type="submit">Soumettre le formulaire</gcds-button>
</form>
{% endexamplesPreview %}

#### `size`

L'attribut `size` définit la taille du bouton. Les options sont :

- `regular` (par défaut)
- `small`

<!-- Force line break -->

{% examplesPreview %}
<gcds-button>Taille par défaut</gcds-button>
<gcds-button size="small">Taille petite</gcds-button>
{% endexamplesPreview %}

#### `type`

L'attribut `type` définit la fonction du bouton. Les options sont :

- `button` (par défaut)
- `link`
- `reset`
- `submit`

<!-- Force line break -->

{% examplesPreview %}
<gcds-button>Bouton</gcds-button>
<gcds-button type="link">Lien</gcds-button>
<gcds-button type="reset">Réinitialiser</gcds-button>
<gcds-button type="submit"> Soumettre</gcds-button>
{% endexamplesPreview %}

#### `value`

L'attribut `value` définit les données envoyées au serveur lorsque le bouton est utilisé pour soumettre un formulaire. Cette valeur n'est transmise que si le bouton a un attribut `name` et que c'est lui qui a déclenché la soumission. Si plusieurs boutons submit sont présents, seul celui sur lequel l'utilisateur a cliqué envoie sa valeur.

{% examplesPreview %}

<form action="..." method="post">
  <gcds-button button-role="secondary" type="submit" name="applicationAction" value="save">Enregistrer le brouillon</gcds-button>
  <gcds-button button-role="secondary" type="submit" name="applicationAction" value="submit">Soumettre le formulaire</gcds-button>
</form>
{% endexamplesPreview %}

<!-- Optional for links section -->

#### `download`

L'attribut `download` indique qu'activer le bouton téléchargera le fichier référencé par l'attribut `href`, plutôt que d'y naviguer.

**Cet attribut fonctionne uniquement lorsque le `type` du bouton est défini à `link`**.

{% examplesPreview %}
<gcds-button type="link" href="/files/application-receipt.pdf" download>
  Télécharger le reçu
</gcds-button>
{% endexamplesPreview %}

#### `href`

L'attribut `href` définit la destination du lien.

**Cet attribut fonctionne uniquement lorsque le `type` du bouton est défini à `link`**.

{% examplesPreview %}
<gcds-button type="link" href="https://www.canada.ca/en/services/benefits.html">
  Voir les prestations
</gcds-button>
{% endexamplesPreview %}

#### `rel`

L'attribut `rel` définit la relation entre le document actuel et le document lié. Il est souvent utilisé pour des raisons de sécurité et de confidentialité, notamment lorsque les liens s'ouvrent dans un nouvel onglet ou une nouvelle fenêtre.

**Cet attribut fonctionne uniquement lorsque le `type` du bouton est défini à `link`**.

{% examplesPreview %}
<gcds-button type="link" href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">
  Voir les prestations
</gcds-button>
{% endexamplesPreview %}

#### `target`

L'attribut `target` définit où s'ouvre le lien. Par exemple, il peut ouvrir le lien dans le même contexte de navigation ou dans un nouvel onglet ou une nouvelle fenêtre.

**Cet attribut fonctionne uniquement lorsque le `type` du bouton est défini à `link`**.

{% examplesPreview %}
<gcds-button type="link" href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">
  Voir les prestations
</gcds-button>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à ajouter le texte du libellé du bouton ou du lien.

{% examplesPreview %}
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
