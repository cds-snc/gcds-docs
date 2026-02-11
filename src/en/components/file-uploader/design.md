---
title: File uploader
layout: 'layouts/component-documentation.njk'
translationKey: 'fileuploaderDesign'
tags: ['fileuploaderEN', 'design']
date: 'git Last Modified'
---

## File uploader anatomy

<ol class="anatomy-list">
  <li>The <strong>label</strong> provides the instruction for the component.</li>
  <li>The <strong>hint text</strong> presents the types of files and other requirements, like maximum file size.</li>
  <li>The <strong>button</strong> initiates the interface for file selection.</li>
  <li>The <strong>file list item</strong> is a container showing an uploaded file.</li>
  <li>The <strong>file name</strong> shows the name of the file that was added.</li>
  <li>The <strong>remove</strong> button allows an uploaded file to be removed prior to submission.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-file-uploader-anatomy.svg" alt="An image of the file uploader component’s anatomy." />

## Design and accessibility for file uploader

### Write clear labels and hints

- Use the input label to set clear expectations about the kind of file a person can or needs to upload.
- Use the hint to specify any upload limitations.

### Hide the label only when the purpose is clear

- Visually hide the label only when the purpose of the file uploader is clearly communicated by surrounding context, making the label visually redundant, such as in:
  - tables or other space-constrained layouts
  - settings and configurations
- Always provide a label to support assistive technologies.
- Omit hint text if you hide the label, as it can lack context and be distracting or confusing.
