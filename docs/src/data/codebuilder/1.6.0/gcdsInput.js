// AUTO-GENERATED — DO NOT EDIT

export const gcdsInput = {
  "tag": "gcds-input",
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
      "name": "input-id",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "inputmode",
      "control": "select",
      "type": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
      "defaultValue": "null",
      "options": [
        "decimal",
        "email",
        "none",
        "numeric",
        "search",
        "tel",
        "text",
        "url"
      ]
    },
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "max",
      "control": "select",
      "type": "number | string",
      "options": []
    },
    {
      "name": "maxlength",
      "control": "text",
      "type": "number"
    },
    {
      "name": "min",
      "control": "select",
      "type": "number | string",
      "options": []
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
      "name": "pattern",
      "control": "text",
      "type": "string"
    },
    {
      "name": "readonly",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
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
      "name": "size",
      "control": "text",
      "type": "number"
    },
    {
      "name": "step",
      "control": "select",
      "type": "\"any\" | number",
      "options": [
        "any"
      ]
    },
    {
      "name": "suggestions",
      "control": "select",
      "type": "SuggestionOption[] | string",
      "options": []
    },
    {
      "name": "type",
      "control": "select",
      "type": "\"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"url\"",
      "defaultValue": "text",
      "options": [
        "email",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "url"
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
      "description": "Emitted when the input loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the input has changed.",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the input has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the input has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the element has received input.",
      "details": "string"
    },
    {
      "name": "gcdsSuggestionSelected",
      "description": "Emitted when a suggestion is selected.",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the input has a validation error.",
      "details": "object"
    }
  ]
};
