---
title: Bouton
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: buttonFR
  title: Bouton
  locale: fr
  parent: componentsFR
  otherNames: appel à l'action.
  description: Un objet interactif mettant en évidence une action.
  thumbnail: /images/common/components/preview-button.svg
  alt: Une boîte bleu foncé renfermant une épaisse ligne blanche représente un bouton et son libellé.
  state: published
translationKey: 'button'
tags: ['buttonFR', 'usage']
permalink: /fr/composants/bouton/
date: 'git Last Modified'
---

Jetez un coup d'œil à ce que font les boutons pour vérifier s'ils permettent de résoudre votre problème. Sélectionnez ensuite le meilleur sous-type, appelé « rôle du bouton », pour le cas d'utilisation dont vous avez besoin.

## Types de problèmes résolus par les boutons

Utilisez un bouton pour les actions importantes qu'une personne utilisant votre produit peut entamer pour :

- Donner un ordre lié aux données d'un formulaire;
- Faire un choix ou donner son consentement;
- Entamer un processus, comme un tutoriel, ou se connecter à un espace sécurisé;
- Naviguer entre les différentes étapes d'une séquence;

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">
  <h2 class="mt-0 mb-400">Composants connexes</h2>

<a href="{{ links.link }}" class="link-light">Liens</a> : pour permettre de naviguer à une nouvelle page, à un autre site Web, à un fichier ou à une nouvelle section de la page actuelle et de lancer un téléchargement de fichiers.

<a href="{{ links.details }}" class="link-light">Détails</a> : lorsque vous cherchez à masquer ou afficher une section de contenu.

</article>

## Choisissez un type de bouton

Définissez le type de bouton selon la fonction nécessaire et le contexte du produit.

### Type « Bouton »

Utilisez le type « Bouton » lorsque vous vous attendez à ce qu'une personne :

- Supprime, copie ou télécharge des renseignements;
- Choisisse entre deux options;
- Donne son consentement ou son accord.

### Type « Soumission »

Utilisez le type « Soumission » lorsque vous vous attendez à ce qu'une personne :

- Envoie une formulaire ou une requête.
- Enregistre des renseignements;
- Se connecte ou se déconnecte d'un espace sécurisé.

### Type « Réinitialisation »

Utilisez le type « Réinitialisation » lorsque vous vous attendez à ce qu'une personne :

- Supprime les données saisies dans un formulaire.

### Type « Lien »

Utilisez le type « Lien » lorsque vous vous attendez à ce qu'une personne :

- se rendre vers d'autres pages ou vers des sites externes à l'aide d'un bouton de type « lien ».

Remarque : Utilisez le [composant lien]({{ links.link }}) lorsque vous devez insérer un lien dans le texte d'un paragraphe ou dans le corp du texte.

## Choisissez le rôle du bouton

Un rôle est un sous-type de bouton à usage spécifique sur une page.

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Aperçu du bouton principal" "px-300 py-400" "" %}
  <gcds-button button-role="primary">Soumettre</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Utilisations du bouton principal</h3>
    <ul class="list-disc mb-400">
      <li>L'action la plus importante d'une page.</li>
      <li>Actions cruciales au sein d'un processus ou en tant que bouton par défaut.</li>
      <li>Limitation à une seule utilisation.</li>
    </ul>
    <p>Remarque : La présence de plus d'un bouton principal d'appel à l'action sur la même page réduit ses effets et fait en sorte qu'il est plus difficile pour une personne de savoir ce qu'elle doit faire ensuite.</p>
  </div>
</gcds-grid>
<br/>
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Aperçu du bouton secondaire" "px-300 py-400" "" %}
  <gcds-button button-role="secondary">Annuler</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Utilisations du bouton secondaire</h3>
    <ul class="list-disc mb-400">
      <li>Pour les actions secondaires.</li>
      <li>Pour mettre en avant une action commune et importante, sans qu'il s'agisse de la plus importante.</li>
      <li>Pour souligner des options de tâches alternatives importantes, au besoin plus d'une fois par page.</li>
    </ul>
  </div>
</gcds-grid>
<br/>
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Aperçu du bouton « Danger »" "px-300 py-400" "" %}
  <gcds-button button-role="danger">Supprimer</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Utilisations du bouton « Danger »</h3>
    <ul class="list-disc mb-400">
      <li>Pour signaler des actions sérieuses comme le retrait ou la suppression de renseignements.</li>
      <li>Pour les actions entraînant des changements difficiles à inverser.</li>
    </ul>
    <p>Conseil : Pour les actions permanentes, confirmez deux fois l'action afin qu'une personne accepte explicitement de la poursuivre.</p>
  </div>
</gcds-grid>
</div>
