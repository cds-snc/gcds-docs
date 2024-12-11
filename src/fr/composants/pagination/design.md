---
title: Pagination
layout: 'layouts/component-documentation.njk'
translationKey: 'paginationDesign'
tags: ['paginationFR', 'design']
date: 'git Last Modified'
---

## Structure de la pagination

### Structure de la pagination simple

#### Lien précédent

<ol class="anatomy-list">
  <li>La <strong>flèche précédente</strong> est une aide visuelle qui indique qu’on navigue en arrière dans le flux de pages.</li>
  <li>Le <strong>texte précédent</strong> est le texte qui accompagne la flèche précédente, indiquant que l’utilisateur·rice navigue vers la page précédente dans le flux.</li>
  <li>Le <strong>libellé précédent</strong> indique à l’utilisateur·rice le libellé de la page précédente.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-pagination-simple-previous-anatomy.svg" alt="Le composant de pagination avec des nombres pointant vers des parties individuelles de l’anatomie du lien précédent de la pagination simple." />

#### Lien suivant

<ol class="anatomy-list">
  <li>Le <strong>texte suivant</strong> est le texte qui accompagne la flèche suivante, indiquant que l’utilisateur·rice navigue vers la page suivante dans le flux.</li>
  <li>La <strong>flèche suivante</strong> est une aide visuelle qui indique qu’on navigue en avant dans le flux de pages.</li>
  <li>Le <strong>libellé suivant</strong> indique à l’utilisateur·rice le libellé de la page suivante.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-pagination-simple-next-anatomy.svg" alt="Le composant de pagination avec des nombres pointant vers des parties individuelles de l’anatomie du lien suivant de la pagination simple." />

### Structure de la pagination sous forme de liste

#### Grands écrans

<ol class="anatomy-list">
  <li>Le <strong>lien précédent</strong> mène vers la page précédente du flux lorsqu’il est sélectionné.</li>
  <li>Un <strong>lien de page</strong> mène vers la page correspondante dans le flux.</li>
  <li>La <strong>page active</strong> indique la page sur laquelle la personne se trouve actuellement.</li>
  <li>Les <strong>points de suspension</strong> remplacent toutes les pages qui ne s’affichent pas.</li>
  <li>Le <strong>lien suivant</strong> mène vers la page suivante du flux lorsqu’il est sélectionné.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-pagination-list-large-anatomy.svg" alt="Le composant de pagination avec des nombres pointant vers des parties individuelles de l’anatomie de la pagination sous forme de liste sur grand écran." />

#### Petits écrans

<ol class="anatomy-list">
  <li>Un <strong>lien de page</strong> mène vers la page correspondante dans le flux.</li>
  <li>La <strong>page active</strong> indique la page sur laquelle la personne se trouve actuellement.</li>
  <li>Les <strong>points de suspension</strong> remplacent toutes les pages qui ne s’affichent pas.</li>
  <li>Le <strong>lien précédent</strong> mène vers la page précédente du flux lorsqu’il est sélectionné.</li>
  <li>Le <strong>lien suivant</strong> mène vers la page suivante du flux lorsqu’il est sélectionné.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-pagination-list-small-anatomy.svg" alt="Le composant de pagination avec des nombres pointant vers des parties individuelles de l’anatomie de la pagination sous forme de liste sur petits écran." />

#### Lien précédent

<ol class="anatomy-list">
  <li>La <strong>flèche précédente</strong> est une aide visuelle qui indique qu’on navigue en arrière dans le flux de pages.</li>
  <li>Le <strong>texte précédent</strong> est le texte qui accompagne la flèche précédente, indiquant que l’utilisateur·rice navigue vers la page précédente dans le flux.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-pagination-list-previous-anatomy.svg" alt="Le composant de pagination avec des nombres pointant vers des parties individuelles de l'anatomie du lien précédent de la pagination sous forme de liste." />

#### Lien suivant

<ol class="anatomy-list">
  <li>Le <strong>texte suivant</strong> est le texte qui accompagne la flèche suivante, indiquant que l’utilisateur·rice navigue vers la page suivante dans le flux.</li>
  <li>La <strong>flèche suivante</strong> est une aide visuelle qui indique qu’on navigue en avant dans le flux de pages.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-pagination-list-next-anatomy.svg" alt="Le composant de pagination avec des nombres pointant vers des parties individuelles de l'anatomie du lien suivant de la pagination sous forme de liste." />

## Design et accessibilité pour le composant pagination

### Rendez le contenu de la pagination facile à trouver

- Placez les renseignements les plus importants sur les premières pages afin qu’ils soient plus visibles.
- Placez le composant Pagination juste sous le contenu de la page que vous affichez et choisissez un alignement à gauche.
- Veillez à ce que les liens de navigation s’affichent sur une seule et même ligne.

### Utilisez la pagination simple pour quelques pages

La pagination simple est plus adaptée à un contenu réparti sur 2 à 5 pages.

- Utilisez des sous-titres dans le cadre de la pagination simple pour indiquer à la personne où elle se trouve dans le flux.
- Incluez le numéro de la page et le nombre total de pages, ou le titre de la page dans le sous-titre pour fournir davantage de contexte.

### Utilisez la pagination sous forme de liste pour un grand nombre de pages

Utilisez la pagination sous forme de liste lorsque le nombre de pages est important et que les seuls liens « Précédent » et « Suivant » rendraient la navigation fastidieuse.
