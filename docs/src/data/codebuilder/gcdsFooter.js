// AUTO-GENERATED — DO NOT EDIT

export const gcdsFooter = {
  "tag": "gcds-footer",
  "attributes": [
    {
      "name": "contextual-heading",
      "control": "text",
      "type": "string"
    },
    {
      "name": "contextual-links",
      "control": "select",
      "type": "object | string",
      "options": []
    },
    {
      "name": "display",
      "control": "select",
      "type": "\"compact\" | \"full\"",
      "defaultValue": "compact",
      "options": [
        "compact",
        "full"
      ]
    },
    {
      "name": "sub-links",
      "control": "text",
      "type": "object | string",
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the link loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the link has been clicked. Contains the href in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};
