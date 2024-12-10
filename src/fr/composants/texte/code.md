---
title: Texte
layout: 'layouts/component-documentation.njk'
translationKey: 'textCode'
tags: ['textFR', 'code']
# date: "git Last Modified"
---

## Créer un composant de texte

Le composant texte affiche du contenu sans titre avec les styles correspondants de Système de design GC pour fournir une taille de police et un contraste des couleurs accessibles.

## Codage et accessibilité du composant texte

### Veillez à maintenir des limites de caractères accessibles

- Maintenez la longueur de ligne maximale par défaut de 65 caractères pour chaque ligne de texte pour assurer une lecture aisée et accessible.
- Choisissez de raccourcir la longueur de ligne en définissant l'attribut `character-limit` à `false`.

### Définissez la taille du texte

- Définissez l'attribut de texte `size` à `body` ou `small`.
- Utilisez la valeur par défaut `body` `size` pour produire un élément `p` avec la taille de police et le contraste de couleur recommandés.
- Choisissez une légende pour présenter brièvement le contexte d'une section ou d'un élément de contenu.
- Choisissez d'afficher un texte plus petit en définissant l'attribut `size` à `small` pour produire un élément `small` à l'intérieur d'un élément `p`.

### Utilisez des styles de texte avec prudence

- Ne soulignez que les liens.
- Utilisez le texte en caractères gras avec prudence.
- Évitez d'utiliser du texte en gras comme titre. Le titre est le composant accessible permettant d'identifier les sections de contenu.
- Pour le texte en caractères gras, utilisez la balise `strong` dans le composant `gcds-text` pour mettre en évidence les termes et souligner les points clés.
- Utilisez uniquement les caractères en italiques dans les cas suivants :
  - Références juridiques, comme la _Loi canadienne sur l'accessibilité_.
  - Mots dans d'autres langues, y compris le latin.
  - Titres de publications, d'œuvres d'art et de matériel mathématique et scientifique.
- Utilisez la balise `em` dans le composant `gcds-text` pour mettre l'accent sur des mots ou des phrases spécifiques.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-text."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-text--events-properties&lang=fr"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
