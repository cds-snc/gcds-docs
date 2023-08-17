const defaultValidator = {
  validate: (_x) => true
};
function combineValidators(v1, v2) {
  let combined;
  combined = {
    validate: (x) => {
      const res1 = v1.validate(x);
      const res2 = v2.validate(x);
      if (!res1) {
        combined.errorMessage = v1.errorMessage;
      }
      else if (!res2) {
        combined.errorMessage = v2.errorMessage;
      }
      return res1 && res2;
    },
  };
  return combined;
}
function requiredValidator(element, type, subtype) {
  if (element.required) {
    switch (type) {
      // Components all validate the "value" property
      case ("input"):
        switch (subtype) {
          case ("email"):
            if (element.validator) {
              element.validator.unshift("requiredEmailField");
            }
            else {
              element.validator = ["requiredEmailField"];
            }
            break;
          default:
            if (element.validator) {
              element.validator.unshift("requiredField");
            }
            else {
              element.validator = ["requiredField"];
            }
            break;
        }
        break;
      case ("select"):
        if (element.validator) {
          element.validator.unshift("requiredSelectField");
        }
        else {
          element.validator = ["requiredSelectField"];
        }
        break;
      case ("textarea"):
        if (element.validator) {
          element.validator.unshift("requiredField");
        }
        else {
          element.validator = ["requiredField"];
        }
        break;
      case ("file"):
        if (element.validator) {
          element.validator.unshift("requiredFileInput");
        }
        else {
          element.validator = ["requiredFileInput"];
        }
        break;
      case ("checkbox"):
        if (element.validator) {
          element.validator.unshift("requiredCheck");
        }
        else {
          element.validator = ["requiredCheck"];
        }
        break;
      case ("fieldset"):
        if (element.validator) {
          element.validator.unshift("requiredFieldset");
        }
        else {
          element.validator = ["requiredFieldset"];
        }
        break;
    }
  }
}
/*
Example of parameter validator

export function getLengthValidator(min: number, max: number): Validator<string> {
    // Create errorMessage object
    let errorMessage = {};
    if (min && max) {
        errorMessage["en"] = `You must enter between ${min} and ${max} characters`;
        errorMessage["fr"] = `French You must enter between ${min} and ${max} characters`;
    } else if (min) {
        errorMessage["en"] = `You must enter at least ${min} characters`;
        errorMessage["fr"] = `French You must enter at least ${min} characters`;
    } else if (max) {
        errorMessage["en"] = `You must enter less than ${max} characters`;
        errorMessage["fr"] = `French You must enter less than ${max} characters`;
    }
    return {
        validate: (value: string) => {
            value = value || '';
            if (min && max) {
                return min <= value.length && value.length <= max;
            }
            if (min) {
                return min <= value.length;
            }
            if (max) {
                return value.length <= max;
            }
            return true;
        },
        errorMessage
    };
}
*/

let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const requiredField = {
  validate: (value) => value != null && value.trim() != "",
  errorMessage: {
    "en": "Enter information to continue.",
    "fr": "Saisissez des renseignements pour continuer."
  }
};
const requiredEmailField = {
  validate: (value) => (value != null && value.trim() != "") && (value.toLowerCase().match(emailPattern) ? true : false),
  errorMessage: {
    "en": "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.",
    "fr": "Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca."
  }
};
const requiredFileInput = {
  validate: (value) => value.length > 0,
  errorMessage: {
    "en": "You must upload a file to continue.",
    "fr": "Vous devez téléverser un fichier pour continuer."
  }
};
const requiredSelectField = {
  validate: (value) => value != null && value.trim() != "",
  errorMessage: {
    "en": "Choose an option to continue.",
    "fr": "Choisissez une option pour continuer."
  }
};

const requiredCheck = {
  validate: (value) => value,
  errorMessage: {
    "en": "You must check the box to continue.",
    "fr": "Vous devez cocher la case pour continuer."
  }
};

const requiredFieldset = {
  validate: (id) => {
    const el = document.querySelector(`#${id}`);
    const elChildren = el.children;
    let isValid = validateFieldsetElements(el, elChildren);
    return !isValid.includes(false);
  },
  errorMessage: {
    "en": "Choose an option to continue.",
    "fr": "Choisissez une option pour continuer."
  }
};
function validateFieldsetElements(element, nodeList) {
  let isValid = [];
  for (let i = 0; i < nodeList.length; i++) {
    switch (nodeList[i].nodeName) {
      case ('GCDS-FIELDSET'):
        let validFieldsetChildren = validateFieldsetElements(nodeList[i], nodeList[i].children);
        isValid = isValid.concat(validFieldsetChildren);
        break;
      case ('GCDS-CHECKBOX'):
      case ('GCDS-RADIO'):
        // Radio/checkbox can share name property
        let inputName = nodeList[i].getAttribute('name');
        // Find all inputs with shared name
        const sameNameInputs = element.querySelectorAll(`[name=${inputName}]`);
        let childGroupValid = false;
        // Check if there is more than one input with this name
        if (sameNameInputs.length > 1) {
          // Validate as group
          for (let c = 0; c < sameNameInputs.length; c++) {
            if (sameNameInputs[c].hasAttribute("checked")) {
              childGroupValid = true;
            }
          }
          isValid.push(childGroupValid);
        }
        else {
          // Validate as single input
          isValid.push(nodeList[i].hasAttribute('checked') ? true : false);
        }
        break;
    }
  }
  return isValid;
}

var ValidatorsName;
(function (ValidatorsName) {
  ValidatorsName["requiredField"] = "requiredField";
  ValidatorsName["requiredEmailField"] = "requiredEmailField";
  ValidatorsName["requiredCheck"] = "requiredCheck";
  ValidatorsName["requiredFieldset"] = "requiredFieldset";
  ValidatorsName["requiredFileInput"] = "requiredFileInput";
  ValidatorsName["requiredSelectField"] = "requiredSelectField";
})(ValidatorsName || (ValidatorsName = {}));
function getValidator(list) {
  return (list || []).map(v => {
    if (typeof v === 'string') {
      return validatorFactory(v);
    }
    else if (v && v.name) {
      v = v;
      return validatorFactory(v.name);
    }
    else {
      return v;
    }
  }).reduce(combineValidators, defaultValidator);
}
function validatorFactory(name, options) {
  switch (name) {
    case (ValidatorsName.requiredField):
      return requiredField;
    case (ValidatorsName.requiredEmailField):
      return requiredEmailField;
    case (ValidatorsName.requiredSelectField):
      return requiredSelectField;
    case (ValidatorsName.requiredCheck):
      return requiredCheck;
    case (ValidatorsName.requiredFieldset):
      return requiredFieldset;
    case (ValidatorsName.requiredFileInput):
      return requiredFileInput;
    /*
    Formatting for parameter validator
    
    case (ValidatorsName.length):
        return getLengthValidator(options.min, options.max);
    */
    default:
      return defaultValidator;
  }
}

export { defaultValidator as d, getValidator as g, requiredValidator as r, validateFieldsetElements as v };
