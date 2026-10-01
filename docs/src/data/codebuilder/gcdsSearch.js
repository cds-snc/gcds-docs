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
      "description": "Emitted when the search input has lost focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the search input value has changed.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the search input has gained focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the search element has received input.",
      "details": "string"
    },
    {
      "name": "gcdsSubmit",
      "description": "Emitted when the search form has submitted.",
      "details": "string"
    }
  ]
};
