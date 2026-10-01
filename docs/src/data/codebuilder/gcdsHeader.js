// AUTO-GENERATED — DO NOT EDIT

export const gcdsHeader = {
  "tag": "gcds-header",
  "attributes": [
    {
      "name": "lang-href",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "signature-has-link",
      "control": "select",
      "type": "boolean",
      "defaultValue": "true",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "skip-to-href",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "account",
      "description": "Slot to add a custom account link in the bottom-right of the header."
    },
    {
      "name": "banner",
      "description": "Slot to add a banner across the top of the header."
    },
    {
      "name": "breadcrumb",
      "description": "Slot to add breadcrumbs at the bottom of the header."
    },
    {
      "name": "menu",
      "description": "Slot to add a menu below the divider line."
    },
    {
      "name": "search",
      "description": "Slot to add a search field to the right of the header."
    },
    {
      "name": "signature",
      "description": "Slot to replace Government of Canada signature."
    },
    {
      "name": "skip-to-nav",
      "description": "Slot to add a hidden skip to content navigation at the top of the header."
    },
    {
      "name": "toggle",
      "description": "Slot to add a custom language toggle in the top-right of the header."
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
