---
title: Avis
layout: 'layouts/component-documentation.njk'
translationKey: 'noticeCode'
tags: ['noticeFR', 'code']
date: "git Last Modified"
---

## Créer un avis

Utilisez le composant d'avis pour transmettre aux gens des messages importants et propres au contexte. L'avis communique divers niveaux d'urgence et différents messages à l'aide de contenu et d'éléments visuels.

## Accessibilité et lignes directrices relatives au code

### Définir le rôle de l'avis

Utilisez l'attribut `noticeRole` pour classer l'avis dans les catégories `info` (Information), `warning` (Avertissement), `danger` (Danger) ou `success` (Succès). Ce choix détermine le style visuel de l'avis et communique l'urgence ou l'importance du message au public.

### Précisez le titre et le niveau de l'en-tête de l'avis

- Utilisez l'attribut `notice-title` pour créer un titre clair et informatif pour l'avis. Veillez à ce que le titre transmette l'objectif du message.
- Utilisez `notice-title-tag` pour définir [le bon niveau](/fr/composants/titre/design/#classez-les-niveaux-de-titre-de-maniere-hierarchique) de titre pour l'avis. La définition du niveau adapté pour le titre n'a pas d'incidence sur la taille de la police, mais elle permet de maintenir la bonne hiérarchie et l'accessibilité pour les technologies d'assistance.

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
