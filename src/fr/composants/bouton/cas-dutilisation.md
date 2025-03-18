---
title: Bouton
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: buttonFR
  title: Bouton
  locale: fr
  parent: componentsFR
  otherNames: appel à l'action.
  description: Un objet interactif mettant l'accent sur une action..
  thumbnail: /images/common/components/preview-button.svg
  alt: Une boîte bleu foncé renfermant une épaisse ligne blanche représente un bouton et son libellé.
  state: published
translationKey: 'button'
tags: ['buttonFR', 'usage']
permalink: /fr/composants/bouton/
date: 'git Last Modified'
---

Jetez un coup d'œil à ce que font les boutons pour vérifier s'ils permettent de résoudre votre problème. Sélectionnez ensuite le meilleur sous-type, appelé « rôle du bouton », pour le cas d'utilisation dont vous avez besoin.

Utilisez un bouton pour lancer une action, comme :

- Démarrer une tâche ou un flux de travail.
- Soumettre, enregistrer ou supprimer des données de formulaire.
- Faire un choix ou donner son consentement.
- Se connecter à un compte.
- Avancer ou reculer dans une séquence.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0">Composants connexes</h2>

<a href="{{ links.link }}" class="link-light">Liens</a> lorsque vous souhaitez naviguer vers une nouvelle page, un site web, un fichier ou une section de la page actuelle.

<a href="{{ links.details }}" class="link-light">Détails</a> lorsque vous souhaitez masquer ou afficher une section de contenu.

</article>

## Choisissez un type de bouton

Le type de bouton change le HTML pour effectuer une tâche précise. Choisissez le type selon la fonction dont vous avez besoin.

### Type « Bouton »

Utilisez le type « Bouton » lorsque vous vous attendez à ce qu'une personne :

- Supprime, copie ou télécharge des renseignements;
- Choisisse entre deux options;
- Donne son consentement ou son accord.

### Type « Soumission »

Utilisez le type « Soumission » lorsque vous vous attendez à ce qu'une personne :

- Envoie une formulaire ou une requête.
- Enregistre des renseignements;
- se connecte ou se déconnecte d'un compte.

### Type « Réinitialisation »

Utilisez le type « Réinitialisation » lorsque vous vous attendez à ce qu'une personne :

- Supprime les données saisies dans un formulaire.

### Type « Lien »

Utilisez le type « Lien » lorsque vous vous attendez à ce qu'une personne :

- se dirige vers d'autres pages ou sites externes.

Remarque : Utilisez le [composant lien]({{ links.link }}) pour intégrer un lien dans le texte d'un paragraphe ou d'une barre de navigation.

## Choisissez le rôle du bouton

Le rôle du bouton change son apparence afin de signaler visuellement l'action qui se produira. Choisissez le rôle qui correspond le mieux à l'action.

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "Aperçu du bouton principal" "px-225 py-300" "mt-500" %}
  <gcds-button button-role="primary">Soumettre</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mt-0">Bouton principal</h3>
    <ul class="list-disc mb-300">
      <li>Actions cruciales au sein d'un processus ou en tant que bouton par défaut.</li>
      <li>Utiliser une seule fois par page.</li>
    </ul>
    <p>Conseil : La présence de plus d'un bouton principal d'action sur une même page fait en sorte qu'il est plus difficile pour une personne de savoir ce qu'elle doit faire ensuite. </p>
  </div>
</gcds-grid>
<br/>
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "Aperçu du Bouton de démarrage" "px-225 py-300" "mt-500" %}
  <gcds-button button-role="start">Bouton de démarrage </gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mt-0">Bouton principal</h3>
    <p><em>Anciennement le « bouton de super-tâche ».</em></p>
    <ul class="list-disc mb-300">
      <li>Le début d'une tâche ou d'un flux de travail. </li>
      <li>Plus grand que les autres boutons; donc à utiliser seul et non à côté d'autres boutons.</li>
      <li>À utiliser une seule fois sur une page.</li>
    </ul>
    <p>Conseil : La présence de plus d'un bouton principal d'action sur une même page fait en sorte qu'il est plus difficile pour une personne de savoir ce qu'elle doit faire ensuite. </p>
  </div>
</gcds-grid>
<br/>
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "Aperçu du bouton secondaire" "px-225 py-300" "mt-500" %}
  <gcds-button button-role="secondary">Annuler</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mt-0">Bouton secondaire</h3>
    <ul class="list-disc mb-300">
      <li>Pour les actions secondaires.</li>
      <li>Pour mettre en évidence une action commune et importante, mais non l'action la plus importante.</li>
      <li>Peut être utilisé plus d'une fois sur une page s'il y a plusieurs options secondaires.</li>
    </ul>
  </div>
</gcds-grid>
<br/>
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "Aperçu du bouton « Danger »" "px-225 py-300" "mt-500" %}
  <gcds-button button-role="danger">Supprimer</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mt-0">Bbouton « Danger »</h3>
    <ul class="list-disc mb-300">
      <li>Pour signaler des actions conséquentes comme la suppression ou la réinitialisation de renseignements.</li>
      <li>Les changements qui s'exécutent peuvent être difficiles à renverser.</li>
    </ul>
    <p>Conseil : Pour les actions permanentes, confirmez deux fois l'action afin qu'une personne accepte explicitement de la poursuivre.</p>
  </div>
</gcds-grid>
</div>
