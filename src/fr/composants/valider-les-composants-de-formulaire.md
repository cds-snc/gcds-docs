---
title: Valider les composants de formulaire
layout: 'layouts/base.njk'
eleventyNavigation:
  key: formValidationFR
  parent: componentsFR
  title: Valider les composants de formulaire
  locale: fr
  order: 0
  hideMain: true
translationKey: 'formValidation'
date: 'git Last Modified'
---

# {{ title }}

## Validation et messages d’erreur intégrés

Les composants de formulaire de Système de design GC ont une propriété de validation intégrée. La validation s’exécute par défaut lors de l’évènement blur. Les champs comportant des exigences de saisie spécifiques seront validés même s’ils ne sont pas obligatoires. En cas de saisie manquante ou invalide, un message d'erreur intercalé prédéfini s’affichera.

{% include "partials/error-message-table.njk" %}

### Activer la validation par défaut

- Utilisez l’attribut `required` sur les composants de formulaire pour activer la validation des champs obligatoires.
- Désactivez la validation du navigateur en ajoutant `novalidate` à la balise de formulaire.

<hr/>

## Fonctionnement de la validation

Les composants de formulaire de Système de design GC sont validés au moyen d’une série de propriétés, d’événements et d’objets de validation.

### Propriétés de validation

La validation est contrôlée par les propriétés ‘validator’ et ‘validate-on’.

| `validator`    | `validate-on` |
| -------- | ------- |
| Détermine ce qui doit être validé.  | Détermine quand l’action de validation aura lieu.    |
| Le composant de formulaire validera un ensemble de fonctions selon l’ordre dans lequel elles apparaissent. | <ul class="list-disc"><li>**`blur`** : La vérification se produit dès qu’une personne clique en dehors du champ ou le quitte par tabulation.</li><li>**`submit`** : La vérification se produit lorsque le formulaire est soumis.</li><li>**`other`**: La vérification se fait lors d’un autre événement défini par le développeur ou la développeuse à l’aide de la méthode `validate()` sur chaque composant.</li></ul>     |

<gcds-details details-title="Exemples de validator">

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

<gcds-details details-title="Exemples de validate-on">

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

### Événements de validation

Après l’exécution de la validation, les composants de formulaire génèrent un événement `gcdsError` ou `gcdsValid`.

| `gcdsError` | `gcdsValid` |
| -------- | ------- |
| Les données n’ont pas passé les contrôles de validation. | Les données ont passé les contrôles de validation. |
| L’événement contiendra un `detail` avec le message d’erreur associé. Ce message d’erreur s’affichera sur le composant. | Aucun message d’erreur ne s’affichera. |

### Objets de validation

Chaque validation possède une propriété `validate` qui peut être appelée par le composant de formulaire.

La propriété `validate` génère un objet avec plusieurs propriétés que le composant peut lire :

- La propriété `valid` contient une valeur booléenne indiquant si la valeur soumise par le composant de formulaire satisfait aux critères de validation.
- La propriété `reason` contient un objet avec les propriétés `en` et `fr`, qui contiennent le texte du message d’erreur dans chaque langue.
- La propriété `errors` est une propriété facultative conçue pour les composants de formulaire plus complexes comportant plusieurs éléments. Elle contient un objet avec des propriétés booléennes indiquant au composant de formulaire quel élément est invalide. La nécessité de cette propriété dans un validateur sera définie lors de la création de chaque composant de formulaire.

<gcds-details details-title="Exemple de markup avec validator">

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

<gcds-details details-title="Exemples de retour de validator">

  <h4>Retour de `validator`</h4>

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

  <h4>Retour de `validator` avec `errors`</h4>

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

## Personnaliser la validation et les messages d’erreur

En utilisant une combinaison de propriétés et d’événements personnalisables, vous pouvez mettre en œuvre une validation qui répond à vos besoins.

- Ajoutez une validation personnalisée à l’aide de la propriété `validator`.
- Modifiez l’événement de validation à l’aide de la propriété `validate-on`.

<gcds-details details-title="Exemple de validation de texte">

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

### Format de la propriété `validator` pour différents composants

Le format de la propriété ’validator’ sera légèrement différent selon les composants de formulaire.

<gcds-details details-title="gcds-checkboxes">

  <p>Format de la propriété `validator` pour `gcds-checkboxes` :</p>

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

  <p>Format de la propriété `validator` pour `gcds-date-input` :</p>

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

  <p>Format de la propriété `validator` pour `gcds-file-uploader` :</p>

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

  <p>Les propriétés `validator` pour les composants `gcds-input`, `gcds-select`, `gcds-textarea`, `gcds-radios` suivent le même modèle.</p>

  <p>Format de leur propriété `validator` respectif :</p>

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
