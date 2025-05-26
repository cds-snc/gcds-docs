---
title: Texte
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: textFR
  title: Texte
  locale: fr
  parent: componentsFR
  otherNames: bloc de texte, version, légende, corps du texte, paragraphe.
  description: Le composant texte est un paragraphe stylisé et formaté qui affiche du contenu écrit de manière accessible.
  thumbnail: /images/common/components/preview-text.svg
  alt: 3 lignes de texte représentées de façon abstraite à l'aide de 3 rectangles horizontaux superposés.
  state: published
translationKey: 'text'
tags: ['textFR', 'usage']
permalink: /fr/composants/texte/
# date: "git Last Modified"
---

## Problèmes résolus par le composant texte

Utilisez le composant texte pour :

- Transmettre de l'information en petits ou grands blocs de contenu écrit pour fournir des détails essentiels sur un programme ou un service sans ajouter un degré élevé de structure ou d'accent.
- Insérer du contenu écrit après un titre avec une phrase, un paragraphe ou une légende.
- Appliquer des tailles de police uniformes, un contraste de couleurs et des espaces blancs optimisés pour l'accessibilité.
- Renforcer l'identité de marque avec des styles et des formats de messagerie uniformes sur toutes les pages Web. Par exemple, l'utilisation de la typographie Système de design GC comme norme pour un style de police uniforme.
- Diviser le contenu en sections compréhensibles avec des marges verticales et horizontales. La décomposition de votre contenu favorise la lisibilité, simplifie la navigation sur le site et réduit le risque que les gens abandonnent leur tâche.

<hr/>

## Composants connexes

<a href="{{ links.heading }}">Titre</a> pour structurer le contenu en créant des niveaux hiérarchiques qui permettent l'organisation visuelle et mentale du contenu de la page à l'aide des styles de Système de design GC.

<a href="{{ links.screenreaderOnly }}">Masquage accessible</a> pour fournir de l'Information accessible par les technologies d'assistance, comme les lecteurs d'écran, mais invisible pour les utilisateur·rice·s voyant·e·s.

<hr class="mt-600" />

## Choisir un rôle de texte

Un rôle est un sous-type de texte à usage spécifique sur une page.

### `primary` (Principal)

Utilisez le `primary` `text-role` pour :

- La plupart du contenu textuel.
- Le contenu qui est l'objet principal de la section.

### `secondary` (Secondaire)

Utilisez le `secondary` `text-role` pour :

- Soutenir un contenu important, mais secondaire par rapport à la tâche principale.
- Lorsque l'idée principale de la section peut encore être comprise si le lecteur ignore le texte secondaire.

### `light` (Clair)

Utilisez le `light` `text-role` pour :

Le contenu qui doit apparaître sur un fond sombre lorsque le rapport de contraste entre le texte clair et l'arrière-plan sombre est conforme aux normes WCAG (Web Content Accessibility Guidelines).
