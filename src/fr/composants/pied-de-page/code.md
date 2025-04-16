---
title: Pied de page
layout: 'layouts/component-documentation.njk'
translationKey: 'footerCode'
tags: ['footerFR', 'code']
date: 'git Last Modified'
---

## Créer un pied de page

Utilisez le repère de pied de page de la marque du gouvernement du Canada pour obtenir un repère cohérent, accessible et adapté à votre site ou produit.

## Codage et accessibilité du pied de page

### Choisir un mode d'affichage à l'aide de la propriété d'affichage

Utilisez la propriété `display` pour choisir l'un des deux modes d'affichage : `compact` ou `full`.

Choisissez l'affichage compact pour inclure :

1. La bande de liens du pied de page et le mot-symbole du gouvernement du Canada.

<img class="b-sm b-default mb-300 p-300" src="/images/fr/components/example/example-footer-compact.svg" alt=""/>

Choisissez l'affichage complet si vous devez inclure :

1. La bande principale avec une grande sélection de liens institutionnels du gouvernement du Canada;
2. La bande de liens du pied de page et le mot-symbole du gouvernement du Canada.

<img class="b-sm b-default mb-300 p-300" src="/images/fr/components/example/example-footer-full.svg" alt=""/>

Choisissez d’inclure la bande contextuelle pour ajouter jusqu’à trois liens de pied de page pour votre site.

<img class="b-sm b-default mb-300 p-300" src="/images/fr/components/example/example-footer-full-with-contextual-links.svg" alt=""/>

### Configurer la bande de liens de pied de page du GC

- Assurez toujours l’intégrité du mot-symbole du gouvernement du Canada. Ne modifiez jamais le mot-symbole de quelque façon que ce soit.
- Conservez le mot-symbole Canada, ainsi que les liens Confidentialité et Avis. Les autres liens ne sont requis que sur les pages standard. Ils peuvent être supprimés autrement.

### Ajouter des éléments facultatifs

- Ajoutez du contenu à la bande contextuelle en utilisant les attributs `contextual-heading` et `contextual-links`.
- Utilisez l'attribut `contextual-heading` pour attribuer un texte d'en-tête et l'étiquette du repère de navigation de la bande contextuelle.
- Utilisez l'attribut `contextual-links` pour définir un maximum de trois liens dans la bande contextuelle. Ajoutez des liens de soutien pour votre produit ou service, comme les coordonnées d'une personne-ressource de programme.
- Dans la bande contextuelle, réglez l'élément `contextual-links` en passant un objet ou un objet dans une chaîne selon le format suivant :

```js
{
“Étiquette du 1er lien”: “href”
“Étiquette du 2e lien”: “href”
“Étiquette du 3e lien”: “href”
}
```

Pour la bande de lien du pied de page, réglez l'élément `sub-links` en passant un objet ou un objet dans une chaîne selon le format suivant.

```js
{
“Étiquette du 1er lien”: “href”
“Étiquette du 2e lien”: “href”
“Étiquette du 3e lien”: “href”
}
```

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-footer."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-footer--events-properties&lang=fr&externalLinks=true"
  width="1200"
  height="2150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
