---
title: Lignes de grille
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsGridRowsFR
  title: Lignes de grille
  locale: fr
  parent: shortcutsFR
  order: 1
shortcuts:
  - class: 'grid-rows-1'
    style: 'grid-template-rows: repeat(1, minmax(0, 1fr));'
  - class: 'grid-rows-2'
    style: 'grid-template-rows: repeat(2, minmax(0, 1fr));'
  - class: 'grid-rows-3'
    style: 'grid-template-rows: repeat(3, minmax(0, 1fr));'
  - class: 'grid-rows-4'
    style: 'grid-template-rows: repeat(4, minmax(0, 1fr));'
  - class: 'grid-rows-5'
    style: 'grid-template-rows: repeat(5, minmax(0, 1fr));'
  - class: 'grid-rows-6'
    style: 'grid-template-rows: repeat(6, minmax(0, 1fr));'
  - class: 'grid-rows-7'
    style: 'grid-template-rows: repeat(7, minmax(0, 1fr));'
  - class: 'grid-rows-8'
    style: 'grid-template-rows: repeat(8, minmax(0, 1fr));'
  - class: 'grid-rows-9'
    style: 'grid-template-rows: repeat(9, minmax(0, 1fr));'
  - class: 'grid-rows-10'
    style: 'grid-template-rows: repeat(10, minmax(0, 1fr));'
  - class: 'grid-rows-11'
    style: 'grid-template-rows: repeat(11, minmax(0, 1fr));'
  - class: 'grid-rows-12'
    style: 'grid-template-rows: repeat(12, minmax(0, 1fr));'
  - class: 'grid-rows-none'
    style: 'grid-template-rows: none;'
shortcutsPartialClass: 'grid-rows-3'
translationKey: 'shortcutsGridRows'
date: 'git Last Modified'
---

# Lignes de grille

La classe lignes de grille définit la propriété `grid-template-rows`. Elle détermine comment l'espace dans une boîte de grille est divisé en lignes; c’est-à-dire le nombre de lignes d’une grille et la hauteur de chacune.

{% include "partials/shortcuts-table.njk" %}

## Exemples

### 1 ligne<br/>`grid-rows-1`

Cette boîte utilise une mise en page de grille avec 1 ligne. Les 12 éléments sont disposés horizontalement sur une seule ligne. Chaque élément occupe sa propre colonne.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-1 gap-300">
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

### 2 lignes<br/>`grid-rows-2`

Cette boîte utilise une mise en page de grille avec 2 lignes. Les 12 éléments sont disposés en 2 lignes et 6 colonnes. Chaque élément occupe 50&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-2 gap-300">
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

### 3 lignes<br/>`grid-rows-3`

Cette boîte utilise une mise en page de grille avec 3 lignes. Les 12 éléments sont disposés en 4 lignes et 3 colonnes. Chaque élément occupe 33,33&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-3 gap-300">
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

### 4 lignes<br/>`grid-rows-4`

Cette boîte utilise une mise en page de grille avec 4 lignes. Les 12 éléments sont disposés en 4 lignes et 3 colonnes. Chaque élément occupe 25&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-4 gap-300">
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

### 5 lignes<br/>`grid-rows-5`

Cette boîte utilise une mise en page de grille avec 5 lignes. Les 12 éléments sont disposés en 5 lignes et 3 colonnes. Chaque élément occupe 20&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-5 gap-300">
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

### 6 lignes<br/>`grid-rows-6`

Cette boîte utilise une mise en page de grille avec 6 lignes. Les 12 éléments sont disposés en 6 lignes et 2 colonnes. Chaque élément occupe 16,67&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-6 gap-300">
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

### 7 lignes<br/>`grid-rows-7`

Cette boîte utilise une mise en page de grille avec 7 lignes. Les 12 éléments sont disposés en 7 lignes et 2 colonnes. Chaque élément occupe 14,29&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-7 gap-300">
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

### 8 lignes<br/>`grid-rows-8`

Cette boîte utilise une mise en page de grille avec 8 lignes. Les 12 éléments sont disposés en 8 lignes et 2 colonnes. Chaque élément occupe 12,5&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-8 gap-300">
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

### 9 lignes<br/>`grid-rows-9`

Cette boîte utilise une mise en page de grille avec 9 lignes. Les 12 éléments sont disposés en 9 lignes et 2 colonnes. Chaque élément occupe 11,11&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-9 gap-300">
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

### 10 lignes<br/>`grid-rows-10`

Cette boîte utilise une mise en page de grille avec 10 lignes. Les 12 éléments sont disposés en 10 lignes et 2 colonnes. Chaque élément occupe 10&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-10 gap-300">
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

### 11 lignes<br/>`grid-rows-11`

Cette boîte utilise une mise en page de grille avec 11 lignes. Les 12 éléments sont disposés en 11 lignes et 2 colonnes. Chaque élément occupe 9,09&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-11 gap-300">
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

### 12 lignes<br/>`grid-rows-12`

Cette boîte utilise une mise en page de grille avec 12 lignes. Les 12 éléments sont disposés en 12 lignes et 1 colonne. Chaque élément occupe 8,33&nbsp;% de la hauteur disponible de la boîte.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-12 gap-300">
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

### None<br/>`grid-rows-none`

Cette boîte supprime toute définition de ligne explicite. La hauteur de chaque ligne sera déterminée par son contenu, à moins que d'autres règles de dimensionnement ne soient appliquées.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-rows-none gap-300">
  <p>Aucune ligne n’est définie et la mise en page de grille n’est pas appliquée.</p>
  <p>Aucune ligne n’est définie et la mise en page de grille n’est pas appliquée.</p>
  <p>Aucune ligne n’est définie et la mise en page de grille n’est pas appliquée.</p>
</div>
{% endshortcutPreview %}

{% include "partials/responsive-layout.njk" %}
