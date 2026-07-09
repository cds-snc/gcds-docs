---
title: Tableau
layout: 'layouts/component-documentation.njk'
translationKey: 'tableDesign'
tags: ['tableFR', 'design']
date: 'git Last Modified'
---

## Structure du tableau

<ol class="anatomy-list">
  <li>
    Le <strong>titre</strong> indique à quoi sert le tableau et contextualise les données présentées.
  </li>
  <li>
    Le <strong>bouton de filtre et tri</strong> (facultatif) ouvre une fenêtre superposée qui permet aux personnes de réorganiser et filtrer les données.
  </li>
  <li>
    Le <strong>contrôle de lignes</strong> (facultatif) permet aux personnes de choisir le nombre de lignes à afficher par page.
  </li>
  <li>
    L’<strong>état d’affichage</strong> indique la plage de lignes visibles et le nombre total de lignes.
  </li>
  <li>
    L’<strong>en-tête de colonne</strong> est un titre qui décrit les données de la colonne. Il sert aussi de déclencheur interactif pour trier les données.
  </li>
  <li>
    La <strong>ligne</strong> est un groupe horizontal de cellules représentant un seul élément.
  </li>
  <li>
    La <strong>pagination</strong> (facultatif) permet de se déplacer entre les pages d’un grand ensemble de données.
  </li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-table-anatomy.svg" alt="La structure d’un tableau comprend 7 éléments : un titre, un bouton de filtre et tri, un contrôle de lignes, un état d’affichage, des en-têtes de colonne, des lignes, et une pagination."/>

## Design et accessibilité des tableaux

### Structurez le tableau de façon claire et simple

- Incluez au moins un en-tête de colonne ou de ligne afin que les relations entre les valeurs soient explicites.
- Organisez les lignes et les colonnes de façon à refléter la manière dont l’information doit être comprise (par exemple, par ordre chronologique, par importance ou par association).
- Évitez les tableaux complexes ou imbriqués lorsque possible, car ils sont difficiles à utiliser avec des technologies d’assistance.
  - Évitez de fusionner ou de diviser des cellules.
  - Évitez d’utiliser plus d’un niveau d’en-tête de colonne ou de ligne.
  - Divisez les tableaux complexes en plusieurs tableaux plus simples pour en faciliter la lecture.
- Ajoutez un titre au tableau pour lui donner un nom accessible. S’il y a plusieurs tableaux dans une page, rédigez un titre unique pour chacun afin que les personnes utilisant des technologies d’assistance puissent les distinguer.

### Facilitez la lecture rapide

- Utilisez des en-têtes de colonnes et de lignes descriptifs et concis, dans un format uniforme, par exemple en utilisant des groupes nominaux partout.
- Utilisez un alignement uniforme pour permettre de comparer rapidement les valeurs.
  - Alignez à gauche le texte et les nombres non quantitatifs comme les dates, les codes postaux et les numéros de téléphone.
  - Alignez à droite les nombres de quantités et de mesures afin que les décimales soient alignées. Utilisez le même nombre de décimales pour tous les nombres.
  - Alignez les en-têtes de colonnes avec le contenu de leur colonne.
- Indiquez les unités dans les en-têtes de colonnes plutôt que de les répéter dans chaque cellule.
- Évitez les longs textes dans les cellules afin de faciliter le balayage visuel.
- Évitez de laisser des cellules vides, car certaines technologies d’assistance peuvent ne pas signaler qu’une valeur est manquante. Ajoutez du texte adapté au contexte comme « Sans objet » ou  « Aucune donnée ».

### Facilitez la recherche et l’exploration de données

- Utilisez un filtre pour aider les personnes à réduire les résultats à un sous-ensemble pertinent dans les cas suivants :
  - Il serait difficile de parcourir toutes les lignes, car l’ensemble de données est grand.
  - Les personnes ont probablement déjà une valeur ou une donnée précise en tête.
- Utilisez le tri pour aider les personnes à réorganiser les données et à trouver ce qui est important pour elles dans les cas suivants :
  - L’ordre des lignes influence la manière dont les données sont interprétées, par exemple par priorité, date ou grandeur.
  - Les personnes souhaitent repérer des tendances dans l’ensemble de données.
- Utilisez la pagination pour aider les personnes à naviguer dans de grands ensembles de données dans les cas suivants :
  - Le nombre de lignes rendrait la page trop longue à faire défiler confortablement.
  - Les personnes explorent les éléments et n’ont pas besoin de tout voir en même temps, ou bénéficieraient de pages qui chargent plus rapidement.
