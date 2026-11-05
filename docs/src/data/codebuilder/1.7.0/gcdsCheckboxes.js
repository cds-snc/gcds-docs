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
      "description": {
        "en": "The gcdsBlur event is emitted when the checkbox loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque la case à cocher cesse d'être ciblée."
      },
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": {
        "en": "The gcdsChange event is emitted when a checkbox has been changed. It contains the new value in the event detail.",
        "fr": "L’événement gcdsChange est émis lorsque l’état d’une case à cocher change. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string[]"
    },
    {
      "name": "gcdsClick",
      "description": {
        "en": "The gcdsClick event is emitted when the checkbox has been clicked. It contains the value in the event detail.",
        "fr": "L’événement gcdsClick est émis lorsque l’on clique sur la case à cocher. Les détails de l’événement contiennent la valeur."
      },
      "details": "void"
    },
    {
      "name": "gcdsError",
      "description": {
        "en": "The gcdsValid event is emitted when the checkbox has a validation error.",
        "fr": "L’événement gcdsValid est émis lorsque la case à cocher présente une erreur de validation."
      },
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when the checkbox has focus.",
        "fr": "L'événement gcdsFocus est émis lorsque la case à cocher est ciblée."
      },
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": {
        "en": "The gcdsInput event is emitted when a checkbox has received input. Contains the new value in the event detail.",
        "fr": "L’événement gcdsInput est émis lorsque la case à cocher reçoit une saisie qui modifie son état (cochée ou décochée). Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string[]"
    },
    {
      "name": "gcdsValid",
      "description": {
        "en": "The gcdsValid event is emitted when the checkbox passes all validation checks.",
        "fr": "L’événement gcdsValid est émis lorsque la case à cocher réussit toutes les vérifications de validation."
      },
      "details": "object"
    }
  ]
};
