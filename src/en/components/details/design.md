---
title: Details
layout: 'layouts/component-documentation.njk'
translationKey: 'detailsDesign'
tags: ['detailsEN', 'design']
date: 'git Last Modified'
---

## Details anatomy

This is an anatomy of the open details component. By default, the content is collapsed.

<ol class="anatomy-list">
  <li>The <strong>details title</strong> summarizes the details content. Label text is in sentence case (only the initial letter is capitalized).</li>
  <li>The <strong>icon</strong> and the <strong>details title</strong> toggle the content display. The icon indicates if the component is currently open or closed. When it's open, revealing the details text, the icon points to details content.</li>
  <li>The <strong>content</strong> displays any text and images that the reader can choose to expand or collapse.</li>
</ol>

### Open details

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-details-anatomy-open.svg" alt="Learn more about this topic taxonomy with three labels: details title, icon and content.  Details title pointing at Learn more about this topic. Learn more about this topic is greyed blue font underlined. Icon pointed at a dark blue triangle arrow infront of the details title. When the arrow is selected it points down to show Additional information."/>

### Closed details

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-details-anatomy-closed.svg" alt="Learn more about this topic taxonomy with two labels: details title and icon. The details title pointing at Learn more about this topic. Learn more about this topic is dark font underlined. Icon pointed at a dark blue triangle arrow infront of the details title."/>

## Design and accessibility for details

### Work to reduce cognitive load – not add to it

- Avoid concealing information with a list of details titles. This interrupts the flow of reading or scrolling for those using assisted technology.
- Consider making the first details components open by default, to help the reader understand how they work and choose what to conceal.

### Select the type of content to include in a details component

First, remove any content that's not useful or important to the main task. Then you can:

- Hide content the reader can choose to access for a task that involves some analysis to make a choice.
- Segment content in a list so a person can select to read the part or parts most relevant to them.
- Include supporting content that is important but secondary to the main task.
- Use the details component to conceal content that could cause distress. The reader can choose to skip or return to the text at the moment that's right for them.
- For sensitive content, use the title to warn users before they access that content.

### Use the summary to make content findable

- Keep the title clear and brief. Short titles are easier to scan and can help a person using assistive technology to navigate a set of details components.
- Write a title that states what the content's about. Avoid non-descriptive titles such as "Read more". Instead, opt for a specific and descriptive summary, like "Maximum coverage amount for your physio benefit".
- Avoid similar or identical titles. Distinct titles help people know the difference and choose the details they want to read.
- Avoid increasing cognitive load with content that's difficult to discover or find.

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
