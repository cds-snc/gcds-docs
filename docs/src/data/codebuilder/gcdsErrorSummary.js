// AUTO-GENERATED — DO NOT EDIT

export const gcdsErrorSummary = {
  "tag": "gcds-error-summary",
  "attributes": [
    {
      "name": "error-links",
      "control": "text",
      "type": "object | string",
    },
    {
      "name": "heading",
      "control": "text",
      "type": "string"
    },
    {
      "name": "listen",
      "control": "select",
      "type": "boolean",
      "defaultValue": "true",
      "options": [
        "true",
        "false"
      ]
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
      "description": "Emitted when the link has been clicked.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};
