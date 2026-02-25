---
title: Recherche
layout: 'layouts/component-documentation.njk'
translationKey: 'searchDesign'
tags: ['searchFR', 'design']
date: 'git Last Modified'
---

## Structure du composant recherche

<ol class="anatomy-list">
  <li>Le <strong>champ de saisie</strong> est un espace permettant d’entrer des mots-clés de recherche.</li>
  <li>Le <strong>texte de l’espace réservé</strong> est une invite visible dans le champ qui s’efface lorsqu’une personne saisit du texte. Il identifie la zone de recherche.</li>
  <li>Le <strong>bouton</strong>, désigné à l’aide d’une icône de loupe, lance la recherche.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-search-anatomy.svg" alt="Une boîte de recherche avec la mention « Rechercher dans Canada.ca » à l’intérieur, à côté d’un bouton de loupe immédiatement à droite. Chaque élément du composant est identifié à l’aide d’un chiffre." />

## Accessibilité et design des recherche

### Vérifier les exigences de recherche

Voici les éléments requis pour la recherche sur les sites du GC.

- La recherche est requise dans l’<gcds-link href="{{ links.header }}">en-tête</gcds-link> des pages standard et de campagne de Canada.ca.
- Elle est facultative pour les autres pages de Canada.ca et les sites du GC.

<gcds-details details-title="Éléments requis sur une page standard ou de campagne de Canada.ca" class="mb-300">
  <gcds-text>Toujours inclure la recherche dans l’en-tête d’une page standard ou de campagne et maintenir les paramètres par défaut.</gcds-text>
  <ul class="list-disc">
    <li>Utilisez l’indexation par défaut de la recherche du GC.</li>
    <li>Définissez l’indexation pour tout le contenu de Canada.ca ou à l’échelle d’un organisme ou d’un programme.</li>
    <li>Pour la recherche à l’échelle du site Canada.ca, maintenez le texte de l’espace réservé par défaut « <span lang="en">Search Canada.ca</span> » en anglais et « Rechercher dans Canada.ca » en français.</li>
    <li>Pour la recherche à l’échelle d’un organisme, d’un programme ou d’un produit, utilisez le texte de l’espace réservé suivant :
      <ul class="ms-300">
        <li>« <span lang="en">Search [institution/program/product] </span>» en anglais</li>
        <li>« Rechercher dans [institution/programme/produit] » en français</li>
      </ul>
    </li>
  <li>Évitez les acronymes, sauf s'ils sont nécessaires pour raccourcir le texte à des fins d'accessibilité.</li>
  </ul>
  <gcds-text margin-bottom="0"><strong>Remarque :</strong> Par exception, les pages destinées uniquement à un public de la fonction publique peuvent appliquer une indexation de recherche personnalisée dans certains contextes précis.</gcds-text>
</gcds-details>

<gcds-details details-title="Éléments facultatifs sur une page standard ou de campagne de Canada.ca" class="mb-300">
  <gcds-text margin-bottom="0">Envisagez d’ajouter une recherche pour d’autres ensembles de données dans la zone de contenu de la page.</gcds-text>
</gcds-details>

### Envisager de configurer une recherche supplémentaire

- Si une recherche secondaire est nécessaire auprès d’ensembles de données supplémentaires, placez cette recherche dans la zone de contenu de la page.
- Identifiez clairement la zone de recherche afin que la personne effectuant la recherche en comprenne bien les contraintes.
