---
title: Validate form components
layout: 'layouts/base.njk'
eleventyNavigation:
  key: formValidationEN
  parent: componentsEN
  title: Validate form components
  locale: en
  order: 0
  hideMain: true
translationKey: 'formValidation'
date: 'git Last Modified'
---

# {{ title }}

## Built-in validation and error messages

GC Design System (GCDS) form components have built-in validation. They validate by default on blur. Fields with specific input requirements will validate if the entry is invalid, even if it is not required. A missing or invalid entry will prompt an inline error message with default text.

{% include "partials/error-message-table.njk" %}

### Enable default validation

- Use the `required` attribute on form components to activate required field validation.
- Turn off browser validation by adding `novalidate` to the form tag.

<hr/>

## How validation works

GC Design System form components validate through a series of validation properties, events, and objects.

### Validation properties

Validation is controlled by the `validator` and `validate-on` properties.

| `validator`    | `validate-on` |
| -------- | ------- |
| Determines what gets validated.  | Determines when the validation check will happen.    |
| The form component will validate an array of functions in the order they appear. | <ul class="list-disc"><li>`blur`: The check happens the moment a user clicks out of or tabs away from the box.</li><li>`submit`: The check happens when the form is submitted.</li><li>`other`: The check happens on a different event set by the developer. The developer defines this using the `validate()` method on each component.</li></ul>     |

<gcds-details details-title="Validator examples">

  <h4>Javascript</h4>

  ```javascript
  const gcdsComponent = document.querySelector('gcds-input');

  gcdsComponent.validator = [customValidation()];
  ```

  <h4>React</h4>

  ```javascript
  <GcdsInput
    validator={[customValidation()]}
  />
  ```

</gcds-details>

<gcds-details details-title="Validate-on examples">

  <h4>Blur</h4>

  ```html
  <gcds-input
    name="blur-validate"
    label="Validate on blur"
    required
    validate-on="blur"
  ></gcds-input>
  ```

  <h4>Submit</h4>

  ```html
  <gcds-input
    name="submit-validate"
    label="Validate on submit"
    required
    validate-on="submit"
  ></gcds-input>
  ```

  <h4>Other</h4>

  ```html
  <gcds-input
    name="other-validate"
    label="Validate on other"
    required
    validate-on="other"
  ></gcds-input>
  ```

</gcds-details>

### Validation events

After running validation, form components generate a `gcdsError` or `gcdsValid` event.

| `gcdsError` | `gcdsValid` |
| -------- | ------- |
| The data did not pass the checks. | The data passed the checks. |
| The event will contain a `detail` with the associated error message. That error message will be displayed on the component. | An error message will not be displayed. |

### Validation objects

Each validate has a `validate` property that can be called by the form component.

The `validate` property returns an object with multiple properties for the component to read:

- The `valid` property contains a boolean value stating if the passed value of the form component passes the validation test.
- The `reason` property contains an object with `en` and `fr` properties containing the text for the error message in each language.
- The `errors` property is an optional property built for more complex form components with multiple form elements that contains an object with boolean properties to inform the form component which element is not valid. The need for this property in a validator will be defined when each form component is created.

<gcds-details details-title="Validator markup example">

  ```javascript
  // Required field validator used in gcds-input
  const requiredField: Validator<string> = {
    validate: (value: string) => {
      return {
        valid: value != null && value.trim() != '',
        reason: {
          en: 'Enter information to continue.',
          fr: 'Saisissez des renseignements pour continuer.',
        },
      };
    },
  };
  ```

</gcds-details>

<gcds-details details-title="Validator return examples">

  <h4>Validator return</h4>

  ```javascript
  interface ValidatorReturn {
    valid: boolean;
    reason: {
      en: string;
      fr: string;
    };
    errors?: object;
  }
  ```

  <h4>Validator return with <code>errors</code></h4>

  ```javascript
 date-input {
    valid: boolean;
    reason: {
      en: string;
      fr: string;
    };
    errors: {
      year: boolean;
      month: boolean;
      day: boolean;
    }
  }
  ```

</gcds-details>

<hr/>

## Customize validation and error messages

By using a combination of customizable properties and events, you can implement validation that meets your specific needs.

- Add custom validation using the `validator` property. 
- Change the validation event using the `validate-on` property.

<gcds-details details-title="Text validation example">

  ```html
  <gcds-input
    input-id="form-name"
    label="Name of component library"
     name="library-name"
     required
   ></gcds-input>

   <script>
     const input = document.querySelector('gcds-input[name="library-name"]');

     const libraryName = () => {
      return {
        validate: value => {
         return {
          valid: value === '@cdssnc/gcds-components',
          reason: {
            en: `The entered value must be '@gcds-core/components.`,
            fr: `La valeur saisie doit être « @gcds-core/components »`,
          },
         };
        },
      };
     };

    input.validator = [libraryName()];
  </script>
  ```

</gcds-details>

### Validator format for different components

The format of the validator property will be slightly different for different form components.

<gcds-details details-title="gcds-checkboxes">

  <p>Format of the <code>gcds-checkboxes</code> validator:</p>

  ```javascript
  const validator = () => {
    return {
      validate: value: string[] => {
        return {
          valid: boolean,
          reason: {
            en: string,
            fr: string,
          },
        };
      },
    };
  };
  </script>
  ```

</gcds-details>

<gcds-details details-title="gcds-date-input">

  <p>Format of the <code>gcds-date-input</code> validator:</p>

  ```javascript
  const validator = () => {
    return {
      validate: value: string => {
        return {
          valid: boolean,
          reason: {
            en: string,
            fr: string,
          },
          errors: {
            year: boolean,
            month: boolean,
            day: boolean,
          },
        };
      },
    };
  };
  </script>
  ```

</gcds-details>

<gcds-details details-title="gcds-file-uploader">

  <p>Format of the <code>gcds-file-uploader</code> validator:</p>

  ```javascript
  const validator = () => {
    return {
      validate: value: FileList => {
        return {
          valid: boolean,
          reason: {
            en: string,
            fr: string,
          },
        };
      },
    };
  };
  </script>
  ```

</gcds-details>

<gcds-details details-title="gcds-input, gcds-select, gcds-textarea, gcds-radios">

  <p>The validation of <code>gcds-input</code>, <code>gcds-select</code>, <code>gcds-textarea</code>, <code>gcds-radios<code> follow the same pattern.</p>

  <p>Format of the their respective validator:</p>

  ```javascript
  const validator = () => {
    return {
      validate: value: string => {
        return {
          valid: boolean,
          reason: {
            en: string,
            fr: string,
          },
        };
      },
    };
  };
  </script>
  ```

</gcds-details>

{% include "partials/helpus.njk" %}
