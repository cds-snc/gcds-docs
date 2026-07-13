---
title: Chemin de navigation
layout: 'layouts/component-documentation.njk'
translationKey: 'breadcrumbsCode'
tags: ['breadcrumbsFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité du chemin de navigation](#codage-et-accessibilite-du-chemin-de-navigation)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité du chemin de navigation

### Commencez par le lien Canada.ca et le lien de la page d'accueil

- Maintenez le lien Canada.ca comme premier lien de chemin de navigation par défaut pour la plupart des pages et sites Web.
- Choisissez de remplacer le lien Canada.ca par le lien de la page d'accueil sur les pages transactionnelles et les sites Web ou produits autonomes. Pour supprimer le lien Canada.ca à la tête du chemin de navigation, définissez l'attribut `hide-canada-link` à `true`.

Conseil : Lorsqu'un processus n'a pas de page d'accueil traditionnelle, insérez le lien vers la page de départ du processus.

### Placez le chemin de navigation avant l'élément `<main>`

Placez le chemin de navigation en haut de la page, avant l'élément `<main>`. De cette façon, un lien « Passer au contenu principal » permettra aux personnes d'ignorer les liens de navigation, y compris le chemin de navigation.

### Utiliser les éléments du chemin de navigation pour les liens du chemin de navigation

Ajoutez un nouveau lien au chemin de navigation à l'aide du composant `<gcds-breadcrumbs-item>`. Ajoutez-le au moyen de la propriété `href`.

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `href` (sous-composant `gcds-breadcrumbs-item`)

Utilisez `href` pour définir l'URL de destination d'un `gcds-breadcrumbs-item`. Cet attribut est obligatoire pour que l'élément du chemin de navigation fonctionne comme un lien.

{% examplesPreview "100", "", "fr" %}
<gcds-breadcrumbs>
  <gcds-breadcrumbs-item href="#">Page d'accueil</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Lien vers la page parent</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `hide-canada-link`

Utilisez `hide-canada-link` pour afficher ou masquer le lien canada.ca par défaut dans le chemin de navigation. Par défaut, cet attribut est défini à `false`, ce qui signifie que le lien canada.ca apparaît comme premier élément du chemin de navigation.

{% examplesPreview "100", "", "fr" %}
<gcds-breadcrumbs>
  <gcds-breadcrumbs-item href="#">Page d'accueil</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Lien vers la page parent</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}

Lorsqu'il est défini à `true`, le lien canada.ca par défaut est masqué, et seuls les éléments du chemin de navigation fournis sont affichés.

{% examplesPreview "100", "", "fr" %}
<gcds-breadcrumbs hide-canada-link>
  <gcds-breadcrumbs-item href="#">Page d'accueil</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Lien vers la page parent</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

Utilisez l'emplacement par défaut pour ajouter des sous-composants `gcds-breadcrumbs-item`. Utilisez l'emplacement par défaut du sous-composant `gcds-breadcrumbs-item` pour ajouter le texte de cet élément du chemin de navigation.

{% examplesPreview "100", "", "fr" %}
<gcds-breadcrumbs hide-canada-link>
  <gcds-breadcrumbs-item href="#">Page d'accueil</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Lien vers la page parent</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-breadcrumbs."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&id=components-breadcrumbs--events-properties&lang=fr&externalLinks=true"
  width="1200"
  height="1150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
