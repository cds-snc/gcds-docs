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

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-textarea-anatomy.svg" alt="L&apos;anatomie de la zone de texte identifiant l&apos;étiquette, le message d&apos;aide et le champ qui forme le composant" />

## Conception et accessibilité des zones de texte

### Rédigez une étiquette court, précis et unique

- Demandez les renseignements requis avec le plus de concision possible. La forme interrogative peut rendre une étiquette inutilement longue et l'utilisateur·rice pourrait ne pas la lire en entier.
- Choisissez des étiquettes uniques pour chaque champ de saisie et zone de texte dans une page. Une personne parcourant les champs entendra le texte de l'étiquette en succession rapide et n'aura pas d'indication pour associer l'etiquette avec chaque contexte.
- Évitez d'employer un jargon technique, comme «&nbsp;adresse électronique du sujet&nbsp;» ou «&nbsp;ID du compte&nbsp;». Soyez plutôt précis·e et employez un ton personnel, comme «&nbsp;nom complet&nbsp;» et «&nbsp;âge de l'enfant&nbsp;».
- Évitez d'utiliser des expressions familières et des verbes courants qui ne sont pas connus des personnes ne parlant pas couramment l'anglais ou le français.
- Expliquez tout terme qui pourrait porter à confusion. Par exemple, « Biographie (Dites nous quelques mots à propos de vous-même) ».

### Favorisez la réussite de la tâche en ajoutant du texte explicatif

- Ajoutez du texte explicatif pour aider l'utilisateur·rice à fournir une valeur valide dans la zone de texte.
- Rédigez un texte explicatif qui est instructif, court et précis.

### Écrire des messages d'erreur pour les zones de texte requises

- Utilisez les [messages d'erreur](/fr/composants/message-derreur/) pour traiter les saisies manquantes ou non valides.
- Rédigez un [message d'erreur](/fr/composants/message-derreur/) pour tout zone de texte obligatoire. Si un champ est facultatif, évitez de lui associer un [message d'erreur](/fr/composants/message-derreur/).
- Évitez de critiquer la personne qui utilise le produit. Dites-lui plutôt exactement ce qu'elle doit faire pour progresser.
