---
title: Typographie - Bases
layout: "layouts/documentation.njk"
translationKey: "typography"
eleventyNavigation:
  key: typographyFR
  title: Typographie
  locale: fr
  parent: foundationsFR
  order: 0
onThisPage:
  0: Unités de style pour la typographie
  1: Directives sur l’utilisation de la typographie
github: https://github.com/cds-snc/gcds-tokens
---

<header>

# Jetons de typographie

La typographie est la façon de présenter du texte. Elle englobe les polices, la taille et l’espacement pouvant être appliqués au style, à la disposition, et à l’apparence des lettres, des chiffres et des symboles.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

<section aria-label="Unités de style pour la typographie">

## Unités de style pour la typographie

Les polices par défaut et les paramètres de taille de police permettent de rendre les produits numériques réactifs, prévisibles et lisibles sur tous les appareils et plateformes.

Les décisions relatives aux valeurs typographiques (police, taille, graisse) sont intégrées dans les unité de style de typographie du Système de design du GC pour assurer un design uniforme.

### Polices par défaut

Unités de style des familles de police :

<div lang="en">

- `$gcds-font-families-heading`
- `$gcds-font-families-body`
- `$gcds-font-families-monospace`
- `$gcds-font-families-icons`

</div>

Les tailles de police sont configurées au moyen d’unités rem. Elles sont toutes exprimées par rapport à la taille de base de 20 px.

| Affichage  | Police  | Taille (rem)  | Taille (px)  | Graisse  | Hauteur de ligne  |
|---|---|---|---|---|---|
| Titre 1  | Lato  | 2.5  | 40  | Gras  | 128%  |
| Titre 2  | Lato  | 2.25  | 36  | Gras  | 144%  |
| Titre 3  | Lato  | 2.0  | 32  | Gras  | 162%  |
| Titre 4  | Lato  | 1.78  | 28  | Gras  | 182%  |
| Titre 5  | Noto sans  | 1.58  | 25  | Normal  | 102%  |
| Titre 6  | Noto sans  | 1.41  | 22  | Normal  | 102%  |
| Texte  | Noto sans  | 1.25  | 20  | Normal  | 130%  |
| monospace  | Menlo  | 1.11  | 17  | Normal  | 146%  |

</section>

<section aria-label="Directives sur l’utilisation de la typographie">

## Directives sur l’utilisation de la typographie

### Longueur et hauteur de ligne

Faites toujours correspondre la taille de police à la hauteur de ligne : la taille de police d’un titre de niveau H1 doit correspondre à la hauteur de ligne d’un titre de niveau H1.

Gardez la longueur d’une ligne de texte inférieure à 65 caractères pour faciliter la lecture. La largeur de la mise en page peut dépasser 65 caractères.

### Typographie des composants

Certains composants utilisent des tailles de police, des couleurs et des espacements qui diffèrent des paramètres par défaut et qui peuvent être modifiés. Les composants sont conçus et testés pour afficher une typographie adaptée à ces contextes. Un style CSS personnalisé n’est pas nécessaire.

### Typographie personnalisée

Le système de design fournit des [composants]({{ "/fr/composants/" | url }}), des modèles et des styles qui répondent à la plupart des besoins de conception. Vous pourriez toutefois avoir besoin d’utiliser une typographie personnalisée dans certains cas.
Vous pouvez contribuer au système de conception ou le modifier directement dans notre [dépôt d’unités de style](https://github.com/cds-snc/gcds-tokens), sur GitHub.

</section>
