// AUTO-GENERATED — DO NOT EDIT

export const gcdsNavGroup = {
  "tag": "gcds-nav-group",
  "attributes": [
    {
      "name": "close-trigger",
      "control": "text",
      "type": "string"
    },
    {
      "name": "menu-label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "open",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "open-trigger",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the list of navigation links."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the button blurs.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the button has been clicked.",
      "details": "void"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the button has been focus.",
      "details": "void"
    }
  ]
};
