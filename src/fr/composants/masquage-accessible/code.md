---
title: Masquage accessible
layout: 'layouts/component-documentation.njk'
translationKey: 'screenreaderonlyCode'
tags: ['screenreaderonlyFR', 'code']
# date: "git Last Modified"
---

## Création d'un masquage accessible

Utilisez le masquage accessible sur du texte destiné aux technologies d'assistance pour communiquer des informations généralement exprimées par des moyens visuels uniquement.

## Codage et accessibilité du masquage accessible

### Écrivez du texte en masquage accessible qui est utile

- Signalez les informations contextuelles qui sont exclusivement communiquées par des styles visuels absents du HTML sémantique.
- Écrivez du texte clair et très concis pour les technologies d'assistance. En écrire trop alourdit inutilement la charge cognitive.
- Fournissez du texte supplémentaire à l'intention des technologies d'assistance seulement si l'interface dépend des visuels pour transmettre des informations.
- Évitez d'ajouter des informations qui sont absentes de l'interface.
- Évitez de répéter les informations déjà communiquées par les textes de remplacement. Si le texte de remplacement évoque le contexte, le composant masquage accessible est possiblement superflu.

### Offrez une expérience équitable dans les deux langues officielles

- Utilisez le composant masquage accessible pour vous assurer que le texte sera lu dans la langue associée à la balise de langue du composant.
- Évitez d'utiliser un attribut `aria-label` pour définir une langue additionnelle, car certaines technologies d'assistance utiliseront la langue source de la page par défaut.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-sr-only."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-screen-reader-only--events-properties&lang=en"
  width="1200"
  height="750"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
