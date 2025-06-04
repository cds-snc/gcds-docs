export type RadioObject = {
    id: string;
    label: string;
    value: string;
    hint?: string;
    checked?: boolean;
};
export declare function isRadioObject(obj: any): obj is RadioObject;
