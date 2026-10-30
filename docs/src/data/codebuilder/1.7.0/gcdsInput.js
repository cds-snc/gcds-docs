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
      "description": {
        "en": "The gcdsBlur event is emitted when the input loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le champ de saisie cesse d’être ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": {
        "en": "The gcdsChange event is emitted when the input has been changed. It contains the new value in the event detail.",
        "fr": "L’événement gcdsChange est émis lorsque la valeur du champ de saisie change. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": {
        "en": "The gcdsError event is emitted when the input has a validation error.",
        "fr": "L’événement gcdsError est émis lorsque le champ de saisie présente une erreur de validation."
      },
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when the input has focus.",
        "fr": "L’événement gcdsFocus est émis lorsque le champ de saisie devient ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": {
        "en": "The gcdsInput event is emitted the input has received input. It contains the new value in the event detail.",
        "fr": "L’événement gcdsInput est émis lorsqu’une saisie modifie la valeur du champ de saisie. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsSuggestionSelected",
      "description": {
        "en": "The gcdsSuggestionSelected event is emitted when an autocomplete suggestion is selected.",
        "fr": "L’événement gcdsSuggestionSelected est émis lorsqu’une suggestion de saisie automatique est sélectionnée."
      },
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": {
        "en": "The gcdsValid event is emitted when the input passes all validation checks.",
        "fr": "L’événement gcdsValid est émis lorsque le champ de saisie réussit toutes les vérifications de validation."
      },
      "details": "object"
    }
  ]
};
