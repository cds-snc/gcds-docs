export type CheckboxObject = {
    id: string;
    label: string;
    value?: string;
    hint?: string;
    checked?: boolean | string;
};
export declare function isCheckboxObject(obj: CheckboxObject): boolean;
export declare function validateOptionsArray(optionsArr: any): boolean;
export declare function cleanUpValues(optionsArr: any, element: any): void;
export declare const renderCheckbox: (checkbox: any, element: any, emitEvent: any, handleInput: any) => any;
