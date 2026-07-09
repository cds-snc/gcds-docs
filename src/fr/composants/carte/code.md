---
title: Carte
layout: 'layouts/component-documentation.njk'
translationKey: 'cardCode'
tags: ['cardFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des cartes](#codage-et-accessibilite-des-cartes)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des cartes

### Écrivez un titre facile à parcourir

Utilisez l'attribut `card-title` pour ajouter un titre court et descriptif à la carte.

### Sélectionnez le bon niveau de titre

Utilisez `card-title-tag` pour définir [le bon niveau](/fr/composants/titre/design/#classez-les-niveaux-de-titre-de-maniere-hierarchique) de titre pour la carte. La définition du niveau adapté pour le titre n'a pas d'incidence sur la taille de la police, mais elle permet de maintenir la bonne hiérarchie et l'accessibilité pour les technologies d'assistance.

### Ajoutez une `description` pour fournir plus d'informations

Ajoutez une description pour fournir plus d'informations sur le sujet de la carte:

- Utilisez l'attribut `description` pour fournir une description textuelle concise.
- Pour une description avec une mise en forme plus complexe, comme du texte en gras ou en italique, utilisez l'élément `slot` par défaut de la carte. **Évitez d'ajouter des éléments interactifs dans cet emplacement (slot), car ils peuvent entraîner des problèmes d'accessibilité. La carte elle-même est déjà interactive et dirigera la personne au bon endroit.**

### Utilisez un `badge` pour afficher l'état ou la catégorie d'une carte

- Utilisez l'attribut `badge` pour ajouter un état ou une catégorie dans le coin supérieur gauche de la carte.
- Voici des exemples courants d'états : Nouveau, Mis à jour, Bientôt disponible, En vedette.
- Voici des exemples courants de catégories : Vidéos, Articles, Rapports.
- Les badges sont personnalisables mais sont limités à 20 caractères maximum.

### Regroupez les cartes pour assurer une cohérence visuelle

Organisez les cartes à l'aide du [composant de la grille]({{ links.grid }}).

- Pour les écrans d'ordinateurs, utilisez 2 ou 3 cartes par rangée.
- Pour les écrans d'appareils mobiles, utilisez 1 carte par rangée.
- Essayez d'inclure les mêmes propriétés pour chaque carte d'une même section dans une page. Par exemple : si une carte comporte une image, toutes les cartes comportent une image.

{% include "partials/valid-props.njk" %}

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `card-title`

L'attribut `card-title` définit le titre affiché sur la carte.

{% examplesPreview "170", "", "fr" %}
<gcds-card card-title="Titre de la carte" href="#">
</gcds-card>
{% endexamplesPreview %}

#### `href`

L'attribut `href` précise l'URL de la page vers laquelle pointe le lien.

{% examplesPreview "170", "", "fr" %}
<gcds-card card-title="Titre de la carte" href="#">
</gcds-card>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `badge`

L'attribut `badge` définit le texte du badge qui apparaît dans le coin supérieur gauche de la carte. Le badge est limité à 20 caractères.

{% examplesPreview "170", "", "fr" %}
<gcds-card card-title="Titre de la carte" badge="Balise" href="#">
</gcds-card>
{% endexamplesPreview %}

#### `card-title-tag`

L'attribut `card-title-tag` définit l'élément de titre HTML pour le titre de la carte. Cette propriété ne modifie pas la taille de la police. Utilisez-la pour assigner un niveau de titre approprié et maintenir la hiérarchie des titres et l'accessibilité. Les options sont :

- `h3`
- `h4`
- `h5`
- `h6`

<!-- Force line break -->

{% examplesPreview "170", "", "fr" %}
<gcds-card card-title="Titre de la carte" card-title-tag="h3" href="#">
</gcds-card>
{% endexamplesPreview %}

#### `description`

L'attribut `description` définit le texte qui apparaît sur la carte.

{% examplesPreview "230", "", "fr" %}
<gcds-card card-title="Titre de la carte" href="#" description="Description destinée à accompagner le titre.">
</gcds-card>
{% endexamplesPreview %}

#### `img-alt`

L'attribut `img-alt` définit le texte alternatif de l'image fournie. S'il n'est pas défini, l'image est considérée comme décorative.

{% examplesPreview "580", "", "fr" %}
<gcds-card card-title="Titre de la carte" href="#" img-alt="Le composant Carte montre un encadré contenant une image rectangulaire dans la moitié supérieure. Juste en dessous se trouve une barre bleue rectangulaire occupant les trois quarts de la largeur de l'encadré et représentant le titre de la carte. Encore en dessous, deux barres grises plus longues l'une au-dessus de l'autre représentent respectivement la zone consacrée au contexte et la zone consacrée aux métadonnées." img-src="/images/common/components/preview-card.svg">
</gcds-card>
{% endexamplesPreview %}

#### `img-src`

L'attribut `img-src` définit l'URL ou le chemin d'accès de l'image à afficher.

{% examplesPreview "580", "", "fr" %}
<gcds-card card-title="Titre de la carte" href="#" img-alt="Le composant Carte montre un encadré contenant une image rectangulaire dans la moitié supérieure. Juste en dessous se trouve une barre bleue rectangulaire occupant les trois quarts de la largeur de l'encadré et représentant le titre de la carte. Encore en dessous, deux barres grises plus longues l'une au-dessus de l'autre représentent respectivement la zone consacrée au contexte et la zone consacrée aux métadonnées." img-src="/images/common/components/preview-card.svg">
</gcds-card>
{% endexamplesPreview %}

#### `rel`

L'attribut `rel` définit la relation entre le document actuel et le document lié. Il est souvent utilisé pour des raisons de sécurité et de confidentialité, notamment lorsque les liens s'ouvrent dans un nouvel onglet ou une nouvelle fenêtre.

{% examplesPreview "170", "", "fr" %}
<gcds-card card-title="Titre de la carte" href="#" rel="noopener noreferrer">
</gcds-card>
{% endexamplesPreview %}

#### `target`

L'attribut `target` définit où s'ouvre le lien. Par exemple, il peut ouvrir le lien dans le même contexte de navigation ou dans un nouvel onglet ou une nouvelle fenêtre.

{% examplesPreview "170", "", "fr" %}
<gcds-card card-title="Titre de la carte" href="#" target="_blank">
</gcds-card>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à ajouter du contenu descriptif à la carte. Il remplace l'attribut description s'il est utilisé.

{% examplesPreview "230", "", "fr" %}
<gcds-card card-title="Titre de la carte" href="#">
  Description destinée à accompagner le titre.
</gcds-card>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-card."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-card--events-properties&lang=fr"
  width="1200"
  height="1900"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
