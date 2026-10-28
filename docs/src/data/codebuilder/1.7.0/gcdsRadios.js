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
      "description": {
        "en": "The gcdsBlur event is emitted when radios loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le lien cesse d'être ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": {
        "en": "The gcdsChange event is emitted when radios has been changed. It contains the new value in the event detail.",
        "fr": "L’événement gcdsChange est émis lorsque la sélection d’un bouton radio change. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": {
        "en": "The gcdsError event is emitted when radios has a validation error.",
        "fr": "L’événement gcdsError est émis lorsque les boutons radio présentent une erreur de validation."
      },
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when radios has focus.",
        "fr": "L’événement gcdsFocus est émis lorsque le groupe de boutons radio devient ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": {
        "en": "The gcdsInput event is emitted when a radio option has received input. It contains the new value in the event detail.",
        "fr": "L’événement gcdsInput est émis lorsqu’une saisie modifie la sélection d’un bouton radio. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": {
        "en": "The gcdsValid event is emitted when radios passes all validation checks.",
        "fr": "L’événement gcdsValid est émis lorsque le groupe de boutons radio réussit toutes les vérifications de validation."
      },
      "details": "void"
    }
  ]
};
