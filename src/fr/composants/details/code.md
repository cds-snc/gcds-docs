---
title: Détails
layout: 'layouts/component-documentation.njk'
translationKey: 'detailsCode'
tags: ['detailsFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité pour le composant détails](#codage-et-accessibilite-pour-le-composant-details)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité pour le composant détails

### Présentez le composant Détails pour en faciliter la compréhension

Le composant Détails peut ajouter à la charge cognitive d'une personne si :

1. Il interrompt le flux de lecture ou de défilement;
2. Le contenu dont la personne a besoin est difficile à chercher et à trouver;
3. La personne ne connaît pas la fonction développer/réduire.

Pour aider une personne à accéder au contenu du composant Détails :

- Utilisez l'attribut `open` pour définir si le contenu du composant Détails est affiché par défaut ou non;
- Faites en sorte que les titres utilisés dans le composant Détails indiquent clairement la nature du contenu. Évitez les titres non descriptifs tels que «&nbsp;En savoir plus&nbsp;». Au lieu de cela, optez pour un résumé spécifique et descriptif, comme «&nbsp;Montant de couverture maximal pour vos prestations de physiothérapie&nbsp;».
- Choisissez des titres distinctifs pour que les gens comprennent la différence. Les titres identiques ou similaires peuvent prêter à confusion.
- Évitez de placer un composant Détails dans un autre, là où personne ne penserait à chercher ce contenu.
  0 Faites en sorte que le contenu du composant Détails puisse faire l'objet d'une recherche.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `details-title`

L'attribut `details-title` définit le libellé qui résume le contenu du composant détails.

{% examplesPreview "100", "", "fr" %}
<gcds-details details-title="Apprenez-en plus sur ce sujet">
  <gcds-text margin-bottom="0">Renseignements supplémentaires.</gcds-text>
</gcds-details>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `open`

L'attribut `open` contrôle si le composant est ouvert par défaut ou non.

{% examplesPreview "170", "", "fr" %}
<gcds-details details-title="Apprenez-en plus sur ce sujet" open>
  <gcds-text margin-bottom="0">Renseignements supplémentaires.</gcds-text>
</gcds-details>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à ajouter du contenu à l'intérieur du composant.

{% examplesPreview "100", "", "fr" %}
<gcds-details details-title="Apprenez-en plus sur ce sujet">
  <gcds-text margin-bottom="0">Renseignements supplémentaires.</gcds-text>
</gcds-details>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-details."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-details--events-properties&lang=fr"
  width="1200"
  height="1050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
