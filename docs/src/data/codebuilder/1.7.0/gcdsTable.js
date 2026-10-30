// AUTO-GENERATED — DO NOT EDIT

export const gcdsTable = {
  "tag": "gcds-table",
  "attributes": [
    {
      "name": "columns",
      "control": "text",
      "type": "TableColumn[] | string",
      "defaultValue": "[]",
    },
    {
      "name": "data",
      "control": "text",
      "type": "object[] | string",
      "defaultValue": "[]",
    },
    {
      "name": "filter",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "filter-value",
      "control": "text",
      "type": "string",
      "defaultValue": ""
    },
    {
      "name": "pagination",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "pagination-current-page",
      "control": "text",
      "type": "number",
      "defaultValue": "1"
    },
    {
      "name": "pagination-size",
      "control": "text",
      "type": "number",
      "defaultValue": "10"
    },
    {
      "name": "pagination-size-options",
      "control": "select",
      "type": "number[] | string",
      "defaultValue": "[10, 25, 50, 0]",
      "options": []
    },
    {
      "name": "sort",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    }
  ],
  "slots": [
    {
      "name": "caption",
      "description": {
        "en": "The caption slot gives an accessible name to the table, so that assistive technologies can identify it and announce it.",
        "fr": "L’emplacement caption donne un nom accessible au tableau afin que les technologies d’assistance puissent l’identifier et l’annoncer."
      }
    },
    // Need to think of a different way to do this for this component
    // {
    //   "name": "cell:<field>",
    //   "description": {"en": "","fr": ""}
    // }
  ],
  "events": [
    {
      "name": "gcdsTableStateChange",
      "description": {
        "en": "",
        "fr": ""
      },
      "details": "GcdsTableStateChange"
    }
  ]
};
