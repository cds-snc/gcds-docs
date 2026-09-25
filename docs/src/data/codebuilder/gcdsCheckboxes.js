// AUTO-GENERATED — DO NOT EDIT

export const gcdsCheckboxes = {
  "tag": "gcds-checkboxes",
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
      "type": "string"
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
      "type": "CheckboxObject[] | string",
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
      "control": "select",
      "type": "string | string[]",
      "defaultValue": "[]",
      "options": []
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the checkbox loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when a checkbox has been changed. Contains the new value in the event detail.",
      "details": "string[]"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the checkbox has been clicked.",
      "details": "void"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the checkbox has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the checkbox has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when a checkbox has been inputted. Contains the new value in the event detail.",
      "details": "string[]"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the checkbox has a validation error.",
      "details": "object"
    }
  ]
};
