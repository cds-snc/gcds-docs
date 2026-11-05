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
      "description": {
        "en": "The gcdsBlur event is emitted when the uploader loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le téléverseur cesse d’être ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": {
        "en": "The gcdsChange event is emitted when a user selects or modifies one or more files. It contains the new value in the event detail.",
        "fr": "L’événement gcdsChange est émis lorsqu’une personne sélectionne ou modifie un ou plusieurs fichiers dans le sélecteur de fichiers. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string[]"
    },
    {
      "name": "gcdsError",
      "description": {
        "en": "The gcdsError event is emitted when the uploader has a validation error.",
        "fr": "L’événement gcdsError est émis lorsque le téléverseur présente une erreur de validation."
      },
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when the uploader has focus.",
        "fr": "L’événement gcdsFocus est émis lorsque le téléverseur devient ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": {
        "en": "The gcdsInput event is emitted when the user uploads a file. It contains the new value in the event detail.",
        "fr": "L’événement gcdsInput est émis lorsqu’une personne téléverse un fichier. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string[]"
    },
    {
      "name": "gcdsRemoveFile",
      "description": {
        "en": "The gcdsRemoveFile event is emitted when the user removes a file and the value is updated.",
        "fr": "L’événement gcdsRemoveFile est émis lorsqu’une personne retire un fichier et que la valeur est mise à jour."
      },
      "details": "any"
    },
    {
      "name": "gcdsValid",
      "description": {
        "en": "The gcdsValid event is emitted when the uploader passes all validation checks.",
        "fr": "L’événement gcdsValid est émis lorsque le téléverseur réussit toutes les vérifications de validation."
      },
      "details": "object"
    }
  ]
};
