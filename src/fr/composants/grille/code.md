---
title: Grille
layout: 'layouts/component-documentation.njk'
translationKey: 'gridCode'
tags: ['gridFR', 'code']
date: 'git Last Modified'
---

## Créer une grille

Utilisez des grilles pour créer des mises en page flexibles et réactives pour différentes tailles d'écran. Le composant Grille utilise la grille CSS pour permettre des mises en page plus complexes.

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

### Ajoutez un espacement entre les colonnes

- Ajoutez de l'espace entre les colonnes pour réduire la charge cognitive liée à la lecture d'un contenu trop dense.
- Dans la mesure du possible, alignez les objets verticalement et horizontalement.
- Utilisez la propriété `gap` pour ajouter de l'espacement entre vos `columns` dans la grille.
- Utilisez les <a href="{{ links.designTokens }}">unités de style</a> de Système de design GC comme référence pour la taille de votre `gap` dans la grille. Les mesures des unités correspondent aux valeurs d'espacement de l'attribut `gap`.

### Choisissez une option pour des colonnes de largeur égale

Désactivez la définition de la largeur minimale et de la largeur maximale lorsque vous souhaitez concevoir des colonnes de largeur égale sans restrictions de largeur. Cela permettra à la grille et à ses colonnes de s'adapter à la fenêtre d'affichage.

**Exemple d'affichage avec trois colonnes sur un ordinateur de bureau, deux colonnes sur la tablette et une colonne sur appareil mobile :**

Ordinateur de bureau

<div class="b-sm mb-400 p-400">
  <gcds-grid tag="article" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" gap="300">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  </gcds-grid>
</div>

Tablette

<div class="b-sm mb-400 p-400">
  <gcds-grid tag="article" columns-tablet="1fr 1fr" columns="1fr" gap="300">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  </gcds-grid>
</div>

Mobile

<div class="b-sm p-400">
  <gcds-grid tag="article" columns="1fr" gap="300">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  </gcds-grid>
</div>

{% viewCode "fr" "preview-grid-flexible" "gcds-grid" %}

```
<gcds-grid tag="article" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" gap="300">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
</gcds-grid>
```

{% endviewCode %}

Définissez la largeur minimale et la largeur maximale pour concevoir des colonnes de largeur égale afin de limiter la largeur des colonnes sur n'importe quelle taille d'écran.

- Définissez une largeur minimale lorsque vous voulez éviter qu'une colonne soit trop étroite dans les plus petites fenêtres d'affichage.
- Définissez une largeur maximale lorsque vous voulez éviter qu'une colonne soit trop large dans les plus grandes fenêtres d'affichage.

**Un exemple utilisant des colonnes de largeur égale avec une largeur minimale de 6,25rem (100px) et une largeur maximale de 18,75rem (300px) pour toutes les tailles d'écran :**

Ordinateur de bureau

<div class="showcase-preview b-sm mb-400 p-400">
  <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))" gap="500">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
  </gcds-grid>
</div>

Tablette

<div class="showcase-preview b-sm mb-400 p-400">
  <div class="container-md">
    <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))" gap="500">
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    </gcds-grid>
  </div>
</div>

Mobile

<div class="showcase-preview b-sm p-400">
  <div class="container-sm">
    <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))" gap="500">
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
      <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    </gcds-grid>
  </div>
</div>

{% viewCode "fr" "preview-grid-fixed-width" "gcds-grid" %}

```
<gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))" gap="500">
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
    <p>Ceci est un exemple de contenu pour illustrer le composant Grille.</p>
</gcds-grid>
```

{% endviewCode %}

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-grid."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-grid--events-properties"
  width="1200"
  height="2100"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
