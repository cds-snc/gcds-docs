// AUTO-GENERATED — DO NOT EDIT

export const gcdsTextarea = {
  "tag": "gcds-textarea",
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
      "name": "cols",
      "control": "text",
      "type": "number"
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
      "name": "hide-limit",
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
      "name": "maxlength",
      "control": "text",
      "type": "number"
    },
    {
      "name": "minlength",
      "control": "text",
      "type": "number"
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
      "name": "rows",
      "control": "text",
      "type": "number",
      "defaultValue": "5"
    },
    {
      "name": "textarea-id",
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
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the textarea loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the textarea has changed.",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the textarea has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the textarea has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the textarea has received input.",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the textarea has a validation error.",
      "details": "object"
    }
  ]
};
