// AUTO-GENERATED — DO NOT EDIT

export const gcdsDateInput = {
  "tag": "gcds-date-input",
  "attributes": [
    {
      "name": "autocomplete",
      "control": "select",
      "type": "\"bday\" | \"cc-exp\" | \"off\" | \"on\"",
      "options": [
        "bday",
        "cc-exp",
        "off",
        "on"
      ],
      "defaultValue": "off"
    },
    {
      "name": "autofocus",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "disabled",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "error-message",
      "control": "text",
      "type": "string"
    },
    {
      "name": "form",
      "control": "text",
      "type": "string"
    },
    {
      "name": "format",
      "control": "select",
      "type": "\"compact\" | \"full\" | \"iso\"",
      "required": true,
      "options": [
        "compact",
        "full",
        "iso"
      ]
    },
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "legend",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "max",
      "control": "text",
      "type": "string"
    },
    {
      "name": "min",
      "control": "text",
      "type": "string"
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "validate-on",
      "control": "select",
      "type": "\"blur\" | \"other\" | \"submit\"",
      "defaultValue": "blur",
      "options": [
        "blur",
        "other",
        "submit"
      ]
    },
    {
      "name": "value",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when a date-input loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when a date-input has changed. Contains the new value in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when a date-input has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when a date-input has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the date-input has received input. Contains the new value in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when a date-input has validated.",
      "details": "object"
    }
  ]
};
