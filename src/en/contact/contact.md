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

We're committed to building with the people who use our products. We're iterating based on your needs and those of the people you serve.

<hr class="my-500" />

## Share your feedback to help improve GC Design System

We'd like to talk to you. Get in touch to request a demo, ask a question, or meet with us.

<form class="my-500 contact-us-form" name="contactEN" method="post" style="min-height: 32rem;" action="/api/submission">
  <input type="hidden" name="form-name" value="contactEN" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

<gcds-input type="text" name="name" input-id="name" label="Full name" size="30" autocomplete="name" required></gcds-input>
<gcds-input type="email" name="email" input-id="email" label="Email address" size="50" autocomplete="email" required></gcds-input>
<gcds-textarea name="message" label="Give feedback or ask a question" textarea-id="message"></gcds-textarea>

  <gcds-fieldset fieldset-id="learnMore" legend="Learn more about GC Design System" hint="Choose as many options as you'd like.">
    <gcds-checkbox checkbox-id="learnMoreMailingList" label="Sign me up for the mailing list." value="Sign me up for the mailing list." name="learnMore"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreDemo" label="Contact me for a demo." value="Contact me for a demo." name="learnMore"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreResearch" label="Contact me for usability research." value="Contact me for usability research." name="learnMore"></gcds-checkbox>
  </gcds-fieldset>

  <gcds-fieldset fieldset-id="familiarityGCDS" legend="Familiarity with the product" hint="Select 1 option." required>
    <gcds-radio-group name="familiarityGCDS" options='{{ contactus[locale].options | stringify }}'>
    </gcds-radio-group>
  </gcds-fieldset>

  <div hidden>
    <gcds-input type="text" name="bot-field" input-id="bot-field" label="bot"></gcds-input>
  </div>

  <gcds-button button-role="primary" type="submit">
    Submit
  </gcds-button>
</form>
