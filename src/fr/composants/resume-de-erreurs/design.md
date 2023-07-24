---
title: Résumé des erreurs
layout: "layouts/component-documentation.njk"
translationKey: "errorsummaryDesign"
tags: ['errorsummaryFR', 'design']
---

## Structure du résumé des erreurs

<ol class="anatomy-list">
  <li>L'<strong>en-tête</strong> indique qu'il y a un problème. Les deux sont définis par défaut et peuvent être modifiés pour être plus spécifiques.</li>
  <li>Le <strong>résumé des erreurs</strong> consiste en un ensemble de messages d'erreur sur la page, énumérés par ordre d'apparition sur le formulaire.</li>
  <li>L'<strong>élément du résumé des erreurs</strong> est lié au contexte d'erreur et comporte le même texte que le message d'erreur (un énoncé d'appel à l'action pour le corriger).</li>
</ol>

<img class="b-sm b-default p-400" src="/images/fr/components/anatomy/gcds-error-summary-anatomy.svg" alt="L'anatomie d'un bouton identifiant l'étiquette, le conteneur et l'icone qui forme le composant." />

## Conception et accessibilité des résumés des erreurs

### Créer des résumés des erreurs utiles

N'oubliez pas que les erreurs interrompent le déroulement d'une action. Cette situation peut s'avérer dérangeante et désagréable pour vos utilisateur·rice·s.

- Clarifiez la démarche à suivre pour corriger l'erreur. Les erreurs suscitent une réaction émotionnelle d'autant plus forte que le problème est difficile ou impossible à résoudre.
- Rédigez un <a href="{{ links.errorMessage }}">message d'erreur</a> clair et expliquez comment y remédier pour permettre à la personne de se remettre à la tâche.
- Assurez-vous de rédiger des messages d'erreur courts et précis afin de rendre la liste des erreurs lisible.
- Limitez le nombre de composants de formulaire par page nécessitant une réponse.

### Utiliser le résumé des erreurs avec vos propres composants

- Ajoutez des messages d'erreur pour vos propres composants (composants ne provenant pas de Système de design GC) dans vos formulaires.
- Associez le contenu de l'élément du résumé des erreurs à chacun de vos messages d'erreur.
- Classez les erreurs du résumé des erreurs dans le même ordre qu'elles apparaissent sur le formulaire.
