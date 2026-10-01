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
      "description": "Slot to give an accessible name to the table, so that assistive technologies can identify it and announce it."
    },
    // Need to think of a different way to do this for this component
    // {
    //   "name": "cell:<field>",
    //   "description": "Slot to assign HTML content to a table cell, where <field> corresponds to the `field` property of a column definition."
    // }
  ],
  "events": [
    {
      "name": "gcdsTableStateChange",
      "description": "",
      "details": "GcdsTableStateChange"
    }
  ]
};
