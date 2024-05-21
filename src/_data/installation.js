module.exports = {
  en: {
    step1: {
      heading: '1. Choose the option that works best for you',
      paragraph:
        "The GCDS-component library works in multiple frameworks and can also be used framework free. Choose the environment you're building in and follow the instructions to get started.",
      label: "Environment you're working in ",
      hint: 'Select the option that most applies',
      defaultValue: 'Choose an option',
      angular: 'Angular',
      react: 'React',
      vue: 'Vue',
      node: 'Node with no framework',
      cdn: 'No framework (without node)',
      figma: "I'm a lost designer, looking for Figma",
      other: 'None of the above',
    },
    step2: {
      heading: '2. Getting started',
      angular: {
        paragraph:
          "Use these instructions to install GCDS components if you're using Angular.",
        heading: 'Install with npm',
        install: 'Navigate to the root folder of your project and run:',
        placeApp:
          'Place the following code in the app.module.ts file of your app:',
        placeStyles:
          'Place the following code in the styles.scss file of your app:',
      },
      cdn: {
        paragraph:
          'Use these instructions to install GCDS components with no framework.',
        heading: 'Add the code',
        place:
          'Place the following code in the <head> element of your project:',
        icons: 'to access icons, import Font Awesome',
        note: 'Note: <script type="module"> requires a server to load properly. If developing locally, please use <script nomodule>.',
      },
      choose: {
        paragraph:
          'Select an option in step 1 to get your installation instructions.',
      },
      figma: {
        paragraph: 'Lost and looking for our Figma library? We got you:',
        buttonText: 'Go to Figma',
      },
      node: {
        paragraph:
          "Use these instructions to install GCDS components if you're using npm (node package manager) with no framework.",
        heading: 'Install with npm',
        install: 'Navigate to the root folder of your project and run:',
        place: 'Place the following code in the <head> element of your site:',
        icons: 'to access icons, import Font Awesome',
      },
      other: {
        paragraph:
          "Not seeing an environment that matches? Reach out to us and we'll help you get started.",
        buttonText: 'Contact us',
        link: '/en/contact/#contact-us',
      },
      react: {
        paragraph:
          "Use these instructions to install GCDS components if you're using React.",
        heading: 'Install with npm',
        install: 'Navigate to the root folder of your project and run:',
        place: 'Place the following code in the index.js file of your app:',
      },
      vue: {
        paragraph:
          "Use these instructions to install GCDS components if you're using Vue.",
        heading: 'Install with npm',
        install: 'Navigate to the root folder of your project and run:',
        place:
          'In your <code>main.js</code> file, import the GC Design System components plugin and use it:',
        globalStyles:
          'Add the global styles to your app. There are multiple ways to achieve this.',
        styleOne:
         'You can import it in your <code>main.js</code> file next to your <code>style.css</code>:',
        styleTwo:
         'or in your <code>App.vue</code> using the html style tag.',
      },
    },
    step3: {
      heading: '3. Next steps',
      paragraphs: [
        "For each design, find code paired with guidance. We've pre-set colour, type, and spacing using design tokens that form the foundation of any design.",
        'Start by browsing components to find what you need for your product and users. Next, open the project you created, pull in the code, and get started.',
      ],
      buttonText: 'Browse components',
      link: '/en/components',
    },
  },
  fr: {
    step1: {
      heading: '1. Choisissez l’option qui vous convient le mieux',
      paragraph:
        'La bibliothèque de composants SDGC fonctionne dans de multiples infrastructures ou peut être utilisée comme telle. Choisissez votre environnement de développement et suivez les instructions pour commencer votre projet.',
      label: 'Votre environnement de travail ',
      hint: "Sélectionnez l'option la plus pertinente",
      defaultValue: 'Choissisez une option',
      angular: 'Angular',
      react: 'React',
      vue: 'Vue',
      node: 'Aucune infrastructure, avec nœud',
      cdn: 'Aucune infrastructure, sans noeud',
      figma: 'Je suis un·e concepteur·rice à la recherche de Figma',
      other: 'Autre chose',
    },
    step2: {
      heading: '2. Pour commencer',
      angular: {
        paragraph:
          'Si vous utilisez Angular, suivez ces instructions pour installer les composants SDGC.',
        heading: "Installation à l'aide de npm",
        install:
          "Naviguez jusqu'au dossier racine de votre projet et exécutez :",
        placeApp:
          'Insérez le code suivant dans le fichier app.module.ts de votre application :',
        placeStyles:
          'Insérez le code suivant dans le fichier styles.scss de votre application :',
      },
      cdn: {
        paragraph:
          'Pour installer les composants SDGC sans infrastructure, suivez ces instructions.',
        heading: 'Ajoutez le code',
        place:
          "Insérez le code suivant dans l'élément <head> de votre projet :",
        icons: 'pour avoir accès aux icônes, installer Font Awesome',
        note: 'Remarque : <script type="module"> nécessite un serveur pour le chargement. Pour le développement local, veuillez utiliser <script nomodule>.',
      },
      choose: {
        paragraph:
          "Sélectionnez une option à l'étape 1 pour obtenir les instructions d'installation.",
      },
      figma: {
        paragraph:
          'Vous ne trouvez pas notre bibliothèque Figma? Suivez le guide :',
        buttonText: 'Accéder à Figma',
      },
      node: {
        paragraph:
          'Si vous utilisez npm (node package manager) sans infrastructure, suivez ces instructions pour installer les composants SDGC.',
        heading: "Installation à l'aide de npm",
        install:
          "Naviguez jusqu'au dossier racine de votre projet et exécutez :",
        place: "Insérez le code suivant dans l'élément <head> de votre site :",
        icons: 'pour avoir accès aux icônes, installer Font Awesome',
      },
      other: {
        paragraph:
          'Vous ne trouvez pas votre infrastructure dans la liste? Écrivez-nous pour obtenir des conseils.',
        buttonText: 'Contactez nous',
        link: '/fr/contactez/#contacteznous',
      },
      react: {
        paragraph:
          'Si vous utilisez React, suivez ces instructions pour installer les composants SDGC.',
        heading: "Installation à l'aide de npm",
        install:
          "Naviguez jusqu'au dossier racine de votre projet et exécutez :",
        place:
          'Insérez le code suivant dans le fichier index.js de votre application :',
      },
      vue: {
        paragraph:
          'Si vous utilisez Vue, suivez ces instructions pour installer les composants SDGC.',
        heading: "Installation à l'aide de npm",
        install:
          "Naviguez jusqu'au dossier racine de votre projet et exécutez :",
          place: 
            'Dans votre fichier <code>main.js</code>, importez le plugiciel des composants Système de design GC et utilisez-le de la façon suivante :',
          globalStyles: 
            'Ajoutez les styles généraux à votre application. Vous pouvez les ajouter de plusieurs façons.',
          styleOne:
            'Vous pouvez soit les importer dans votre fichier <code>main.js</code> à côté de votre <code>style.css</code> :',
          styleTwo:
            'ou les insérer dans votre <code>App.vue</code> à l\'aide de la balise de style html.',
      },
    },
    step3: {
      heading: '3. Prochaines étapes',
      paragraphs: [
        "Pour chaque design, vous trouverez le code qu'il vous faut accompagné de lignes directrices. Nous avons prédéfini la couleur, le type et l'espacement à l'aide d'unités de style qui forment la base de tout design.",
        'Commencez par parcourir la liste des composants qui conviennent à votre produit et à vos utilisateur·rice·s. Ensuite, ouvrez le projet que vous avez créé, insérez le code et commencez à travailler.',
      ],
      buttonText: 'Parcourir la liste des composants',
      link: '/fr/composants',
    },
  },
};
