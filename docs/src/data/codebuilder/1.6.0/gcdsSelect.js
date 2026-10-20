// AUTO-GENERATED — DO NOT EDIT

export const gcdsSelect = {
  "tag": "gcds-select",
  "attributes": [
    {
      "name": "autocomplete",
      "control": "text",
      "type": "string"
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
      "name": "default-value",
      "control": "text",
      "type": "string"
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
      "name": "hide-label",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
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
      "name": "select-id",
      "control": "text",
      "type": "string",
      "required": true
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
  "slots": [
    {
      "name": "default",
      "description": "Slot for options and option groups."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the select loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the select value has changed.",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the select has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the select has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the select has received input.",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the select has a validation error.",
      "details": "object"
    }
  ]
};
