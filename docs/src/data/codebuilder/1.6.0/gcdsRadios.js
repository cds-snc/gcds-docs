// AUTO-GENERATED — DO NOT EDIT

export const gcdsRadios = {
  "tag": "gcds-radios",
  "attributes": [
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
      "name": "hide-legend",
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
      "name": "legend",
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
      "name": "options",
      "control": "text",
      "type": "RadioObject[] | string",
      "required": true,
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
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
      "description": "Emitted when the radios has lost focus",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when a radios option is checked (but not when unchecked). Contains new value in event detail",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when radios has a validation error",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when radios has received focus",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when radios has been changed as a direct result of a user action (a radio option has been selected). Contains new value in event detail",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when radios has passed validation",
      "details": "void"
    }
  ]
};
