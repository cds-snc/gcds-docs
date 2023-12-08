---
title: Contactez-nous
layout: 'layouts/base.njk'
eleventyNavigation:
  key: contactusFR
  title: Nous joindre
  locale: fr
  order: 3
translationKey: 'contactus'
contactForm: fr
date: 'git Last Modified'
---

# À propos de Système de design GC

## Créez de services gouvernementaux modernes, accessibles et humains destinés au public.

Système de design GC associe code, modèles et conseils basés sur les normes fédérales et sur les meilleures pratiques en matière d'accessibilité. [Composants]({{ links.components }}) et [styles]({{ links.foundations }}) réutilisables vous permettent de créer des formulaires, des sites et des applications.

Ce système de design a été conçu pour le Service numérique canadien par une petite équipe de fonctionnaires. Nous croyons qu'une approche de design et de développement moderne et efficace peut améliorer la qualité de l'expérience utilisateur pour les gens qui utilisent les services gouvernementaux. Nous cherchons à monter la barre en matière d'uniformité et d'accessibilité des interfaces utilisateur pour tout produit numérique.

Système de design GC s'adapte à votre environnement de travail. Vous obtiendrez les mêmes configurations et styles, quels que soient le produit et le navigateur, et ce, sans avoir à écrire de code ni à redéfinir de valeurs. Vous pouvez l'utiliser indépendamment de Web GC et de la Boîte à outils de l'expérience Web (BOEW).

Avez-vous des questions? Vous avez un changement à suggérer ou une fonctionnalité que vous aimeriez voir ? Faites-nous part de vos commentaires pour nous aider à améliorer Système de design GC pour vous.

<hr class="my-500" />

## Contactez-nous

Renseignez-vous sur Système de design GC, faites une suggestion ou demandez un composant que vous aimeriez voir.

Pour toute demande concernant <gcds-link external href="{{ links.githubTokensIssues }}" target="_blank">les unités de style</gcds-link>, <gcds-link external href="{{ links.githubIssues }}" target="_blank">les composants</gcds-link>, et <gcds-link external href="{{ links.githubDocsIssues }}" target="_blank">la documentation</gcds-link>, remplissez ce formulaire ou envoyez une demande à l'aide de fonction « Issues » dans GitHub.

<form class="my-500 contact-us-form" name="contactFR" method="post" style="min-height: 32rem;" action="/api/submission">
  <input type="hidden" name="form-name" value="contactFR" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

  <gcds-input type="text" input-id="name" label="Nom complet" size="30" required></gcds-input>
  <gcds-input type="email" input-id="email" label="Adresse courriel" size="50" required></gcds-input>
  <gcds-fieldset fieldset-id="reasonForContact" legend="Raison de votre communication" required>
    <gcds-radio radio-id="requestADemo" name="reasonForContact" label="Demander une démonstration" value="Request a demo | Demander une démonstration" hint="Réservez une démonstration de Système de design GC pour votre équipe."></gcds-radio>
    <gcds-radio radio-id="reportAnIssue" name="reasonForContact" label="Signaler un problème" value="Report an issue | Signaler un problème" hint="Communiquez un problème que vous avez trouvé."></gcds-radio>
    <gcds-radio radio-id="participateInUserResearch" name="reasonForContact" label="Participer à la recherche sur les utilisateur·rice·s" value="Participate in user research | Participer à la recherche sur les utilisateur·rice·s" hint="Nous ajouterons votre adresse courriel à la liste des candidat·e·s pour la recherche sur les utilisateur·rice·s. "></gcds-radio>
    <gcds-radio radio-id="other" name="reasonForContact" label="Autre" value="Other | Autre" hint="Indiquez une raison dans le champ du message."></gcds-radio>
  </gcds-fieldset>
  <gcds-textarea label="Message" textarea-id="message" hint="Écrivez votre question ou commentaire." required></gcds-textarea>
  <div hidden>
    <gcds-input type="text" input-id="bot-field" label="bot"></gcds-input>
  </div>
  <gcds-button button-role="primary" type="submit">
    Envoyer le message
  </gcds-button>
</form>
