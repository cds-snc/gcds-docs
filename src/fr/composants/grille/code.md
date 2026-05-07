---
title: Grille
layout: 'layouts/component-documentation.njk'
translationKey: 'gridCode'
tags: ['gridFR', 'code']
date: 'git Last Modified'
templateEngineOverride: njk,md
---

## Sur cette page

- [Codage et accessibilité des grilles](#codage-et-accessibilite-des-grilles)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des grilles

### Ajustez les mises en page pour optimiser l'expérience sur différentes tailles d'écran

- Optimisez chaque composant Grille pour les différentes tailles d'écran qu'une personne utilisera lorsqu'elle visitera votre site ou utilisera votre produit, y compris en passant d'un écran à l'autre.
- Adaptez votre contenu aux appareils mobiles, aux tablettes et aux grands écrans en définissant la mise en page de chaque fenêtre d'affichage pour ce composant.
  - Les petits écrans, comme ceux des appareils mobiles, affichent généralement une mise en page à une colonne.
  - Les écrans de taille moyenne, comme les tablettes, affichent généralement une mise en page d'une à deux colonnes.
  - Les écrans plus grands, comme ceux des ordinateurs de bureau, affichent généralement une mise en page de trois ou quatre colonnes.
- Utilisez la propriété `columns` pour ajouter votre mise en page pour les plus petits écrans ou si vous utilisez la même disposition pour tous les écrans.
- Utilisez la propriété `columns-tablet` pour définir la mise en page sur tablette **(48 rem et 768 px et au-delà)** ou si vous utilisez la même disposition pour les moyens et grands écrans.
- Utilisez la propriété `columns-desktop` pour définir la mise en page pour les écrans plus grands **(64 rem et 1024 px et au-delà)**.

Conseil : Visez la simplicité pour vos mises en page. Envisagez d'optimiser chaque mise en page pour les écrans d'appareils mobiles, de tablettes et d'ordinateur. Vous offrirez ainsi une meilleure expérience utilisateur, quelle que soit la fenêtre d'affichage.

### Veillez à l'accessibilité en utilisant des balises standards

La propriété `tag` utilise une balise `div` par défaut.

- Vous pouvez remplacer la balise par une valeur adaptée au contexte à l'aide de balises standards. Par exemple, pour insérer une liste non ordonnée, définissez la propriété de balise à `ul`.
- Choisissez une balise dans la liste des options disponibles pour la grille dans le générateur de code. L'utilisation de balises HTML qui respectent les normes établies et les règles sémantiques augmente l'accessibilité du contenu et améliore l'expérience d'utilisation.

### Ajoutez un espacement entre les colonnes

- Utilisez la propriété `gap` pour ajouter de l'espacement entre vos `columns` dans la grille.
- Utilisez les <a href="{{ links.designTokens }}">unités de style</a> de Système de design GC comme référence pour la taille de votre `gap` dans la grille. Les mesures des unités correspondent aux valeurs d'espacement de l'attribut `gap` (150-800).

### Choisissez une option pour des colonnes de largeur égale

Désactivez la définition de la largeur minimale et de la largeur maximale lorsque vous souhaitez concevoir des colonnes de largeur égale sans restrictions de largeur. Cela permettra à la grille et à ses colonnes de s'adapter à la fenêtre d'affichage.

**Exemple d'affichage avec trois colonnes sur un ordinateur de bureau, deux colonnes sur la tablette et une colonne sur appareil mobile :**

Ordinateur de bureau

<div class="b-sm mb-300 p-300">
  <gcds-grid tag="article" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  </gcds-grid>
</div>

Tablette

<div class="b-sm mb-300 p-300">
  <gcds-grid tag="article" columns-tablet="1fr 1fr" columns="1fr">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  </gcds-grid>
</div>

Mobile

<div class="b-sm p-300">
  <gcds-grid tag="article" columns="1fr">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  </gcds-grid>
</div>

{% viewCode 'fr', 'preview-grid-flexible', 'gcds-grid' %}
<gcds-grid tag="article" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">

<p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
<p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
<p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
</gcds-grid>
{% endviewCode %}

Définissez la largeur minimale et la largeur maximale pour concevoir des colonnes de largeur égale afin de limiter la largeur des colonnes sur n'importe quelle taille d'écran.

- Définissez une largeur minimale lorsque vous voulez éviter qu'une colonne soit trop étroite dans les plus petites fenêtres d'affichage.
- Définissez une largeur maximale lorsque vous voulez éviter qu'une colonne soit trop large dans les plus grandes fenêtres d'affichage.

**Un exemple utilisant des colonnes de largeur égale avec une largeur minimale de 6,25rem (100px) et une largeur maximale de 18,75rem (300px) pour toutes les tailles d'écran :**

Ordinateur de bureau

<div class="showcase-preview b-sm mb-300 p-300">
  <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  </gcds-grid>
</div>

Tablette

<div class="showcase-preview b-sm mb-300 p-300">
  <div class="container-md">
    <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))">
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    </gcds-grid>
  </div>
</div>

Mobile

<div class="showcase-preview b-sm p-300">
  <div class="container-sm">
    <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))">
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    </gcds-grid>
  </div>
</div>

{% viewCode 'fr', 'preview-grid-fixed-width', 'gcds-grid' %}
<gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))">

<p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
<p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
<p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
</gcds-grid>
{% endviewCode %}

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `align-content`

L'attribut `align-content` définit l'alignement de la grille le long de l'axe de bloc (axe des colonnes) lorsque la taille totale de la grille est inférieure à celle de son conteneur. Les options sont :

- `center`
- `end`
- `space-around`
- `space-between`
- `space-evenly`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "example-styled-items examples-grid" %}
<gcds-grid align-content="space-between" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `align-items`

L'attribut `align-items` définit l'alignement des éléments de la grille le long de l'axe de bloc (axe des colonnes). Les options sont :

- `baseline`
- `center`
- `end`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "example-styled-items" %}
<gcds-grid align-items="baseline" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p class="pb-800">2</p>
  <p class="pt-900">3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `alignment`

L'attribut `alignment` définit l'alignement de la grille lorsque la taille du conteneur est inférieure à celle de son parent. Les options sont :

- `center`
- `end`
- `start`

<!-- Force line break -->

{% examplesPreview "example-styled-items" %}
<gcds-grid alignment="end" container="sm" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `columns`

L'attribut `columns` définit le nombre de colonnes de la grille pour toutes les fenêtres d'affichage, à moins que `columns-tablet` ou `columns-desktop` ne soient définis. Utilisez `columns-desktop` et `columns-tablet` pour définir des mises en page différentes selon l'appareil.

{% examplesPreview "example-styled-items" %}
<gcds-grid columns="1fr 1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `columns-desktop`

L'attribut `columns-desktop` permet de définir un nombre de colonnes différent pour les écrans d'ordinateur de bureau.

{% examplesPreview "example-styled-items" %}
<gcds-grid columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `columns-tablet`

L'attribut `columns-tablet` permet de définir un nombre de colonnes différent pour les écrans de tablette. Si `columns-desktop` n'est pas défini, `columns-tablet` s'applique également aux écrans d'ordinateur de bureau.

{% examplesPreview "example-styled-items" %}
<gcds-grid columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `container`

L'attribut `container` définit la taille du conteneur de la grille. Les options sont :

- `full`
- `xl`
- `lg`
- `md`
- `sm`
- `xs`

<!-- Force line break -->

{% examplesPreview "example-styled-items" %}
<gcds-grid container="sm" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `display`

L'attribut `display` définit le conteneur comme un bloc (`grid`) ou un élément qui reste sur la même ligne que les éléments environnants (`inline-grid`). Les options sont :

- `grid` (par défaut)
- `inline-grid`

<!-- Force line break -->

{% examplesPreview "example-styled-items" %}
<gcds-grid display="inline-grid" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `gap`

L'attribut `gap` définit l'espacement horizontal et vertical entre les éléments de la grille pour toutes les fenêtres d'affichage, à moins que `gap-tablet` ou `gap-desktop` ne soient définis. Utilisez `gap-desktop` et `gap-tablet` pour définir des espacements différents selon l'appareil.

{% examplesPreview "example-styled-items" %}
<gcds-grid gap="450" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `gap-desktop`

L'attribut `gap-desktop` permet de définir un espacement horizontal et vertical entre les éléments de la grille pour les écrans d'ordinateur de bureau.

{% examplesPreview "example-styled-items" %}
<gcds-grid gap-desktop="800" gap="400" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `gap-tablet`

L'attribut `gap-tablet` permet de définir un espacement horizontal et vertical entre les éléments de la grille pour les écrans de tablette. Si `gap-desktop` n'est pas défini, `gap-tablet` s'applique également aux écrans d'ordinateur de bureau.

{% examplesPreview "example-styled-items" %}
<gcds-grid gap-tablet="500" gap="400" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `justify-content`

L'attribut `justify-content` définit l'alignement de la grille le long de l'axe de ligne (axe de rangée) lorsque la taille totale de la grille est inférieure à celle de son conteneur. Les options sont :

- `center`
- `end`
- `space-around`
- `space-between`
- `space-evenly`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "example-styled-items" %}
<gcds-grid justify-content="center" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `justify-items`

L'attribut `justify-items` définit l'alignement des éléments de la grille le long de l'axe de ligne (axe de rangée). Les options sont :

- `center`
- `end`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "example-styled-items" %}
<gcds-grid justify-items="center" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `place-content`

L'attribut `place-content` définit à la fois les attributs `align-content` et `justify-content`. Les options sont :

- `center`
- `end`
- `space-around`
- `space-between`
- `space-evenly`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "example-styled-items" %}
<gcds-grid place-content="space-around" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `place-items`

L'attribut `place-items` définit à la fois les attributs `align-items` et `justify-items`. Les options sont :

- `center`
- `end`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "example-styled-items" %}
<gcds-grid place-items="end" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `tag`

L'attribut `tag` définit l'élément HTML utilisé pour afficher le conteneur de la grille. Par défaut, il est défini à `div`. Les options sont :

- `div` (par défaut)
- `article`
- `aside`
- `dl`
- `main`
- `nav`
- `ol`
- `section`
- `ul`

<!-- Force line break -->

{% examplesPreview "example-styled-items" %}
<gcds-grid tag="article" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

<!-- ----- Slots section ----- -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à placer les éléments de la grille.

{% examplesPreview "example-styled-items" %}
<gcds-grid columns-desktop="1fr 1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-grid."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-grid--events-properties&lang=fr"
  width="1200"
  height="2250"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
