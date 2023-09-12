---
title: Sélection
layout: 'layouts/component-documentation.njk'
translationKey: 'selectCode'
tags: ['selectFR', 'code']
date: 'git Last Modified'
---

## Créer une sélection

Utilisez la sélection pour fournir des options multiples (7 ou plus) à répondre dans une seule question. La sélection aide les utilisateur·rice·s à faire un choix en limitant leurs options.

## Codage et accessibilité de la sélection

### Configuration de la valeur par défaut

Utilisez l'attribut `default-value` pour configurer la première option dans la liste de sélection. Cela empêche la présélection d'une option.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-select."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-select--events-properties"
  width="1200"
  height="2050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
