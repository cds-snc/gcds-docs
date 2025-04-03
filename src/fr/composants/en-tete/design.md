---
title: En-tête
layout: 'layouts/component-documentation.njk'
translationKey: 'headerDesign'
tags: ['headerFR', 'design']
date: 'git Last Modified'
---

## Structure de l'en-tête

Les éléments d'en-tête sont requis pour les sites du GC, sauf indication contraire.

<ol class="anatomy-list">
  <li>La <strong>signature</strong> est un élément de marque qui identifie une page comme un espace du gouvernement du Canada. La signature du gouvernement du Canada renvoie à la page d'accueil Canada.ca.</li>
  <li>Le <strong>lien « passer au contenu »</strong> permet à une personne de passer la navigation pour accéder directement au contenu principal. Le lien est caché jusqu'à ce qu'une personne y navigue avec un clavier (état ciblé visible).</li>
  <li>La <strong>bascule de langue</strong> est un lien qui permet à une personne de passer d'un contenu en français à un contenu en anglais en établissant un lien vers la page dans l'autre langue officielle.</li>
  <li>La <strong>recherche</strong> permet à une personne de saisir des mots-clés ou des phrases pour trouver du contenu. Elle peut être configurée pour effectuer une recherche locale ou globale. Facultatif, sauf sur les pages de campagne et les pages standard de Canada.ca.</li>
  <li>La <strong>ligne séparatrice</strong> divise visuellement les éléments principaux de l'en-tête et le contenu de la page.</li>
  <li>La <strong>barre de navigation supérieure</strong> est un composant de navigation principal pour accéder aux pages prioritaires. Facultatif et, lorsqu'il est utilisé, se situe sous la ligne séparatrice de la même couleur.</li>
  <li>Le <strong>chemin de navigation</strong> trace un chemin de l'emplacement actuel vers chaque page de niveau supérieur dans la hiérarchie du site. Sur Canada.ca, le premier lien renvoie renvoie à la page d'accueil Canada.ca.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-header-anatomy-recommended.svg" alt="L'image de l'en-tête montre 7 éléments. La bannière de l'en-tête parcourt la largeur de l'en-tête et a un arrière-plan blanc 1. À gauche, la signature contient le drapeau du Canada avec Gouvernement du Canada en anglais et en français à sa droite. 2. Au centre au fait de l'en-tête, le lien passer au contenu est en état ciblé visible avec un rectangle bleu bordé de double lignée blanche, marqué  « passer au contenu ». 3. La bascule de langue avec un lien et le texte  “English” aligné à droite 4. En dessous de la bascule de langue, la barre de recherche contient le texte de remplacement « Rechercher dans Canada.ca » dans le champ de saisie et une petite bouton à droite avec l'icône d'une loupe. 5. La ligne séparatrice en gris pâle parcourt la largeur de l'en-tête et ne se distingue pas visuellement de la navigation supérieure immédiatement en dessous. 6. La  navigation supérieure est une bannière en gris pâle qui parcourt la largeur de l'en-tête. À gauche  est marqué le Lien vers l'accueil en caractères gras et à droite se trouve 4 liens de navigation. Le premier, le plus à gauche, a une icône de chevron qui pointe vers le bas. 7. Le chemin de navigation est le dernier élément se figure en bas de l'en-tête à gauche. Canada.ca est le premier lien et le deuxième est marqué avec  « lien ». "/>

## Design et accessibilité de l'en-tête

Les composants de Système de design du GC sont conçus pour s'adapter à la taille de l'écran ou du cadre où ils sont visualisés. À titre d'exception, la taille du texte dans l'en-tête et le pied de page est fixe.  

### Vérifier les exigences de l'en-tête

Voici les éléments requis pour l'en-tête sur les sites du GC.

<ul class="check-list mb-300">
  <li><a href="{{ links.signature }}">Signature.</a></li>
  <li><a href="{{ links.langToggle }}">Bascule de langue.</a></li>
  <li><a href="{{ links.link }}">Lien</a> passer au contenu.</li>
  <li>Assurez toujours l'intégrité de la signature du gouvernement du Canada. Ne la modifiez jamais de quelque façon que ce soit — ne l'étirez pas et n'en changez pas les couleurs ni le texte.</li>
</ul>

<gcds-details details-title="Éléments requis sur une page standard ou de campagne de Canada.ca" class="mb-300">
  <gcds-text>Assurez-vous de toujours inclure les éléments suivants dans l'en-tête d'une page standard ou de campagne et de maintenir les paramètres par défaut.</gcds-text>

  <ul class="check-list mb-300">
    <li>Signature qui renvoie à Canada.ca.</li>
    <li>Bascule de langue.</li>
    <li>Recherche.</li>
    <li>Chemin de navigation qui renvoie à Canada.ca depuis le premier lien.</li>
    <li>Lien passer au contenu.</li>
    <li>Ligne séparatrice.</li>
  </ul>

  <gcds-text>
    <strong>Remarque</strong> : Par exception pour les anciennes applications, la bascule de langue peut être omise si elle entraîne une action destructive (perte de données lorsque la langue est changée).
  </gcds-text>
</gcds-details>

<gcds-details details-title="Éléments facultatifs sur une page standard ou de campagne de Canada.ca" class="mb-300">
  <gcds-text>Vous pouvez choisir d'inclure :</gcds-text>
  <ul class="list-disc mb-300">
    <li>Un formulaire de recherche approuvé propre à un programme ou à un organisme plutôt que le formulaire de recherche global.</li>
    <li>Bouton « Se connecter ».</li>
    <li>Barre de navigation supérieure.</li>
  </ul>
</gcds-details>

### Améliorer l'accessibilité de l'en-tête

- Configurez un [lien]({{ links.link }}) `skip-to-content` comme raccourci pour les personnes utilisant une technologie d'assistance et améliorer la navigation au clavier. Le lien passe les éléments de navigation pour mener directement au contenu principal de la page.  
- Évitez de placer d'autres éléments avant le lien « passer au contenu ». Il est plus facile à découvrir s'il s'agit du premier ou deuxième élément.

### Ajouter des éléments facultatifs à l'en-tête

- Considérez utiliser la [barre de navigation supérieure]({{ links.topNav }}) pour les services et les sites Web qui ont besoin d'une navigation principale dédiée.  
- Utilisez la barre de navigation supérieure sur les pages Canada.ca lorsque le service ou le produit est autonome et cible un public interne, comme Système de design GC.
