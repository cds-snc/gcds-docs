---
title: Unités de style
layout: 'layouts/base.njk'
eleventyNavigation:
  key: tokensFR
  title: Unités de style
  locale: fr
  parent: foundationsFR
  description: This is the foundation
  thumbnail: /images/fr/bases/foundation.png
  alt:
translationKey: 'designtokens'
# date: "git Last Modified"
---

# {{ title }}

Les unités de style de Système de design GC sont les plus petits blocs de construction du système de design.

## Représenter des choix stylistiques en code

Nous avons créé une unité de style qui définit chaque choix stylistique dans Système de design GC. Tous nos composants utilisent des unités de style.

Les unités de style documentent les choix stylistiques à l'aide de variables dans des blocs de code réutilisables. Elles remplacent toute valeur codée en dur, comme les codes de couleur et les pixels.

## Reproduire un style à l'échelle dans votre code

Les unités de style ont été conçues de façon à être réutilisées dans toute la base de code. En mettant à jour une unité de style [gcds-token]({{ links.githubTokens }}), le changement est reproduit dans tout composant et bloc de code qui y fait référence.

Les unités de style de [couleur]({{ links.colour }}), [d'espacement]({{ links.spacing }}), et de [typographie]({{ links.typography }}) sont appliquées de façon uniforme d'un composant, d'une page et d'un produit à l'autre. Les unités de style permettent un agencement exact, éliminant l'incertitude et les longues recherches dans des tableaux de valeurs.

## Types d'unités de style de composant

### Unité de style de composant

Les composants de Système de design GC possèdent leurs propres unités de style. Ces unités de style sont propres aux composants. Il est déconseillé de les utiliser ailleurs.

Si elles sont utilisées incorrectement, les unités de style de composant peuvent avoir des comportements imprévisibles. Elles sont mises à jour chaque fois que le composant associé est mis à jour.

<img class="b-sm b-default p-400" src="/images/fr/foundations/tokens/design-tokens-component.svg" alt="Trois carrés bleus représentent les trois étapes pour créer l’unité de style de la couleur d’arrière-plan du composant Bouton standard. À droite du carré le plus haut, un texte indique la couleur #26374a. Juste en-dessous du carré, une flèche pointe vers le carré suivant, à droite duquel un texte indique --gcds-color-blue-900. Une autre flèche pointe vers le troisième et dernier carré, à droite duquel un texte indique --gcds-button-primary-default-background. Une dernière flèche pointe du troisième carré à un bouton dont l’arrière-plan est bleu foncé, soit le résultat de l’unité de style nouvellement créée pour le composant."/>

### Unités de style globales

Les unités de style globales (y compris les unités de style d'état) sont conçues pour être utilisées par les unités de style des composants et les utilisateur·rice·s. Elles sont souvent utilisées pour construire des unités de style de composant.

Les unités de style globales suivent des règles sémantiques. C'est-à-dire qu'elles sont associées à certains sens ou contextes. Vous pouvez les utiliser à leur fin prévue dans vos conceptions.

Les unités de style globales aident à réduire les besoins futurs en maintenance et à établir un langage visuel pour une meilleure communication.

<img class="b-sm b-default p-400" src="/images/en/foundations/tokens/design-tokens-global.svg" alt="Trois lignes de texte montrent respectivement un exemple d’unité de style globale pour la taille de police, l’espacement et la couleur de police. La première ligne affiche une taille de police de 1.25rem suivie d’une flèche pointant vers l’unité de style --gcds-font-sizes-text. La deuxième ligne affiche un espacement de 3rem suivi d’une flèche pointant vers l’unité de style --gcds-spacing-500. La troisième ligne affiche une couleur de police #333333 suivie d’une flèche pointant vers l’unité de style --gcds-text-primary."/>

## Structure et nomenclature progressive des unités de style

Les unités de style sont caractérisées par une nomenclature progressive.

- **Le préfixe** `--gcds-` sert à distinguer les unités de style de Système de design GC d'autres jetons ou variables externes.
- **La catégorie** décrit le composant, la propriété, l'état ou la couleur en fonction du type d'unité de style.
- **Le rôle** précise le sous-type de composant, p. ex. principal, secondaire, danger, etc.
- **L'état** indique l'interaction ou l'état des données, p. ex. état par défaut, lien pointé, état ciblé, etc.
- **La propriété** représente la propriété CSS à laquelle l'unité de style est appliquée, p. ex. `background`, `border`, `color`, etc.
- **L'échelle** indique un ensemble de nuances de couleurs, de tailles ou d'épaisseurs à croissance proportionnelle.

### Unité de style de composant

<img class="b-sm b-default p-400" src="/images/fr/foundations/anatomy/anatomy-design-tokens-component.svg" alt="Une ligne de cinq mots où chaque mot est surligné et souligné d’une couleur différente. Deux traits d’union précèdent le premier mot, et un trait d’union sépare chaque mot. Chaque mot est rattaché à une étiquette affichant son type de nom. Le type de nom du premier mot est un préfixe : gcds. Le type de nom du deuxième mot est une catégorie (composant) : button. Le type de nom du troisième mot est un rôle : primary. Le type de nom du quatrième mot est un état : default. Le type de nom du cinquième mot est une propriété : background L’unité de style entière se lit comme suit : --gcds-button-primary-default-background."/>

### Unité de style globale

<img class="b-sm b-default p-400" src="/images/fr/foundations/anatomy/anatomy-design-tokens-global.svg" alt="Une ligne de trois mots où chaque mot est surligné et souligné d’une couleur différente. Deux traits d’union précèdent le premier mot, et un trait d’union sépare chaque mot. Chaque mot est rattaché à une étiquette affichant son type de nom. Le type de nom du premier mot est un préfixe : gcds. Le type de nom du deuxième mot est une catégorie (composant) : text. Le type de nom du troisième mot est un rôle ou un état : primary. L’unité de style entière se lit comme suit : --gcds-text-primary."/>

### Unité de style globale – état global

<img class="b-sm b-default p-400" src="/images/fr/foundations/anatomy/anatomy-design-tokens-global-state.svg" alt="Une ligne de trois mots où chaque mot est surligné et souligné d’une couleur différente. Deux traits d’union précèdent le premier mot, et un trait d’union sépare chaque mot. Chaque mot est rattaché à une étiquette affichant son type de nom. Le type de nom du premier mot est un préfixe : gcds. Le type de nom du deuxième mot est une catégorie (état) : focus. Le type de nom du troisième mot est une propriété : text. L’unité de style entière se lit comme suit : --gcds-focus-text."/>

### Unité de style de base

<img class="b-sm b-default mb-500 p-400" src="/images/fr/foundations/anatomy/anatomy-design-tokens-base.svg" alt="Une ligne de trois mots où chaque mot est surligné et souligné d’une couleur différente. Deux traits d’union précèdent le premier mot, et un trait d’union sépare chaque mot. Chaque mot est rattaché à une étiquette affichant son type de nom. Le type de nom du premier mot est un préfixe : gcds. Le type de nom du deuxième mot est une catégorie (couleur) : grayscale. Le type de nom du troisième mot est une échelle : 100. L’unité de style entière se lit comme suit : --gcds-grayscale-100."/>

{% include "partials/helpus.njk" %}
