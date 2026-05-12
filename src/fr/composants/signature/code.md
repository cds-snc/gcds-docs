---
title: Signature
layout: 'layouts/component-documentation.njk'
translationKey: 'signatureCode'
tags: ['signatureFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de signature](#codage-et-accessibilite-de-signature)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de signature

### Utilisation des types de signature et de mot-symbole

Utilisez la signature dans <gcds-link href="{{ links.header }}">l'en-tête</gcds-link> du site et le mot-symbole dans <gcds-link href="{{ links.footer }}">le pied de page</gcds-link> du site.

- Utilisez l'attribut `type` pour définir la `signature`.
- Utilisez l'attribut `type` pour définir le `wordmark`.

### Définir la langue et la couleur

- Définissez les paramètres de langue de la page en utilisant l'attribut `lang`. L'attribut `Fr` définira le français comme la langue de la page et l'attribut `En` définira l'anglais comme la langue de la page.
- Utilisez un lien hypertexte dans la signature pour qu'elle puisse mener à la page d'accueil Canada.ca dans la même langue officielle que la page actuelle. Définissez l'attribut `has-link` à `true` pour créer un lien hypertexte vers Canada.ca.
- Définissez le composant comme `colour` ou `white` en utilisant l'attribut `variant`.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs facultatifs](#section-optional)

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `has-link`

L'attribut `has-link` contrôle si la signature est cliquable et pointe vers Canada.ca. Par défaut, il est défini à `false`, ce qui affiche la signature comme contenu statique non cliquable.

{% examplesPreview "70", "", "fr" %}
<gcds-signature></gcds-signature>
{% endexamplesPreview %}

Lorsqu'il est défini à `true`, la signature devient cliquable et pointe vers Canada.ca.

{% examplesPreview "70", "", "fr" %}
<gcds-signature has-link="true"></gcds-signature>
{% endexamplesPreview %}

#### `type`

L'attribut `type` définit le visuel affiché dans le composant de signature. Par défaut, il est défini à `signature`, ce qui affiche la signature.

{% examplesPreview "70", "", "fr" %}
<gcds-signature></gcds-signature>
{% endexamplesPreview %}

Lorsqu'il est défini à `wordmark`, le composant affiche le mot-symbole à la place.

{% examplesPreview "100", "", "fr" %}
<gcds-signature type="wordmark"></gcds-signature>
{% endexamplesPreview %}

#### `variant`

L'attribut `variant` définit la couleur de la signature. Par défaut, il est défini à `colour`, ce qui affiche la version colorée.

{% examplesPreview "70", "", "fr" %}
<gcds-signature></gcds-signature>
{% endexamplesPreview %}

Lorsqu'il est défini à `white`, le composant affiche la version blanche, adaptée aux arrière-plans foncés.

{% examplesPreview "120", "", "fr" %}

<div class="bg-dark p-300">
  <gcds-signature variant="white"></gcds-signature>
</div>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-signature."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-signature--events-properties&lang=fr"
  width="1200"
  height="1100"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
