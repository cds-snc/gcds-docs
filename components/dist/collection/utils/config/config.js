export const angularValueAccessorBindings = [
    {
        // Select
        elementSelectors: ['gcds-select'],
        event: 'gcdsChange',
        targetAttr: 'value',
        type: 'select',
    },
    {
        // Date input
        elementSelectors: ['gcds-date-input', 'gcds-checkboxes', 'gcds-radios'],
        event: 'gcdsChange',
        targetAttr: 'value',
        type: 'text',
    },
    {
        // Text
        elementSelectors: ['gcds-input', 'gcds-textarea', 'gcds-file-uploader'],
        event: 'gcdsInput',
        targetAttr: 'value',
        type: 'text',
    },
];
export const vueComponentModels = [
    {
        elements: [
            'gcds-input',
            'gcds-textarea',
            'gcds-select',
            'gcds-file-uploader',
            'gcds-select',
            'gcds-date-input',
            'gcds-checkboxes',
            'gcds-radios',
        ],
        event: 'gcdsChange',
        targetAttr: 'value',
    },
];
//# sourceMappingURL=config.js.map
