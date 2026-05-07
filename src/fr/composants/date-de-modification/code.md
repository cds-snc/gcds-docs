---
title: Date de modification
layout: 'layouts/component-documentation.njk'
translationKey: 'datemodifiedCode'
tags: ['datemodifiedFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de date de modification](#codage-et-accessibilite-de-date-de-modification)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de date de modification

### Veillez à l’uniformité du formatage

- Utilisez le format de la date AAAA-MM-JJ sur toutes vos pages Web.
- Si vous utilisez `type: version`, veillez à utiliser un format de numéro de version uniforme pour tous vos produits.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `type`

L'attribut `type` contrôle l'affichage des informations de date de modification. Par défaut, il est défini à `date`, ce qui affiche la date de dernière modification du contenu.

{% examplesPreview %}
<gcds-date-modified>
  2023-01-26
</gcds-date-modified>
{% endexamplesPreview %}

Lorsqu'il est défini à `version`, le composant affiche un numéro de version à la place.

{% examplesPreview %}
<gcds-date-modified type="version">
  v1.0.0
</gcds-date-modified>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à ajouter le texte de la date de modification ou de la version.

{% examplesPreview %}
<gcds-date-modified>
  2023-01-26
</gcds-date-modified>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-date-modified."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-date-modified--events-properties&lang=fr"
  width="1200"
  height="1100"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
