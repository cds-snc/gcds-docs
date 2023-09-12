---
title: Détails
layout: 'layouts/component-documentation.njk'
translationKey: 'detailsDesign'
tags: ['detailsFR', 'design']
date: 'git Last Modified'
---

## Structure du composant Détails

Voici la structure du composant Détails ouvert. Le contenu est réduit par défaut.

<ol class="anatomy-list">
  <li>Le <strong>titre du composant Détail</strong> résume le contenu correspondant. Le texte du libellé est en minuscules (il n'y a que la lettre initiale qui est en majuscule).</li>
  <li>L'<strong>icône</strong> et le <strong>titre du composant Détails</strong> permettent d'activer l'affichage du contenu. L'icône indique si le composant est actuellement ouvert ou fermé. Lorsque le composant est ouvert, affichant ainsi le texte correspondant, l'icône est dirigée vers le contenu en question.</li>
  <li>Le <strong>contenu</strong> comprend tout texte ou image que la personne peut choisir d'afficher ou de dissimuler.</li>
</ol>

### Composant Détails ouvert

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-details-anatomy-open.svg" alt="L'anatomie du composant en savoir plus identifiant l'icône, une flèche pointant vers le bas, le titre du lien en savoir plus sur ce sujet et le contenu représenté par du texte information additionnelle." />

### Composant Détails fermé

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-details-anatomy-closed.svg" alt="L'anatomie du composant en savoir plus identifiant l'icône, une flèche pointant vers la droite et le titre du lien en savoir plus sur ce sujet." />

## Conception et accessibilité du composant Détails

### Efforcez-vous de réduire la charge cognitive au lieu de l'alourdir.

- Évitez de dissimuler des renseignements avec une liste de titres Détails. Cela interrompt le flux de lecture ou de défilement pour les personnes utilisant une technologie d'assistance.
- Envisagez d'afficher le contenu des premiers composants Détails par défaut, pour aider la personne à comprendre leur fonctionnement et à choisir quoi dissimuler.

### Sélectionnez le type de contenu à inclure dans un composant Détails

Commencez par retirer tout contenu qui ne serait pas utile ou important au regard de la tâche principale. Vous pouvez ensuite :

- Masquer le contenu auquel la personne peut choisir d'accéder pour une tâche qui implique d'analyser du contenu en vue de faire un choix;
- Segmenter le contenu d'une liste afin que la personne puisse choisir de lire ce qui est le plus pertinent pour elle;
- Inclure du contenu secondaire qui est important, mais secondaire par rapport à la tâche principale;
- Utiliser le composant Détails pour dissimuler du contenu potentiellement bouleversant. La personne pourra choisir d'ignorer ce passage, ou d'y revenir à un moment qui lui convient mieux;
- Utiliser le titre pour prévenir les utilisateur·rice·s qu'il s'agit d'un contenu sensible avant qu'ils ou elles accèdent au contenu en question.

### Utilisez le résumé pour rendre le contenu facile à trouver

- Gardez le titre clair et bref. Les titres courts sont plus faciles à comprendre d'un simple coup d'œil et peuvent aider une personne utilisant une technologie d'assistance à naviguer au sein d'un ensemble de composants Détails.
- Écrivez un titre qui indique la nature du contenu. Évitez les titres non descriptifs tels que « En savoir plus ». Au lieu de cela, optez pour un résumé spécifique et descriptif, comme « Montant de couverture maximal pour vos prestations de physiothérapie ».
- Évitez d'utiliser des titres similaires ou identiques à d'autres. Des titres distincts aident les gens à faire la différence et à choisir le contenu qu'ils et elles veulent lire.
- Évitez d'accroître la charge cognitive des personnes qui vous liront en publiant des renseignements difficiles à trouver.

### Évitez d'imbriquer des composants Détails

- Évitez de placer un composant Détails dans un autre, là où personne ne penserait à chercher ce contenu.
- De même, divisez le contenu volumineux en plusieurs composants Détails pour éviter de masquer plusieurs paragraphes dans le même composant Détails.

### Alternatives à l'utilisation du composant Détails

Le composant Détails peut augmenter la charge cognitive. Certaines personnes peuvent être déroutées par son fonctionnement ou submergées par une liste de titres parmi lesquels faire leur sélection.

- Incluez dans le flux de la page principale tout le contenu essentiel à l'accomplissement d'une tâche.
- Réduisez le volume total du texte en supprimant les renseignements redondants ou les éléments qui ne sont pas essentiels à l'accomplissement de la tâche.
- Simplifiez le contenu à l'aide d'un langage clair et conversationnel.
- Utilisez des sous-titres pour diviser le contenu.
- Divisez le contenu en plus petites sections et regroupez les éléments communs.
