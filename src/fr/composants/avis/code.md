---
title: Avis
layout: 'layouts/component-documentation.njk'
translationKey: 'noticeCode'
tags: ['noticeFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de l'avis](#codage-et-accessibilite-de-lavis)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de l'avis

### Définir le rôle de l'avis

Utilisez l'attribut `notice-role` pour classer l'avis dans les catégories `info` (Information), `warning` (Avertissement), `danger` (Danger) ou `success` (Succès). Ce choix détermine le style visuel de l'avis et communique l'urgence ou l'importance du message au public.

### Précisez le titre et le niveau de l'en-tête de l'avis

- Utilisez l'attribut `notice-title` pour créer un titre clair et informatif pour l'avis. Veillez à ce que le titre transmette l'objectif du message.
- Utilisez `notice-title-tag` pour définir [le bon niveau](/fr/composants/titre/design/#classez-les-niveaux-de-titre-de-maniere-hierarchique) de titre pour l'avis. La définition du niveau adapté pour le titre n'a pas d'incidence sur la taille de la police, mais elle permet de maintenir la bonne hiérarchie et l'accessibilité pour les technologies d'assistance.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Emplacements (slots)](#section-slot)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `notice-role`

L'attribut `notice-role` définit le style d'avis à afficher.

{% examplesPreview %}
<gcds-notice notice-role="success" notice-title="Titre de l'avis succès" notice-title-tag="h2">
  <gcds-text margin-bottom="0">
    Il s'agit d'un message de succès.
  </gcds-text>
</gcds-notice>
{% endexamplesPreview %}

#### `notice-title`

L'attribut `notice-title` définit le titre de l'avis.

{% examplesPreview %}
<gcds-notice notice-role="success" notice-title="Titre de l'avis succès" notice-title-tag="h2">
  <gcds-text margin-bottom="0">
    Il s'agit d'un message de succès.
  </gcds-text>
</gcds-notice>
{% endexamplesPreview %}

#### `notice-title-tag`

L'attribut `notice-title-tag` définit l'élément de titre HTML pour le titre. Cette propriété ne modifie pas la taille de la police. Utilisez-la pour assigner le niveau de titre approprié et maintenir la hiérarchie des titres et l'accessibilité.

{% examplesPreview %}
<gcds-notice notice-role="success" notice-title="Titre de l'avis succès" notice-title-tag="h2">
  <gcds-text margin-bottom="0">
    Il s'agit d'un message de succès.
  </gcds-text>
</gcds-notice>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à placer le message de l'avis.

{% examplesPreview %}
<gcds-notice notice-role="success" notice-title="Titre de l'avis succès" notice-title-tag="h2">
  <gcds-text margin-bottom="0">
    Il s'agit d'un message de succès.
  </gcds-text>
</gcds-notice>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-notice."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-notice--events-properties&lang=fr"
  width="1200"
  height="1100"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
