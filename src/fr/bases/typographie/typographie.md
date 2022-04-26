---
title: Typographie - BAses
layout: "layouts/documentation.njk"
translationKey: "typography"
eleventyNavigation:
  key: typographyFR
  title: Typographie
  locale: fr
  parent: foundationsFR
  order: 0
onThisPage:
  0: Jetons de design de la typographie
  1: Directives sur l’utilisation de la typographie
github: https://github.com/cds-snc/gcds-tokens
---

<header>

# Jetons de typographie

La typographie est la façon de présenter du texte. Elle englobe les polices, la taille et l’espacement pouvant être appliqués au style, à la disposition, et à l’apparence des lettres, des numéros et des symboles.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

## Jetons de design de la typographie

Les polices par défaut et les paramètres de style de taille rendent les produits numériques réactifs, prévisibles et lisibles sur tous les appareils et toutes les plateformes.

Les choix concernant les valeurs typographiques (polices, tailles, épaisseurs) sont intégrés dans les jetons de typographie du Système de design du GC pour assurer un design uniforme.

### Polices par défaut

Jetons pour les familles de police :

<div lang="en">

- `$gcds-font-families-heading`
- `$gcds-font-families-body`
- `$gcds-font-families-monospace`
- `$gcds-font-families-icons`

</div>

Les tailles de police sont configurées au moyen d’unités rem. Elles sont toutes exprimées par rapport à la taille de base de 16 px.

| Affichage  | Police  | Taille (rem)  | Taille (px)  | Épaisseur  |
|---|---|---|---|---|
| Heading 1  | Lato  | 2.5  | 40  | Gras  |
| Heading 2  | Lato  | 2.25  | 36  | Gras  |
| Heading 3  | Lato  | 2.0  | 32  | Gras  |
| Heading 4  | Lato  | 1.78  | 28  | Gras  |
| Heading 5  | Lato  | 1.58  | 25  | Normal  |
| Heading 6  | Lato  | 1.41  | 22  | Normal  |
| Paragraph  | Noto sans  | 1.25  | 20  | Normal  |
| monospace  | Menlo  | 1.11  | 17  | Normal  |

## Directives sur l’utilisation de la typographie

### Longueur et hauteur de ligne

Choisissez entre deux valeurs de base pour l’élément racine : la taille de la police et la hauteur de ligne. Faites toujours correspondre les hauteurs de ligne `h1` avec leur contrepartie `h1`.

Pour une ligne de texte donnée, gardez une longueur de ligne inférieure à 65 caractères pour faciliter la lecture. La largeur de la mise en page peut dépasser 65 caractères.

### Typographie des composants

Certains composants utilisent des tailles de police, des couleurs et des espacements qui diffèrent des paramètres par défaut et qui peuvent être modifiés. Les composants sont conçus et testés pour afficher une typographie adaptée à ces contextes. Un style CSS personnalisé n’est pas nécessaire.

### Typographie personnalisée

Le système de design fournit des composants, des modèles et des styles qui répondent à la plupart des besoins de conception. Vous pourriez toutefois avoir besoin d’utiliser une typographie personnalisée dans certains cas.

Vous pouvez donc contribuer au système de conception ou le modifier dans le [dépôt de jetons de design sur GitHub](https://github.com/cds-snc/gcds-tokens).
