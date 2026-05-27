---
title: Tableau
layout: 'layouts/component-documentation.njk'
translationKey: 'tableCode'
tags: ['tableFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des tableaux](#codage-et-accessibilite-des-tableaux)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des tableaux

### Utilisez le bon nom de composant

- Utilisez `gcds-table` en HTML, Vue ou React.
- Utilisez `gcds-table-ng` en Angular.

### Définissez les colonnes et les données

Pour construire un tableau, vous devez au minimum définir les colonnes et les données.

- Utilisez l’attribut `columns` pour définir les colonnes du tableau et leur comportement.
- Utilisez l’attribut `data` pour remplir le tableau avec du contenu.

### Ajoutez un titre

Utilisez l’emplacement `caption` pour donner un nom accessible au tableau, afin que les technologies d’assistance puissent l’identifier et l’annoncer.

### Ajoutez l’option de filtre pour affiner les résultats

Définissez `filter` à `true` pour permettre le filtrage, afin que les personnes puissent affiner les résultats par mot-clé.

### Ajoutez l’option de tri pour réorganiser les données

- Définissez `sort` à `true` pour activer le tri par colonne, afin que les personnes puissent réorganiser les données d’une colonne par priorité, chronologie, grandeur ou autre.
- Si le tableau a un tri par défaut qui reflète la façon dont les personnes vont naturellement lire les données, définissez-le à l’aide de la propriété `sortDirection` dans l’objet de colonne concerné.

### Ajoutez une pagination pour les tableaux volumineux

- Définissez `pagination` à `true` pour diviser les données en pages.
- Ajustez `pagination-size-options` pour contrôler le nombre de lignes affichées par page.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)


<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `columns`

Utilisez l’attribut `columns` pour définir les colonnes du tableau. Passez un tableau (array) d’objets où chaque objet définit une colonne et contrôle son apparence et son comportement.

Chaque objet de colonne accepte les propriétés suivantes :

- `alignment` : Utilisez `alignment` pour contrôler le positionnement horizontal du contenu dans les cellules de la colonne. Définissez la valeur à `start` pour aligner le contenu à gauche, à `center` pour l’aligner au centre, ou à `end` pour l’aligner à droite.
- `field` : Utilisez `field` pour définir l’identifiant unique qui lie la colonne aux bonnes données. La valeur doit correspondre à la clé utilisée pour ces données dans votre objet data.
- `header` : Utilisez `header` pour définir l’en-tête de colonne affiché en haut de la colonne.
- `rowHeader` : Définissez `rowHeader` à true pour marquer chaque cellule de la colonne comme un en-tête de ligne. Les en-têtes de ligne indiquent le sujet de chaque ligne.
- `slotted` : Définissez `slotted` à true pour indiquer que la cellule affichera du contenu personnalisé. Pour voir comment chaque cadre d’applications affiche ce contenu, consultez la section [Syntaxe du contenu personnalisé selon le cadre d’applications](#syntaxe-du-contenu-personnalisé-selon-le-cadre-dapplications).
- `sort` : Définissez `sort` à `true` pour permettre aux personnes de trier le tableau selon cette colonne.
- `sortDirection` : Utilisez `sortDirection` pour définir l’ordre de tri par défaut de la colonne au chargement de la page. Définissez la valeur à `asc` pour un ordre croissant ou à `desc` pour un ordre décroissant.

#### `data`

Utilisez `data` pour transmettre le contenu du tableau. Passez un tableau (array) d’objets où chaque objet représente une ligne et chaque clé correspond à un `field` de colonne.

[Preview and code snippet]

#### `filter`

Définissez `filter` à `true` pour afficher un champ de filtre qui permet aux personnes d’affiner les résultats par mot-clé.

[Preview and code snippet]

#### `filter-value`

Utilisez `filter-value` pour définir un mot-clé par défaut dans le champ de filtre, afin que certaines lignes soient déjà filtrées au chargement du tableau. Par défaut, aucune valeur n’est définie.

[Preview and code snippet]

#### `pagination`

Définissez `pagination` à `true` pour diviser le tableau en pages lorsqu’il contient de nombreuses lignes. Par défaut, pagination est défini à `false`.

[Preview and code snippet]

#### `pagination-current-page`

Utilisez `pagination-current-page` pour définir la page affichée au chargement du tableau. Par défaut, la valeur est définie à `1`, ce qui affiche la première page.

[Preview and code snippet]

#### `pagination-size`

Utilisez `pagination-size` pour définir le nombre de lignes affichées par page. Par défaut, la valeur est `10`.

[Preview and code snippet]

#### `pagination-size-options`

Utilisez `pagination-size-options` pour définir les choix du nombre de lignes affichées par page dans le contrôle des lignes. Les options par défaut sont `[10, 25, 50, 0]`.

**Remarque** : Inclure `0` dans les options ajoute une option « Tout » qui affiche toutes les lignes à la fois. Utilisez cette option avec prudence pour les grands ensembles de données, car elle peut affecter la performance.

[Preview and code snippet]

#### `sort`

Définissez `sort` à `true` pour permettre aux personnes de trier le tableau en cliquant sur les en-têtes de colonne. Définissez `sort` à `false` pour désactiver le tri pour toutes les colonnes. Par défaut, `sort` est défini à `false`.

**Remarque** : La propriété `sort` définie dans chaque objet de colonne a priorité. Si une colonne définit `sort` à `false`, cette colonne ne pourra pas être triée, même si la propriété sort du tableau est définie à `true`.

[Preview and code snippet]

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `caption`

Utilisez l’emplacement `caption` pour donner un nom accessible au tableau, afin que les technologies d’assistance puissent l’identifier et l’annoncer.

[Preview and code snippet]

#### Syntaxe du contenu personnalisé selon le cadre d’applications

Utilisez du contenu personnalisé dans les cellules lorsque vous avez besoin de plus que du texte, par exemple un lien, une image ou un bouton. Pour activer le contenu personnalisé dans une colonne, définissez `slotted` à `true` dans votre objet de colonne.

Chaque cadre d’applications gère le contenu personnalisé différemment. HTML, Vue et Angular utilisent des emplacements ou des directives, tandis que React utilise la propriété `renderCell`.

<gcds-details details-title="Exemple HTML">

  Utilisez l’emplacement `cell:<field>` pour définir du contenu personnalisé pour une colonne précise. Remplacez `<field>` par la valeur field définie dans votre objet de colonne.

Utilisez `data-bind-*` pour assigner directement une valeur de ligne à un attribut. 

Utilisez `data-bind-template-*` lorsque vous devez insérer une valeur de ligne dans une chaîne avant de l’assigner à un attribut. Par exemple, utilisez-le pour construire les attributs `alt` et `src` d’une image.

Si les éléments interactifs doivent utiliser les données de la ligne dans leurs fonctions, vous pouvez accéder aux propriétés `row`, `rowIndex`, `column` et `value` en utilisant `this`.

  [Preview and code snippet for HTML]

</gcds-details>

<gcds-details details-title="Exemple Vue">

  Utilisez l’emplacement `#<field>` pour définir du contenu personnalisé pour une colonne précise. Remplacez `<field>` par la valeur field définie dans votre objet de colonne.

Utilisez `{ row }` pour accéder aux données de ligne dans l’emplacement.

  [Preview and code snippet for Vue]

</gcds-details>

<gcds-details details-title="Exemple Angular">

Utilisez la directive `gcdsCell=”<field>”` pour assigner du contenu personnalisé à la bonne colonne.

Si des éléments interactifs doivent utiliser les données de la ligne dans leurs fonctions, vous pouvez accéder aux propriétés `row`, `rowIndex`, `column` et `value` en utilisant `let-*`.

  [Preview and code snippet for Angular]

</gcds-details>

<gcds-details details-title="Exemple columns en React">

  Utilisez la propriété `renderCell` pour définir le contenu à afficher dans la cellule. Contrairement aux autres cadres d’applications, React utilise une propriété `renderCell` au lieu d’emplacements. Cette propriété permet de définir une fonction dans l’objet de colonne qui retourne le contenu à afficher.

  [Preview and code snippet for React]

</gcds-details>

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-table."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-table--events-properties&lang=fr"
  width="1200"
  height="1050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
