---
title: Équipes utilisant Système de design GC
translationKey: testimonials
layout: 'layouts/base.njk'
eleventyNavigation:
  key: testimonialsFR
  title: Équipes utilisant Système de design GC
  locale: fr
  order: 4
  hideMain: true
---

# Équipes utilisant Système de design GC

Découvrez comment certaines équipes du gouvernement utilisent Système de design GC pour créer plus rapidement des services accessibles et cohérents.

## Adoption croissante dans le gouvernement

<gcds-grid class="mb-600" tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
{% for stat in testimonials[locale].stats %}
  <li class="testimonial-box">
    <p class="font-size-h1 mb-0"><strong>{{ stat.value }}</strong></p>
    <p class="mb-0">{{ stat.label }}</p>
  </li>
{% endfor %}
</gcds-grid>

Utilisé notamment par des ministères qui offrent des services publics à grand volume :

- Emploi et Développement social Canada
- Santé Canada
- La Gendarmerie royale du Canada
- Transports Canada
- Immigration, Réfugiés et Citoyenneté Canada
- Pêches et Océans Canada

<hr />

## Des services en ligne construits avec Système de design GC

Système de design GC est soutenu par une communauté croissante de fonctionnaires. Les équipes adoptent Système de design GC de différentes façons, selon leur environnement technique.

Voici quelques exemples concrets de services construits avec Système de design GC.

<gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
{% for service in testimonials[locale].services %}<gcds-card card-title-tag="h3" card-title="{{ service.title }}" href="{{ service.href }}" badge="{{ service.badge }}" img-src="{{ service.img }}" img-alt="{{ service.alt }}" description="{{ service.description }}" target="_blank" role="listitem"></gcds-card>{% endfor %}
</gcds-grid>

### Fonctionne dans différents environnements techniques

Certaines équipes utilisent des paquets adaptés à des environnements comme React, Angular ou Vue. D’autres utilisent le paquet HTML pour une plus grande variété de contextes. Les équipes utilisant le système de gestion de contenu Drupal peuvent utiliser le <gcds-link external href="{{ links.gcdsDrupalTheme }}">thème Système de design GC</gcds-link>.

<hr />

## Ce qu’en disent les équipes

<ul>
{% for quote in testimonials[locale].quotes %}
  <li class="mb-500 testimonial-box">
    <blockquote>
      <p class="mb-0"><strong>« {{ quote.quote }} »</strong></p>
    </blockquote>
    <p class="mb-0"><cite>— {{ quote.author }}</cite></p>
  </li>
{% endfor %}
</ul>

<hr />

## Envie d’adopter Système de design GC?

Assistez à une démo et posez vos questions directement à notre équipe, ou consultez notre feuille de route pour vous aider à décider quand adopter Système de design GC.

<gcds-button type="link" button-role="primary" href="{{ links.registerDemo }}" class="mb-300">
  Participer à une démo
</gcds-button>
<gcds-button type="link" button-role="secondary" href="{{ links.roadmap }}">
  Consulter la feuille de route
</gcds-button>
