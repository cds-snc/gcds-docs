---
title: Unités de style typographiques
layout: 'layouts/base.njk'
translationKey: 'typography'
eleventyNavigation:
  key: typographyFR
  title: Typographie
  locale: fr
  parent: foundationsFR
  order: 3
  description: Les unités de style typographiques comprennent le style, la disposition et l'apparence des lettres, chiffres et symboles.
  thumbnail: /images/fr/foundations/preview/preview-typography.svg
  alt: Un A majuscule et un A minuscule sont écrits au-dessus du mot Typographie, le tout dans une grille composée de quatre lignes de base.
  state: published
github: https://github.com/cds-snc/gcds-tokens
tokenTable:
  headers:
    font-preview: Aperçu
    token-name: Nom de l'unité de style
    font-value: Valeur
  previews:
    font-h1: En-tête 1
    font-h2: En-tête 2
    font-h3: En-tête 3
    font-h4: En-tête 4
    font-h5: En-tête 5
    font-h6: En-tête 6
    font-text: Texte
    font-textSmall: Petit texte
    fontFamilies-heading: En-tête
    fontFamilies-body: Texte
    fontFamilies-monospace: Espacement fixe
    fontFamilies-icons: icons
    fontWeights-light: Maigre
    fontWeights-regular: Régulier
    fontWeights-medium: Moyen
    fontWeights-semibold: Semi-gras
    fontWeights-bold: Gras
permalink: /fr/styles/typographie/
# date: "git Last Modified"
---

# {{ title }}

Les unités de style typographiques comprennent le style, la disposition et l'apparence des lettres, chiffres et symboles.

## Typographie et accessibilité

Les composants de Système de design GC <gcds-link external href="{{ links.wcagTextSpacing }}" target="_blank">sont conformes au niveau AA des Règles pour l'accessibilité des contenus Web 2.1 (WCAG 2.1)</gcds-link> (site Web anglais) en matière d'espacement du texte et au niveau AAA en matière de présentation visuelle.

## Rythme vertical et tailles d'espacement en rem

L'espacement de la typographie dans Système de design GC est basé sur le rythme vertical et calculé en fonction d'une taille de base.

Le rythme vertical est un alignement du texte selon des lignes horizontales espacées de manière égale pour former des motifs récurrents. Un espacement vertical uniforme aide à l'interprétation, la lecture et la compréhension du contenu. Les espacements sont configurés au moyen d'unités rem. Toute valeur typographique et d'espacement s'exprime en fonction d'une taille de base de 1.25 rem (20 px).

## Unités de style typographiques globales

### En-têtes

Les balises d'en-tête pour les en-têtes et sous-titres donnent la structure à une page et servent à disposer le contenu. Elles aident également à la navigation, surtout pour les gens qui ont recours aux technologies d'assistance.

- Tout en-tête et sous-titre doit être inséré à l'aide d'une balise (`<h1>` - `<h6>`).
- Commencez le contenu principal avec un en-tête H1. N'utilisez qu'un seul en-tête H1 par page.
- Organisez les niveaux d'en-tête par ordre numérique. H1 est suivi de H2, qui est suivi de H3 et ainsi de suite.
- Évitez de sauter des niveaux d'en-tête hiérarchiques.
- Assurez-vous que la taille de police et la hauteur de ligne correspondent (taille de police H1 avec la hauteur de ligne H1, etc.).
- Employez des en-têtes pour les appels à l'action pour accentuer du contenu.
- Assurez-vous que les en-têtes sont uniques et qu'ils indiquent clairement la nature du contenu qui suit.

{% include "partials/token_table.njk", token: 'font', subTokens: "h1 h2 h3 h4 h5 h6", type: 'typography' %}

Remarque : La propriété de la police représente à la fois l'épaisseur, la taille/la hauteur de ligne et la famille de police.

### Texte

- Pour la taille de police, conservez la longueur d'une ligne à moins de 65 caractères pour assurer une lecture aisée et accessible.
- Insérez la valeur css `65ch (--gcds-text-character-limit)` ou moins pour régler la largeur maximale de vos paragraphes.

{% include "partials/token_table.njk", token: 'font', subTokens: "text textSmall", type: 'typography' %}

### Familles de police

Les en-têtes font appel à la police « Lato ». Les paragraphes et autres éléments textuels se servent de la police « Noto Sans ».

La famille de police comprend des valeurs de rechange. Les valeurs de rechange sont seulement utilisées pour une famille de police lorsqu'une police n'est pas disponible.

- N'utilisez seulement les unités de style en-tête que pour les en-têtes. Tout autre contenu peut utiliser la police Texte.
- Utilisez la famille de police Texte pour la plupart de votre contenu.
- Lorsque vous citez des éléments de code, vous pouvez insérer vos exemples de code avec la famille de police Espacement fixe.

{% include "partials/token_table.njk", token: 'fontFamilies', type: 'fontFamilies' %}

### Épaisseurs de police

- Limitez le nombre de modifications de l'épaisseur de police dans votre conception afin de ne pas nuire au contraste. N'utilisez que deux ou trois épaisseurs de police en assurant un maximum de contraste.
- Employez différentes épaisseurs de police pour accentuer des mots dans un tableau, en début de paragraphe ou dans de longs blocs de texte lorsque les autres options d'en-tête et de style ne sont pas appropriées.
- Veillez à accentuer des éléments de façon accessible, car plusieurs technologies d'assistance ne tiennent pas compte de l'épaisseur de la police.
- Plutôt que de modifier l'épaisseur de la police, envisagez d'utiliser des puces ou des alinéas pour découper le texte.

{% include "partials/token_table.njk", token: 'fontWeights', type: 'fontWeights' %}

### Caractères gras

- Conservez le réglage des caractères gras par défaut pour les en-têtes.
- Une surutilisation de texte en caractères gras peut rendre difficile le traitement cognitif pour certains lecteurs.

### Italiques

- Mettez toute référence à un projet de loi canadien en caractères italiques, par example, _Loi canadienne sur l'accessibilité_.
- N'utilisez les caractères en italiques que pour de courts passages. Un gros volume de texte en caractères italiques peut rendre difficile le traitement cognitif pour certains lecteurs.

<br/>

{% assign removeBorder = true %}

{% include "partials/helpus.njk" %}
