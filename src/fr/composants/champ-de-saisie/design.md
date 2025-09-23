---
title: Champ de saisie
layout: 'layouts/component-documentation.njk'
translationKey: 'inputDesign'
tags: ['inputFR', 'design']
date: 'git Last Modified'
---

## Structure d'un champ de saisie

<ol class="anatomy-list">
  <li>L'<strong>étiquette</strong> indique les renseignements que l'utilisateur doit saisir dans le champ. </li>
  <li>Le <strong>texte explicatif</strong> précise les exigences spécifiques pour chaque champ de saisie afin de favoriser la réussite de la tâche.</li>
  <li>Le <strong>champ</strong> est le conteneur avec lequel l'utilisateur·rice interagit pour fournir sa réponse.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-input-anatomy.svg" alt="L&apos;anatomie du champ de saisie identifiant l&apos;étiquette, le message d&apos;aide et le champ qui forme le composant."/>

## Conception et accessibilité des champs de saisie

### Rédigez une étiquette courte, précise et unique

- Demandez les renseignements requis avec le plus de concision possible. La forme interrogative peut rendre une étiquette inutilement longue et l'utilisateur·rice pourrait ne pas la lire en entier.
- Choisissez des étiquettes uniques pour chaque champ de saisie et zone de texte dans une page, comme «&nbsp;Votre nom complet&nbsp;» et «&nbsp;Nom du ou de la gestionnaire&nbsp;».
- Évitez d'employer un jargon technique, comme «&nbsp;adresse électronique du sujet&nbsp;» ou «&nbsp;ID du compte&nbsp;». Soyez plutôt précis·e et employez un ton personnel, comme «&nbsp;nom complet&nbsp;» et «&nbsp;âge de l'enfant&nbsp;».
- Évitez d'utiliser des expressions familières et des verbes courants qui ne sont pas connus des personnes ne parlant pas couramment l'anglais ou le français.
- Expliquez tout terme qui pourrait porter à confusion. Par exemple, «&nbsp;Pseudonyme (nom que vous souhaitez utiliser)&nbsp;».

### Adaptez la taille du champ de saisie au type de réponse

- Définissez l'attribut de la taille du champ de saisie pour les réponses dont vous connaissez la longueur précise (taille "50" = 50 caractères). Par exemple, 6 caractères pour un code postal ou 10 caractères pour un numéro de téléphone.
- Envisagez d’utiliser la majorité de la largeur du conteneur, par exemple à 90 %, lorsque vous ne savez pas la longueur exacte de la réponse.
- Utilisez le maximum de 75 caractères pour les réponses sans longueur fixe.

### Favorisez la réussite de la tâche en ajoutant du texte explicatif

- Ajoutez du texte explicatif pour aider l'utilisateur·rice à fournir une valeur valide dans le champs de saisie.
- Rédigez un texte explicatif qui est instructif, court et précis.

### Écrire des messages d'erreur pour les champs de saisies requis

- Utilisez les \[messages d'erreur\]({{ links.errorMessage }}) pour traiter les saisies manquantes ou non valides.
- Rédigez un \[message d'erreur\]({{ links.errorMessage }}) pour tout champ de saisie obligatoire. Si un champ est facultatif, évitez de lui associer un \[message d'erreur\]({{ links.errorMessage }}).
- Évitez de critiquer la personne qui utilise le produit. Dites-lui plutôt exactement ce qu'elle doit faire pour progresser.
