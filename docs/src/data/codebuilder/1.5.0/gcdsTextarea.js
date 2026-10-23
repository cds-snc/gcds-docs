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
      "description": {
        "en": "The gcdsBlur event is emitted when the textarea input loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque la zone de texte cesse d’être ciblée."
      },
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": {
        "en": "The gcdsChange event is emitted when the textarea input value has changed. It contains the new value in the event detail.",
        "fr": "L’événement gcdsChange est émis lorsque la valeur de la zone de texte change. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": {
        "en": "The gcdsError event is emitted when the textarea has a validation error.",
        "fr": "L’événement gcdsError est émis lorsque la zone de texte présente une erreur de validation."
      },
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when the textarea has focus.",
        "fr": "L’événement gcdsFocus est émis lorsque la zone de texte devient ciblée."
      },
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": {
        "en": "The gcdsInput event is emitted when the textarea has received input. It contains the new value in the event detail.",
        "fr": "L’événement gcdsInput est émis lorsqu’une saisie modifie la valeur de la zone de texte. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": {
        "en": "The gcdsValid event is emitted when the textarea passes all validation checks.",
        "fr": "L’événement gcdsValid est émis lorsque la zone de texte réussit toutes les vérifications de validation."
      },
      "details": "object"
    }
  ]
};
