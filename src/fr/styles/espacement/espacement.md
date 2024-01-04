---
title: Unités de style d'espacement
layout: 'layouts/base.njk'
translationKey: 'spacing'
eleventyNavigation:
  key: spacingFR
  title: Espacement
  locale: fr
  parent: foundationsFR
  order: 2
  description: Les unités de style d'espacement aident à disposer les éléments à l'écran et dans les composants.
  thumbnail: /images/en/foundations/preview/preview-spacing.svg
  alt:
  state: published
tokenTable:
  headers:
    spacing-preview: Aperçu
    token-name: Nom de l'unité de style
    px: Pixel
    value: Rem
permalink: /fr/styles/espacement/
# date: "git Last Modified"
---

## {{ title }}

Les unités de style d'espacement aident à disposer les éléments à l'écran et dans les composants.

## Unités de style d'espacement et accessibilité

Les composants de Système de design GC sont conformes au niveau AAA des <gcds-link external href="{{ links.wcagTargetSize }}" target="_blank">Règles pour l'accessibilité des contenus Web 2.1 (WCAG 2.1)</gcds-link> (site Web anglais) en matière de cibles pour les pointeurs d'entrée et de présentation visuelle.

L'espacement permet d'établir une hiérarchie visuelle dans le contenu et d'attirer l'attention vers certains éléments. Un contenu trop dense est plus difficile à lire et augmente la charge cognitive du lecteur.

## Rythme vertical et tailles d'espacement en rem

L'espacement dans Système de design GC est basé sur le rythme vertical et calculé en fonction d'une taille de base.

Le rythme vertical est un alignement du texte selon des lignes horizontales espacées de manière égale pour former des motifs récurrents. Un espacement vertical uniforme aide à l'interprétation, la lecture et la compréhension du contenu. Les espacements sont configurés au moyen d'unités rem. Toute valeur typographique et d'espacement s'exprime en fonction d'une taille de base de 1.25 rem (20 px).

## Unités de style d'espacement globales

### Alignement et espacement

- Utilisez de plus petites unités de style d'espacement pour regrouper des éléments connexes.
- Employez de plus grandes unités de style d'espacement pour former des groupes logiques d'éléments.
- Lorsque possible, alignez les éléments à la fois sur les axes vertical et horizontal.

{% include "partials/token_table.njk", token: 'spacing', type: 'dimension' %}

{% assign removeBorder = true %}

{% include "partials/helpus.njk" %}
