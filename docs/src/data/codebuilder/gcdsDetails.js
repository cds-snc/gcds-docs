// AUTO-GENERATED — DO NOT EDIT

export const gcdsDetails = {
  "tag": "gcds-details",
  "attributes": [
    {
      "name": "details-title",
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
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the main content of the details panel."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the details loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the details has been clicked.",
      "details": "void"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the details has focus.",
      "details": "void"
    }
  ]
};
