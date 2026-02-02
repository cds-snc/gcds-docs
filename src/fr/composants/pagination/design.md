---
title: Pagination
layout: 'layouts/component-documentation.njk'
translationKey: 'paginationDesign'
tags: ['paginationFR', 'design']
date: 'git Last Modified'
---

## Structure de la pagination

### Structure de la pagination simple

<ol class="anatomy-list">
  <li>Le <strong>lien précédent</strong> mène vers la page précédente dans la séquence lorsqu’il est sélectionné.</li>
  <li>Le <strong>chevron précédent</strong> est une aide visuelle qui indique qu’on navigue en arrière dans la séquence de pages.</li>
  <li>Le <strong>texte Précédent</strong> est le texte qui accompagne le chevron précédent. Il indique qu’une personne naviguera vers la page précédente dans la séquence.</li>
  <li>Le <strong>libellé de la page précédente</strong> fournit un contexte sur la page vers laquelle une personne reviendra.</li>
  <li>Le <strong>lien suivant</strong> mène vers la page suivante dans la séquence lorsqu’il est sélectionné.</li>
  <li>Le <strong>chevron suivant</strong> est une aide visuelle qui indique qu’on navigue en avant dans la séquence de pages.</li>
  <li>Le <strong>texte Suivant</strong> est le texte qui accompagne le chevron suivant. Il indique que la personne naviguera vers la page suivante dans la séquence.</li>
  <li>Le <strong>libellé de la page suivante</strong> fournit un contexte sur la page vers laquelle une personne naviguera ensuite.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-pagination-simple-previous-anatomy.svg" alt="Le composant de pagination, avec des numéros pointant vers les différentes parties de la structure de la pagination simple." />

### Structure de la pagination sous forme de liste

#### Écrans de grande taille

<ol class="anatomy-list">
  <li>Le <strong>lien précédent</strong> mène vers la page précédente dans la séquence lorsqu’il est sélectionné.</li>
  <li>Le <strong>chevron précédent</strong> est une aide visuelle qui indique qu’on navigue en arrière dans la séquence de pages.</li>
  <li>Le <strong>texte Précédent</strong> est le texte qui accompagne le chevron précédent. Il indique qu’une personne naviguera vers la page précédente dans la séquence.</li>
  <li>Un <strong>lien de page</strong> mène vers la page correspondante dans la séquence.</li>
  <li>La <strong>page actuelle</strong> indique la page sur laquelle la personne se trouve actuellement.</li>
  <li>Les <strong>points de suspension</strong> remplacent toutes les pages qui ne s’affichent pas.</li>
  <li>Le <strong>texte Suivant</strong> est le texte qui accompagne le chevron suivant. Il indique que la personne naviguera vers la page suivante dans la séquence.</li>
  <li>Le <strong>chevron suivant</strong> est une aide visuelle qui indique qu’on navigue en avant dans la séquence de pages.</li>
  <li>Le <strong>lien suivant</strong> mène vers la page suivante du flux lorsqu’il est sélectionné.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-pagination-list-large-anatomy.svg" alt="Le composant de pagination, avec des numéros pointant vers les différentes parties de la structure de la pagination sous forme de liste sur écran de grande taille." />

#### Écrans de petite taille

<ol class="anatomy-list">
  <li>Un <strong>lien de page</strong> mène vers la page correspondante dans la séquence.</li>
  <li>La <strong>page actuelle</strong> indique la page sur laquelle la personne se trouve actuellement.</li>
  <li>Les <strong>points de suspension</strong> remplacent toutes les pages qui ne s’affichent pas.</li>
  <li>Le <strong>lien précédent</strong> mène vers la page précédente dans la séquence lorsqu’il est sélectionné.</li>
  <li>Le <strong>chevron précédent</strong> est une aide visuelle qui indique qu’on navigue en arrière dans la séquence de pages.</li>
  <li>Le <strong>texte Précédent</strong> est le texte qui accompagne le chevron précédent. Il indique qu’une personne naviguera vers la page précédente dans la séquence.</li>
  <li>Le <strong>texte Suivant</strong> est le texte qui accompagne le chevron suivant. Il indique que la personne naviguera vers la page suivante dans la séquence.</li>
  <li>Le <strong>chevron suivant</strong> est une aide visuelle qui indique qu’on navigue en avant dans la séquence de pages.</li>
  <li>Le <strong>lien suivant</strong> mène vers la page suivante dans la séquence lorsqu’il est sélectionné.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-pagination-list-small-anatomy.svg" alt="Le composant de pagination, avec des numéros pointant vers les différentes parties de la structure de la pagination sous forme de liste sur écran de petite taille." />

## Design et accessibilité pour le composant pagination

### Rendez le contenu de la pagination facile à trouver

- Placez les informations les plus importantes sur les premières pages afin qu’elles soient plus visibles.
- Placez le composant de pagination immédiatement sous le contenu de la page, aligné à gauche.
- Affichez les liens de navigation de manière à favoriser le balayage visuel&nbsp;:
  - sur une seule ligne, sans retour à la ligne, pour la pagination en liste;
  - empilés verticalement, pour aider les personnes utilisant un logiciel d’agrandissement d’écran, dans le cas de la pagination simple.


### Aidez les personnes à comprendre où elles se trouvent

- Dans la pagination simple, utilisez un libellé sous les textes «&nbsp;Précédent&nbsp;» et «&nbsp;Suivant&nbsp;» pour indiquer la position de l’utilisateur dans la séquence. Incluez soit le titre de la page, soit le numéro de page par rapport au nombre total de pages afin de fournir un contexte sur les pages adjacentes.
- Évitez d’afficher le lien «&nbsp;Précédent&nbsp;» sur la première page ou le lien «&nbsp;Suivant&nbsp;» sur la dernière page.

### Affichez un nombre approprié de pages

Dans la pagination sous forme de liste, affichez suffisamment de liens de pages pour remplir l’espace horizontal disponible.

Affichez toujours&nbsp;:
- la page actuelle;
- la première et la dernière page;
- les pages immédiatement avant et après la page actuelle.

Sur les écrans plus grands, affichez des pages supplémentaires avant et après la page actuelle lorsque l’espace le permet.
