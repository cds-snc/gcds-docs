// AUTO-GENERATED — DO NOT EDIT

export const gcdsNavLink = {
  "tag": "gcds-nav-link",
  "attributes": [
    {
      "name": "current",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "href",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the navigation link content."
    }
  ],
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
