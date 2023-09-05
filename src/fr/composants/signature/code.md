---
title: Signature
layout: "layouts/component-documentation.njk"
translationKey: "signatureCode"
tags: ["signatureFR", "code"]
date: "git Last Modified"
---

## Cas d'utilisation principal

Utilisez la signature comme image de marque claire et reconnaissable du gouvernement du Canada pour votre site ou produit.

## Codage et accessibilité de la signature

### Utilisation des types de signature et de mot-symbole

Utilisez la signature dans <a href="{{ links.header }}">l'en-tête</a> du site et le mot-symbole dans <a href="{{ links.footer }}">le pied de page</a> du site.

- Utilisez l'attribut `type` pour définir la `signature`.
- Utilisez l'attribut `type` pour définir le `wordmark`.

### Définir la langue et la couleur

- Définissez les paramètres de langue de la page en utilisant l'attribut `lang`. L'attribut `Fr` définira le français comme la langue de la page et l'attribut `En` définira l'anglais comme la langue de la page.
- Utilisez un lien hypertexte dans la signature pour qu'elle puisse mener à la page d'accueil Canada.ca dans la même langue officielle que la page actuelle. Définissez l'attribut `has-link` à `true` pour créer un lien hypertexte vers Canada.ca.
- Définissez le composant comme `colour` ou `white` en utilisant l'attribut `variant`.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-signature."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-signature--events-properties#events--properties"
  width="1200"
  height="1050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
