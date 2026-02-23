---
title: Accueil
layout: 'layouts/base.njk'
permalink: /fr/
translationKey: 'index'
date: 'git Last Modified'
---

# Système de design GC

Un système de design officiel et prêt pour la production destiné au gouvernement du Canada. Créez des services gouvernementaux modernes, accessibles et humains.

<gcds-button type="link" href="{{ links.startToUse }}" onclick="if(typeof gtag !== 'undefined') gtag('event', 'click', {'event_category': 'home_page', 'event_label': 'start_to_use'})">
  Démarrer
</gcds-button>

<gcds-button type="link" href="{{ links.registerDemo }}" button-role="secondary">
  Participez à une démo
</gcds-button>

<section class="bt-sm mt-500">

## Choisissez Système de design GC

Système de design GC aide les fonctionnaires à concevoir des sites Web et des produits du gouvernement du Canada. Créez plus rapidement, sans compromettre ni l’identité de marque, ni l’accessibilité, ni le bilinguisme. Trouvez du code prêt pour la production, des ressources de design et de la documentation en un seul et même endroit. 

### Pour en savoir plus

Renseignez-vous <gcds-link href="{{ links.about }}">sur le SNC</gcds-link>, nos <gcds-link href="{{ links.accessibility }}">tests réguliers en matière d’accessibilité</gcds-link> et sur les manières dont vous pouvez améliorer l’accessibilité de vos produits et sites Web.

### S’impliquer

Nous adaptons continuellement notre produit pour mieux répondre à vos besoins et vous offrir plus d’options.

<gcds-button type="link" href="{{ links.getInvolved }}" button-role="secondary">
  S’impliquer 
</gcds-button>

</section>

<section class="bt-sm mt-500">

## Des outils pour les problèmes courants

Appliquez ou combinez ces outils pour aborder les scénarios de services communs. Créez et construisez rapidement des expériences fiables et unifiées.

<gcds-grid columns="1fr" columns-tablet="1.5fr 2.5fr" columns-desktop="1fr 3fr" gap="150" gap-tablet="300">

<img class="align-self-center d-none md:d-block" src="/images/common/home/components.jpg" alt="Trois formes distinctes, un rectangle rose à côté d'un carré vert et d'un carré jaune, forment le contour d'un plus grand carré." />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.components }}">Composants</gcds-link>
  </gcds-heading>

  Répondez aux besoins communs en matière d’interaction des services à l’aide du code, de la conception et des conseils pour la mise en œuvre de composants d’interface utilisateur.
</div>

<img class="align-self-center d-none md:d-block" src="/images/common/home/templates.jpg" alt="Un rectangle vertical rempli d'un dégradé du rose au bleu." />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.pageTemplates }}">Modèles de page</gcds-link>
  </gcds-heading>

  Commencez votre projet à l’aide de pages préconstruites offrant une expérience uniforme et reconnaissable pour Canada.ca.
</div>

<img class="align-self-center d-none md:d-block" src="/images/fr/accueil/shortcuts.jpg" alt="Un badge en haut à gauche avec le mot nouveau. Trois points horizontaux légèrement superposés dans des tons de bleu successivement foncés." />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.shortcuts }}">Raccourcis CSS <gcds-sr-only>(Nouveau)</gcds-sr-only></gcds-link>
  </gcds-heading>

  Appliquez des styles et des mises en page prédéfinis en ajoutant nos classes utilitaires CSS personnalisées à votre code HTML.
</div>

<img class="align-self-center d-none md:d-block" src="/images/common/home/styles.jpg" alt="Un groupe de quatre points violets, bleus, verts et jaunes." />

<div>
  <gcds-heading tag="h3">
    <gcds-link href="{{ links.styles }}">Styles</gcds-link>
  </gcds-heading>

  Explorez les décisions de marque et de design codées qui façonnent une expérience visuelle cohérente.
</div>

</gcds-grid>

</section>

<section class="bt-sm mt-500">

## Nouveautés

Parcourez les dernières fonctionnalités et les derniers ajouts au code dans le <gcds-link href="{{ links.releaseNotes}}" external>journal des modifications dans GitHub</gcds-link>.

**Dernières versions** :

- Nouveau : Paquets stables v1.0.0 pour les <gcds-link href="{{ links.github }}" external>composants</gcds-link> et les <gcds-link href="{{ links.githubTokens }}" external>unités de style</gcds-link>
- Mise à jour : Échelle de couleurs élargie avec de nouvelles <gcds-link href="{{ links.colour }}">unités de style de base</gcds-link>
- Nouveau : <gcds-link href="{{ links.figmaTokens }}" external>Bibliothèque d’unités de style</gcds-link> dans Figma

</section>

<section class="bt-sm mt-500">

## À venir

Explorez notre <gcds-link href="{{ links.roadmap }}">feuille de route</gcds-link> pour suivre nos progrès et voir sur quoi nous travaillerons prochainement. 

</section>

<section class="bt-sm mt-500">

## Contactez-nous

Si vous avez des questions, si vous voulez vous impliquer ou si <gcds-link href="{{ links.getInvolved }}">vous voulez</gcds-link> vous inscrire à notre liste de diffusion, n’hésitez pas à communiquer avec nous.

<gcds-button type="link" href="{{ links.contact }}" button-role="secondary">
  Contactez-nous
</gcds-button>

</section>
