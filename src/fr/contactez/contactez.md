---
title: Contactez-nous
layout: "layouts/base.njk"
eleventyNavigation:
  key: contactusFR
  title: Nous joindre
  locale: fr
  order: 3
translationKey: "contactus"
contactForm: fr
date: "git Last Modified"
---

# À propos de Système de design GC

<h2 class="container-md mt-500 mb-400">Créez de services gouvernementaux modernes, accessibles et humains destinés au public.</h2>

Système de design GC associe code, modèles et conseils basés sur les normes fédérales et sur les meilleures pratiques en matière d’accessibilité. [Composants](/fr/composants/) et [styles](/fr/bases/) réutilisables vous permettent de créer des formulaires, des sites et des applications.

Ce système de design a été conçu pour le Service numérique canadien par une petite équipe de fonctionnaires. Nous croyons qu’une approche de design et de développement moderne et efficace peut améliorer la qualité de l’expérience utilisateur pour les gens qui utilisent les services gouvernementaux. Nous cherchons à monter la barre en matière d’uniformité et d’accessibilité des interfaces utilisateur pour tout produit numérique. Système de design GC s’adapte à votre environnement de travail. Vous obtiendrez les mêmes configurations et styles, quels que soient le produit et le navigateur, et ce, sans avoir à écrire de code ni à redéfinir de valeurs. Vous pouvez l’utiliser indépendamment de Web GC et de la Boîte à outils de l’expérience Web (BOEW).

Avez-vous des questions? Vous avez un changement à suggérer ou une fonctionnalité que vous aimeriez voir ? Faites-nous part de vos commentaires pour nous aider à améliorer Système de design GC.

<hr class="my-500" />

## Contactez-nous

Renseignez-vous sur Système de design GC, faites une suggestion ou demandez un composant que vous aimeriez voir.

Pour toute demande concernant <a href="https://github.com/cds-snc/gcds-tokens" target="_blank">les unités de style <span class="sr-only">S'ouvre dans un nouvel onglet.</span><span class="fa fa-solid fa-external-link ms-100" role="img"></span></a>, <a href="https://github.com/cds-snc/gcds-components" target="_blank">les composants <span class="sr-only">S'ouvre dans un nouvel onglet.</span><span class="fa fa-solid fa-external-link ms-100" role="img"></span></a>, et <a href="https://github.com/cds-snc/gcds-docs" target="_blank">la documentation <span class="sr-only">S'ouvre dans un nouvel onglet.</span><span class="fa fa-solid fa-external-link ms-100" role="img"></span></a>, remplissez ce formulaire ou envoyez une demande à l’aide de fonction « Issues » dans GitHub.

<form class="my-500 contact-us-form" name="contactFR" method="post">
  <input type="hidden" name="form-name" value="contactFR" />
  <gcds-input type="text" input-id="name" label="Nom complet" size="30" required></gcds-input>
  <gcds-input type="email" input-id="email" label="Adresse courriel" size="30" required></gcds-input>
  <gcds-textarea label="Message" textarea-id="message" hint="Écrivez votre question ou commentaire." required></gcds-textarea>
  <div hidden>
    <gcds-input type="text" input-id="bot-field" label="bot"></gcds-input>
  </div>
  <gcds-button button-role="primary" button-type="submit">
    Envoyer le message
  </gcds-button>
</form>
