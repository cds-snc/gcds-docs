// AUTO-GENERATED — DO NOT EDIT

export const gcdsPagination = {
  "tag": "gcds-pagination",
  "attributes": [
    {
      "name": "current-page",
      "control": "text",
      "type": "number"
    },
    {
      "name": "display",
      "control": "select",
      "type": "\"list\" | \"simple\"",
      "defaultValue": "list",
      "options": [
        "list",
        "simple"
      ]
    },
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "next-href",
      "control": "text",
      "type": "string"
    },
    {
      "name": "next-label",
      "control": "text",
      "type": "string"
    },
    {
      "name": "previous-href",
      "control": "text",
      "type": "string"
    },
    {
      "name": "previous-label",
      "control": "text",
      "type": "string"
    },
    {
      "name": "total-pages",
      "control": "text",
      "type": "number"
    },
    {
      "name": "url",
      "control": "select",
      "type": "object | string",
      "options": []
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
      "description": "Emitted when the link has been clicked. Contains the href in event detail when using simple display,\nor an object with page and href when using list display.",
      "details": "object | string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};
