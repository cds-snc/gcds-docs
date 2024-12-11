---
title: Boîte
layout: 'layouts/component-documentation.njk'
translationKey: 'containerCode'
tags: ['containerFR', 'code']
date: 'git Last Modified'
---

## Créer une boîte

Utilisez les boîtes pour ajouter un élément enveloppant associé à une largeur maximale définie, en fournissant une boîte pour les autres contenus et composants généralement présentés de manière verticale de haut en bas.

## Codage et accessibilité des boîtes

### Limiter la largeur du contenu

- Veillez à ce que vos lignes de texte ne dépassent pas 65 caractères pour obtenir une longueur de lecture acceptable.
- Limitez la largeur de la boîte pour éviter que les grands écrans n’affichent des lignes de texte trop longues et difficiles à lire.
- Évitez de dépasser la largeur maximale de 71,25 rem (1140 px).

### Ajouter une taille de boîte

La propriété `size` définit la taille d’une boîte. Six tailles sont disponibles :

| Taille | REM      | Pixels (px) |
| ------ | -------- | ----------- |
| `full` | 100%     | 100%        |
| `xl`   | 71.25rem | 1140px      |
| `lg`   | 62rem    | 992px       |
| `md`   | 48rem    | 768px       |
| `sm`   | 30rem    | 480px       |
| `xs`   | 20rem    | 320px       |

<br/>

La taille de la boîte par défaut est `full`, ce qui signifie que la boîte occupera la largeur totale de la boîte parente.

### Centrer la boîte

Les boîtes ne sont pas automatiquement centrées. Pour centrer une boîte sur une page, ajoutez la propriété `centered`.

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
