---
title: Colonnes de grille
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsGridColumnsFR
  title: Colonnes de grille
  locale: fr
  parent: shortcutsFlexboxGridFR
  order: 1
shortcuts:
  - class: 'grid-cols-1'
    style: 'grid-template-columns: repeat(1, minmax(0, 1fr));'
  - class: 'grid-cols-2'
    style: 'grid-template-columns: repeat(2, minmax(0, 1fr));'
  - class: 'grid-cols-3'
    style: 'grid-template-columns: repeat(3, minmax(0, 1fr));'
  - class: 'grid-cols-4'
    style: 'grid-template-columns: repeat(4, minmax(0, 1fr));'
  - class: 'grid-cols-5'
    style: 'grid-template-columns: repeat(5, minmax(0, 1fr));'
  - class: 'grid-cols-6'
    style: 'grid-template-columns: repeat(6, minmax(0, 1fr));'
  - class: 'grid-cols-7'
    style: 'grid-template-columns: repeat(7, minmax(0, 1fr));'
  - class: 'grid-cols-8'
    style: 'grid-template-columns: repeat(8, minmax(0, 1fr));'
  - class: 'grid-cols-9'
    style: 'grid-template-columns: repeat(9, minmax(0, 1fr));'
  - class: 'grid-cols-10'
    style: 'grid-template-columns: repeat(10, minmax(0, 1fr));'
  - class: 'grid-cols-11'
    style: 'grid-template-columns: repeat(11, minmax(0, 1fr));'
  - class: 'grid-cols-12'
    style: 'grid-template-columns: repeat(12, minmax(0, 1fr));'
  - class: 'grid-cols-none'
    style: 'grid-template-columns: none;'
translationKey: 'shortcutsGridColumns'
date: 'git Last Modified'
---

# Colonnes de grille

La classe colonnes de grille définit la propriété `grid-template-columns`. Elle détermine comment l'espace dans une boîte de grille est divisé en colonnes; c’est-à-dire le nombre de colonnes et leur largeur.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### 1 colonne<br/>`grid-cols-1`

Cette boîte utilise une mise en page de grille avec 1 colonne. Les 12 éléments sont disposés verticalement dans une seule colonne. Chaque élément occupe sa propre colonne.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-1 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 2 colonnes<br/>`grid-cols-2`

Cette boîte utilise une mise en page de grille avec 2 colonnes. Les 12 éléments sont disposés en 2 colonnes et 6 lignes. Chaque élément occupe 50&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-2 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 3 colonnes<br/>`grid-cols-3`

Cette boîte utilise une mise en page de grille avec 3 colonnes. Les 12 éléments sont disposés en 3 colonnes et 4 lignes. Chaque élément occupe 33,33&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-3 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 4 colonnes<br/>`grid-cols-4`

Cette boîte utilise une mise en page de grille avec 4 colonnes. Les 12 éléments sont disposés en 4 colonnes et 3 lignes. Chaque élément occupe 25&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-4 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 5 colonnes<br/>`grid-cols-5`

Cette boîte utilise une mise en page de grille avec 5 colonnes. Les 12 éléments sont disposés en 5 colonnes et 3 lignes. Chaque élément occupe 20&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-5 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 6 colonnes<br/>`grid-cols-6`

Cette boîte utilise une mise en page de grille avec 6 colonnes. Les 12 éléments sont disposés en 6 colonnes et 2 lignes. Chaque élément occupe 16,67&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-6 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 7 colonnes<br/>`grid-cols-7`

Cette boîte utilise une mise en page de grille avec 7 colonnes. Les 12 éléments sont disposés en 7 colonnes et 2 lignes. Chaque élément occupe 14,29&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-7 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 8 colonnes<br/>`grid-cols-8`

Cette boîte utilise une mise en page de grille avec 8 colonnes. Les 12 éléments sont disposés en 8 colonnes et 2 lignes. Chaque élément occupe 12,5&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-8 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 9 colonnes<br/>`grid-cols-9`

Cette boîte utilise une mise en page de grille avec 9 colonnes. Les 12 éléments sont disposés en 9 colonnes et 2 lignes. Chaque élément occupe 11,11&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-9 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 10 colonnes<br/>`grid-cols-10`

Cette boîte utilise une mise en page de grille avec 10 colonnes. Les 12 éléments sont disposés en 10 colonnes et 2 lignes. Chaque élément occupe 10&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-10 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 11 colonnes<br/>`grid-cols-11`

Cette boîte utilise une mise en page de grille avec 11 colonnes. Les 12 éléments sont disposés en 11 colonnes et 2 lignes. Chaque élément occupe 9,09&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-11 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 12 colonnes<br/>`grid-cols-12`

Cette boîte utilise une mise en page de grille avec 12 colonnes. Les 12 éléments sont disposés en 12 colonnes et 1 ligne. Chaque élément occupe 8,33&nbsp;% de la largeur disponible de la boîte.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-12 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### None<br/>`grid-cols-none`

Cette boîte supprime toute définition de colonne explicite. Aucune colonne n'est créée et les éléments enfants ne seront pas automatiquement organisés en colonnes.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-none gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}
