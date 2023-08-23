---
title: card - Components
layout: "layouts/component-documentation.njk"
translationKey: "cardDesign"
tags: ['cardEN', 'design']
date: "git Last Modified"
---

## Card anatomy

<ol class="anatomy-list">
  <li>The <strong>container</strong> holds all of a card’s elements.</li>
  <li>The <strong>image</strong> is a 1:1 or a 16:9 visual that can be included in the card.</li>
  <li>The <strong>tag</strong> is a piece of supporting information that can be included to describe the content type.</li>
  <li>The <strong>card title</strong> is a short headline on the subject of the card content and links to further information.</li>
  <li>The <strong>description</strong> has supporting text for the card title and includes a few lines of summary on the card’s topic or a progressive list of details related to the same subject, like a list of event details.</li>
  <li>The <strong>card footer</strong> can contain either an action, when there’s a button, or metadata. Metadata can include a date, location, author, or other relevant information.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-card-anatomy.svg" alt="An image showing a card's anatomy"/>

## Design and accessibility for cards

### Write a scannable card title

- Use a title as a signpost to let a person know what they’ll find in the card.
- Make the title scannable by keeping it concise. 
- Choose a brief description or call-to-action statement for the title. 
- Write a meaningful title to help a person choose what to read.  

### Choose what information to add to the card

- Consider adding an image related to the title to make individual cards more identifiable.
- Include a tag to identify the subject and support the scannability of the card.  
- Opt to display relevant metadata about the card, as additional context to the primary information in the title and description. 

### Select which metadata to include

If you include metadata, choose the 1 piece of information most important to your readers. For example: 

- Estimated length or reading time.
- Source, reference, or author. 
- Rating or number of likes or saves. 
- Date or location. 

### Group multiple cards for visual consistency

When you have more than 1 card on a page:

- Organize multiple cards within a grid component.
- Use the same card type within a section on a page. Choose the link card type or the action card type for all cards rather than mixing types. 
- Try to include the same properties for each card within a section on a page. For example, if one card has an image then all cards get an image.
