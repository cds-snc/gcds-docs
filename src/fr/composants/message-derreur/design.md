---
title: Message d'erreur
layout: 'layouts/component-documentation.njk'
translationKey: 'errormessageDesign'
tags: ['errormessageFR', 'design']
date: 'git Last Modified'
---

## Structure du message d'erreur

<ol class="anatomy-list">
  <li>Le <strong>message d'erreur</strong> cite le problème dans son contexte et comprend un appel à l'action pour le corriger.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-error-message-anatomy.svg" alt="Stucture du message d'erreur représenté par une icône d'avertissement (point d'exclamation blanc à l'intérieur d'un triangle rouge) placée à côté du texte « Message d'erreur »."/>

### Message d'erreur appliqué à un composant de formulaire

Tous les composants de Système de design GC sont livrés avec une gestion des erreurs par défaut pour les composants de formulaire requis.

Pour vos propres composants, ajoutez le composant Message d'erreur ainsi que les éléments suivants :

<ol class="anatomy-list">
  <li>Le <strong>marqueur requis</strong> indique qu'un champ de réponse, un champ ou une sélection doit être rempli. Un message d'erreur s'affichera en cas de réponse incomplète ou d'omission.</li>
  <li>Le <strong>texte explicatif</strong> fournit des précisions sur la forme qui doit avoir la réponse. Il peut fournir un exemple de bonne réponse.</li>
  <li>Le <strong>message d'erreur</strong> cite le problème dans son contexte et comprend un appel à l'action pour le corriger.</li>
  <li>Le <strong>champ de réponse</strong> adopte l'apparence du format de réponse et de l'état du message d'erreur du composant auquel il est rattaché. Les cases de champs de saisie et des champs de texte sont surlignées. Les options des boutons radio ou des cases à cocher sont surlignées.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-error-message-anatomy-with-form-field.svg" alt="Taxonomie du message d'erreur représentée par quatre éléments: l'étiquette ou légende (obligatoire), le texte explicatif / exemple de message, une icône avertissement à côté du texte « Message d'erreur », et une zone de réponse (une boîte rouge rectangulaire comprenant une zone de texte)."/>

## Conception et accessibilité des messages d'erreur

Lorsque vous interrompez le déroulement d'une action, vous aidez l'utilisateur·rice à remarquer l'erreur et à se remettre à sa tâche.

### Repérez et définissez l'erreur

- Rédigez des messages d'erreur pour chaque contrainte de réponse d'un composant. Énumérez la liste des risques, puis rédigez un bref énoncé précis décrivant chaque besoin.
- N'indiquez qu'une seule raison par erreur, notamment le critère que la réponse ne rempli pas.
- Ne mentionnez pas l'action menée par l'utilisateur·rice qui a donné lieu au problème. Par exemple, si l'on écrit « Vous n'avez pas répondu à une question », on attribue la responsabilité à l'utilisateur·rice. En revanche, une formulation du genre « Question obligatoire » se limite à signaler le problème sans blâmer personne.

### Remettez la personne sur la bonne voie avec un appel à l'action

- Réduisez tout obstacle à la compréhension en rédigeant un appel à l'action clair et précis.
- Fournissez une ou deux solutions pour corriger l'erreur, plutôt qu'une démarche en plusieurs étapes.
- Établissez le lien entre les différentes informations dans le message pour faciliter la compréhension à l'utilisateur·rice. L'utilisateur·rice ne doit pas peiner à déchiffrer ce qu'il faut faire pour corriger une erreur.
- Précisez ce qu'il faut faire pour corriger le problème et ainsi éviter la frustration de le reproduire.

### Écrivez un message balayable

- Omettez les détails superflus et n'incluez que les informations nécessaires pour agir sur le problème. Soyez concis·e.
- Un énoncé comportant deux lignes ou plus est signe que la demande est trop complexe.
- Utilisez la majuscule seulement en début de phrase, mais évitez les points d'exclamation.
- Rédigez un énoncé classique : racontez ce qui s'est passé, pourquoi cela s'est produit et ce qu'il faut faire pour corriger la situation.

Conseil : Demandez-vous si le message risque d'être interprété autrement.

### Adoptez un ton humain

- Utilisez le langage parlé par vos utilisateur·rice·s. Renseignez-vous sur vos utilisateur·rice·s et sur leur façon de parler en lisant leurs demandes ou en analysant leurs problèmes, puis testez vos messages avec eux et elles dans le cadre de recherches sur les utilisateurs.
- Utilisez un langage simple et conversationnel, comme le ton que vous emploieriez si vous expliquiez l'erreur directement à la personne.
- Évitez la terminologie et le jargon du codage (code non valide, champ non reconnu, obligatoire et périphérique).
- Évitez les mots à connotation négative (erreur).

Conseil : Pour adopter un ton plus humain, essayez d'expliquer l'erreur à haute voix comme si vous parliez à quelqu'un. À quoi cela ressemble-t-il lorsque vous le prononcez dans une conversation?
