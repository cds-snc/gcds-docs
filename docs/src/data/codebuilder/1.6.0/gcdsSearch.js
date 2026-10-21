// AUTO-GENERATED — DO NOT EDIT

export const gcdsSearch = {
  "tag": "gcds-search",
  "attributes": [
    {
      "name": "action",
      "control": "text",
      "type": "string",
      "defaultValue": "/sr/srb.html"
    },
    {
      "name": "method",
      "control": "select",
      "type": "\"get\" | \"post\"",
      "defaultValue": "get",
      "options": [
        "get",
        "post"
      ]
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "defaultValue": "q"
    },
    {
      "name": "placeholder",
      "control": "text",
      "type": "string",
      "defaultValue": "Canada.ca"
    },
    {
      "name": "search-id",
      "control": "text",
      "type": "string",
      "defaultValue": "search"
    },
    {
      "name": "suggested",
      "control": "select",
      "type": "string | string[]",
      "options": []
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
        "en": "The gcdsBlur event is emitted when the search input loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le champ de recherche cesse d’être ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": {
        "en": "The gcdsChange event is emitted when the search input value has changed. It contains the new value in the event detail.",
        "fr": "L’événement gcdsChange est émis lorsque la valeur du champ de recherche change. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when the search input has focus.",
        "fr": "L’événement gcdsFocus est émis lorsque le champ de recherche devient ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": {
        "en": "The gcdsInput event is emitted when the search element has received input. It contains the new value in the event detail.",
        "fr": "L’événement gcdsInput est émis lorsqu’une saisie modifie la valeur du champ de recherche. Les détails de l’événement contiennent la nouvelle valeur."
      },
      "details": "string"
    },
    {
      "name": "gcdsSubmit",
      "description": {
        "en": "The gcdsSubmit event is emitted when a search has been submitted.",
        "fr": "L’événement gcdsSubmit est émis lorsqu’une recherche est lancée."
      },
      "details": "string"
    }
  ]
};
