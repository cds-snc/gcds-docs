---
title: Zone de texte
layout: 'layouts/component-documentation.njk'
translationKey: 'textareaDesign'
tags: ['textareaFR', 'design']
date: 'git Last Modified'
---

## Structure d'une zone de texte

<ol class="anatomy-list">
  <li>L'<strong>étiquette</strong> indique les renseignements que l'utilisateur doit saisir dans le champ.</li>
  <li>Le <strong>texte explicatif</strong> précise les exigences spécifiques pour chaque zone de texte afin de favoriser la réussite de la tâche.</li>
  <li>Le <strong>champ</strong> est le conteneur avec lequel l'utilisateur·rice interagit pour fournir sa réponse.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-textarea-anatomy.svg" alt="L'anatomie de la zone de texte identifiant l'étiquette, le message d'aide et le champ qui forme le composant" />

## Conception et accessibilité des zones de texte

### Rédigez une étiquette courte, précise et unique

- Demandez les renseignements requis avec le plus de concision possible. La forme interrogative peut rendre une étiquette inutilement longue et l'utilisateur·rice pourrait ne pas la lire en entier.
- Choisissez des étiquettes uniques pour chaque champ de saisie et zone de texte dans une page. Une personne parcourant les champs entendra les étiquettes se succéder rapidement, sans indication permettant de savoir à quel contexte chaque étiquette correspond.
- Évitez d'employer un jargon technique, comme «&nbsp;adresse électronique du sujet&nbsp;» ou «&nbsp;ID du compte&nbsp;». Soyez plutôt précis·e et employez un ton personnel, comme «&nbsp;nom complet&nbsp;» et «&nbsp;âge de l'enfant&nbsp;».
- Évitez d'utiliser des expressions familières et des verbes courants qui ne sont pas connus des personnes ne parlant pas couramment l'anglais ou le français.
- Expliquez tout terme qui pourrait porter à confusion. Par exemple, « Biographie (dites nous quelques mots à propos de vous-même) ».

### Masquez l’étiquette seulement lorsque le but est clair
- Masquez visuellement l’étiquette seulement lorsque le but de la zone de texte est clairement communiqué par le contexte, rendant l’étiquette visuellement redondante, comme dans les cas suivants&nbsp;:
  - interfaces de clavardage ou de messagerie;
  - composants de recherche;
  - tableaux ou autres mises en page où l’espace est limité;
- Fournissez toujours une étiquette pour soutenir les technologies d’assistance.
- N’ajoutez pas de texte explicatif si vous masquez l’étiquette, puisque celui-ci manque alors de contexte et peut distraire ou prêter à confusion.

### Limitez l’utilisation du texte fictif
- Dans les formulaires, évitez d’utiliser du texte fictif pour remplacer une étiquette ou pour transmettre des instructions ou des renseignements à retenir, car cela peut créer des problèmes d’accessibilité.
- En dehors des formulaires, utilisez du texte fictif uniquement pour renforcer un objectif déjà clair selon le contexte visible (par exemple, dans les interfaces de recherche ou de conversation).


### Favorisez la réussite de la tâche en ajoutant du texte explicatif

- Ajoutez du texte explicatif pour aider l'utilisateur·rice à fournir une valeur valide dans la zone de texte.
- Rédigez un texte explicatif qui est instructif, court et précis.

### Écrivez des messages d'erreur pour les zones de texte obligatoires

- Utilisez les [messages d'erreur](/fr/composants/message-derreur/) pour traiter les saisies manquantes ou non valides.
- Rédigez un [message d'erreur](/fr/composants/message-derreur/) pour toute zone de texte obligatoire. Si un champ est facultatif, évitez de lui associer un [message d'erreur](/fr/composants/message-derreur/).
- Évitez de critiquer la personne qui utilise le produit. Dites-lui plutôt exactement ce qu'elle doit faire pour progresser.
