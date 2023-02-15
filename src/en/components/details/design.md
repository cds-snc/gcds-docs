---
title: Details
layout: "layouts/component-documentation.njk"
translationKey: "detailsDesign"
tags: ['detailsEN', 'design']
date: "git Last Modified"
---

## Details anatomy

**Closed**

- **The icon** and **the details title** toggle the content display.
- **The icon** indicates whether the component is currently open or closed.  When it's closed, the icon points to the details title.
- **The details title** summarizes the details content.

<img class="b-sm b-gray my-400 p-400" src="/images/en/anatomy/gcds-details-anatomy-closed.svg" alt=""/>

**Open**

- **The icon** and **the details title** toggle the content display.
- **The icon** indicates if the component is currently open or closed. When it's open, revealing the details text, the icon points to details content.
- **The details title** summarizes the details content.
- **The details content** displays any text and images that the reader can choose to expand or collapse.

<img class="b-sm b-gray mt-400 p-400" src="/images/en/anatomy/gcds-details-anatomy-open.svg" alt=""/>

## Accessibility and design for details

### Reduce information overload

- Reduce scrolling, tabbing, and listening time by hiding extra content that's relevant but less important.
- Make important content more prominent by reducing secondary content to a summary the reader can choose to expand.
- Warn users in the summary of potentially sensitive content. Conceal content that could cause distress, so the reader can choose to skip or return to the text at the moment that's right for them.

### Help a person choose what to read with an informative summary

- Keep the title clear and brief. Short titles are easier to scan and can help a person using assistive technology to navigate a set of details components.
- Write a title that states what the content's about. Avoid non-descriptive titles such as "Read more". Instead, opt for a specific and descriptive summary, like "Maximum coverage amount for your physio benefit".
- Avoid similar or identical titles. Distinct titles help people know the difference and choose the details they want to read.

### Select the type of content to include in a details component

First, remove any content that's not useful or important to the main task. Then you can:

- Hide content the reader can choose to access for a task that involves some analysis to make a choice.
- Segment content in a list so a person can select to read the part or parts most relevant to them.
- Include supporting content that is important but secondary to the main task.

### Avoid nesting details

- Avoid placing one details component inside another, where no one would know to look for that content.
- Similarly, break up lengthy content over more than one details component to avoid hiding multiple paragraphs in the same details content section.

### Alternatives to using the details component

The details component can increase cognitive load. Some people may be confused by how they work or overwhelmed by a list of titles to select.

- Include in the main page flow, all content essential to accomplishing a task.
- Reduce overall text by removing redundant information or anything not essential to the task.
- Simplify the content with plain, conversational language.
- Use subheadings to break up content.
- Split the content into smaller sections and group common elements together.
