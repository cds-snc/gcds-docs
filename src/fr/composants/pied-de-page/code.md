---
title: Pied de page
layout: 'layouts/component-documentation.njk'
translationKey: 'footerCode'
tags: ['footerFR', 'code']
date: 'git Last Modified'
---

## Créer un pied de page

Utilisez le repère de pied de page de la marque du gouvernement du Canada pour obtenir un repère cohérent, accessible et adapté à votre site ou produit.

## Créer un pied de page

### Choisir un mode d'affichage à l'aide de la propriété d'affichage

Utilisez la propriété d'affichage pour choisir l'un des deux modes d'affichage : compact ou complet.

Choisissez l'affichage compact pour inclure :

1. La bande de liens du pied de page et le mot-symbole du gouvernement du Canada.

<img class="b-sm b-default mb-300 p-300" src="/images/fr/components/example/example-footer-compact.svg" alt=""/>

Choisissez l'affichage complet si vous devez inclure :

1. La bande principale avec une grande sélection de liens institutionnels du gouvernement du Canada;
2. La bande de liens du pied de page et le mot-symbole du gouvernement du Canada.

<img class="b-sm b-default mb-300 p-300" src="/images/fr/components/example/example-footer-full.svg" alt=""/>

Choisissez d'inclure la bande contextuelle pour ajouter jusqu'à trois liens de pied de page pour votre produit.

<img class="b-sm b-default mb-300 p-300" src="/images/fr/components/example/example-footer-full-with-contextual-links.svg" alt=""/>

### Inclure la bande de liens du pied de page pour les sites et produits du gouvernement du Canada

- Maintenez toujours l'intégrité de la signature. Évitez à tout prix de modifier la signature. Évitez surtout d'étirer le texte ou de changer les couleurs.
- Faites passer le mode d'affichage de la signature du gouvernement du Canada en couleur ou en blanc à l'aide de l'attribut `signature-variant`. Choisissez l'affichage couleur pour un fond blanc.

### Ajouter des éléments facultatifs au pied de page

- Maintenez le mot-symbole « Canada » et les liens vers les modalités et l'avis de confidentialité dans la bande de liens du pied de page. Optez pour la suppression des autres liens.
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
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-footer--events-properties&lang=fr"
  width="1200"
  height="2150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
