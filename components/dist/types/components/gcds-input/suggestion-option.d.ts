export type SuggestionOption = {
    label: string;
    value?: string;
};
export declare function isSuggestionObject(obj: any): obj is SuggestionOption;
