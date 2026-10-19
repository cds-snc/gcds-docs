// AUTO-GENERATED — DO NOT EDIT

export const gcdsStepper = {
  "tag": "gcds-stepper",
  "attributes": [
    {
      "name": "current-step",
      "control": "text",
      "type": "number",
      "required": true
    },
    {
      "name": "tag",
      "control": "select",
      "type": "\"h1\" | \"h2\" | \"h3\"",
      "defaultValue": "h2",
      "options": [
        "h1",
        "h2",
        "h3"
      ]
    },
    {
      "name": "total-steps",
      "control": "text",
      "type": "number",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the heading content."
    }
  ],
  "events": []
};
