// AUTO-GENERATED — DO NOT EDIT

export const gcdsCard = {
  "tag": "gcds-card",
  "attributes": [
    {
      "name": "badge",
      "control": "text",
      "type": "string"
    },
    {
      "name": "card-title",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "card-title-tag",
      "control": "select",
      "type": "\"h3\" | \"h4\" | \"h5\" | \"h6\"",
      "options": [
        "h3",
        "h4",
        "h5",
        "h6"
      ]
    },
    {
      "name": "description",
      "control": "text",
      "type": "string"
    },
    {
      "name": "href",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "img-alt",
      "control": "text",
      "type": "string"
    },
    {
      "name": "img-src",
      "control": "text",
      "type": "string"
    },
    {
      "name": "rel",
      "control": "text",
      "type": "string"
    },
    {
      "name": "target",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the card description. Accepts rich text and overwrites the\ndescription prop if used. The description prop is mirrored into this slot for the same\nDOM-text reason when nothing is slotted."
    },
    {
      "name": "title",
      "description": "Slot for the card title. Accepts rich text, so markup such as\n`<abbr>`, `<em>` or an icon can be used where the card-title prop cannot. Falls back to\nthe card-title prop, which is mirrored into the light DOM so the title text stays\nreadable by DOM-text extraction tools."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the card loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the card has been clicked. Contains the href in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the card has focus.",
      "details": "void"
    }
  ]
};
