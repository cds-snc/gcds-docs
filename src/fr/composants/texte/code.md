---
title: Texte
layout: 'layouts/component-documentation.njk'
translationKey: 'textCode'
tags: ['textFR', 'code']
# date: "git Last Modified"
---

## Sur cette page

- [Codage et accessibilité du composant texte](#codage-et-accessibilite-du-composant-texte)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité du composant texte

### Veillez à maintenir des limites de caractères accessibles

- Maintenez la longueur de ligne maximale par défaut de 65 caractères pour chaque ligne de texte pour assurer une lecture aisée et accessible.
- Choisissez de raccourcir la longueur de ligne en définissant l'attribut `character-limit` à `false`.

### Définissez la taille du texte

- Définissez l'attribut de texte `size` à `body` ou `small`.
- Utilisez la valeur par défaut `body` `size` pour produire un élément `p` avec la taille de police et le contraste de couleur recommandés.
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

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `character-limit`

L'attribut `character-limit` définit la longueur de ligne maximale en nombre de caractères pour garantir une longueur de lecture confortable et accessible.

{% examplesPreview %}
<gcds-text character-limit="false">
  Il s'agit d'un texte lié au titre qui décrit plus en détail le sujet ou l'action du titre. Le texte est généralement une ou plusieurs lignes ou paragraphes qui forment le contenu d'une section ou introduisent une liste à puces, un tableau ou tout autre contenu, comme une image ou une vidéo.
</gcds-text>
{% endexamplesPreview %}

#### `display`

L'attribut `display` définit le comportement d'affichage du texte. Les options sont :

- `block` (par défaut)
- `flex`
- `inline`
- `inline-block`
- `inline-flex`
- `none`

<!-- Force line break -->

{% examplesPreview %}
<gcds-text display="flex">
  Il s'agit d'un texte lié au titre qui décrit plus en détail le sujet ou l'action du titre. Le texte est généralement une ou plusieurs lignes ou paragraphes qui forment le contenu d'une section ou introduisent une liste à puces, un tableau ou tout autre contenu, comme une image ou une vidéo.
</gcds-text>
{% endexamplesPreview %}

#### `margin-bottom`

L'attribut `margin-bottom` définit la marge sous le texte. La valeur par défaut est `300`.

{% examplesPreview %}
<gcds-text margin-bottom="600">
  Il s'agit d'un texte lié au titre qui décrit plus en détail le sujet ou l'action du titre. Le texte est généralement une ou plusieurs lignes ou paragraphes qui forment le contenu d'une section ou introduisent une liste à puces, un tableau ou tout autre contenu, comme une image ou une vidéo.
</gcds-text>
{% endexamplesPreview %}

#### `margin-top`

L'attribut `margin-top` définit la marge au-dessus du texte. La valeur par défaut est `0`.

{% examplesPreview %}
<gcds-text margin-top="600">
  Il s'agit d'un texte lié au titre qui décrit plus en détail le sujet ou l'action du titre. Le texte est généralement une ou plusieurs lignes ou paragraphes qui forment le contenu d'une section ou introduisent une liste à puces, un tableau ou tout autre contenu, comme une image ou une vidéo.
</gcds-text>
{% endexamplesPreview %}

#### `size`

L'attribut `size` définit la taille du texte. Les options sont :

- `body` (par défaut)
- `small`

<!-- Force line break -->

{% examplesPreview %}
<gcds-text size="small">
  Il s'agit d'un texte lié au titre qui décrit plus en détail le sujet ou l'action du titre. Le texte est généralement une ou plusieurs lignes ou paragraphes qui forment le contenu d'une section ou introduisent une liste à puces, un tableau ou tout autre contenu, comme une image ou une vidéo.
</gcds-text>
{% endexamplesPreview %}

#### `text-role`

L'attribut `text-role` définit le style principal du texte. Les options sont :

- `primary` (par défaut)
- `secondary`
- `light`

<!-- Force line break -->

{% examplesPreview %}
<gcds-text text-role="secondary">
  Il s'agit d'un texte lié au titre qui décrit plus en détail le sujet ou l'action du titre. Le texte est généralement une ou plusieurs lignes ou paragraphes qui forment le contenu d'une section ou introduisent une liste à puces, un tableau ou tout autre contenu, comme une image ou une vidéo.
</gcds-text>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à placer le contenu de l'élément texte.

{% examplesPreview %}
<gcds-text>
  Il s'agit d'un texte lié au titre qui décrit plus en détail le sujet ou l'action du titre. Le texte est généralement une ou plusieurs lignes ou paragraphes qui forment le contenu d'une section ou introduisent une liste à puces, un tableau ou tout autre contenu, comme une image ou une vidéo.
</gcds-text>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

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
