---
title: Boîte
layout: 'layouts/component-documentation.njk'
translationKey: 'containerCode'
tags: ['containerFR', 'code']
date: 'git Last Modified'
---

## Créer un conteneur

Utilisez les conteneurs pour ajouter un élément enveloppant avec à une largeur maximale définie, en fournissant un conteneur pour les autres contenus et composants qui sont généralement présentés de manière verticale de haut en bas.

## Codage et accessibilité des conteneurs

### Limiter la largeur du contenu

- Veillez à ce que vos lignes de texte ne dépassent pas 65 caractères pour obtenir une longueur de lecture acceptable.
- Limitez la largeur de la colonne pour éviter que les grands écrans n’affichent des lignes de texte trop longues et difficiles à lire.
- Évitez de dépasser la largeur maximale de 71,25 rem (1140 px).

### Ajouter une taille de conteneur

La propriété `size` définit la taille d’un conteneur. Six tailles sont disponibles :

| Taille | REM      | Pixels (px) |
| ------ | -------- | ----------- |
| `full` | 100%     | 100%        |
| `xl`   | 71.25rem | 1140px      |
| `lg`   | 62rem    | 992px       |
| `md`   | 48rem    | 768px       |
| `sm`   | 30rem    | 480px       |
| `xs`   | 20rem    | 320px       |

<br/>

La taille du conteneur par défaut est `full`, ce qui signifie que le conteneur occupera la largeur totale du conteneur parent.

### Centrer le conteneur

Les conteneurs ne sont pas automatiquement centrés. Pour centrer un conteneur sur une page, ajoutez la propriété `centered`.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-container."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-container--events-properties&lang=fr"
  width="1200"
  height="1500"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
