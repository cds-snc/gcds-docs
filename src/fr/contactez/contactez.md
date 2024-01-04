---
title: Contactez-nous
layout: 'layouts/base.njk'
eleventyNavigation:
  key: contactusFR
  title: Contactez-nous
  locale: fr
  order: 3
translationKey: 'contactus'
contactForm: fr
date: 'git Last Modified'
---

# Contactez-nous

Système de design GC est en cours d’élaboration par le Service numérique canadien. En cette phase d’essai, les fonctionnaires y ont accès et peuvent l’utiliser. 

Consultez notre page <gcds-link href="{{ links.about }}">À propos</gcds-link> pour en savoir plus.

## Collaborez avec nous

Nous nous engageons à construire avec les personnes qui utilisent nos produits. Nous améliorons notre produit en fonction de vos besoins et de ceux des personnes que vous servez.

<hr class="my-500" />

## Faites-nous part de vos commentaires pour nous aider à améliorer Système de design GC

Nous sommes à l’écoute. Contactez-nous pour demander une démonstration, poser une question ou nous rencontrer.

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
