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

# About GC Design System

## Build modern, accessible, human government services people can use

GC Design System pairs code with designs and guidance based on federal standards and accessibility best practice. Reusable [components]({{ links.components }}) and [styles]({{ links.foundations }}) help you to build forms, websites, and applications.

This is a design system for the Canadian Digital Service built by a small team of public servants. We believe modern, efficient design and development can improve the quality of people's experiences with government services. We hope to raise the bar for consistent, inclusive user interfaces across digital products.

GC Design System works in the environment you want to work in. You'll get the same patterns and styles across products and browsers without having to code from scratch or redefine values. It works independently of GC Web and the Web Experience Toolkit (WET).

Have questions? Something you'd change or you'd like to see? Share your feedback to help us improve GC Design System for you.

<hr class="my-500" />

## Contact us

Ask us about GC Design System, make a suggestion, or request a component you'd like to see.

Fill out this form or submit an issue through GitHub for <gcds-link external href="{{ links.githubTokensIssues }}" target="_blank">tokens</gcds-link>, <gcds-link external href="{{ links.githubIssues }}" target="_blank">components</gcds-link>, or <gcds-link external href="{{ links.githubDocsIssues }}" target="_blank">documentation</gcds-link>.

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
