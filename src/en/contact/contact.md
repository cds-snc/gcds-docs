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

<form class="my-500 contact-us-form" name="contactEN" method="post" style="min-height: 32rem;" action="https://qao6j5zrqcys7evf2azwko4ju40xvfjy.lambda-url.ca-central-1.on.aws/submission">
  <input type="hidden" name="form-name" value="contactEN" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

  <gcds-input type="text" input-id="name" label="Full name" size="30" required></gcds-input>
  <gcds-input type="email" input-id="email" label="Email address" size="50" required></gcds-input>
  <gcds-fieldset fieldset-id="reasonForContact" legend="Reason for your communication" required>
    <gcds-radio radio-id="requestADemo" name="reasonForContact" label="Request a demo" value="Request a demo" hint="Book a demo of GC Design System for your team."></gcds-radio>
    <gcds-radio radio-id="reportAnIssue" name="reasonForContact" label="Report an issue" value="Report an issue" hint="Communicate a problem you've found."></gcds-radio>
    <gcds-radio radio-id="participateInUserResearch" name="reasonForContact" label="Participate in user research" value="Participate in user research" hint="We'll add your email to a list for user interviews and research."></gcds-radio>
    <gcds-radio radio-id="other" name="reasonForContact" label="Other" value="Other" hint="Provide a reason in the message field."></gcds-radio>
  </gcds-fieldset>
  <gcds-textarea label="Message" textarea-id="message" hint="Write your question or comment." required></gcds-textarea>
  <div hidden>
    <gcds-input type="text" input-id="bot-field" label="bot"></gcds-input>
  </div>
  <gcds-button button-role="primary" type="submit">
    Send message
  </gcds-button>
</form>
