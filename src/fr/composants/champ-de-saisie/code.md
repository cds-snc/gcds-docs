---
title: Champ de saisie
layout: 'layouts/component-documentation.njk'
translationKey: 'inputCode'
tags: ['inputFR', 'code']
date: 'git Last Modified'
---

## Créer un champ de saisie

Utilisez un champ de saisie pour obtenir une réponse courte d'une ligne.

## Codage et accessibilité des champs de saisie

### Appliquez les attributs requis

Pour que le champ de saisie fonctionne correctement, utilisez toujours les attributs suivants avec `<gcds-input>`:

- `name`
- `label`
- `input-id`

### Adaptez le champ de saisie au type de réponse

- Définissez l'attribut de la taille du champ de saisie pour les réponses dont vous connaissez la longueur précise (taille "50" = 50 caractères). Par exemple, 6 caractères pour un code postal ou 10 caractères pour un numéro de téléphone.
- Réglez la saisie de manière à ce qu'elle couvre presque tout le conteneur, par exemple à 90 %, lorsque vous ne savez pas la longueur exacte de la réponse.
- Utilisez le maximum de 75 caractères pour les réponses sans longueur fixe.

{% include "partials/error-message.njk" %}

{% include "partials/hint.njk" %}

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-input."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-input--events-properties&lang=fr"
  width="1200"
  height="2075"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
