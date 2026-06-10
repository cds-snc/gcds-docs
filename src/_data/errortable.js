const {
  componentValidationErrors,
  validationErrors,
} = require('@gcds-core/components/dist/collection/utils/i18n/validation-errors');

module.exports = {
  en: {
    detailsTitle: 'Default validation and error messages',
    thead: ['Component', 'Reason', 'Error message'],
    components: {
      'gcds-checkboxes': 'Checkboxes',
      'gcds-date-input': 'Date input',
      'gcds-file-uploader': 'File uploader',
      'gcds-input': 'Input',
      'gcds-radios': 'Radios',
      'gcds-select': 'Select',
      'gcds-textarea': 'Textarea',
    },
    reason: {
      requiredCheckboxGroup: 'Group: missing value',
      requiredCheckboxSingle: 'Single: missing value',
      rangeUnderflow: 'Invalid number: min',
      rangeOverflow: 'Invalid number: max',
      dateInput: {
        all: 'Missing all',
        missingmonthinput: 'Missing month',
        missingmonth: 'Missing month',
        missingyear: 'Missing year',
        missingday: 'Missing day',
        missingmonthday: 'Missing month and day',
        missingmonthyear: 'Missing month and year',
        missingmonthinputday: 'Missing month and day',
        missingmonthinputyear: 'Missing month and year',
        missingdayyear: 'Missing day and year',
        invalidyearlength: 'Invalid year length',
        invalidyear: 'Invalid year',
        invalidmonth: 'Invalid month',
        invalidday: 'Invalid day',
      },
      valueMissing: 'Missing value',
      requiredFile: 'Missing file',
      typeMismatch: {
        email: 'Missing or invalid email',
        url: 'Missing or invalid url',
      },
      patternMismatch: 'Invalid format',
      tooLong: 'Invalid length: too long',
      tooShort: 'Invalid length: too short',
      stepMismatch: 'Invalid step',
      badInput: 'Missing number',
      required: 'Missing value',
      requiredEmail: 'Missing email',
      requiredSelect: 'Missing value',
      requiredRadio: 'Missing value',
    },
    validationErrors: validationErrors.en,
  },
  fr: {
    detailsTitle: "Validation et messages d'erreur par défaut",
    thead: ['Composant', 'Raison', "Message d'erreur"],
    components: {
      'gcds-checkboxes': 'Cases à cocher<br/>(`gcds-checkboxes`)',
      'gcds-date-input': 'Champ de date<br/>(`gcds-date-input`)',
      'gcds-file-uploader':
        'Téléverseur de fichiers<br/>(`gcds-file-uploader`)',
      'gcds-input': 'Champ de saisie<br/>(`gcds-input`)',
      'gcds-radios': 'Boutons radio<br/>(`gcds-radios`)',
      'gcds-select': 'Sélection<br/>(`gcds-select`)',
      'gcds-textarea': 'Zone de texte<br/>(`gcds-textarea`)',
    },
    reason: {
      requiredCheckboxGroup: 'Groupe : valeur manquante',
      requiredCheckboxSingle: 'Simple : valeur manquante',
      rangeUnderflow: 'Nombre invalide : min',
      rangeOverflow: 'Nombre invalide : max',
      dateInput: {
        all: 'Toutes valeurs manquantes',
        missingmonthinput: 'Mois manquant',
        missingmonth: 'Mois manquant',
        missingyear: 'Année manquante',
        missingday: 'Journée manquante',
        missingmonthday: 'Mois et jour manquants',
        missingmonthyear: 'Mois et année manquants',
        missingmonthinputday: 'Mois et jour manquants',
        missingmonthinputyear: 'Mois et année manquants',
        missingdayyear: 'Jour et année manquants',
        invalidyearlength: "Longueur d'année invalide",
        invalidyear: 'Année invalide',
        invalidmonth: 'Mois invalide',
        invalidday: 'Jour invalide',
      },
      valueMissing: 'Valeur manquante',
      requiredFile: 'Fichier manquant',
      typeMismatch: {
        email: 'Courriel manquant ou invalide',
        url: 'URL manquante ou invalide',
      },
      patternMismatch: 'Format invalide',
      tooLong: 'Longueur invalide: trop long',
      tooShort: 'Longueur invalide: trop court',
      stepMismatch: 'Nombre invalide : étape',
      badInput: 'Nombre manquant',
      required: 'Valeur manquante',
      requiredEmail: 'Courriel manquant',
      requiredSelect: 'Valeur manquante',
      requiredRadio: 'Valeur manquante',
    },
    validationErrors: validationErrors.fr,
  },
  componentValidationErrors: normalizeValidationErrors(
    componentValidationErrors,
  ),
};

function normalizeValidationErrors(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, values]) => {
      // Remove valueMissing
      const filtered = values.filter(val => val !== 'valueMissing');

      // Move dateInput to the front if it exists
      const reordered = filtered.includes('dateInput')
        ? ['dateInput', ...filtered.filter(val => val !== 'dateInput')]
        : filtered;

      return [key, reordered];
    }),
  );
}
