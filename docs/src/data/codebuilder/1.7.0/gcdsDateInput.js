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
      "description": {
        "en": "The gcdsBlur event is emitted when the date input loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le champ de date cesse d’être ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": {
        "en": "The gcdsChange event is emitted when the date input has been changed. It contains the new value in the event detail.",
        "fr": "L’événement gcdsChange est émis lorsque la valeur du champ de date change. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": {
        "en": "The gcdsError event is emitted when the date input has a validation error.",
        "fr": "L’événement gcdsError est émis lorsque le champ de date présente une erreur de validation."
      },
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when the date input has focus.",
        "fr": "L’événement gcdsFocus est émis lorsque le champ de date devient ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": {
        "en": "The gcdsInput event is emitted when the date input has received input. It contains the new value in the event detail.",
        "fr": "L’événement gcdsInput est émis lorsqu’une saisie modifie la valeur du champ de date. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": {
        "en": "The gcdsValid event is emitted when the date input passes all validation checks.",
        "fr": "L’événement gcdsValid est émis lorsque le champ de date réussit toutes les vérifications de validation."
      },
      "details": "object"
    }
  ]
};
