// AUTO-GENERATED — DO NOT EDIT

export const gcdsFileUploader = {
  "tag": "gcds-file-uploader",
  "attributes": [
    {
      "name": "accept",
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
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "multiple",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
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
      "name": "uploader-id",
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
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the uploader loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the user has made a file selection. Contains the new value in the event detail.",
      "details": "string[]"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the uploader has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the uploader has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the user has uploaded a file. Contains the new value in the event detail.",
      "details": "string[]"
    },
    {
      "name": "gcdsRemoveFile",
      "description": "Remove file and update value.",
      "details": "any"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the uploader has a validation error.",
      "details": "object"
    }
  ]
};
