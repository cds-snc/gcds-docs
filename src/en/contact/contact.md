---
title: Contact us
layout: 'layouts/base.njk'
eleventyNavigation:
  key: contactusEN
  title: Contact us
  locale: en
  order: 3
translationKey: 'contactus'
contactForm: en
date: 'git Last Modified'
---

# Contact us

GC Design System is being built by the Canadian Digital Service. In this testing phase, public servants can try out and use the design system.

Learn more <gcds-link href="{{ links.about }}">about us</gcds-link>.

## Collaborate with us

We’re committed to building with the people who use our products. We’re iterating based on your needs and those of the people you serve.

<hr class="my-500" />

## Share your feedback to help improve GC Design System

We’d like to talk to you. Get in touch to request a demo, ask a question, or meet with us.

<form class="my-500 contact-us-form" name="contactEN" method="post" style="min-height: 32rem;" action="/api/submission">
  <input type="hidden" name="form-name" value="contactEN" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

  <gcds-input type="text" name="name" input-id="name" label="Full name" size="30" autocomplete="name" required></gcds-input>
  <gcds-input type="email" name="email" input-id="email" label="Email address" size="50" autocomplete="email" required></gcds-input>
  <gcds-fieldset fieldset-id="reasonForContact" legend="Reason for your communication" required>
    <gcds-radio-group name="reasonForContact" options='[{{ contactus[locale].options | stringify }}]'>
    </gcds-radio-group>
  </gcds-fieldset>
  <gcds-textarea name="message" label="Message" textarea-id="message" hint="Write your question or comment." required></gcds-textarea>
  <div hidden>
    <gcds-input type="text" name="bot-field" input-id="bot-field" label="bot"></gcds-input>
  </div>
  <gcds-button button-role="primary" type="submit">
    Send message
  </gcds-button>
</form>
