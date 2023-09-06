---
title: Résumé des erreurs
layout: "layouts/component-documentation.njk"
translationKey: "errorsummaryCode"
tags: ['errorsummaryFR', 'code']
---

## Création d'un résumé des erreurs

Utilisez un résumé des erreurs pour expliquer ce qu'il faut faire avant de passer à la tâche suivante.

Tous les composants de Système de design GC sont livrés avec une gestion des erreurs par défaut pour les composants de formulaire requis. Dans le cas des résumés des erreurs, cela signifie que tout composant requis affichera un message d'erreur intercalé par défaut pendant l'événement `onBlur`. Ce message d'erreur sera indiqué dans le résumé des erreurs lors de l'envoi du formulaire.

## Codage et accessibilité des messages d'erreur

### Utiliser le résumé des erreurs avec les composants de Système de design GC

Le résumé des erreurs de Système de design GC utilise l'attribut `listen` pour recueillir les erreurs. Lors de l'exécution de l'opération `onSubmit`, le résumé des erreurs dressera la liste des erreurs provenant des composants de Système de design GC.  Les erreurs seront répertoriées dans le même ordre qu'elles apparaissent sur la page.

- Activez tous les contrôles nécessaires pour résoudre l'une ou l'autre des erreurs.
- Envisagez de remplacer tout <a href="{{ links.errorMessage }}">message d'erreur</a> générique par défaut par un texte qui définit le problème concret et la façon de le résoudre.

### Utiliser le résumé des erreurs avec vos propres composants

Si vous utilisez certains de vos propres composants de formulaire :

- Ajoutez un message d'erreur en faisant passer l'attribut `error-links` pour tout composant ou élément que vous utilisez contenant un message d'erreur. Vous verrez ensuite apparaître les messages d'erreur.
- Associez le contenu de l'élément du résumé des erreurs à chacun des messages d'erreur.
- Classez les erreurs du résumé des erreurs dans le même ordre qu'elles apparaissent sur le formulaire.

### Choisir de modifier le contenu de l'entente d'erreur

Rédigez des en-têtes d'erreur plus précis en utilisant l'attribut `heading`.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-error-summary."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-error-summary--events-properties"
  width="1200"
  height="1450"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
