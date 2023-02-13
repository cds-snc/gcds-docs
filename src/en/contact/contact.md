---
title: Contact us
layout: "layouts/base.njk"
eleventyNavigation:
  key: contactusEN
  title: Contact us
  locale: en
  order: 3
translationKey: "contactus"
contactForm: en
date: "git Last Modified"
---

# About GC Design System

## Build modern, accessible, human government services people can use

GC Design System pairs code with designs and guidance based on federal standards and accessibility best practice. <a href="#" target="_blank">Reusable components <gcds-icon name="external-link" label="Opens in a new tab." margin-left="200" /></a> and <a href="#" target="_blank">styles <gcds-icon name="external-link" label="Opens in a new tab." margin-left="200" /></a> help you to build forms, websites, and applications.

This is a design system for the Canadian Digital Service built by a small team of public servants. We believe modern, efficient design and development can improve the quality of people’s experiences with government services. We hope to raise the bar for consistent, inclusive user interfaces across digital products.

GC Design System works in the environment you want to work in. You’ll get the same patterns and styles across products and browsers without having to code from scratch or redefine values. It works independently of GC Web and the Web Experience Toolkit (WET).

Have questions? Something you’d change or you’d like to see? Share your feedback with us to help improve GC Design System.

## Contact us

Ask the GC Design System team about a component in the design system or request a component you'd like to see.

Fill out the following form or submit an issue through GitHub for <a href="https://github.com/cds-snc/gcds-tokens" target="_blank">tokens <gcds-icon name="external-link" label="Opens in a new tab." margin-left="200" /></a>, <a href="https://github.com/cds-snc/gcds-components" target="_blank">components <gcds-icon name="external-link" label="Opens in a new tab." margin-left="200" /></a>, or <a href="https://github.com/cds-snc/gcds-docs" target="_blank">documentation <gcds-icon name="external-link" label="Opens in a new tab." margin-left="200" /></a>.

<form class="my-500 contact-us-form" name="contactEN" method="post">
  <input type="hidden" name="form-name" value="contactEN" />
  <gcds-input type="text" input-id="name" label="Full name" size="30" required></gcds-input>
  <gcds-input type="email" input-id="email" label="Email address" size="30" required></gcds-input>
  <gcds-textarea label="Message" textarea-id="message" required></gcds-textarea>
  <div hidden>
    <gcds-input type="text" input-id="bot-field" label="bot"></gcds-input>
  </div>
  <gcds-button button-role="primary" button-type="submit">
    Send message
  </gcds-button>
</form>
