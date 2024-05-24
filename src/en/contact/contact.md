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

GC Design System is being built by the Canadian Digital Service. In this testing phase, public servants can use the design system with support to resolve issues. Learn more <gcds-link href="{{ links.about }}">about us</gcds-link>.

Send us your feedback or questions on the following form, or get in touch on <gcds-link external href="{{ links.githubCompsIssues }}">GitHub</gcds-link>.

<hr class="my-500" />

## Contact GC Design System support

We offer custom demos for teams who want to know more about using GC Design System.

<form class="my-500 contact-us-form" name="contactEN" method="post" style="min-height: 32rem;" action="/api/submission">
  <input type="hidden" name="form-name" value="contactEN" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

<gcds-input type="text" name="name" input-id="name" label="Full name" size="30" autocomplete="name" required></gcds-input>
<gcds-input type="email" name="email" input-id="email" label="Email address" size="50" autocomplete="email" required></gcds-input>
<gcds-textarea name="message" label="Give feedback or ask a question" textarea-id="message"></gcds-textarea>

  <gcds-fieldset fieldset-id="learnMore" legend="Learn more about GC Design System" hint="Choose as many options as you'd like.">
    <gcds-checkbox checkbox-id="learnMoreMailingList" label="Sign me up for the mailing list." value="learn-more-mailing-list" name="learn-more-mailing-list"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreDemo" label="Contact me for a demo." value="learn-more-demo" name="learn-more-demo"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreResearch" label="Contact me for usability research." value="learn-more-mailing-list" name="learn-more-research"></gcds-checkbox>
  </gcds-fieldset>

  <gcds-fieldset fieldset-id="familiarityGCDS" legend="Familiarity with the product" hint="Select 1 option." required>
    <gcds-radio-group name="familiarityGCDS" options='{{ contactus[locale].options | stringify | encode-html}}'>
    </gcds-radio-group>
  </gcds-fieldset>

  <div hidden>
    <gcds-input type="text" name="bot-field" input-id="bot-field" label="bot"></gcds-input>
  </div>

  <gcds-button button-role="primary" type="submit">
    Submit
  </gcds-button>
</form>
