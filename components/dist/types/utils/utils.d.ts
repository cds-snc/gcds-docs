import { EventEmitter } from '../stencil-public-runtime';
export declare function format(label: string): string;
export declare const inheritAttributes: (el: HTMLElement, shadowElement: HTMLElement, attributes?: string[]) => {};
export declare const assignLanguage: (el: HTMLElement) => string;
export declare const observerConfig: {
    attributes: boolean;
    attributeOldValue: boolean;
    attributeFilter: string[];
};
export declare const elementGroupCheck: (name: any) => boolean;
export declare const emitEvent: (e: Event, customEvent: EventEmitter, value?: unknown) => boolean;
export declare const logError: (name: string, errorArr: string[], optionalAttrsArrToRemove?: string[]) => void;
export declare const isValidDate: (dateString: string, forceFormat?: 'full' | 'compact') => boolean;
