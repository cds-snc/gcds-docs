---
title: Contact us
layout: 'layouts/base.njk'
eleventyNavigation:
  key: contactusEN
  title: Contact us
  locale: en
  order: 3
  hideMain: true
translationKey: 'contactus'
contactForm: en
date: 'git Last Modified'
---

# Contact GC Design System


<gcds-notice type="info" notice-title-tag="h2" notice-title="Support form on GitHub">
  <gcds-text>With an <gcds-link external href="{{ links.githubGetStarted }}">account</gcds-link>, use our <gcds-link external href="{{ links.githubCompsIssues }}">GitHub support form</gcds-link> to report bugs and get technical help. You’ll have access to the team’s direct responses, progress made on your issue, and issues raised by others. </gcds-text>
</gcds-notice>

## Attend a demo or event

Want to learn more about GC Design System before trying it out?

Demos are an intro to prototyping and developing web experiences with the  design system, followed by a Q&A.

We’ll soon be offering other events to our growing community.

<gcds-button type="link" button-role="secondary" href="{{ links.registerDemo }}">
  Find an upcoming event
</gcds-button>

<hr class="my-600" />

## Get in contact with the design system team

This form is for people building government websites and digital products. You can give feedback, ask a question, or receive communications from the GC Design System team. If you need help with a government service, go to <gcds-link href="https://www.canada.ca/en/contact.html" external>Government of Canada contacts</gcds-link>.

<form class="my-600 contact-us-form" name="contactEN" method="post" style="min-height: 32rem;" action="/api/submission" novalidate>
  <gcds-error-summary></gcds-error-summary>

  <input type="hidden" name="form-name" value="contactEN" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

  <gcds-input type="text" name="name" input-id="name" label="Full name" autocomplete="name" required></gcds-input>
  <gcds-input type="email" name="email" input-id="email" label="Email address" autocomplete="email" required></gcds-input>
  <gcds-textarea name="message" label="Provide your feedback or ask a question if you need help" hint="Never include personal (Protected) information." textarea-id="message"></gcds-textarea>

  <gcds-fieldset legend="Receive communication from GC Design System" legend-size="h3" hint="If you'd like us to contact you, choose one or both options.">
    <gcds-checkboxes name="learn-more-mailing-list" options="{{ contactus[locale].mailingcheck | stringify | encode-html }}"></gcds-checkboxes>
    <gcds-checkboxes name="learn-more-research" options="{{ contactus[locale].researchcheck | stringify | encode-html }}"></gcds-checkboxes>
  </gcds-fieldset>

  <gcds-radios legend="Select your experience with GC Design System to date" hint="Choose 1 option." name="familiarityGCDS" options='{{ contactus[locale].radiooptions | stringify | encode-html}}'>
  </gcds-radios>

  <div hidden>
    <gcds-input type="text" name="bot-field" input-id="bot-field" label="bot"></gcds-input>
  </div>

  <gcds-button button-role="primary" type="submit">
    Submit
  </gcds-button>
</form>

<script defer src="/scripts/sanitize-pii.min.js"></script>
<script defer src="/scripts/sanitize-contact-form.js"></script>
